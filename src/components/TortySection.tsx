"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Urodzinowe", "Okolicznościowe", "Weselne"] as const;
type Tab = (typeof tabs)[number];

type Cake = { src: string; alt: string };

const cakes: Record<Tab, Cake[]> = {
  Urodzinowe: [
    {
      src: "/images/cakes/birthday/tort_urodzinowy_granatowy_happy_birthday.jpg",
      alt: "Tort urodzinowy granatowy z napisem Happy Birthday",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_czarny_glamour.jpg",
      alt: "Czarny tort urodzinowy w stylu glamour",
    },
    {
      src: "/images/cakes/birthday/tort_roczek_lew_olka.jpg",
      alt: "Tort na pierwsze urodziny z motywem lwa",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_krolik_hania_3lata.jpg",
      alt: "Tort urodzinowy z motywem królika dla trzylatki",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_morski_zolw.jpg",
      alt: "Tort urodzinowy w stylu morskim z żółwiem",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_lego.jpg",
      alt: "Tort urodzinowy z motywem klocków Lego",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_kompas_podroz.jpg",
      alt: "Tort urodzinowy z motywem kompasu i podróży",
    },
  ],
  Okolicznościowe: [
    {
      src: "/images/cakes/occasion/chrzest_swiety_oliwia_mis.jpg",
      alt: "Tort na chrzest święty z motywem misia",
    },
    {
      src: "/images/cakes/occasion/chrzest_swiety_oliwia_kwiaty.jpg",
      alt: "Tort na chrzest święty z dekoracją kwiatową",
    },
    {
      src: "/images/cakes/occasion/chrzest_swiety_klara.jpg",
      alt: "Tort na chrzest święty Klary",
    },
    {
      src: "/images/cakes/occasion/komunia_swiety_maciej.jpg",
      alt: "Tort komunijny dla Macieja",
    },
    {
      src: "/images/cakes/occasion/komunia_swiety_amelia.jpg",
      alt: "Tort komunijny dla Amelii",
    },
    {
      src: "/images/cakes/occasion/baby_shower_oh_baby.jpg",
      alt: "Tort na baby shower z napisem Oh Baby",
    },
  ],
  Weselne: [
    {
      src: "/images/cakes/wedding/tort_weselny_cylinder_rozowe_kwiaty.jpg",
      alt: "Tort weselny z cylindrycznymi piętrami i różowymi kwiatami",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_m_and_p_sala.jpg",
      alt: "Tort weselny na sali bankietowej",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_milosc_jest_slodka.jpg",
      alt: "Tort weselny z napisem Miłość jest słodka",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_najlepsze_przed_nami.jpg",
      alt: "Tort weselny z napisem Najlepsze przed nami",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_pan_pani_kosno.jpg",
      alt: "Tort weselny państwa Kosno",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_karolina_marcin.gif",
      alt: "Tort weselny Karoliny i Marcina",
    },
  ],
};

export default function TortySection() {
  const [active, setActive] = useState<Tab>("Urodzinowe");
  const currentCakes = cakes[active];

  return (
    <section
      id="torty"
      className="bg-[#FDF8F4] py-20 px-4 sm:px-6 scroll-mt-16"
      aria-label="Torty na zamówienie — portfolio Pani Kasi"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Słodkie okazje
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D2817] mt-3 leading-tight">
            Torty Pani Kasi
          </h2>
          <p className="text-[#6B3A1F] text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Każdy tort tworzony jest indywidualnie — pod konkretną okazję, gust i historię.
            Zobacz przykłady realizacji i napisz do nas, jeśli marzy Ci się coś podobnego.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Kategorie tortów"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              aria-controls={`torty-panel-${tab}`}
              id={`torty-tab-${tab}`}
              onClick={() => setActive(tab)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tab
                  ? "bg-[#3D2817] text-[#F5E6D3] shadow-md"
                  : "bg-[#F5E6D3] text-[#6B3A1F] hover:bg-[#3D2817]/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          id={`torty-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`torty-tab-${active}`}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {currentCakes.map((cake, idx) => {
            const isGif = cake.src.endsWith(".gif");
            return (
              <div
                key={cake.src}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md bg-[#F5E6D3]"
              >
                <Image
                  src={cake.src}
                  alt={cake.alt}
                  fill
                  unoptimized={isGif}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={idx < 4 ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+48509708434"
            className="inline-flex items-center justify-center gap-2 bg-[#3D2817] text-[#F5E6D3] px-7 py-4 rounded-full text-sm sm:text-base font-semibold shadow-md hover:bg-[#6B3A1F] transition-colors"
          >
            <span aria-hidden="true">📞</span>
            <span>Zamów tort — zadzwoń</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61586213099245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#C9956B] text-[#FDF8F4] px-7 py-4 rounded-full text-sm sm:text-base font-semibold shadow-md hover:bg-[#6B3A1F] transition-colors"
          >
            <span aria-hidden="true">💬</span>
            <span>Napisz na Facebooku</span>
          </a>
        </div>
      </div>
    </section>
  );
}
