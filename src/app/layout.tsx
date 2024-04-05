import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image'
import image from '../../public/abc.webp'
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )} relative min-h-[100vh] `}>
        <div className="absolute bg-blue-800 inset-0"></div>
        <div className="relative z-20 p-5">
          {children}
        </div>
      </body>
    </html>
  );
}
