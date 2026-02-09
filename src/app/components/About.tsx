"use client"

import React from 'react';
import { LampContainer } from '@/components/ui/aceternity/lamp';
import { CardContainer, CardBody, CardItem } from '@/components/ui/aceternity/3d-card';
import { valuePropositions } from '@/app/data/valuePropositions';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950">
      {/* LampContainer for "About Nick" header */}
      <LampContainer>
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-b from-slate-300 to-slate-500 py-4 bg-clip-text text-transparent">
          About Nick
        </h2>
      </LampContainer>

      {/* Brief narrative paragraph */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 text-center">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I&apos;m an AI developer and entrepreneur with expertise in building web applications and SaaS solutions.
          As the founder of multiple successful ventures generating over $1.7M in revenue, I combine deep technical
          expertise with a keen business sense. Currently at Take Three Technologies, I specialize in creating
          innovative AI-powered solutions for the mortgage lending industry, leveraging cutting-edge technologies
          to solve real-world problems and create exceptional user experiences.
        </p>
      </div>

      {/* Value Propositions Grid with 3D Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuePropositions.map((prop) => (
            <CardContainer key={prop.id} className="inter-var">
              <CardBody className={`bg-gradient-to-br ${prop.gradient} relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full h-auto rounded-xl p-6 border`}>
                <CardItem
                  translateZ="50"
                  className="text-5xl mb-4"
                >
                  {prop.icon}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-xl font-bold text-white mb-3"
                >
                  {prop.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {prop.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
