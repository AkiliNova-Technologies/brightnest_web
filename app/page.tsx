import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Playschool from "@/components/Playschool";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Instructors from "@/components/Instructors";
import HelpSection from "@/components/HelpSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Playschool />
      <Stats />
      <Programs />
      <Instructors />
      <HelpSection />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
