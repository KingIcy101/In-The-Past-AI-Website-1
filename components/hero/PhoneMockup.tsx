'use client';

import { motion } from 'framer-motion';

function WaveformBar({ delay, height }: { delay: number; height: number }) {
  return (
    <motion.div
      className="w-[3px] rounded-full bg-accent"
      style={{ height }}
      animate={{
        scaleY: [0.3, 1, 0.5, 0.8, 0.3],
      }}
      transition={{
        duration: 0.4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function PhoneMockup() {
  const bars = [
    { delay: 0, height: 32 },
    { delay: 0.05, height: 48 },
    { delay: 0.1, height: 64 },
    { delay: 0.15, height: 48 },
    { delay: 0.2, height: 32 },
  ];

  return (
    <motion.div
      className="relative flex-shrink-0"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Ambient Glow */}
      <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(245,158,11,0.2)_0%,transparent_70%)] rounded-full blur-2xl" />

      {/* Float Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Phone Frame */}
        <div className="w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[40px] bg-bg-surface border-2 border-border p-[6px] shadow-2xl shadow-black/50">
          {/* Screen */}
          <div className="w-full h-full rounded-[34px] bg-bg-primary overflow-hidden relative flex flex-col">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-6 pt-4 pb-2">
              <span className="text-text-secondary text-[11px] font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5F5F5" className="opacity-60">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5F5F5" className="opacity-60">
                  <rect x="17" y="4" width="3" height="14" rx="1" />
                  <rect x="11" y="7" width="3" height="11" rx="1" />
                  <rect x="5" y="10" width="3" height="8" rx="1" />
                </svg>
                <svg width="22" height="16" viewBox="0 0 24 24" fill="#F5F5F5" className="opacity-60">
                  <rect x="2" y="6" width="18" height="10" rx="2" stroke="#F5F5F5" strokeWidth="1" fill="none" />
                  <rect x="4" y="8" width="12" height="6" rx="1" fill="#F5F5F5" />
                  <rect x="21" y="9" width="2" height="4" rx="0.5" fill="#F5F5F5" />
                </svg>
              </div>
            </div>

            {/* Incoming Call Label */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </div>
              <p className="text-text-secondary text-xs font-medium tracking-wider uppercase">
                Incoming Call
              </p>
              <p className="text-text-primary text-xl font-semibold mt-1">
                (555) 012-3456
              </p>

              {/* Waveform */}
              <div className="flex items-end gap-[6px] mt-6 h-16">
                {bars.map((bar, i) => (
                  <WaveformBar key={i} delay={bar.delay} height={bar.height} />
                ))}
              </div>
            </div>

            {/* Toast Notification */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-20 left-4 right-4"
            >
              <div className="bg-bg-elevated/90 backdrop-blur-sm border border-border rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex-shrink-0 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-primary text-[13px] font-medium leading-tight">
                    AI Answered in 2 rings
                  </p>
                  <p className="text-text-muted text-[11px] mt-0.5">
                    Appointment booked ✓
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
