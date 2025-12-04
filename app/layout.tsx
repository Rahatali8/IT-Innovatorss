import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Montserrat } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "IT-INNOVATORSS ",
  description: "Innovative IT Solutions for Your Business Growth",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>

    </html>
  )
}
