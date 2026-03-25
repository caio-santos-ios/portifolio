const SKILLS = [
  { icon: "⚡", name: "Front-end Moderno",  desc: "Interfaces performáticas e acessíveis com atenção aos detalhes de UX e animações fluidas.", tags: ["Next.js 14","React","Tailwind","Framer Motion"] },
  { icon: "🔷", name: "TypeScript First",   desc: "Código tipado, escalável e fácil de manter. Menos bugs, mais confiança no que é entregue.",  tags: ["TypeScript","Zod","tRPC"] },
  { icon: "🗃️", name: "Back-end & APIs",   desc: "APIs robustas, autenticação segura e integrações com bancos de dados relacionais e NoSQL.",  tags: ["Node.js","Prisma","PostgreSQL","REST"] },
  { icon: "🚀", name: "Deploy & DevOps",    desc: "Pipelines de CI/CD, deployments na Vercel e otimizações de performance para produção.",       tags: ["Vercel","Docker","GitHub Actions"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label reveal">Habilidades</p>
      <h2 className="section-title reveal">O que eu faço<br/>muito bem.</h2>
      <div className="skills-grid">
        {SKILLS.map(s => (
          <div key={s.name} className="skill-card reveal">
            <span className="skill-icon">{s.icon}</span>
            <div className="skill-name">{s.name}</div>
            <p className="skill-desc">{s.desc}</p>
            <div className="skill-tags">
              {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
