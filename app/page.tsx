import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AccessSection } from "@/components/sections/AccessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrainerSection } from "@/components/sections/TrainerSection";
import { TrialAssuranceSection } from "@/components/sections/TrialAssuranceSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ReasonsSection />
      <PricingSection />
      <FlowSection />
      <ResultsSection />
      <TrainerSection />
      <TestimonialsSection />
      <TrialAssuranceSection />
      <FaqSection />
      <AccessSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
