'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
  icon: React.ReactNode;
  primary?: boolean;
  className?: string;
}

export default function CTAButton({ text, href, icon, primary = true, className = '' }: CTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  
  const primaryClasses = primary
    ? "bg-bright-purple hover:bg-primary-purple text-white shadow-lg hover:shadow-xl focus:ring-bright-purple"
    : "bg-transparent border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white hover:border-transparent focus:ring-primary-purple";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`${baseClasses} ${primaryClasses} ${className}`}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
      >
        {icon}
        <span className="ml-3">{text}</span>
      </Link>
    </motion.div>
  );
}