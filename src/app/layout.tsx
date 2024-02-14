import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Meu portifolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
