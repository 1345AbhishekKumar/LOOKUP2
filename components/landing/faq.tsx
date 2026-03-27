"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqItems: FAQItemProps[] = [
  {
    question: "What types of documents does LOOKUP support?",
    answer: "LOOKUP supports PDF files, text documents, academic papers, books from our catalog, and various other document formats. If you can read it, chances are LOOKUP can too. We're constantly expanding our supported formats based on user needs."
  },
  {
    question: "How accurate is the AI in understanding complex documents?",
    answer: "Our AI models achieve over 95% accuracy on standard benchmarks. For technical or specialized documents, the accuracy depends on the domain complexity. LOOKUP is particularly strong in academic, business, legal, and technical content, and continues to improve through ongoing training."
  },
  {
    question: "Can I export summaries and insights to other formats?",
    answer: "Yes, LOOKUP allows you to export all generated summaries, insights, and Q&A sessions to various formats including PDF, Word, Markdown, and plain text. You can also integrate with tools like Notion, Evernote, and other note-taking applications."
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. Your documents are processed in a secure environment with end-to-end encryption. We do not store your documents beyond the processing period, and all data is handled in compliance with GDPR, CCPA, and other privacy regulations. For enterprise clients, we offer additional security measures."
  },
  {
    question: "How many languages does LOOKUP support?",
    answer: "LOOKUP currently supports 25+ languages including English, Spanish, French, German, Chinese, Japanese, Arabic, and more. Our multilingual capabilities allow for cross-language summaries and translations, with more languages being added regularly."
  },
  {
    question: "Can I use LOOKUP for academic research?",
    answer: "Yes, LOOKUP is designed with researchers in mind. It can analyze academic papers, extract methodologies and findings, compare results across studies, and help with literature reviews. Many academic institutions are using LOOKUP to accelerate their research processes."
  },
  {
    question: "Is there a limit to the document size I can upload?",
    answer: "Free accounts can upload documents up to 25 pages. Pro accounts can process documents up to 500 pages, and Enterprise accounts have no page limit. For exceptionally large documents, we recommend breaking them into logical sections for optimal processing."
  },
  {
    question: "How do I get started with LOOKUP?",
    answer: "Getting started is easy! Simply create a free account, upload a document or search for a book, and start exploring the insights. Our intuitive interface guides you through the process, and you can upgrade to a Pro account anytime to access more features."
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-navy-50/30 dark:bg-navy-900/20">
      <Container size="lg">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about LOOKUP and how it can help you understand documents better."
          centered
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}