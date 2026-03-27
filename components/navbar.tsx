"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Search, Menu, X, Bookmark, FileText, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Bookmark className="text-primary w-7 h-7" />
            <span>LOOKUP</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Log In</Button>
            <Button>Try LOOKUP Free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t"
          >
            <Container>
              <div className="py-4 space-y-4">
                <Link 
                  href="#features" 
                  className="block py-2 text-foreground/80 hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="block py-2 text-foreground/80 hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="#pricing" 
                  className="block py-2 text-foreground/80 hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="#faq" 
                  className="block py-2 text-foreground/80 hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="pt-4 space-y-3">
                  <Button variant="outline" className="w-full">Log In</Button>
                  <Button className="w-full">Try LOOKUP Free</Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}