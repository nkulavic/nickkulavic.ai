"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { MovingBorder } from "@/components/ui/aceternity/moving-border";
import { siteConfig, heroStats, heroDescription } from "@/app/data/siteConfig";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-cream dark:bg-gray-950">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      <Spotlight className="absolute -top-40 left-0 md:-top-20 md:left-60" fill="#0066FF" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Title with Text Generate Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <TextGenerateEffect
              words={siteConfig.name}
              className="text-6xl font-bold text-gray-900 dark:text-cream md:text-7xl lg:text-8xl"
            />
          </motion.div>

          {/* Title and Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl"
          >
            {siteConfig.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12 max-w-3xl text-lg text-gray-700 dark:text-gray-300 md:text-xl"
          >
            {heroDescription.primary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-16 flex flex-wrap items-center justify-center gap-4"
          >
            <MovingBorder
              as="a"
              href={`mailto:${siteConfig.email}`}
              duration={3000}
              className="text-lg font-medium text-gray-900 dark:text-cream"
            >
              Contact Me
            </MovingBorder>

            <a
              href="/resume"
              className="rounded-lg border-2 border-accent px-8 py-3 text-lg font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white"
            >
              View Resume
            </a>
          </motion.div>

          {/* Stats Grid with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {heroStats.map((stat, index) => (
              <CardContainer key={index} className="w-full">
                <CardBody className="group/card relative h-full w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <CardItem
                    translateZ={50}
                    className="mb-2 text-4xl"
                  >
                    {stat.icon}
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="mb-1 text-3xl font-bold text-accent md:text-4xl"
                  >
                    {stat.value}
                  </CardItem>
                  <CardItem
                    translateZ={40}
                    className="text-sm font-medium text-gray-600 dark:text-gray-400"
                  >
                    {stat.label}
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </motion.div>

          {/* Secondary Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 max-w-4xl text-center text-base text-gray-600 dark:text-gray-400 md:text-lg"
          >
            {heroDescription.secondary}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
