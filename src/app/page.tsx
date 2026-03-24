import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";
import WhatsAppButton from "../components/WhatsAppButton";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <WhatsAppButton phoneNumber="5511965079106"/>
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
