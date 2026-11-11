import Image from "next/image";

export default function About() {
  return (
    <section
      id="o-nas"
      className="bg-[#FAF7F2] py-20 px-4 sm:px-6 border-t border-[#ECE6DC] scroll-mt-20"
      aria-label="O kawiarni"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-[#8C6239] text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
            O nas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-semibold leading-tight mb-6">
            Kameralne miejsce, do którego chce się wracać
          </h2>
          <div className="space-y-4 text-[#57534E] text-base sm:text-lg leading-relaxed font-light">
            <p>
              <strong className="font-semibold text-[#1C1917]">Kawałek</strong> to rzemieślnicza kawiarnia i cukiernia w Zielonce, stworzona z miłości do autentycznego smaku. U nas dobra kawa specialty spotyka się z wypiekanymi na miejscu ciastami i rzeźbionymi monoporcjami.
            </p>
            <p>
              Pani Kasia dba o to, by każdy gość znalazł tu coś dla siebie – od tradycyjnych, bogatych serników i bez Pavlova, po desery bez dodatku cukru, opcje keto i wegańskie.
            </p>
            <p className="font-serif text-xl italic text-[#8C6239] pt-2">
              „Zwolnij na chwilę, usiądź wygodnie i poczuj się jak u siebie.”
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-3.5">
            {[
              { title: "Rzemieślnicze receptury", desc: "100% prawdziwe masło i świeże owoce" },
              { title: "Keto & Bez cukru", desc: "Słodkości bez wyrzutów sumienia" },
              { title: "Klimatyczny ogródek", desc: "Spokojna okolica przy ul. Mareckiej" },
              { title: "Przyjazne dla czworonogów", desc: "Zawsze chętnie witamy z pieskiem" },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[#FFFFFF] border border-[#ECE6DC] rounded-2xl p-4 shadow-2xs"
              >
                <p className="font-semibold text-[#1C1917] text-sm">{title}</p>
                <p className="text-[#78716C] text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image mosaic */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-[#ECE6DC]">
            <Image
              src="/images/hero_witryna_deserow.jpg"
              alt="Witryna pełna domowych ciast i deserów — Kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-[#ECE6DC] mt-6">
            <Image
              src="/images/desery_serduszka_w_pudelku.jpg"
              alt="Rzemieślnicze monoporcje — Kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-[#ECE6DC] -mt-6">
            <Image
              src="/images/K3.jpg"
              alt="Gofry z bitą śmietaną i owocami — Kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-[#ECE6DC]">
            <Image
              src="/images/K6.jpg"
              alt="Czekoladowy fondant z lodami i świeżymi owocami — Kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
