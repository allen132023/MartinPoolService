import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/InstagramSection";
import ServiceArea from "@/components/ServiceArea";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection preview />
      <WhyUs />
      <ProcessSection />
      <Testimonials />
      <InstagramSection />
      <ServiceArea />
      <ContactCTA />
    </>
  );
}
