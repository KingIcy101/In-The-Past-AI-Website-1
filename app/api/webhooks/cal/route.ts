// Cal.com webhook handler → syncs booking events to GHL pipeline

import { NextRequest, NextResponse } from 'next/server';

const GHL_API_KEY = 'pit-0b7bb137-ec7f-46a9-986d-d185dcf12ce2';
const GHL_LOCATION_ID = '1gIPyIagpT84Ehr73FGG';
const GHL_PIPELINE_ID = '7uRdEHUwK8i2Naz0z3Xq';

const STAGES = {
  CALL_BOOKED:    'dd1f58ea-9393-4f9c-af9c-2b3dd4db8817',
  CALL_COMPLETED: '7816b9f5-8b77-4c03-93c4-aa4d057fa86a',
  CLOSED_LOST:    'b5664dac-baa7-4307-b57c-7eac06ad52e1',
};

const ghl = (path: string, method = 'GET', body?: object) =>
  fetch(`https://services.leadconnectorhq.com${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${GHL_API_KEY}`,
      'Content-Type': 'application/json',
      'Version': '2021-07-28',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  }).then(r => r.json());

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const event = (body.triggerEvent || body.type || '').toLowerCase();
    const payload = body.payload || body;
    const attendee = payload.attendees?.[0] || {};
    const metadata = payload.metadata || {};
    const email = attendee.email || '';

    // ── BOOKING CREATED ──────────────────────────────────────────────
    if (event.includes('booking_created')) {
      const firstName = attendee.name?.split(' ')[0] || 'Unknown';
      const lastName = attendee.name?.split(' ').slice(1).join(' ') || '';
      const adSource = metadata.adSource || 'fb-ad';

      const contactData = await ghl('/contacts/', 'POST', {
        locationId: GHL_LOCATION_ID,
        firstName,
        lastName,
        email,
        companyName: metadata.businessName || attendee.name || '',
        source: 'ITP Ad Funnel',
        tags: ['itp-ad-lead', 'discovery-booked', adSource],
        customFields: [
          { key: 'contact.business_type', field_value: metadata.industry || '' },
          { key: 'contact.ad_source', field_value: adSource },
          { key: 'contact.what_they_need', field_value: metadata.callHandling || '' },
          { key: 'contact.your_website', field_value: metadata.website || '' },
        ],
      });

      const contactId = contactData.contact?.id;
      if (!contactId) return NextResponse.json({ success: false, error: 'Contact creation failed', detail: contactData }, { status: 500 });

      const oppData = await ghl('/opportunities/', 'POST', {
        locationId: GHL_LOCATION_ID,
        pipelineId: GHL_PIPELINE_ID,
        pipelineStageId: STAGES.CALL_BOOKED,
        contactId,
        name: `${attendee.name || 'Lead'} — Discovery Call`,
        status: 'open',
        source: 'ITP Ad Funnel',
        monetaryValue: 0,
      });

      return NextResponse.json({ success: true, contactId, opportunityId: oppData.opportunity?.id });
    }

    // For rescheduled / canceled / no-show — look up existing contact by email
    if (!email) return NextResponse.json({ success: true, message: 'No email, skipping' });

    const searchData = await ghl(`/contacts/?locationId=${GHL_LOCATION_ID}&query=${encodeURIComponent(email)}`);
    const contactId = searchData.contacts?.[0]?.id;
    if (!contactId) return NextResponse.json({ success: true, message: 'Contact not found, skipping' });

    // ── BOOKING RESCHEDULED ──────────────────────────────────────────
    if (event.includes('booking_rescheduled')) {
      // Keep in Call Booked, just add a note
      await ghl(`/contacts/${contactId}/notes`, 'POST', {
        body: `Discovery call rescheduled. New time: ${payload.startTime || 'unknown'}`,
        userId: contactId,
      });
      return NextResponse.json({ success: true, action: 'noted_reschedule' });
    }

    // ── BOOKING CANCELED ────────────────────────────────────────────
    if (event.includes('booking_cancelled') || event.includes('booking_canceled')) {
      // Find their open opportunity and move to Closed Lost
      const opps = await ghl(`/opportunities/?locationId=${GHL_LOCATION_ID}&contactId=${contactId}`);
      const opp = opps.opportunities?.[0];
      if (opp) {
        await ghl(`/opportunities/${opp.id}`, 'PUT', {
          pipelineStageId: STAGES.CLOSED_LOST,
          status: 'lost',
        });
      }
      // Add cancelled tag
      await ghl(`/contacts/${contactId}`, 'PUT', { tags: ['call-cancelled'] });
      return NextResponse.json({ success: true, action: 'moved_to_closed_lost' });
    }

    // ── NO-SHOW ──────────────────────────────────────────────────────
    if (event.includes('no_show') || event.includes('noshow')) {
      await ghl(`/contacts/${contactId}`, 'PUT', { tags: ['no-show'] });
      await ghl(`/contacts/${contactId}/notes`, 'POST', {
        body: `No-show on discovery call — follow up to rebook.`,
        userId: contactId,
      });
      return NextResponse.json({ success: true, action: 'tagged_no_show' });
    }

    return NextResponse.json({ success: true, message: `Unhandled event: ${event}` });

  } catch (error) {
    console.error('Cal webhook error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
