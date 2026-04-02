import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import Credibility from "@/components/sections/Credibility";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <CaseStudies />
      <Credibility />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
