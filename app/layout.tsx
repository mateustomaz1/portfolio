import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { Navigation } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Mateus Tomaz - Frontend Developer & UI/UX Designer",
  description:
    "Portfólio profissional de Mateus Tomaz, desenvolvedor frontend e designer UI/UX especializado em criar experiências digitais modernas e funcionais.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${inter.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body>
        <LocaleProvider>
          <Navigation />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
