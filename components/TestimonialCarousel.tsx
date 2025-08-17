'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "GymPrime completely changed my life! The trainers are incredibly knowledgeable and supportive. I lost 30 pounds and gained so much confidence. The community here is amazing!",
    achievement: "Lost 30 lbs in 6 months"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "As someone who works long hours at a desk, GymPrime helped me build strength and improve my posture. The personal training sessions are worth every penny. Highly recommend!",
    achievement: "Built lean muscle & improved posture"
  },
  {
    name: "Emma Rodriguez",
    role: "Teacher",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "I was intimidated by gyms before, but GymPrime made me feel so welcome. The group classes are fun and challenging. I've made great friends and achieved fitness goals I never thought possible.",
    achievement: "Completed first marathon"
  },
  {
    name: "David Thompson",
    role: "Business Owner",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "The convenience and quality at GymPrime is unmatched. The trainers created a program that fits my busy schedule. I'm in the best shape of my life at 45!",
    achievement: "Best shape at 45 years old"
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-primary-purple/20 hover:bg-primary-purple/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-purple/50"
      >
        <ChevronLeft className="w-6 h-6 text-gym-white" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-primary-purple/20 hover:bg-primary-purple/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-purple/50"
      >
        <ChevronRight className="w-6 h-6 text-gym-white" />
      </button>

      {/* Testimonial content */}
      <div className="overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary-purple/30"
                />
              </div>

              {/* Testimonial Text */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-pink text-accent-pink" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gym-white leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </blockquote>

                {/* Achievement Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-accent-pink/20 rounded-full text-sm text-accent-pink font-medium mb-4">
                  <span className="w-2 h-2 bg-accent-pink rounded-full mr-2"></span>
                  {testimonials[current].achievement}
                </div>

                {/* Author Info */}
                <div>
                  <div className="text-xl font-bold text-gym-white mb-1">
                    {testimonials[current].name}
                  </div>
                  <div className="text-gym-gray">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-accent-pink scale-125'
                : 'bg-gym-gray/50 hover:bg-gym-gray'
            }`}
          />
        ))}
      </div>
    </div>
  );
}