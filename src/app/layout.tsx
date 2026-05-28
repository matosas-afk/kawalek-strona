import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kawiarniakáwalek.pl"),
  title: "Kawiarnia Kawałek Zielonka — kawa, ciasta, lody, torty na zamówienie",
  description:
    "Kawiarnia Kawałek w Zielonce — rzemieślnicze lody, domowe ciasta, kawa, desery na ciepło (30 zł) i torty na zamówienie. Ul. Marecka 17. Środy: kawa + ciasto 20 zł dla seniorów. Czwartki: pączki i wypieki drożdżowe.",
  keywords: [
    "kawiarnia Zielonka",
    "Kawałek Zielonka",
    "lody rzemieślnicze Zielonka",
    "ciasta Zielonka",
    "kawa Zielonka",
    "kawiarnia Marecka",
    "torty na zamówienie Zielonka",
    "torty weselne Zielonka",
    "torty urodzinowe Zielonka",
    "desery na ciepło Zielonka",
    "pączki Zielonka czwartek",
  ],
  authors: [{ name: "Kawiarnia Kawałek" }],
  openGraph: {
    title: "Kawiarnia Kawałek Zielonka — kawa, ciasta, lody, torty na zamówienie",
    description:
      "Rzemieślnicze lody, domowe ciasta, kawa, desery na ciepło i torty na zamówienie. Ul. Marecka 17, Zielonka.",
    url: "https://kawiarniakáwalek.pl",
    siteName: "Kawiarnia Kawałek",
    images: [
      {
        url: "/images/K3.jpg",
        width: 1200,
        height: 630,
        alt: "Beza pavlova z kawą — Kawiarnia Kawałek Zielonka",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kawiarnia Kawałek Zielonka — kawa, ciasta, lody, torty na zamówienie",
    description:
      "Rzemieślnicze lody, domowe ciasta, kawa, desery na ciepło i torty na zamówienie. Ul. Marecka 17, Zielonka.",
    images: ["/images/K3.jpg"],
  },
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
    <html
      lang="pl"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
