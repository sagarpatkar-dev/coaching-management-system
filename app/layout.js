import React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
})

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const metadata = {
    title: "CoachHub - Coaching Management System",
    description: "Manage your coaching academy with ease",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        </body>
        </html>
    )
}
