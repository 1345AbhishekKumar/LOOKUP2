import { HeroSection } from '@/components/landing/hero';
import { FeaturesSection } from '@/components/landing/features';
import { HowItWorksSection } from '@/components/landing/how-it-works';
import { UseCasesSection } from '@/components/landing/use-cases';
import { InteractiveDemoSection } from '@/components/landing/interactive-demo';
import { TestimonialsSection } from '@/components/landing/testimonials';
import { AISecuritySection } from '@/components/landing/ai-security';
import { PricingSection } from '@/components/landing/pricing';
import { FAQSection } from '@/components/landing/faq';
import { FinalCTASection } from '@/components/landing/final-cta';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <InteractiveDemoSection />
      <TestimonialsSection />
      <AISecuritySection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}