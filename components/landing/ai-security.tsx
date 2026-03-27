"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, BadgeCheck } from 'lucide-react';
import { ParticlesBackground } from '@/components/particles-background';

export function AISecuritySection() {
  return (
    <section id="security" className="py-20 md:py-28 bg-navy-50/50 dark:bg-navy-900/30 relative overflow-hidden">
      <ParticlesBackground quantity={10} color="rgba(38, 210, 204, 0.15)" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Advanced AI Technology with Enterprise-Grade Security
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                LOOKUP combines state-of-the-art natural language processing with robust security 
                measures to ensure your documents remain private and protected.
              </p>
              
              <div className="space-y-6">
                <SecurityFeature
                  icon={<Cpu className="h-6 w-6 text-primary" />}
                  title="State-of-the-Art AI Models"
                  description="Powered by custom-trained large language models optimized specifically for document understanding and analysis."
                />
                
                <SecurityFeature
                  icon={<Shield className="h-6 w-6 text-secondary" />}
                  title="Data Privacy Guarantee"
                  description="Your documents are never stored beyond the processing period and all data is encrypted end-to-end."
                />
                
                <SecurityFeature
                  icon={<Lock className="h-6 w-6 text-accent" />}
                  title="Enterprise-Grade Security"
                  description="SOC 2 Type II compliant with regular security audits and penetration testing to ensure maximum protection."
                />
                
                <SecurityFeature
                  icon={<BadgeCheck className="h-6 w-6 text-primary" />}
                  title="Compliance Ready"
                  description="Built to meet stringent regulatory requirements including GDPR, HIPAA, and CCPA for worry-free usage."
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 animate-rotate-slow blur-xl opacity-70" />
              
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/40 via-secondary/40 to-accent/40 animate-pulse-slow" />
              
              <div className="absolute inset-8 rounded-full p-8 glass-card flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-24 h-24 rounded-full bg-navy-100 dark:bg-navy-700 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">100% Secure</h3>
                  <p className="text-sm text-muted-foreground">
                    Your documents never leave our secure processing environment.
                  </p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <BadgeCheck className="h-5 w-5 text-teal-500" />
                  <span className="text-sm font-medium">SOC 2 Certified</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">256-bit Encryption</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

interface SecurityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SecurityFeature({ icon, title, description }: SecurityFeatureProps) {
  return (
    <div className="flex space-x-4">
      <div className="mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}