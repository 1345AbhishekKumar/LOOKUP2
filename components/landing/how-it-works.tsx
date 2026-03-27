"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { Upload, Brain, Lightbulb } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-8 w-8 text-primary" />,
    title: "Upload or Search",
    description: "Upload your PDF documents or search for books in our extensive database with a simple drag-and-drop or search query.",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Brain className="h-8 w-8 text-secondary" />,
    title: "AI Processing",
    description: "Our advanced AI analyzes the document, identifies key concepts, extracts essential information, and processes the content.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-accent" />,
    title: "Get Insights",
    description: "Review summaries, ask questions, extract key facts, and gain actionable insights from your documents in seconds.",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-navy-50 dark:bg-navy-900/50">
      <Container>
        <SectionHeading
          title="Simple Yet Powerful"
          subtitle="Understanding complex documents has never been easier. Just three simple steps to unlock hidden knowledge."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex flex-col space-y-8">
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  step={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-xl overflow-hidden aspect-[3/2] shadow-xl"
            >
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {steps[activeStep].icon}
                    <h3 className="text-xl font-bold">{steps[activeStep].title}</h3>
                  </div>
                  <p className="text-white/80 text-sm max-w-md">{steps[activeStep].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface StepItemProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

function StepItem({ step, icon, title, description, isActive, onClick }: StepItemProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className={`relative pl-12 cursor-pointer transition-all duration-300 ${
        isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
      }`}
      onClick={onClick}
    >
      <div className={`absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full text-white ${
        isActive ? 'bg-primary' : 'bg-muted'
      }`}>
        {step}
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-2">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}