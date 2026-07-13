'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.a
        href="#get-started"
        className="bg-accent text-bg-primary font-semibold text-base px-8 py-4 rounded-xl hover:bg-accent-hover transition-colors text-center min-h-[44px] flex items-center justify-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Start Your Free Trial
      </motion.a>
      <motion.a
        href="#how-it-works"
        className="border border-[#1F1F1F] text-text-primary font-semibold text-base px-8 py-4 rounded-xl hover:border-text-muted transition-colors text-center min-h-[44px] flex items-center justify-center gap-2 group"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        See How It Works
        <motion.span
          className="inline-block"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </motion.a>
    </div>
  );
}
