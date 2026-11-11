"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Urodzinowe", "Okolicznościowe", "Weselne"] as const;
type Tab = (typeof tabs)[number];

type Cake = { src: string; alt: string; name: string };

const cakes: Record<Tab, Cake[]> = {
  Urodzinowe: [
    {
      src: "/images/cakes/birthday/tort_urodzinowy_granatowy_happy_birthday.jpg",
      alt: "Tort urodzinowy granatowy z napisem Happy Birthday",
      name: "Granatowy Glamour z makaronikami",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_czarny_glamour.jpg",
      alt: "Czarny tort urodzinowy w stylu glamour",
      name: "Czarny Minimalistyczny Tort",
    },
    {
      src: "/images/cakes/birthday/tort_roczek_lew_olka.jpg",
      alt: "Tort na pierwsze urodziny z motywem lwa",
      name: "Roczek z motywem lwa",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_krolik_hania_3lata.jpg",
      alt: "Tort urodzinowy z motywem królika dla trzylatki",
      name: "Bajkowy Królik dla dzieci",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_morski_zolw.jpg",
      alt: "Tort urodzinowy w stylu morskim z żółwiem",
      name: "Morski świat & Żółw",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_lego.jpg",
      alt: "Tort urodzinowy z motywem klocków Lego",
      name: "Kolorowe Klocki Lego",
    },
    {
      src: "/images/cakes/birthday/tort_urodzinowy_kompas_podroz.jpg",
      alt: "Tort urodzinowy z motywem kompasu i podróży",
      name: "Podróżniczy z kompasem",
    },
  ],
  Okolicznościowe: [
    {
      src: "/images/cakes/occasion/chrzest_swiety_oliwia_mis.jpg",
      alt: "Tort na chrzest święty z motywem misia",
      name: "Chrzest Święty z misiem",
    },
    {
      src: "/images/cakes/occasion/chrzest_swiety_oliwia_kwiaty.jpg",
      alt: "Tort na chrzest święty z dekoracją kwiatową",
      name: "Chrzest Święty Pastel Floral",
    },
    {
      src: "/images/cakes/occasion/chrzest_swiety_klara.jpg",
      alt: "Tort na chrzest święty Klary",
      name: "Elegancki Tort na Chrzest",
    },
    {
      src: "/images/cakes/occasion/komunia_swiety_maciej.jpg",
      alt: "Tort komunijny dla Macieja",
      name: "I Komunia Święta — Błękit & Złoto",
    },
    {
      src: "/images/cakes/occasion/komunia_swiety_amelia.jpg",
      alt: "Tort komunijny dla Amelii",
      name: "I Komunia Święta — Róż & Biel",
    },
    {
      src: "/images/cakes/occasion/baby_shower_oh_baby.jpg",
      alt: "Tort na baby shower z napisem Oh Baby",
      name: "Baby Shower — Oh Baby",
    },
  ],
  Weselne: [
    {
      src: "/images/cakes/wedding/tort_weselny_cylinder_rozowe_kwiaty.jpg",
      alt: "Tort weselny z cylindrycznymi piętrami i różowymi kwiatami",
      name: "Cylindryczny Tort z żywymi kwiatami",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_m_and_p_sala.jpg",
      alt: "Tort weselny na sali bankietowej",
      name: "Piętrowy Tort Weselny",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_milosc_jest_slodka.jpg",
      alt: "Tort weselny z napisem Miłość jest słodka",
      name: "Rustykalny Tort Weselny",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_najlepsze_przed_nami.jpg",
      alt: "Tort weselny z napisem Najlepsze przed nami",
      name: "Nowoczesny Naked Cake",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_pan_pani_kosno.jpg",
      alt: "Tort weselny państwa Kosno",
      name: "Elegancki Monochromatyczny",
    },
    {
      src: "/images/cakes/wedding/tort_weselny_karolina_marcin.gif",
      alt: "Tort weselny Karoliny i Marcina",
      name: "Klasyczny Tort Weselny",
    },
  ],
};

export default function TortySection() {
  const [active, setActive] = useState<Tab>("Urodzinowe");
  const currentCakes = cakes[active];

  return (
    <section
      id="torty"
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#FFFFFF] border-t border-[#ECE6DC] scroll-mt-20"
      aria-label="Torty na zamówienie — Torty u Kaśki"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE4D6] border border-[#D9C4AC] text-[#5C3D24] text-xs font-semibold tracking-wider uppercase mb-4">
            Autorska pracownia cukiernicza
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-semibold leading-tight">
              Torty u Kaśki
            </h2>
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative shrink-0">
              <Image
                src="/images/logo-druga-firma.png"
                alt="Logo pracowni Torty u Kaśki"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-[#57534E] text-base leading-relaxed">
            Każdy tort projektowany jest indywidualnie – pod charakter uroczystości, motyw przewodni i Twoje ulubione kompozycje smakowe.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mb-10"
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
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active === tab
                  ? "bg-[#1C1917] text-[#FAF7F2] shadow-sm"
                  : "bg-[#FAF7F2] text-[#57534E] border border-[#ECE6DC] hover:border-[#8C6239]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          id={`torty-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`torty-tab-${active}`}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {currentCakes.map((cake, idx) => {
            const isGif = cake.src.endsWith(".gif");
            return (
              <div
                key={cake.src}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#ECE6DC] bg-[#FAF7F2] shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-[#EFE9E0]">
                  <Image
                    src={cake.src}
                    alt={cake.alt}
                    fill
                    unoptimized={isGif}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={idx < 4 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-3 text-center bg-[#FFFFFF]">
                  <p className="text-xs font-medium text-[#1C1917] truncate">
                    {cake.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 bg-[#FAF7F2] border border-[#ECE6DC] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-2xl text-[#1C1917] font-semibold mb-1">
              Planujesz uroczystość w Zielonce lub okolicach?
            </h3>
            <p className="text-[#57534E] text-sm">
              Skontaktuj się z nami, aby omówić liczbę porcji, smaki i termin realizacji.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:509708434"
              className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#734F2D] text-[#FAF7F2] px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
            >
              Zadzwoń: 509 708 434
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61586213099245"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2] text-[#1C1917] px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
            >
              Napisz na Facebooku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
