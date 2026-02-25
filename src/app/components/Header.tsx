'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const sectionLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const renderNavLink = (link: { label: string; href: string }, index: number, mobile = false) => {
    const className = mobile
      ? "block text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body py-1"
      : "text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body";

    if (isHome) {
      return (
        <a
          key={index}
          href={link.href}
          className={className}
          onClick={() => mobile && setMobileMenuOpen(false)}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={index}
        href={`/${link.href}`}
        className={className}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-xl border-b border-primary-foreground/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display font-bold text-xl text-primary-foreground tracking-tight hover:text-accent transition-colors"
        >
          NK
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {sectionLinks.map((link, i) => renderNavLink(link, i))}

          <Link
            href="/resume"
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body"
          >
            Resume
          </Link>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.button>

          <a
            href="mailto:nick@nickkulavic.com"
            className="text-sm bg-accent text-accent-foreground px-5 py-2 rounded-lg font-display font-semibold hover:brightness-110 transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-primary-foreground/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {sectionLinks.map((link, i) => renderNavLink(link, i, true))}

              <Link
                href="/resume"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </Link>

              <a
                href="mailto:nick@nickkulavic.com"
                className="block text-center bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-display font-semibold mt-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
