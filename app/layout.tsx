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
      <head>
        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="Lumozion - Future of Web Development" />
        <meta property="og:description" content="Discover futuristic, high-performance websites built by Lumozion." />
        <meta property="og:image" content="./logo.jpeg" />
        <meta property="og:url" content="https://lumozion.store" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
        <link rel="manifest" href="./site.webmanifest"/>
      </head>
      <body className="font-mulish antialiased">{children}</body>
    </html>
  )
}
