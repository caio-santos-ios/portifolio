export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-photo hero-animate-1" style={{ backgroundImage: "url('/foto-caio.jpg')" }} />
      <div className="hero-vignette" />
      <div className="hero-grid" />
      <div className="hero-content">
        <p className="hero-tag hero-animate-2">Desenvolvedor Full Stack &middot; Disponível para Freelance</p>
        <h1 className="hero-title hero-animate-3">
          Caio<br />
          <span className="outline">Desenvol</span><br />
          vedor<span className="dot">.</span>
        </h1>
        <p className="hero-desc hero-animate-4">
          Interfaces rápidas e elegantes com Next.js, TypeScript e Tailwind CSS.
          Transformo ideias em produtos digitais que funcionam de verdade.
        </p>
        <div className="hero-buttons hero-animate-5">
          <a href="#projects" className="btn btn-outline">Ver projetos</a>
          <a href="#contact" className="btn btn-primary">
            Vamos conversar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
