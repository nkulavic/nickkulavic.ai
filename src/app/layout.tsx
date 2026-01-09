import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Kulavic - AI Engineer & Full-Stack Developer",
  description: "AI & Full-Stack Developer with 14+ years building scalable SaaS solutions. Expert in AWS, React, TypeScript, and AI integration. Founded ventures generating $1.2M+ revenue.",
  keywords: ["AI Engineer", "Full-Stack Developer", "AWS", "React", "TypeScript", "SaaS Founder", "Nick Kulavic"],
  authors: [{ name: "Nick Kulavic" }],
  openGraph: {
    title: "Nick Kulavic - AI Engineer & Full-Stack Developer",
    description: "Building enterprise AI applications and scaling SaaS solutions",
    type: "website",
    locale: "en_US",
    siteName: "Nick Kulavic Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
