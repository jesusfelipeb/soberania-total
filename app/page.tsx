import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Credibility from "@/components/sections/Credibility";
import CaseStudies from "@/components/sections/CaseStudies";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Credibility />
      <CaseStudies />
      <CTAFinal />
      <Footer />
      <ChatWidget />
    </>
  );
}
