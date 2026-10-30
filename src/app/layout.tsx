import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const spaceGrotesk = localFont({
  src: "../../public/fonts/SpaceGrotesk-VariableFont_wght.ttf",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
});

const barlow = localFont({
  src: [
    {
      path: "../../public/fonts/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/BarlowCondensed-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-barlow",
  display: "swap",
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
        className={`${spaceGrotesk.variable} ${barlow.variable} flex min-h-dvh flex-col`}
      >
        <Navbar />

        <section className="flex items-center justify-between border-y border-amber-500/50 bg-slate-950 px-5 py-0.5 ">
          <span className="text-[10px] font-bold tracking-widest text-amber-500">
            24/7
          </span>

          <span className="text-[10px] font-bold tracking-widest text-amber-500">
            LIVE-FAHRZEUGTRACKING
          </span>
        </section>

        <div className="sflex-1">{children}</div>
      </body>
    </html>
  );
}
