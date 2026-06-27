import type { Metadata } from "next";
import { Inter, Space_Grotesk, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZAGREO | Consulenza Strategica e Innovazione Operativa",
  description: "Trasformiamo i processi della tua azienda con strategia, tecnologia e intelligenza artificiale. Più efficienza, meno complessità.",
  keywords: ["Consulenza Strategica", "Ottimizzazione Processi", "Intelligenza Artificiale", "Business Analysis", "Project Management", "ThinkSuite"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${dmSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
