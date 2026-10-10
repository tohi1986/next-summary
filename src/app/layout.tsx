import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Space_Grotesk, Barlow_Condensed } from "next/font/google";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});


const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow",
});



export const metadata: Metadata = {
  title: "PKW Transport NRW | Abschleppdienst bis 3,5 t",
  description:
    "PKW Transport NRW – Abschleppdienst, Pannenhilfe und Fahrzeugtransport bis 3,5 t in Nordrhein-Westfalen.",
  applicationName: "PKW Transport NRW",
  authors: [{ name: "PKW Transport NRW" }],
  creator: "PKW Transport NRW",
  publisher: "PKW Transport NRW",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${spaceGrotesk.variable} ${barlow.variable} flex h-dvh flex-col overflow-hidden`}
      >
        <Navbar />

        <div className="min-h-0 flex-1 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}