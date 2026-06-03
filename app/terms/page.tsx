import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — In The Past AI',
  description: 'Terms of Service for In The Past AI, including SMS messaging consent and usage terms.',
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#f2ece0', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid rgba(224,136,60,0.12)' }}>
      {title}
    </h2>
    <div style={{ fontSize: '15px', color: '#9a8e82', lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: '12px' }}>{children}</p>
);

export default function TermsPage() {
  return (
    <main style={{ background: '#0a0704', color: '#f2ece0', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid rgba(224,136,60,0.12)', paddingTop: '96px', paddingBottom: '64px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#7a6e62', textDecoration: 'none', marginBottom: '32px' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to inthepast.ai
          </Link>

          <div style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(224,136,60,0.12)', color: '#e0883c', borderRadius: '20px', padding: '4px 12px', marginBottom: '24px', width: 'fit-content' }}>
            Legal
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px', lineHeight: 1.1 }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#7a6e62', maxWidth: '600px', marginBottom: '16px' }}>
            Please read these Terms of Service carefully before using In The Past AI services.
          </p>
          <p style={{ fontSize: '14px', color: '#7a6e62' }}>
            Last updated: April 11, 2026 &nbsp;&middot;&nbsp; Questions?{' '}
            <a href="mailto:hello@inthepast.ai" style={{ color: '#e0883c', textDecoration: 'none' }}>hello@inthepast.ai</a>
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <Section title="1. Agreement to Terms">
            <P>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the services provided by In The Past AI (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including our website at inthepast.ai, our AI receptionist platform, voice agents, SMS messaging, and any related services (collectively, the &ldquo;Services&rdquo;).
            </P>
            <P>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.
            </P>
          </Section>

          <Section title="2. Description of Services">
            <P>
              In The Past AI provides AI-powered receptionist solutions for businesses, including:
            </P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}>24/7 AI voice receptionists that answer inbound calls</li>
              <li style={{ marginBottom: '6px' }}>Automated appointment booking and lead capture</li>
              <li style={{ marginBottom: '6px' }}>SMS-based service notifications and onboarding updates</li>
              <li style={{ marginBottom: '6px' }}>Website chatbots and internal workflow automation</li>
            </ul>
            <P>
              Services are provided on a subscription or project basis as described in your service agreement or intake form.
            </P>
          </Section>

          <Section title="3. SMS Messaging Terms">
            <div style={{ background: '#120c08', border: '1px solid rgba(224,136,60,0.18)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
              <p style={{ fontSize: '15px', color: '#f2ece0', fontWeight: 600, marginBottom: '12px' }}>SMS Consent &amp; Program Description</p>
              <P>
                By submitting the In The Past AI intake form or otherwise providing your phone number and consenting to SMS communication, you agree to receive text messages from In The Past AI regarding your AI receptionist service setup, onboarding reminders, and account updates.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Message frequency varies</strong> based on your account activity and onboarding status. You will not receive unsolicited marketing messages.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Msg &amp; Data Rates May Apply.</strong> Standard message and data rates from your mobile carrier may apply to SMS messages you send and receive.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Opt-Out:</strong> You may opt out of SMS messages at any time by replying <strong style={{ color: '#e0883c' }}>STOP</strong> to any message. After opting out, you will receive a single confirmation message and no further SMS messages. To resubscribe, reply <strong style={{ color: '#e0883c' }}>START</strong>.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Help:</strong> For assistance, reply <strong style={{ color: '#e0883c' }}>HELP</strong> to any message or contact us at{' '}
                <a href="mailto:hello@inthepast.ai" style={{ color: '#e0883c', textDecoration: 'none' }}>hello@inthepast.ai</a>.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Supported Carriers:</strong> SMS service is available on all major U.S. carriers including AT&amp;T, T-Mobile, Verizon, and others. Carrier availability and message delivery are not guaranteed.
              </P>
            </div>
          </Section>

          <Section title="4. User Accounts &amp; Eligibility">
            <P>
              You must be at least 18 years of age and authorized to enter into binding contracts on behalf of yourself or your business to use our Services. By using our Services, you represent that you meet these requirements.
            </P>
            <P>
              You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at hello@inthepast.ai if you believe your account has been compromised.
            </P>
          </Section>

          <Section title="5. Payment &amp; Subscription">
            <P>
              Services are billed as described in your service agreement. Subscriptions renew automatically unless cancelled in writing prior to the renewal date. We reserve the right to update pricing with 30 days&apos; notice.
            </P>
            <P>
              All fees are non-refundable except where required by applicable law or explicitly stated in a written agreement. Disputed charges must be reported within 30 days of the billing date.
            </P>
          </Section>

          <Section title="6. Cancellation &amp; Termination">
            <P>
              You may cancel your subscription at any time by contacting us at hello@inthepast.ai. Cancellation takes effect at the end of the current billing period. We reserve the right to suspend or terminate accounts that violate these Terms.
            </P>
            <P>
              Upon termination, your access to the Services will cease, and we may delete your account data consistent with our Privacy Policy and applicable data retention requirements.
            </P>
          </Section>

          <Section title="7. Acceptable Use">
            <P>
              You agree not to use our Services to:
            </P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}>Violate any applicable law or regulation</li>
              <li style={{ marginBottom: '6px' }}>Send unsolicited messages or spam</li>
              <li style={{ marginBottom: '6px' }}>Impersonate any person or entity</li>
              <li style={{ marginBottom: '6px' }}>Interfere with or disrupt our Services or servers</li>
              <li style={{ marginBottom: '6px' }}>Attempt to gain unauthorized access to any part of our Services</li>
            </ul>
            <P>
              Violations may result in immediate account termination without refund.
            </P>
          </Section>

          <Section title="8. Intellectual Property">
            <P>
              All content, software, and technology comprising our Services are the property of In The Past AI or our licensors. These Terms do not grant you any rights to our intellectual property except as expressly set forth herein.
            </P>
            <P>
              You retain ownership of any data or content you provide to us. By using our Services, you grant us a limited license to use your data solely to provide and improve the Services.
            </P>
          </Section>

          <Section title="9. Disclaimer of Warranties">
            <P>
              THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR MEET YOUR SPECIFIC REQUIREMENTS.
            </P>
          </Section>

          <Section title="10. Limitation of Liability">
            <P>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN THE PAST AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </P>
            <P>
              OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNTS YOU PAID US IN THE THREE MONTHS PRECEDING THE CLAIM.
            </P>
          </Section>

          <Section title="11. Indemnification">
            <P>
              You agree to indemnify, defend, and hold harmless In The Past AI and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of the Services, your violation of these Terms, or your violation of any third-party rights.
            </P>
          </Section>

          <Section title="12. Governing Law">
            <P>
              These Terms are governed by the laws of the Commonwealth of Virginia, without regard to its conflict of law provisions. Any disputes shall be resolved in the state or federal courts located in Virginia.
            </P>
          </Section>

          <Section title="13. Changes to Terms">
            <P>
              We may update these Terms from time to time. When we do, we will update the &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the Services after changes constitutes your acceptance of the updated Terms. For material changes, we will provide notice via email or prominent notice on our website.
            </P>
          </Section>

          <Section title="14. Contact Us">
            <P>
              If you have questions about these Terms, please contact us:
            </P>
            <P>
              In The Past AI<br />
              Website: <a href="https://www.inthepast.ai" style={{ color: '#e0883c', textDecoration: 'none' }}>inthepast.ai</a><br />
              Email: <a href="mailto:hello@inthepast.ai" style={{ color: '#e0883c', textDecoration: 'none' }}>hello@inthepast.ai</a>
            </P>
          </Section>

        </div>
      </section>

    </main>
  );
}
