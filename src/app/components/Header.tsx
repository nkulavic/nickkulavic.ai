'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NK
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Resume', href: '/resume' },
              { name: 'Contact', href: 'mailto:contact@nickkulavic.ai' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-accent transition-colors font-medium text-body-sm"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
