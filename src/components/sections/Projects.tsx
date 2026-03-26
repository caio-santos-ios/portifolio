"use client";
import { useState } from "react";
import Image from "next/image";

interface Project {
  year: string;
  name: string;
  stack: string;
  imgs: string[];
  href: string;
  orientation?: "landscape" | "portrait"; // portrait = print de celular
}


const PROJECTS: Project[] = [
    {
    year: "2026",
    name: "App Barbearia",
    stack: "Next.js · TypeScript · PWA · Tailwind",
    imgs: [
      "/projeto-14-1.jpg",
      "/projeto-14-2.jpg",
    ],
    href: "#",
    orientation: "portrait", 
  },
  {
    year: "2026",
    name: "Simulador de Financiamento",
    stack: "Next.js · TypeScript · Tailwind · .NET",
    imgs: [
      "/projeto-13-1.png",
      "/projeto-13-2.png",
      "/projeto-13-3.png"
    ],
    href: "#",
  },
  {
    year: "2026",
    name: "Gestão de Oficina",
    stack: "Next.js · TypeScript · Tailwind · .NET",
    imgs: [
      "/projeto-11-1.png",
      "/projeto-11-2.png",
      "/projeto-11-3.png",
      "/projeto-11-4.png",
      "/projeto-11-5.png",
      "/projeto-11-6.png",
      "/projeto-11-7.png",
      "/projeto-11-8.png",
      "/projeto-11-9.png",
      "/projeto-11-10.png"
    ],
    href: "#",
  },
  {
    year: "2026",
    name: "Gestão de Clínicas e consultório/Estúdios de treino personalizado",
    stack: "Next.js · TypeScript · Tailwind · .NET",
    imgs: [
      "/projeto-10-1.png",
      "/projeto-10-2.png",
      "/projeto-10-3.png",
      "/projeto-10-4.png",
      "/projeto-10-5.png"
    ],
    href: "#",
  },
  {
    year: "2026",
    name: "FinFlow — Plataforma de Gestão Financeira Pessoal",
    stack: "Next.js · TypeScript · Tailwind · .NET",
    imgs: [
      "/projeto-4-1.png",
      "/projeto-4-2.png",
      "/projeto-4-3.png",
      "/projeto-4-4.png",
      "/projeto-4-5.png",
      "/projeto-4-6.png",
    ],
    href: "#",
  },
  {
    year: "2026",
    name: "Landing Page - Advocacia",
    stack: "Next.js · TypeScript · Tailwind · SEO",
    imgs: ["/projeto-5.png"],
    href: "https://page-advocacia-nu.vercel.app/",
  },
  {
    year: "2026",
    name: "SAAS Telemovvi",
    stack: "Next.js · TypeScript · Tailwind · .NET",
    imgs: [
      "/projeto-3-1.png",
      "/projeto-3-2.png",
      "/projeto-3-3.png",
      "/projeto-3-4.png",
      "/projeto-3-5.png",
      "/projeto-3-6.png",
      "/projeto-3-7.png"
    ],
    href: "https://erpmais.online/", 
  },
  {
    year: "2026",
    name: "Landing Page - Suco Vitallis",
    stack: "Next.js · TypeScript · Tailwind · SEO",
    imgs: ["/projeto-1.png"],
    href: "https://sucovitallis.com.br/",
  },
  {
    year: "2026",
    name: "App PASBEM",
    stack: "Next.js · TypeScript · PWA · Tailwind",
    imgs: [
      "/projeto-2-1.jpg",
      "/projeto-2-2.jpg",
    ],
    href: "#",
    orientation: "portrait", 
  },
  {
    year: "2026",
    name: "Landing Page - Escola de Idioma",
    stack: "Next.js · TypeScript · Tailwind · SEO",
    imgs: ["/projeto-6.png"],
    href: "https://page-idiomas.vercel.app/",
  },
  {
    year: "2026",
    name: "Landing Page - Imobiliaria",
    stack: "Next.js · TypeScript · Tailwind · SEO",
    imgs: ["/projeto-7.png"],
    href: "https://page-imobiliaria.vercel.app/",
  },
  {
    year: "2026",
    name: "Landing Page - Agências de marketing",
    stack: "Next.js · TypeScript · Tailwind · SEO",
    imgs: ["/projeto-8.png"],
    href: "https://page-marketing-beta.vercel.app/",
  },
  {
    year: "2026",
    name: "Landing Page - Clínica Odontológica",
    stack: "Next.js · TypeScript · Tailwind · SEO",
    imgs: ["/projeto-9.png"],
    href: "https://page-odonto.vercel.app/",
  },
];

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function CardImage({ imgs, name, orientation = "landscape" }: {
  imgs: string[];
  name: string;
  orientation?: "landscape" | "portrait";
}) {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const multiple = imgs.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setCurrent(i => (i - 1 + imgs.length) % imgs.length);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();
    setCurrent(i => (i + 1) % imgs.length);
  };
  const goTo = (e: React.MouseEvent, i: number) => {
    e.preventDefault(); e.stopPropagation();
    setCurrent(i);
  };

  const wrapClass = `carousel-wrap${orientation === "portrait" ? " portrait" : ""}`;

  return (
    <div className={wrapClass}>
      {imgs.map((src, i) => (
        <div key={i} className={`carousel-slide${i === current ? " active" : ""}`}>
          {!imgErrors[i] ? (
            <Image
              src={src}
              alt={`${name} — imagem ${i + 1}`}
              fill
              style={{ objectFit: "contain" }}
              onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
            />
          ) : (
            <div className="project-placeholder">Imagem do Projeto</div>
          )}
        </div>
      ))}

      {multiple && (
        <>
          <button className="carousel-btn prev" onClick={prev} aria-label="Imagem anterior">
            <ChevronLeft />
          </button>
          <button className="carousel-btn next" onClick={next} aria-label="Próxima imagem">
            <ChevronRight />
          </button>
          <div className="carousel-dots">
            {imgs.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? " active" : ""}`}
                onClick={e => goTo(e, i)}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <a href={p.href} className="project-card reveal" target="_blank" rel="noopener noreferrer">
      <CardImage imgs={p.imgs} name={p.name} orientation={p.orientation} />
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
