import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PartnerLogos from "@/components/sections/PartnerLogos";
import TopicExplorer from "@/components/sections/TopicExplorer";
import CourseGrid from "@/components/sections/CourseGrid";
import CategoriesSection from "@/components/sections/CategoriesSection";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header active="Home" />
      <main>
        <Hero />
        <PartnerLogos />
        <TopicExplorer />
        <CourseGrid />
        <CategoriesSection />
        <Features />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
