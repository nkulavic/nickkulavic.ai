"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -left-10 top-40 w-80 h-80 bg-indigo-400 dark:bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute right-20 bottom-10 w-60 h-60 bg-purple-400 dark:bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
              Nick Kulavic
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              AI Developer & SaaS Entrepreneur
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Building innovative AI solutions and SaaS products that solve real business problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#companies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-700">
              <span className="text-8xl md:text-9xl font-bold text-gray-500 dark:text-gray-400">NK</span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:to-indigo-400/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
