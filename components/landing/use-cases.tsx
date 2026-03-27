"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, Brain, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UseCaseTabProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const useCases: Record<string, UseCaseTabProps> = {
  students: {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Students",
    description: "Master complex course materials, research papers, and textbooks with less time and effort.",
    benefits: [
      "Extract key concepts from research papers and textbooks",
      "Generate study notes and summaries automatically",
      "Prepare for exams with personalized Q&A practice",
      "Save time on reading assignments with focused summaries"
    ],
    image: "https://images.pexels.com/photos/4145038/pexels-photo-4145038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  researchers: {
    icon: <Brain className="h-5 w-5" />,
    title: "Researchers",
    description: "Accelerate your research by finding patterns, extracting insights, and connecting disparate sources.",
    benefits: [
      "Analyze multiple research papers simultaneously",
      "Extract methodologies, findings, and cited works",
      "Compare results across different studies",
      "Generate literature reviews and citations"
    ],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  professionals: {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Professionals",
    description: "Stay on top of industry reports, legal documents, and meeting minutes without the reading overhead.",
    benefits: [
      "Quickly digest industry reports and market research",
      "Extract actionable insights from corporate documents",
      "Prepare for meetings with condensed briefings",
      "Answer specific questions from long legal documents"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  learners: {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Lifelong Learners",
    description: "Feed your curiosity by exploring more books, articles, and content than ever before.",
    benefits: [
      "Discover new books based on your interests",
      "Preview content before committing to reading",
      "Extract key ideas from non-fiction books",
      "Build knowledge across multiple disciplines efficiently"
    ],
    image: "https://images.pexels.com/photos/4855384/pexels-photo-4855384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
};

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Perfect For Everyone Who Reads"
          subtitle="LOOKUP adapts to your specific needs, whether you're a student, researcher, professional, or lifelong learner."
          centered
        />
        
        <Tabs defaultValue="students" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
            {Object.entries(useCases).map(([key, { icon, title }]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={cn(
                  "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  "border border-border py-3 px-4 rounded-lg flex items-center gap-2"
                )}
              >
                {icon} {title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(useCases).map(([key, useCase]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl md:text-3xl font-bold">{useCase.title}</h3>
                  <p className="text-muted-foreground text-lg">{useCase.description}</p>
                  
                  <div className="space-y-3 pt-4">
                    {useCase.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}