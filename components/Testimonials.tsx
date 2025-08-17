"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="testimonial" className="py-20 bg-deep-purple/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gym-gray max-w-3xl mx-auto leading-relaxed">
            Hear from our amazing members who have transformed their lives with GymPrime. Their success stories inspire
            us every day.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
}
