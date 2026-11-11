"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Witryna ciast", "Kawa i napary", "Lody rzemieślnicze"] as const;
type Tab = (typeof tabs)[number];

type MenuItem = {
  name: string;
  desc: string;
  tag?: string;
};

const bakeryItems: MenuItem[] = [
  { name: "Sernik pistacjowy", desc: "Puszysty, aksamitny sernik na kruchym maślanym spodzie z kremem z sycylijskiej pistacji.", tag: "Bestseller" },
  { name: "Beza Pavlova z owocami", desc: "Chrupiąca z zewnątrz, piankowa w środku, z kremem mascarpone i świeżymi malinami/borówkami.", tag: "Klasyk" },
  { name: "Autorskie monoporcje", desc: "Rzeźbione deserki w kształcie owoców lub serduszek z płynnym musem owocowym w środku.", tag: "Rzemiosło" },
  { name: "Ciasta bez cukru / Keto", desc: "Codziennie w witrynie dostępne pozycje bez dodatku cukru oraz propozycje wegańskie.", tag: "Keto & Fit" },
  { name: "Tarta cytrynowa z bezą", desc: "Kruchy spód, orzeźwiający krem cytrynowy i opalana beza włoska.", tag: "Sezonowe" },
  { name: "Tradycyjna szarlotka", desc: "Kruche maślane ciasto, polskie jabłka z cynamonem i delikatna kruszonka.", tag: "Domowe" },
];

const coffeeItems: MenuItem[] = [
  { name: "Espresso / Doppio", desc: "Klasyczne, intensywne espresso z wyselekcjonowanej mieszanki ziaren.", tag: "Kawa" },
  { name: "Flat White & Cappuccino", desc: "Podwójne espresso z idealnie spienionym, aksamitnym mlekiem (dostępne też mleka roślinne).", tag: "Mleczna" },
  { name: "Caffe Latte", desc: "Delikatna, wysoka kawa mleczna z możliwością dodania naturalnego syropu.", tag: "Klasyk" },
  { name: "Zimowa herbata rozgrzewająca", desc: "Czarna herbata z plastrami pomarańczy, cytryną, świeżym imbirem, miodem i goździkami.", tag: "Zimowa" },
  { name: "Gęsta gorąca czekolada", desc: "Prawdziwa czekolada podawana na gorąco z bitą śmietaną lub piankami.", tag: "Słodka" },
  { name: "Napar imbirowo-rokitnikowy", desc: "Naturalny, witaminowy napar rozgrzewający ze świeżych składników.", tag: "Zdrowie" },
];

const iceCreamFlavors = [
  "Prawdziwa Pistacja 100%",
  "Słony Karmel z solą morską",
  "Czekolada deserowa",
  "Śmietanka z Zielonki",
  "Kinder Bueno",
  "Sorbet z malin",
  "Sorbet mango-marakuja",
  "Sorbet truskawkowy",
];

export default function Menu() {
  const [active, setActive] = useState<Tab>("Witryna ciast");

  return (
    <section
      id="menu"
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#ECE6DC] scroll-mt-20"
      aria-label="Menu kawiarni Kawałek"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#8C6239] text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
            Rzemieślnicze smaki
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-semibold leading-tight">
            Karta Słodkości & Kawy
          </h2>
          <p className="text-[#57534E] text-base mt-3">
            Wypieki przygotowujemy na bieżąco. Oferta witryny zmienia się codziennie w zależności od inspiracji Pani Kasi i sezonowych owoców.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
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
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active === tab
                  ? "bg-[#1C1917] text-[#FAF7F2] shadow-sm"
                  : "bg-[#FFFFFF] text-[#57534E] border border-[#ECE6DC] hover:border-[#8C6239]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content: Bakery */}
        {active === "Witryna ciast" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bakeryItems.map((item) => (
              <div
                key={item.name}
                className="bg-[#FFFFFF] border border-[#ECE6DC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8C6239] transition-all duration-200 shadow-2xs"
              >
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8C6239] bg-[#EFE4D6] px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#1C1917] mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[#6B655F] text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F3ECE2] text-xs text-[#8C6239] font-medium">
                  Dostępne w witrynie na wagę / porcje
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Coffee */}
        {active === "Kawa i napary" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item) => (
              <div
                key={item.name}
                className="bg-[#FFFFFF] border border-[#ECE6DC] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8C6239] transition-all duration-200 shadow-2xs"
              >
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#8C6239] bg-[#EFE4D6] px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#1C1917] mb-2 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[#6B655F] text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F3ECE2] text-xs text-[#8C6239] font-medium">
                  Na miejscu i na wynos
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Ice Cream */}
        {active === "Lody rzemieślnicze" && (
          <div className="bg-[#FFFFFF] border border-[#ECE6DC] rounded-3xl p-8 sm:p-12 shadow-2xs">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6239] block mb-2">
                Receptury rzemieślnicze
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-semibold mb-3">
                Lody tworzone na naturalnych pastach i owocach
              </h3>
              <p className="text-[#57534E] text-sm leading-relaxed">
                Prawdziwa śmietanka, sycylijskie orzechy i 100% przecierów owocowych w sorbetach. Bez sztucznych barwników i zagęszczaczy.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto">
              {iceCreamFlavors.map((flavor) => (
                <div
                  key={flavor}
                  className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#ECE6DC] text-center text-xs font-medium text-[#1C1917]"
                >
                  {flavor}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Facebook Update Note */}
        <div className="mt-12 text-center text-xs text-[#78716C]">
          <p>
            Codzienną witrynę deserów i aktualne smaki ciast publikujemy na bieżąco na{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61586213099245"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6239] font-semibold underline hover:text-[#1C1917] transition-colors"
            >
              Facebooku Kawiarni Kawałek →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
