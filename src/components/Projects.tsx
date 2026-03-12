"use client";
import { useState } from "react";
import Image from "next/image";

const PROJECTS = [
  { year: "2026", name: "Landing Page - Suco Vitallis",       stack: "Next.js · TypeScript · Tailwind · SEO", img: "/projeto-1.png", href: "https://sucovitallis.com.br/" },
  { year: "2024", name: "E-commerce Completo",  stack: "Next.js · Stripe · Zustand · Tailwind",                 img: "/projeto-02.png", href: "#" },
  { year: "2024", name: "Landing Page Animada", stack: "Next.js · Framer Motion · Tailwind",                   img: "/projeto-03.png", href: "#" },
  { year: "2024", name: "API REST com Auth",    stack: "Node.js · TypeScript · JWT · Prisma",                  img: "/projeto-04.png", href: "#" },
];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Card({ p }: { p: typeof PROJECTS[0] }) {
  const [err, setErr] = useState(false);
  return (
    <a href={p.href} className="project-card reveal mb-4" target="_blank">
      <div className="project-img-wrap">
        {!err
          ? <Image src={p.img} alt={p.name} fill style={{objectFit:"cover"}} onError={() => setErr(true)} />
          : <div className="project-placeholder">Imagem do Projeto</div>
        }
      </div>
      <div className="project-body">
        <div className="project-num">{p.year}</div>
        <div className="project-name">{p.name}</div>
        <p className="project-meta">{p.stack}</p>
        <div className="project-link">Ver projeto <Arrow /></div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label reveal">Projetos</p>
      <h2 className="section-title reveal">Cases que<br/>falam por mim.</h2>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => <Card key={i} p={p} />)}
      </div>
    </section>
  );
}
