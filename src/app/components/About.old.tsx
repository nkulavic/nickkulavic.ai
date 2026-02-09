"use client"

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-20 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -left-20 bottom-40 w-72 h-72 bg-indigo-400 dark:bg-indigo-600 rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m an AI developer and entrepreneur with expertise in building web applications and SaaS solutions. 
              Currently working as an AI developer at Take Three Technologies, I specialize in creating innovative 
              AI-powered solutions for the mortgage lending industry.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As the founder of multiple successful SaaS companies including MyFusion Solutions and ListBackup.ai, 
              I&apos;ve generated over $1.7M in revenue by combining deep technical expertise with a keen business sense.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My passion lies in leveraging cutting-edge AI technologies to solve real-world problems and create 
              exceptional user experiences. I&apos;m constantly exploring new ways to push the boundaries of what&apos;s possible 
              with AI and web development.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "AI Development",
                "SaaS Solutions",
                "Web Applications",
                "Next.js",
                "React",
                "TypeScript",
                "Infusionsoft Integration",
                "Business Strategy"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 dark:border-indigo-800"
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Current Role</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900 rounded-lg p-6 shadow-md border border-blue-100 dark:border-indigo-800">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">AI Developer</h4>
              <p className="text-gray-600 dark:text-gray-400">Take Three Technologies</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Developing AI solutions for the mortgage lending industry, including integrating AI into TheRuleTool™ 
                to expedite the mortgage loan process and reduce costs.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
