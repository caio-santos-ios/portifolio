"use client";
import { useState } from "react";

const plans = [
  {
    id: "landing",
    label: "01",
    title: "Landing Page",
    subtitle: "Site Institucional",
    price: "R$ 300",
    priceTo: "R$ 800",
    accent: true,
    features: [
      { icon: "◈", label: "Site", desc: "Design responsivo para todos os dispositivos" },
      { icon: "◈", label: "Páginas", desc: "Até 5 páginas (Home, Sobre, Serviços, Portfólio, Contato)" },
      { icon: "◈", label: "Performance", desc: "Otimização de velocidade e Core Web Vitals" },
      { icon: "◈", label: "SEO", desc: "Otimização para mecanismos de busca" },
      { icon: "◈", label: "SSL", desc: "Certificado de segurança HTTPS incluso" },
      { icon: "◈", label: "Formulário", desc: "Formulário de contato integrado" },
      { icon: "◈", label: "Suporte", desc: "30 dias de suporte após entrega" },
    ],
  },
  {
    id: "erp",
    label: "02",
    title: "Sistema de Gestão",
    subtitle: "ERP / Dashboard",
    price: "R$ 1.500",
    priceTo: "R$ 4.000",
    accent: false,
    features: [
      { icon: "◈", label: "Sistema Web", desc: "Painel administrativo completo e intuitivo" },
      { icon: "◈", label: "Banco de Dados", desc: "Modelagem e implementação de banco relacional" },
      { icon: "◈", label: "Autenticação", desc: "Login seguro com controle de permissões" },
      { icon: "◈", label: "API REST", desc: "Integração com serviços e sistemas externos" },
      { icon: "◈", label: "Relatórios", desc: "Dashboards e exportação de dados (PDF/Excel)" },
      { icon: "◈", label: "Segurança", desc: "Criptografia, logs e proteção contra vulnerabilidades" },
      { icon: "◈", label: "Suporte", desc: "60 dias de suporte após entrega" },
    ],
  },
  {
    id: "app",
    label: "03",
    title: "Aplicativo",
    subtitle: "Mobile / Web App",
    price: "R$ 3.000",
    priceTo: "R$ 8.000",
    accent: false,
    features: [
      { icon: "◈", label: "App Multiplataforma", desc: "iOS e Android com um único código-base" },
      { icon: "◈", label: "UI/UX Design", desc: "Interface nativa e experiência fluida" },
      { icon: "◈", label: "Notificações Push", desc: "Engajamento em tempo real com o usuário" },
      { icon: "◈", label: "Offline Mode", desc: "Funcionalidades disponíveis sem internet" },
      { icon: "◈", label: "Backend & API", desc: "Servidor dedicado e APIs escaláveis" },
      { icon: "◈", label: "Segurança", desc: "Autenticação, criptografia e conformidade com LGPD" },
      { icon: "◈", label: "Suporte", desc: "90 dias de suporte após entrega" },
    ],
  },
];

export default function Pricing() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="pricing" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <p className="section-label reveal">Investimento</p>
      <h2 className="section-title reveal">
        Serviços &amp; <br />
        <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(240,240,240,0.25)" }}>Preços</span>
      </h2>

      <div className="pricing-grid reveal">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.accent ? "pricing-card--accent" : ""} ${hovered === plan.id ? "pricing-card--hovered" : ""}`}
            onMouseEnter={() => setHovered(plan.id)}
            onMouseLeave={() => setHovered(null)}>
            <div className="pricing-top-bar" />

            <div className="pricing-header">
              <span className="pricing-num">{plan.label}</span>
              <div>
                <p className="pricing-title">{plan.title}</p>
                <p className="pricing-subtitle">{plan.subtitle}</p>
              </div>
            </div>

            {/* Price */}
            <div className="pricing-price-block">
              <span className="pricing-from">A partir de</span>
              <div className="pricing-range">
                <span className="pricing-value">{plan.price}</span>
                <span className="pricing-sep">~</span>
                <span className="pricing-value-to">{plan.priceTo}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="pricing-divider" />

            {/* Features */}
            <ul className="pricing-features">
              {plan.features.map((f, i) => (
                <li key={i} className="pricing-feature-item">
                  <span className="pricing-feature-icon">{f.icon}</span>
                  <div>
                    <span className="pricing-feature-label">{f.label}</span>
                    <span className="pricing-feature-desc"> — {f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className={`pricing-cta ${plan.accent ? "pricing-cta--accent" : ""}`}
            >
              Solicitar orçamento
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Hosting banner */}
      <div className="pricing-hosting-banner reveal">
        <div className="pricing-hosting-inner">
          <div className="pricing-hosting-left">
            <span className="pricing-hosting-icon">⬡</span>
            <div>
              <p className="pricing-hosting-title">Suporte Vitalício</p>
              <p className="pricing-hosting-desc">
                Contrate a hospedagem comigo e tenha suporte técnico vitalício incluso — atualizações, correções e manutenção sem custo adicional.
              </p>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
            Saiba mais
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        
      `}</style>
    </section>
  );
}