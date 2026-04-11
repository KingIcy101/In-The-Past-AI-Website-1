import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — In The Past AI',
  description: 'Privacy Policy for In The Past AI, including how we collect, use, and protect your data.',
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

export default function PrivacyPage() {
  return (
    <main style={{ background: '#0a0704', color: '#f2ece0', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid rgba(224,136,60,0.12)', paddingTop: '96px', paddingBottom: '64px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#7a6e62', textDecoration: 'none', marginBottom: '32px' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to inthepast.ai
          </a>

          <div style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(224,136,60,0.12)', color: '#e0883c', borderRadius: '20px', padding: '4px 12px', marginBottom: '24px', width: 'fit-content' }}>
            Legal
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px', lineHeight: 1.1 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#7a6e62', maxWidth: '600px', marginBottom: '16px' }}>
            Your privacy matters to us. This policy explains how In The Past AI collects, uses, and protects your information.
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

          <Section title="1. Introduction">
            <P>
              In The Past AI (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website inthepast.ai and provides AI receptionist services to businesses. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you use our Services.
            </P>
            <P>
              By using our Services, you consent to the data practices described in this policy. If you do not agree, please discontinue use of our Services.
            </P>
          </Section>

          <Section title="2. Information We Collect">
            <P><strong style={{ color: '#f2ece0' }}>Information you provide directly:</strong></P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}>Name and contact information (email, phone number)</li>
              <li style={{ marginBottom: '6px' }}>Business name and website</li>
              <li style={{ marginBottom: '6px' }}>Call handling preferences and business hours</li>
              <li style={{ marginBottom: '6px' }}>Payment information (processed by our payment provider; we do not store card data)</li>
              <li style={{ marginBottom: '6px' }}>Communications you send to us (email, support tickets)</li>
            </ul>
            <P><strong style={{ color: '#f2ece0' }}>Information collected automatically:</strong></P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}>Usage data and analytics (pages visited, features used)</li>
              <li style={{ marginBottom: '6px' }}>Device and browser information</li>
              <li style={{ marginBottom: '6px' }}>IP address and approximate location</li>
              <li style={{ marginBottom: '6px' }}>Cookies and similar tracking technologies</li>
            </ul>
            <P><strong style={{ color: '#f2ece0' }}>Information from your callers:</strong></P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}>Caller phone numbers and call metadata</li>
              <li style={{ marginBottom: '6px' }}>Call recordings and transcripts (subject to your configuration and applicable law)</li>
              <li style={{ marginBottom: '6px' }}>Information callers provide during AI interactions</li>
            </ul>
          </Section>

          <Section title="3. SMS &amp; Messaging Data">
            <div style={{ background: '#120c08', border: '1px solid rgba(224,136,60,0.18)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
              <p style={{ fontSize: '15px', color: '#f2ece0', fontWeight: 600, marginBottom: '12px' }}>SMS Data Collection &amp; Use</p>
              <P>
                When you opt in to SMS communications from In The Past AI (for example, by submitting our intake form), we collect and use the following information:
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Data collected:</strong> Your phone number, name, and business information you provide during the opt-in process.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>How it is used:</strong> Your phone number and information are used exclusively to send SMS messages related to your AI receptionist service, including setup confirmations, onboarding reminders, and account updates.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Not sold to third parties:</strong> Your phone number and SMS opt-in data are never sold, rented, or shared with third parties for marketing purposes. We do not use your data to send third-party promotional messages.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Data retention:</strong> We retain your phone number and messaging preferences until you opt out. Upon receipt of a STOP message, we add your number to our suppression list and cease all SMS communications. You may request deletion of your data by emailing hello@inthepast.ai.
              </P>
              <P>
                <strong style={{ color: '#f2ece0' }}>Opt-out:</strong> Reply <strong style={{ color: '#e0883c' }}>STOP</strong> to any SMS message to opt out immediately. You will receive a single confirmation, then no further messages.
              </P>
            </div>
          </Section>

          <Section title="4. How We Use Your Information">
            <P>We use the information we collect to:</P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}>Provide, operate, and improve our Services</li>
              <li style={{ marginBottom: '6px' }}>Send service notifications, onboarding updates, and account communications</li>
              <li style={{ marginBottom: '6px' }}>Process payments and manage your subscription</li>
              <li style={{ marginBottom: '6px' }}>Respond to your support requests</li>
              <li style={{ marginBottom: '6px' }}>Comply with legal obligations</li>
              <li style={{ marginBottom: '6px' }}>Detect and prevent fraud or abuse</li>
            </ul>
            <P>
              We do not sell your personal information to third parties. We do not use your data to train AI models without explicit written consent.
            </P>
          </Section>

          <Section title="5. Information Sharing &amp; Disclosure">
            <P>We may share your information with:</P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}><strong style={{ color: '#f2ece0' }}>Service providers:</strong> Third-party vendors who help us operate our Services (see our <a href="/subprocessors" style={{ color: '#e0883c', textDecoration: 'none' }}>Subprocessors list</a>), subject to confidentiality agreements</li>
              <li style={{ marginBottom: '6px' }}><strong style={{ color: '#f2ece0' }}>Legal requirements:</strong> When required by law, court order, or government authority</li>
              <li style={{ marginBottom: '6px' }}><strong style={{ color: '#f2ece0' }}>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to you</li>
            </ul>
            <P>
              We never sell, rent, or trade your personal information to third parties for their marketing purposes.
            </P>
          </Section>

          <Section title="6. Cookies &amp; Tracking Technologies">
            <P>
              We use cookies and similar technologies to enhance your experience, analyze usage, and maintain session state. You can control cookies through your browser settings; however, disabling cookies may affect some features of our Services.
            </P>
            <P>
              We may use third-party analytics services (such as privacy-focused analytics tools) to understand how visitors interact with our website. These services may collect anonymized usage data.
            </P>
          </Section>

          <Section title="7. Data Security">
            <P>
              We implement industry-standard security measures to protect your information, including encryption in transit (TLS) and at rest. Access to personal data is restricted to authorized personnel on a need-to-know basis.
            </P>
            <P>
              No method of transmission or storage is 100% secure. If you believe your data has been compromised, please contact us immediately at hello@inthepast.ai.
            </P>
          </Section>

          <Section title="8. Data Retention">
            <P>
              We retain your information for as long as necessary to provide Services and comply with legal obligations. When you close your account, we delete or anonymize your data within 90 days, except where retention is required by law.
            </P>
          </Section>

          <Section title="9. Your Rights">
            <P>Depending on your location, you may have the right to:</P>
            <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
              <li style={{ marginBottom: '6px' }}>Access the personal information we hold about you</li>
              <li style={{ marginBottom: '6px' }}>Request correction of inaccurate data</li>
              <li style={{ marginBottom: '6px' }}>Request deletion of your data</li>
              <li style={{ marginBottom: '6px' }}>Opt out of certain processing activities</li>
              <li style={{ marginBottom: '6px' }}>Data portability</li>
            </ul>
            <P>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@inthepast.ai" style={{ color: '#e0883c', textDecoration: 'none' }}>hello@inthepast.ai</a>.
              We will respond within 30 days.
            </P>
          </Section>

          <Section title="10. Children&apos;s Privacy">
            <P>
              Our Services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will delete it promptly.
            </P>
          </Section>

          <Section title="11. Third-Party Services">
            <P>
              Our website and Services may contain links to third-party websites or integrate with third-party services. This Privacy Policy does not apply to those third parties. We encourage you to review their privacy policies before providing any information.
            </P>
          </Section>

          <Section title="12. Changes to This Policy">
            <P>
              We may update this Privacy Policy periodically. When we do, we will update the &ldquo;Last updated&rdquo; date above. For material changes, we will provide notice via email or a prominent notice on our website. Continued use of our Services after changes constitutes acceptance of the updated policy.
            </P>
          </Section>

          <Section title="13. Contact Us">
            <P>
              If you have questions, concerns, or requests related to this Privacy Policy, please contact us:
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
