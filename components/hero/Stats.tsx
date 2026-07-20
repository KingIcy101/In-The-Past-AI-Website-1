'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Product-true tiles only — no third-party market statistics (claims policy).
  const stats = [
    { number: '24/7', label: 'every call answered', sublabel: 'nights, weekends, holidays' },
    { number: '< 4s', label: 'to pick up', sublabel: 'no hold music, no voicemail' },
    { number: '100%', label: 'of calls logged', sublabel: 'summary + recording in your portal' },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-text-primary text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The Cost of Missed Calls
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every unanswered ring is revenue walking out the door.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-bg-surface border border-border rounded-2xl p-8 text-center hover:border-accent/30 transition-colors"
            >
              <div className="text-accent text-5xl sm:text-6xl font-bold tracking-tight mb-3">
                {stat.number}
              </div>
              <p className="text-text-primary text-lg font-semibold mb-1">
                {stat.label}
              </p>
              <p className="text-text-muted text-sm">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
