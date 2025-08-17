"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProgramCard from "./ProgramCard";
import { Dumbbell, Heart, Zap, Users, Trophy, Target } from "lucide-react";

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const programs = [
    {
      icon: <Dumbbell className="w-8 h-8 text-accent-pink" />,
      title: "Strength Training",
      description: "Build muscle mass and increase overall strength with our comprehensive weightlifting programs.",
      features: ["Progressive Overload", "Compound Movements", "Personalized Sets"],
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Heart className="w-8 h-8 text-accent-pink" />,
      title: "Cardio Fitness",
      description: "Improve cardiovascular health and endurance with our dynamic cardio training sessions.",
      features: ["HIIT Workouts", "Endurance Training", "Fat Burning"],
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-pink" />,
      title: "HIIT Training",
      description: "High-intensity interval training for maximum results in minimum time.",
      features: ["Quick Results", "Metabolic Boost", "Variety Training"],
      image: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Users className="w-8 h-8 text-accent-pink" />,
      title: "Group Classes",
      description: "Join energetic group sessions for motivation and community support.",
      features: ["Social Environment", "Professional Guidance", "Fun Workouts"],
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent-pink" />,
      title: "Personal Training",
      description: "One-on-one sessions tailored specifically to your individual fitness goals.",
      features: ["Individual Attention", "Custom Programs", "Faster Results"],
      image: "https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Target className="w-8 h-8 text-accent-pink" />,
      title: "Nutrition Coaching",
      description: "Comprehensive nutrition guidance to complement your fitness journey.",
      features: ["Meal Planning", "Supplement Advice", "Lifestyle Changes"],
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section id="programs" ref={ref} className="py-20 bg-deep-purple">
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
              Our Programs
            </span>
          </h2>
          <p className="text-xl text-gym-gray max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of fitness programs designed to meet every goal, fitness level, and
            lifestyle. Each program is crafted by expert trainers to deliver maximum results.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
