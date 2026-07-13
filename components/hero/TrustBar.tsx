'use client';

import { motion } from 'framer-motion';

export default function TrustBar() {
  const industries = [
    'Dental',
    'Auto Repair',
    'Law',
    'Medical',
    'Restaurants',
    'Contractors',
  ];

  return (
    <motion.div
      className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <span className="text-text-muted text-sm font-medium">
        Serving
      </span>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {industries.map((industry, i) => (
          <span key={industry} className="flex items-center gap-2 sm:gap-3">
            <span className="text-text-secondary text-sm font-medium">
              {industry}
            </span>
            {i < industries.length - 1 && (
              <span className="text-text-muted text-xs">·</span>
            )}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
