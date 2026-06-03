import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Subprocessors — In The Past AI',
  description: 'Third-party service providers used by In The Past AI to deliver our AI voice receptionist service.',
};

const subprocessors = [
  {
    category: 'Voice AI Infrastructure',
    description: 'Powers the AI conversation engine that answers and manages inbound calls.',
    dataProcessed: 'Call audio, transcripts, conversation context',
    location: 'United States',
  },
  {
    category: 'Telephony & SMS',
    description: 'Provides phone number infrastructure, call routing, and SMS messaging.',
    dataProcessed: 'Caller phone numbers, call metadata, SMS content',
    location: 'United States',
  },
  {
    category: 'Voice Synthesis',
    description: 'Generates natural-sounding AI voice responses during calls.',
    dataProcessed: 'Text content for speech synthesis only',
    location: 'United States',
  },
  {
    category: 'Database & Storage',
    description: 'Stores client configuration, call logs, and operational data.',
    dataProcessed: 'Client account data, call logs, configuration settings',
    location: 'United States',
  },
  {
    category: 'Email Delivery',
    description: 'Sends transactional emails including notifications and reports.',
    dataProcessed: 'Email addresses, notification content',
    location: 'United States',
  },
  {
    category: 'Analytics & Monitoring',
    description: 'Monitors service performance and system health.',
    dataProcessed: 'System metrics, error logs (no personal caller data)',
    location: 'United States',
  },
];

export default function SubprocessorsPage() {
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
            Legal &amp; Privacy
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px', lineHeight: 1.1 }}>
            Subprocessors
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#7a6e62', maxWidth: '600px', marginBottom: '16px' }}>
            In The Past AI uses the following categories of third-party service providers to deliver our AI voice receptionist service.
            All subprocessors are bound by data protection agreements consistent with our customer Service Agreements.
          </p>
          <p style={{ fontSize: '14px', color: '#7a6e62' }}>
            Last updated: April 2026 &nbsp;·&nbsp; Questions?{' '}
            <a href="mailto:hello@inthepast.ai" style={{ color: '#e0883c', textDecoration: 'none' }}>hello@inthepast.ai</a>
          </p>
        </div>
      </section>

      {/* Table — desktop */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(224,136,60,0.12)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ background: 'rgba(224,136,60,0.08)', borderBottom: '1px solid rgba(224,136,60,0.12)' }}>
                  {['Category', 'Purpose', 'Data Processed', 'Location'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', padding: '14px 18px', fontWeight: 600, fontSize: '13px', color: '#e0883c', letterSpacing: '0.03em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((sp, i) => (
                  <tr key={i} style={{ borderBottom: i < subprocessors.length - 1 ? '1px solid rgba(224,136,60,0.08)' : 'none', background: i % 2 === 1 ? 'rgba(255,255,255,0.018)' : 'transparent' }}>
                    <td style={{ padding: '16px 18px', fontWeight: 600, color: '#f2ece0', whiteSpace: 'nowrap', fontSize: '14px' }}>{sp.category}</td>
                    <td style={{ padding: '16px 18px', color: '#9a8e82', fontSize: '14px', lineHeight: 1.5 }}>{sp.description}</td>
                    <td style={{ padding: '16px 18px', color: '#9a8e82', fontSize: '13px', lineHeight: 1.5 }}>{sp.dataProcessed}</td>
                    <td style={{ padding: '16px 18px', color: '#9a8e82', fontSize: '13px' }}>{sp.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Security note */}
          <div style={{ marginTop: '48px', borderRadius: '12px', padding: '28px', background: '#120c08', border: '1px solid rgba(224,136,60,0.12)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', color: '#f2ece0' }}>Data Security Commitment</h3>
            <p style={{ fontSize: '15px', color: '#7a6e62', lineHeight: 1.75 }}>
              All subprocessors maintain security standards including encryption in transit and at rest.
              Client data is never shared between customers, sold to third parties, or used to train AI models without explicit consent.
              Healthcare clients requiring HIPAA compliance should contact{' '}
              <a href="mailto:hello@inthepast.ai" style={{ color: '#e0883c', textDecoration: 'none' }}>hello@inthepast.ai</a>{' '}
              to execute a Business Associate Agreement prior to go-live.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
