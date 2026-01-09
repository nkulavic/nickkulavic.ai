import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nickkulavic.ai'),
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Get this from Google Search Console
  },
  title: {
    default: "Nick Kulavic - AI Engineer & Full-Stack Developer",
    template: "%s | Nick Kulavic"
  },
  description: "AI & Full-Stack Developer with 14+ years building scalable SaaS solutions. Expert in AWS, React, TypeScript, and AI integration. Founded ventures generating $1.2M+ revenue.",
  keywords: ["AI Engineer", "Full-Stack Developer", "AWS", "React", "TypeScript", "SaaS Founder", "Nick Kulavic", "Denver Developer", "Serverless", "Claude AI", "AWS Bedrock"],
  authors: [{ name: "Nick Kulavic", url: "https://nickkulavic.ai" }],
  creator: "Nick Kulavic",
  publisher: "Nick Kulavic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Nick Kulavic - AI Engineer & Full-Stack Developer",
    description: "Building enterprise AI applications and scaling SaaS solutions. 14+ years experience, $1.2M+ revenue, SOC 2 compliant systems.",
    type: "website",
    locale: "en_US",
    url: "https://nickkulavic.ai",
    siteName: "Nick Kulavic Portfolio",
    // OG image is auto-generated from opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Kulavic - AI Engineer & Full-Stack Developer",
    description: "Building enterprise AI applications and scaling SaaS solutions. 14+ years experience, $1.2M+ revenue.",
    // Twitter image is auto-generated from twitter-image.tsx
  },
  alternates: {
    canonical: "https://nickkulavic.ai",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
