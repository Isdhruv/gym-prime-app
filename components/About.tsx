"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Target, Award, Heart } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <Target className="w-6 h-6 text-accent-pink" />,
      title: "Personalized Programs",
      description: "Tailored workout plans designed specifically for your goals and fitness level.",
    },
    {
      icon: <Award className="w-6 h-6 text-accent-pink" />,
      title: "Expert Trainers",
      description: "Certified professionals with years of experience in fitness and nutrition.",
    },
    {
      icon: <Heart className="w-6 h-6 text-accent-pink" />,
      title: "Community Support",
      description: "Join a supportive community that motivates and celebrates your success.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-deep-purple/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About GymPrime - Modern fitness facility"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-purple/20 to-transparent rounded-2xl"></div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gym-white mb-1">98%</div>
                <div className="text-sm text-gym-gray">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                  About GymPrime
                </span>
              </h2>
              <p className="text-xl text-gym-gray leading-relaxed mb-8">
                At GymPrime, we believe fitness is a journey, not a destination. Our state-of-the-art facility combines
                cutting-edge equipment with personalized training approaches to help you achieve your goals faster and
                safer.
              </p>
              <p className="text-lg text-gym-gray leading-relaxed">
                Whether you're looking to lose weight, build muscle, improve athletic performance, or simply live a
                healthier lifestyle, our team of certified trainers is here to guide you every step of the way.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-purple/20 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gym-white mb-2">{feature.title}</h3>
                    <p className="text-gym-gray leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gym-white mb-2">5+</div>
                <div className="text-gym-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gym-white mb-2">1000+</div>
                <div className="text-gym-gray">Transformations</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
