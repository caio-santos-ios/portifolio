import Navbar from "../components/sections/Navbar";
import CustomCursor from "../components/sections/CustomCursor";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import RevealObserver from "../components/sections/RevealObserver";
import WhatsAppButton from "../components/widgets/WhatsAppButton";
import Pricing from "../components/sections/Pricing";

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
