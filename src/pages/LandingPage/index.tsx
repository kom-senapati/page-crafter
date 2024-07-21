import About from "@/components/LandingPage/About";
import CTA from "@/components/LandingPage/CTA";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
