"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { BookOpen, FileText, MessageSquare, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '@/components/particles-background';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 lg:p-8 flex flex-col h-full"
    >
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export function FeaturesSection() {
  const features: FeatureCardProps[] = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "PDF Analysis & Upload",
      description: "Upload any PDF document and get instant AI-powered analysis, summaries, and key insights extracted automatically.",
      delay: 0.1,
    },
    {
      icon: <BookOpen className="h-6 w-6 text-secondary" />,
      title: "Book Discovery & Summarization",
      description: "Search through millions of books, access previews, and generate comprehensive summaries with the most important concepts.",
      delay: 0.2,
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-accent" />,
      title: "Document Q&A Capabilities",
      description: "Ask specific questions about any document and receive accurate, contextual answers extracted directly from the content.",
      delay: 0.3,
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "AI-Powered Insight Generation",
      description: "Transform raw document content into actionable insights, highlighted themes, and executive summaries tailored to your needs.",
      delay: 0.4,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      <ParticlesBackground quantity={20} color="rgba(255, 195, 38, 0.2)" />
      
      <Container>
        <SectionHeading
          title="Meet Your Ultimate Document Intelligence Assistant"
          subtitle="Powerful AI tools that help you understand, extract, and utilize information from any document."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}