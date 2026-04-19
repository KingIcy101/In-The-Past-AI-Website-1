// Cal.com webhook handler → creates GHL contact + opportunity on booking

import { NextRequest, NextResponse } from 'next/server';

const GHL_API_KEY = 'pit-0b7bb137-ec7f-46a9-986d-d185dcf12ce2';
const GHL_LOCATION_ID = '1gIPyIagpT84Ehr73FGG';
const GHL_PIPELINE_ID = '7uRdEHUwK8i2Naz0z3Xq';
const GHL_STAGE_CALL_BOOKED = 'dd1f58ea-9393-4f9c-af9c-2b3dd4db8817';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const triggerEvent = body.triggerEvent || body.type || '';
    if (triggerEvent && !triggerEvent.toLowerCase().includes('booking_created')) {
      return NextResponse.json({ success: true, message: 'Ignored non-booking event' });
    }

    const attendee = body.payload?.attendees?.[0] || body.attendees?.[0] || {};
    const metadata = body.payload?.metadata || body.metadata || {};

    const firstName = attendee.name?.split(' ')[0] || 'Unknown';
    const lastName = attendee.name?.split(' ').slice(1).join(' ') || '';
    const email = attendee.email || '';
    const adSource = metadata.adSource || 'fb-ad';

    // 1. Create GHL contact
    const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
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
      }),
    });

    const contactData = await contactRes.json();
    const contactId = contactData.contact?.id;

    if (!contactId) {
      console.error('GHL contact creation failed:', JSON.stringify(contactData));
      return NextResponse.json({ success: false, error: 'Failed to create contact' }, { status: 500 });
    }

    // 2. Create opportunity → Call Booked stage
    const oppRes = await fetch('https://services.leadconnectorhq.com/opportunities/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        pipelineId: GHL_PIPELINE_ID,
        pipelineStageId: GHL_STAGE_CALL_BOOKED,
        contactId,
        name: `${attendee.name || 'Lead'} — Discovery Call`,
        status: 'open',
        source: 'ITP Ad Funnel',
        monetaryValue: 0,
      }),
    });

    const oppData = await oppRes.json();

    return NextResponse.json({
      success: true,
      contactId,
      opportunityId: oppData.opportunity?.id || null,
    });

  } catch (error) {
    console.error('Cal webhook error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
