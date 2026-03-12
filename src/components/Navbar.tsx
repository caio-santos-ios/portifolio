"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">caio<span>.</span>dev</div>
      <ul className="nav-links">
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}
