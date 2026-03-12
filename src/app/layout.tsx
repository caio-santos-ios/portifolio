import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caio — Desenvolvedor Full Stack",
  description:
    "Interfaces rápidas e elegantes com Next.js, TypeScript e Tailwind CSS. Transformo ideias em produtos digitais que funcionam de verdade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
