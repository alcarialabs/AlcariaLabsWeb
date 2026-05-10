"use client";

import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature, index = 0 }: { feature: Feature; index?: number }) => {
  const { icon, title, paragraph } = feature;
  return (
    <motion.div
      className="group relative w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 group-hover:border-[#0344DC]/20 group-hover:shadow-xl dark:border-white/10 dark:bg-gray-dark dark:group-hover:border-[#0344DC]/30">
        {/* Top gradient accent line */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0344DC] to-[#FF4F00] opacity-0 transition-all duration-300 group-hover:opacity-100" />

        {/* Corner accent */}
        <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[60px] bg-gradient-to-bl from-[#0344DC]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Icon container */}
        <div className="mb-8 inline-flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-[#01203F]/5 text-[#0344DC] ring-1 ring-[#0344DC]/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#0344DC]/10 group-hover:to-[#FF4F00]/10 group-hover:text-[#FF4F00] group-hover:ring-[#FF4F00]/20 dark:bg-white/5">
          {icon}
        </div>

        <h3 className="font-syne mb-4 text-xl font-bold text-[#01203F] transition-colors duration-300 group-hover:text-[#0344DC] dark:text-white dark:group-hover:text-[#E3CC9C]">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {paragraph}
        </p>

        {/* Bottom arrow indicator */}
        <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-[#0344DC] opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>Saber más</span>
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
