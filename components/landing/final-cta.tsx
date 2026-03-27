"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '@/components/particles-background';

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/90 to-teal-900/90 z-0" />
      <ParticlesBackground color="rgba(255, 255, 255, 0.1)" quantity={20} />
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Unlock the Knowledge Hidden in Your Documents
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of students, researchers, professionals, and lifelong learners who are 
              revolutionizing how they extract value from documents.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="xl" className="bg-white text-navy-900 hover:bg-white/90">
                Start Using LOOKUP Now
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white/30 hover:bg-white/10 group">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}