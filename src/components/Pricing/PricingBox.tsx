"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
  featured?: boolean;
}) => {
  const { price, duration, packageName, subtitle, children, featured } = props;

  return (
    <motion.div
      className="w-full"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl p-8 shadow-sm transition-all duration-300 ${
          featured
            ? "bg-[#01203F] text-white shadow-2xl shadow-[#01203F]/25 ring-2 ring-[#FF4F00]"
            : "bg-white ring-1 ring-gray-100 hover:shadow-lg hover:ring-[#0344DC]/20 dark:bg-gray-dark dark:ring-white/10"
        }`}
      >
        {/* Featured badge */}
        {featured && (
          <div className="absolute right-6 top-6 rounded-full bg-[#FF4F00] px-3 py-1 text-xs font-bold text-white">
            Más Popular
          </div>
        )}

        {/* Top gradient accent */}
        <div
          className={`mb-8 h-1 w-12 rounded-full ${
            featured
              ? "bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C]"
              : "bg-gradient-to-r from-[#0344DC] to-[#FF4F00]"
          }`}
        />

        {/* Package name */}
        <h4
          className={`font-syne mb-3 text-sm font-bold uppercase tracking-[0.12em] ${
            featured ? "text-[#E3CC9C]" : "text-[#0344DC]"
          }`}
        >
          {packageName}
        </h4>

        {/* Price */}
        <div className="mb-3 flex items-end gap-1">
          <span
            className={`font-syne text-5xl font-bold ${
              featured ? "text-white" : "text-[#01203F] dark:text-white"
            }`}
          >
            {price}€
          </span>
          <span
            className={`mb-2 text-sm font-medium ${
              featured ? "text-white/60" : "text-body-color"
            }`}
          >
            /{duration === "mo" ? "mes" : "año"}
          </span>
        </div>

        <p
          className={`mb-8 text-sm leading-relaxed ${
            featured ? "text-white/70" : "text-body-color"
          }`}
        >
          {subtitle}
        </p>

        {/* CTA */}
        <Link
          href="#contact"
          className={`font-syne mb-8 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all duration-300 ${
            featured
              ? "bg-[#FF4F00] text-white shadow-lg shadow-[#FF4F00]/30 hover:bg-[#FF4F00]/90"
              : "bg-[#01203F] text-white hover:bg-[#0344DC]"
          }`}
        >
          Empezar Ahora
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        {/* Divider */}
        <div
          className={`mb-6 h-px ${
            featured ? "bg-white/10" : "bg-gray-100 dark:bg-white/10"
          }`}
        />

        {/* Features list */}
        <div>{children}</div>
      </div>
    </motion.div>
  );
};

export default PricingBox;
