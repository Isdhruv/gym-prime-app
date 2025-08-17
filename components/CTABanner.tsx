"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-gradient"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute -top-10 -left-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-white/90">Transformation Journey?</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join hundreds of satisfied members who have transformed their lives with GymPrime. Get personalized
            training, expert guidance, and the support you need to succeed.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <motion.a
                href="https://wa.me/1234567890?text=Hi! I'm interested in joining GymPrime. Can you tell me more about your programs?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-purple rounded-full font-bold text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:bg-white/95 focus:outline-none focus:ring-4 focus:ring-white/50 group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:text-accent-pink transition-colors duration-300" />
                </motion.div>
                <span>Get Started on WhatsApp</span>
              </motion.a>

              <motion.div
                className="flex items-center text-white/80 text-sm bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-accent-pink" />
                </motion.div>
                <span>Free consultation included</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70 text-sm">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70 text-sm">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70 text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
