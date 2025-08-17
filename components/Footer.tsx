'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Dumbbell } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: 'Strength Training', href: '#programs' },
      { name: 'Cardio Fitness', href: '#programs' },
      { name: 'HIIT Training', href: '#programs' },
      { name: 'Personal Training', href: '#programs' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
  ];

  return (
    <footer className="bg-deep-purple border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-gradient-start to-gradient-end rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gym-white">GymPrime</span>
              </div>
              <p className="text-gym-gray leading-relaxed mb-6">
                Transform your body and mind with our world-class fitness programs. 
                Join the GymPrime community and achieve your fitness goals faster than ever.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gym-gray">
                  <MapPin className="w-5 h-5 text-accent-pink" />
                  <span>123 Fitness Street, Health City, HC 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-gym-gray">
                  <Phone className="w-5 h-5 text-accent-pink" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gym-gray">
                  <Mail className="w-5 h-5 text-accent-pink" />
                  <span>info@gymprime.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Programs Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gym-white mb-6">Programs</h3>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gym-gray hover:text-accent-pink transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gym-white mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gym-gray hover:text-accent-pink transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Links & Social */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gym-white mb-6">Support</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gym-gray hover:text-accent-pink transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="text-md font-semibold text-gym-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 hover:bg-accent-pink rounded-lg flex items-center justify-center text-gym-gray hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gym-gray">
            © {currentYear} GymPrime. All rights reserved. Built with passion for fitness.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}