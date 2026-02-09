"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/3d-card";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";
import { GridPattern } from "@/components/ui/aceternity/grid-pattern";

interface Company {
  name: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  iconBg: string;
  buttonColor: string;
  website: string;
}

const companies: Company[] = [
  {
    name: "MyFusion Solutions",
    description: "Specializing in Infusionsoft integrations and plugins, providing API extensions for the Infusionsoft Campaign Builder environment.",
    features: [
      "Industry-leading Infusionsoft extensions",
      "API integrations for marketing automation",
      "Custom plugin development",
      "Generated $1.7M+ in revenue"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-blue-100 dark:bg-blue-900",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    website: "https://myfusionsolutions.com"
  },
  {
    name: "MyFusion Helper",
    description: "Flagship product offering 50+ helper applets that extend the capabilities of Infusionsoft with various integrations.",
    features: [
      "Facebook Custom Audiences integration",
      "GoTo Webinar Integration",
      "YouTube/Wistia integration",
      "Set It Helper for Infusionsoft fields"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-indigo-100 dark:bg-indigo-900",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    website: "https://myfusionhelper.com"
  },
  {
    name: "ListBackup.ai",
    description: "Email list backup service designed to protect valuable marketing assets and ensure business continuity.",
    features: [
      "Automated email list backups",
      "Secure cloud storage",
      "Easy restoration process",
      "Cross-platform compatibility"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
      </svg>
    ),
    iconBg: "bg-purple-100 dark:bg-purple-900",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    website: "https://listbackup.ai"
  },
  {
    name: "YouGonnaLearn.Today",
    description: "Educational platform focused on delivering practical knowledge and skills for modern professionals.",
    features: [
      "Interactive learning experiences",
      "Expert-led courses",
      "Practical skill development",
      "Community-driven content"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    iconBg: "bg-green-100 dark:bg-green-900",
    buttonColor: "bg-green-600 hover:bg-green-700",
    website: "https://yougonnalearn.today"
  }
];

const SaasCompanies = () => {
  return (
    <section id="companies" className="relative overflow-hidden bg-cream py-20 px-4 dark:bg-gray-950 md:px-8">
      {/* Background Grid Pattern */}
      <GridPattern className="absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            SaaS Companies
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-700 dark:text-gray-300">
            Innovative software solutions built to solve real business problems and enhance productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="w-full">
                <CardBody className="group/card relative h-full w-full rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
                  <BackgroundGradient
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-10"
                    animate={false}
                  />

                  {/* Icon */}
                  <CardItem
                    translateZ={50}
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-lg ${company.iconBg}`}
                  >
                    {company.icon}
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ={60}
                    className="mb-3 text-2xl font-bold text-gray-800 dark:text-white"
                  >
                    {company.name}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ={40}
                    className="mb-6 text-gray-600 dark:text-gray-300"
                  >
                    {company.description}
                  </CardItem>

                  {/* Features Title */}
                  <CardItem
                    translateZ={50}
                    className="mb-3 text-lg font-semibold text-gray-800 dark:text-white"
                  >
                    Key Features:
                  </CardItem>

                  {/* Features List */}
                  <CardItem
                    translateZ={50}
                    className="mb-8 space-y-2"
                  >
                    {company.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 mt-1 h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </CardItem>

                  {/* CTA Button */}
                  <CardItem
                    translateZ={70}
                    className="w-full"
                  >
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block w-full rounded-lg ${company.buttonColor} px-6 py-3 text-center font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg`}
                    >
                      Visit Website
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasCompanies;
