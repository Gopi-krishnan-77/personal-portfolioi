import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Audiowide } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-audiowide",
})

export const metadata: Metadata = {
  title: "Gopikrishnan B - Full-Stack Developer",
  description: "Personal portfolio of Gopikrishnan B - Full-Stack Developer, Blockchain Enthusiast, and Problem Solver",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${orbitron.style.fontFamily};
  --font-sans: ${orbitron.variable};
  --font-mono: ${audiowide.variable};
}
        `}</style>
      </head>
      <body className={`${orbitron.variable} ${audiowide.variable} antialiased`}>{children}</body>
    </html>
  )
}
