import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import { AuthProvider } from '@/providers/auth-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Meu blog pessoal aqui é onde vou compartilhar meus conhecimentos e ajudar outros devs a crescer junto comigo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
