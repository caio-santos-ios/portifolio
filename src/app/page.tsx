import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
