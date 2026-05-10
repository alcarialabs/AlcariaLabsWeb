"use client";

import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 16" className="fill-[#FF4F00]">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="h-8 w-8 text-[#E3CC9C]/30" fill="currentColor" viewBox="0 0 32 32">
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

const SingleTestimonial = ({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
    >
      <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-[#E3CC9C]/40 dark:bg-gray-dark dark:ring-white/10 dark:hover:ring-[#E3CC9C]/30">
        {/* Top beige accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E3CC9C] via-[#E3CC9C]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Quote decoration */}
        <div className="absolute right-6 top-6">
          <QuoteIcon />
        </div>

        {/* Stars */}
        <div className="mb-5 flex items-center gap-0.5">
          {Array.from({ length: star }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* Content */}
        <p className="mb-8 border-b border-gray-100 pb-8 text-base leading-relaxed text-body-color dark:border-white/10 dark:text-white/80">
          &ldquo;{content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#E3CC9C]/40">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-syne text-base font-bold text-[#01203F] dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-body-color dark:text-body-color-dark">{designation}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTestimonial;
