"use client";

import React from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';

interface PlanFeature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

const planFeatures: PlanFeature[] = [
  {
    name: "PDF uploads per month",
    free: "10",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Pages per document",
    free: "25",
    pro: "500",
    enterprise: "Unlimited",
  },
  {
    name: "Book searches per month",
    free: "20",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "AI-generated summaries",
    free: "5/month",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "AI Q&A interactions",
    free: "20/month",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Priority processing",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Team collaboration",
    free: false,
    pro: "Up to 5 users",
    enterprise: "Unlimited users",
  },
  {
    name: "API access",
    free: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "Custom AI models",
    free: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "Dedicated support",
    free: false,
    pro: "Email",
    enterprise: "24/7 priority",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that works for your needs, from individual users to enterprise teams."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Free"
            description="Perfect for trying out LOOKUP's core features."
            price="$0"
            period="forever"
            features={planFeatures.map(f => ({ name: f.name, value: f.free }))}
            buttonText="Get Started"
            variant="outline"
            delay={0}
          />
          
          <PricingCard
            title="Pro"
            description="Everything you need for serious document analysis."
            price="$19"
            period="per month"
            features={planFeatures.map(f => ({ name: f.name, value: f.pro }))}
            buttonText="Start Free Trial"
            variant="default"
            popular
            delay={0.1}
          />
          
          <PricingCard
            title="Enterprise"
            description="Advanced features for teams and organizations."
            price="Custom"
            period="tailored pricing"
            features={planFeatures.map(f => ({ name: f.name, value: f.enterprise }))}
            buttonText="Contact Sales"
            variant="outline"
            delay={0.2}
          />
        </div>
      </Container>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: { name: string; value: boolean | string }[];
  buttonText: string;
  variant: "default" | "outline";
  popular?: boolean;
  delay: number;
}

function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  variant,
  popular = false,
  delay,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl border shadow-sm overflow-hidden relative ${
        popular ? 'ring-2 ring-primary' : ''
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-2 mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground"> / {period}</span>
        </div>
        
        <Button variant={variant} className="w-full mb-8">
          {buttonText}
        </Button>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.value ? (
                <>
                  <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <span>{feature.name}</span>
                    {typeof feature.value === 'string' && feature.value !== 'true' && (
                      <span className="ml-1 text-muted-foreground">({feature.value})</span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature.name}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}