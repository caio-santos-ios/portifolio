import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://caiodesenvolvedor.com.br'),
  title: {
    default: "Caio — Desenvolvedor Full Stack",
    template: "%s | Caio Desenvolvedor"
  },
  description: "Desenvolvedor Full Stack em Ilhéus, Bahia. Criação de sites, sistemas e apps com Next.js e TypeScript. Atendo localmente e para todo o Brasil.",
  keywords: [
    "desenvolvedor web Ilhéus",
    "desenvolvedor freelancer Ilhéus",
    "criação de sites Ilhéus Bahia",
    "desenvolvimento de sistemas Sul da Bahia",
    "desenvolvedor Next.js Bahia",
    "criação de site para empresa Ilhéus",
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Caio Desenvolvedor",
    "Freelancer Tech",
    "C#",
    ".NET",
    "SQL Server",
    "MongoDB",
    "Docker"
  ],
  authors: [{ name: "Caio" }],
  creator: "Caio",
  verification: {
    google: "zCYtMqNjgJ2Tyga_rdZ14h876YSth6V-tR6udzRHi_I",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://caiodesenvolvedor.com.br",
    title: "Caio — Desenvolvedor Full Stack",
    description: "Interfaces rápidas e elegantes com Next.js e TypeScript.",
    siteName: "Caio Desenvolvedor",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Caio Desenvolvedor",
  "description": "Desenvolvedor Full Stack em Ilhéus, Bahia. Criação de sites, sistemas e apps com Next.js e TypeScript.",
  "url": "https://caiodesenvolvedor.com.br",
  "email": "contato@caiodesenvolvedor.com.br",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ilhéus",
    "addressRegion": "BA",
    "addressCountry": "BR"
  },
  "areaServed": [
    "Ilhéus",
    "Itabuna",
    "Uruçuca",
    "Eunápolis",
    "Porto Seguro",
    "Sul da Bahia",
    "Brasil"
  ],
  "serviceType": [
    "Desenvolvimento Web",
    "Criação de Sites",
    "Landing Pages",
    "Sistemas ERP",
    "Aplicativos Mobile",
    "APIs REST"
  ],
  "knowsAbout": ["Next.js", "React", "TypeScript", "Node.js", "C#", ".NET"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-FLEQFHMLGF" />
    </html>
  );
}