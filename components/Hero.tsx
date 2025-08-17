"use client";

import { motion } from "framer-motion";
import { MessageCircle, Dumbbell, Users, Trophy, Zap } from "lucide-react";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-20"
      id="home"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary-purple/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-60 h-60 bg-accent-pink/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent animate-gradient-shift bg-300% bg-gradient-shift">
                  Transform Your Body
                </span>
                <br />
                <span className="text-gym-white">with GymPrime</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gym-gray mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience world-class fitness training with our expert coaches, state-of-the-art equipment, and
              personalized workout plans designed for your success.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <CTAButton
                text="Start Your Journey"
                href="https://wa.me/1234567890"
                icon={<MessageCircle className="w-5 h-5" />}
                primary={true}
              />
              <CTAButton
                text="View Programs"
                href="#programs"
                icon={<Dumbbell className="w-5 h-5" />}
                primary={false}
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-6 h-6 text-accent-pink mr-2" />
                  <span className="text-2xl font-bold text-gym-white">500+</span>
                </div>
                <p className="text-sm text-gym-gray">Members</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Trophy className="w-6 h-6 text-accent-pink mr-2" />
                  <span className="text-2xl font-bold text-gym-white">50+</span>
                </div>
                <p className="text-sm text-gym-gray">Trainers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Zap className="w-6 h-6 text-accent-pink mr-2" />
                  <span className="text-2xl font-bold text-gym-white">3+</span>
                </div>
                <p className="text-sm text-gym-gray">Years</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fitness training at GymPrime"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-accent-pink/20 rounded-full backdrop-blur-sm border border-accent-pink/30"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-bright-purple/20 rounded-full backdrop-blur-sm border border-bright-purple/30"
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
