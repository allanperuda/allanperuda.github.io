import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Allan Billy Peruda | Portfolio",
  description:
    "Technical Support Engineer specializing in RFID technologies, networking infrastructure, and web development. Professional portfolio showcasing expertise and certifications.",
  keywords: "Technical Support Engineer, RFID, Networking, JavaScript, Web Development, Allan Billy Peruda",
  authors: [{ name: "Allan Billy Peruda" }],
  openGraph: {
    title: "Allan Billy Peruda | Technical Support Engineer Portfolio",
    description: "Professional portfolio showcasing expertise in RFID technologies, networking, and web development",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
