'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function ProgramCard({ icon, title, description, features, image }: ProgramCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-purple/30 hover:border-primary-purple/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-purple/20"
    >
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 to-transparent"></div>
        
        {/* Icon overlay */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary-purple/90 backdrop-blur-sm rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gym-white mb-3 group-hover:text-gradient-start transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gym-gray mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-5 h-5 bg-accent-pink/20 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-accent-pink" />
              </div>
              <span className="text-sm text-gym-gray">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-primary-purple/20 hover:bg-primary-purple text-gym-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-purple/50"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}