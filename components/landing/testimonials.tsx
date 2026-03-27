"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  stars: number;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "LOOKUP has transformed how I conduct research. I can now analyze dozens of papers in the time it used to take me to read one thoroughly. It's like having a research assistant that works 24/7.",
    name: "Dr. Emma Thompson",
    title: "Neuroscience Researcher",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
  },
  {
    quote: "As a law student, I used to spend hours reading case documents. LOOKUP helps me extract the key arguments and precedents instantly, letting me focus on analysis rather than reading.",
    name: "James Wilson",
    title: "Law Student, Harvard",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
  },
  {
    quote: "Our team uses LOOKUP to stay on top of industry reports and competitor analyses. It's cut our research time by 70% and improved our strategic decision-making process.",
    name: "Sarah Chen",
    title: "VP of Strategy, TechGrowth Inc.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 4,
  },
  {
    quote: "I've read more books in the last 3 months using LOOKUP than I did all of last year. The summaries help me decide what to read fully, and the AI helps me retain the key points.",
    name: "Michael Rodriguez",
    title: "Lifelong Learner",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="What Our Users Are Saying"
          subtitle="LOOKUP is helping thousands of people extract more value from the documents they work with every day."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ quote, name, title, image, stars }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="h-full glass-card p-6 flex flex-col"
    >
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < stars ? "fill-amber-500 text-amber-500" : "text-muted"}
          />
        ))}
      </div>
      
      <blockquote className="flex-1 mb-6 text-foreground">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </div>
    </motion.div>
  );
}