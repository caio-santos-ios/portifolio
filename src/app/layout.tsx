import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://caiodesenvolvedor.com.br'),
  title: {
    default: "Caio — Desenvolvedor Full Stack",
    template: "%s | Caio Desenvolvedor"
  },
  description:
    "Interfaces rápidas e elegantes com Next.js, TypeScript e Tailwind CSS. Transformo ideias em produtos digitais que funcionam de verdade.",
  keywords: ["Desenvolvedor Full Stack", "Next.js", "React", "TypeScript", "Caio Desenvolvedor", "Freelancer Tech"],
  authors: [{ name: "Caio" }],
  creator: "Caio",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId="G-FLEQFHMLGF" />
    </html>
  );
}
