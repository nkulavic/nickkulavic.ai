'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { platforms, platformCategories, getDeepIntegrations, getTotalPlatformCount } from '@/app/data/platforms';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardContainer, CardBody, CardItem } from '@/components/ui/aceternity/3d-card';

export default function PlatformShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPlatforms = activeCategory === 'all'
    ? platforms
    : platforms.filter(p => p.category === activeCategory);

  const deepIntegrations = getDeepIntegrations();
  const totalPlatforms = getTotalPlatformCount();

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-body-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🔗</span>
            Platform Integration Expert
          </motion.div>

          <h2 className="text-h2 font-bold text-gray-900 mb-6">
            {totalPlatforms}+ Platform Integrations
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Deep API integration experience across CRM, marketing, communication, e-commerce, and productivity platforms.
            Built production systems connecting enterprise ecosystems since 2015.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-center text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-md"
            >
              <div className="text-h3 font-bold text-accent mb-1">{deepIntegrations.length}</div>
              <div className="text-body-sm text-gray-500">Deep Integrations</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-md"
            >
              <div className="text-h3 font-bold text-accent mb-1">60+</div>
              <div className="text-body-sm text-gray-500">Helper Apps Built</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-md"
            >
              <div className="text-h3 font-bold text-accent mb-1">10+</div>
              <div className="text-body-sm text-gray-500">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filters with Tabs */}
        <div className="flex justify-center mb-12">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-5xl">
            <TabsList variant="line" className="flex flex-wrap gap-2 justify-center mb-8">
              <TabsTrigger
                value="all"
                className="px-6 py-3 rounded-full text-body-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-accent/30 bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              >
                All Platforms ({totalPlatforms})
              </TabsTrigger>
              {Object.entries(platformCategories).map(([key, value]) => {
                const count = platforms.filter(p => p.category === key).length;
                if (count === 0) return null;

                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="px-6 py-3 rounded-full text-body-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-accent/30 bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  >
                    {value.label} ({count})
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Platform Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredPlatforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
            >
              <CardContainer className="inter-var">
                <CardBody className={`relative bg-white backdrop-blur-sm border rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer shadow-md ${
                  platform.integrationLevel === 'deep'
                    ? 'border-accent/40'
                    : 'border-gray-200 hover:border-accent/30'
                }`}>
                  {/* Deep Integration Badge */}
                  {platform.integrationLevel === 'deep' && (
                    <CardItem
                      translateZ={50}
                      className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full"
                    >
                      DEEP
                    </CardItem>
                  )}

                  {/* Platform Logo */}
                  <CardItem
                    translateZ={60}
                    className="w-16 h-16 mb-4 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden"
                  >
                    {platform.logo ? (
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-4xl text-gray-400">{platform.name.charAt(0)}</span>
                    )}
                  </CardItem>

                  {/* Platform Name */}
                  <CardItem
                    translateZ={50}
                    className="text-body-sm font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors"
                  >
                    {platform.name}
                  </CardItem>

                  {/* Years Badge */}
                  <CardItem
                    translateZ={40}
                    className="text-caption text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {platform.yearsExperience}+ years
                  </CardItem>

                  {/* Description */}
                  {platform.description && (
                    <CardItem
                      translateZ={30}
                      className="mt-3 text-[11px] text-gray-500 leading-snug"
                    >
                      {platform.description}
                    </CardItem>
                  )}
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Integration Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/30 rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center text-5xl">
              📊
            </div>
            <div className="flex-1">
              <h3 className="text-h4 font-bold text-gray-900 mb-3">
                Google Sheet It - Flagship Integration
              </h3>
              <p className="text-body text-gray-600 mb-4">
                Most popular MyFusion Helper integration, syncing Infusionsoft/Keap CRM data to Google Sheets
                with automated refresh scheduling. Enables real-time reporting without logging into CRM.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Google Sheets API', 'Infusionsoft API', 'Automated Scheduling', 'Real-time Sync', 'Custom Reports'].map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-accent/10 text-accent text-body-sm rounded-lg border border-accent/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-body text-gray-600">
            Need complex platform integrations? I&apos;ve built production API connections across the entire modern tech stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
