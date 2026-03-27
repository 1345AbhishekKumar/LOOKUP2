"use client";

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ParticlesBackground, FloatingElement } from '@/components/particles-background';
import { ArrowRight, FileText, BookOpen, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Understand Any Document with 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> AI-Powered Clarity</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-xl"
            >
              Upload PDFs, discover books, and extract insights instantly with LOOKUP
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="xl">
                Try LOOKUP Free
              </Button>
              <Button size="xl" variant="outline" className="group">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-x-8 gap-y-4 pt-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                <span>98% accuracy</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                <span>1M+ books accessible</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <span>3-minute average processing</span>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[460px] w-full">
              <FloatingElement className="absolute top-0 left-0 w-72 h-96 glass-card p-5 z-20">
                <div className="flex items-center space-x-2 text-sm font-medium mb-4">
                  <FileText className="h-4 w-4 text-primary" />
                  <span>PDF Analysis</span>
                </div>
                <div className="h-4 w-3/4 bg-muted rounded-md mb-3"></div>
                <div className="h-4 w-full bg-muted rounded-md mb-3"></div>
                <div className="h-4 w-5/6 bg-muted rounded-md mb-6"></div>
                <div className="h-32 w-full bg-muted/50 rounded-md mb-6"></div>
                <div className="h-4 w-full bg-muted rounded-md mb-3"></div>
                <div className="h-4 w-2/3 bg-muted rounded-md"></div>
              </FloatingElement>
              
              <FloatingElement delay={1} className="absolute bottom-0 right-0 w-80 h-80 glass-card p-5 z-10">
                <div className="flex items-center space-x-2 text-sm font-medium mb-4">
                  <BookOpen className="h-4 w-4 text-secondary" />
                  <span>Book Insights</span>
                </div>
                <div className="flex space-x-3 mb-5">
                  <div className="w-20 h-28 bg-muted rounded-md"></div>
                  <div className="flex-1 py-1">
                    <div className="h-4 w-full bg-muted rounded-md mb-3"></div>
                    <div className="h-4 w-2/3 bg-muted rounded-md mb-6"></div>
                    <div className="h-4 w-5/6 bg-muted rounded-md mb-3"></div>
                    <div className="h-4 w-1/2 bg-muted rounded-md"></div>
                  </div>
                </div>
                <div className="h-32 bg-muted/50 rounded-md"></div>
              </FloatingElement>
              
              <FloatingElement delay={0.5} className="absolute top-1/4 right-5 w-60 h-40 glass-card p-5 z-30">
                <div className="flex items-center space-x-2 text-sm font-medium mb-4">
                  <Search className="h-4 w-4 text-accent" />
                  <span>Quick Search</span>
                </div>
                <div className="relative">
                  <div className="h-8 w-full bg-background rounded-md"></div>
                  <Search className="h-4 w-4 text-muted-foreground absolute top-2 right-2" />
                </div>
                <div className="h-4 w-3/4 bg-muted rounded-md mt-4"></div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}