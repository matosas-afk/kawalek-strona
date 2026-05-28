"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Desery", "Lody", "Kawa i napoje"] as const;
type Tab = (typeof tabs)[number];

type TabData = {
  image?: string;
  imageAlt?: string;
  description: string;
  flavors?: string[];
  flavorsNote?: string;
  priceList?: string;
};

const menuData: Record<Tab, TabData> = {
  Desery: {
    image: "/images/K9.jpg",
    imageAlt: "Beza Pavlova z kawą latte — kawiarnia Kawałek",
    description:
      "Nasze desery to rzemieślnicze wypieki tworzone codziennie przez Panią Kasię — ze świeżych składników, bez kompromisów. W ofercie znajdziesz m.in. bezy, szarlotki, lava cake, naleśniki, gofry czy pierogi na słodko, a także propozycje bez cukru i wegańskie. Menu zmienia się regularnie — zapraszamy po aktualne propozycje!",
  },
  Lody: {
    description:
      "Lody wytwarzane na miejscu, z naturalnych składników i prawdziwych past owocowych. Smaki zmieniają się sezonowo — poniżej przykłady, które możesz u nas znaleźć:",
    flavors: [
      "Sernik baskijski",
      "Czekolada",
      "Kinder Country",
      "Śmietanka",
      "Słony karmel",
      "Pistacja",
      "Sorbet lemoniadowy",
      "Sorbet wiśniowy",
      "Beza z malinami",
      "Mleczna truskawka",
    ],
    flavorsNote: "Smaki zmieniają się sezonowo — aktualną rotację znajdziesz na Facebooku.",
  },
  "Kawa i napoje": {
    image: "/images/drinks/kawa_cappuccino_potrojny.jpg",
    imageAlt: "Cappuccino — kawiarnia Kawałek Zielonka",
    description:
      "Starannie parzona kawa z dobrej jakości ziaren, klasyczne pozycje oraz orzeźwiające napoje na ciepłe dni. Oferujemy też kawę mrożoną i bezalkoholowe drinki owocowe — idealne uzupełnienie deseru.",
    flavors: [
      "Espresso",
      "Americano",
      "Flat White",
      "Latte",
      "Cappuccino",
      "Kawa mrożona",
      "Lemoniada",
      "Koktajl owocowy",
    ],
    priceList:
      "Espresso 5 / 10 zł · Americano 10 zł · Flat White / Latte / Cappuccino 14 zł · Opakowanie na wynos +1 zł · Syrop smakowy +1 zł",
  },
};

export default function Menu() {
  const [active, setActive] = useState<Tab>("Desery");
  const current = menuData[active];
  const hasImage = Boolean(current.image);

  return (
    <section
      id="menu"
      className="bg-[#F5E6D3] py-20 px-4 sm:px-6 scroll-mt-16"
      aria-label="Menu kawiarni"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Co oferujemy
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D2817] mt-3 leading-tight">
            Nasze Menu
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Kategorie menu"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => setActive(tab)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tab
                  ? "bg-[#3D2817] text-[#F5E6D3] shadow-md"
                  : "bg-[#FDF8F4] text-[#6B3A1F] hover:bg-[#3D2817]/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className={
            hasImage
              ? "grid md:grid-cols-2 gap-10 items-center"
              : "max-w-3xl mx-auto"
          }
        >
          {/* Image (hidden for tabs without image, e.g. Lody) */}
          {hasImage && current.image && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={current.image}
                alt={current.imageAlt ?? ""}
                fill
                className="object-cover transition-all duration-300"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
          )}

          {/* Description */}
          <div className="flex flex-col gap-5">
            <p className="text-[#3D2817] text-lg leading-relaxed">
              {current.description}
            </p>

            {current.flavors && (
              <div className="flex flex-wrap gap-2">
                {current.flavors.map((flavor) => (
                  <span
                    key={flavor}
                    className="bg-[#3D2817] text-[#F5E6D3] text-sm px-4 py-2 rounded-full"
                  >
                    {flavor}
                  </span>
                ))}
                {current.flavorsNote && (
                  <p className="w-full text-[#7A5C45] text-xs italic mt-1">
                    * {current.flavorsNote}
                  </p>
                )}
              </div>
            )}

            {current.priceList && (
              <div className="mt-2 bg-[#FDF8F4] border border-[#C9956B]/30 rounded-xl px-5 py-4">
                <p className="text-[#C9956B] text-xs tracking-widest uppercase font-medium mb-2">
                  Cennik kawy
                </p>
                <p className="text-[#3D2817] text-sm leading-relaxed">
                  {current.priceList}
                </p>
              </div>
            )}

            <a
              href="https://www.facebook.com/profile.php?id=61586213099245"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9956B] font-semibold hover:underline text-sm self-start"
            >
              Aktualne menu na Facebooku →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
