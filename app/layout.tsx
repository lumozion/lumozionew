import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, Mulish } from "next/font/google"
import "./globals.css"

// Primary futuristic font for headings, logo, and brand elements
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Modern readable font for body text, paragraphs, and UI elements
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

// Fallback font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lumozion - Future of Digital Commerce",
  description: "Experience the next generation of online shopping with cutting-edge technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${mulish.variable} ${inter.variable}`}>
      <body className="font-mulish antialiased">{children}</body>
    </html>
  )
}
