import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import HowItWorks from "@/components/home/how-it-works";
import CTA from "@/components/home/cta";
import FeatureCards from "@/components/home/featureCards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      
      <HowItWorks />
      <CTA />
    </>
  );
}
