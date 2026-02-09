import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://nickkulavic.ai'),
  title: {
    default: "Nick Kulavic | Senior AI & Platform Engineer — Denver, CO",
    template: "%s | Nick Kulavic"
  },
  description: "14+ years building enterprise AI systems, serverless AWS architecture, and SaaS platforms. $1.7M+ revenue generated. Currently seeking senior remote engineering roles.",
  keywords: ["AI Engineer", "Platform Engineer", "Full-Stack Developer", "AWS", "React", "TypeScript", "SaaS Founder", "Nick Kulavic", "Denver Developer", "Serverless", "Claude AI", "AWS Bedrock", "AI Integration"],
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
    title: "Nick Kulavic | Senior AI & Platform Engineer — Denver, CO",
    description: "14+ years building enterprise AI systems, serverless AWS architecture, and SaaS platforms. $1.7M+ revenue generated.",
    type: "website",
    locale: "en_US",
    url: "https://nickkulavic.ai",
    siteName: "Nick Kulavic Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Kulavic | Senior AI & Platform Engineer — Denver, CO",
    description: "14+ years building enterprise AI systems, serverless AWS architecture, and SaaS platforms. $1.7M+ revenue generated.",
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
        className="antialiased"
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
