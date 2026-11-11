import Image from "next/image";

const holidayItems = [
  {
    name: "Makowiec zawijany na bogato",
    desc: "Cienkie ciasto drożdżowe, mnóstwo maku z miodem, orzechami i skórką pomarańczową, oblane lukrem.",
    tag: "Tradycja",
  },
  {
    name: "Sernik Królewski lub Pistacjowy",
    desc: "Aksamitny, puszysty sernik na maślanym spodzie – w wersji tradycyjnej lub z kremem z sycylijskich pistacji.",
    tag: "Bestseller",
  },
  {
    name: "Piernik staropolski dojrzewający",
    desc: "Prawdziwy piernik długo leżakowany, przekładany domowymi powidłami śliwkowymi w polewie z ciemnej czekolady.",
    tag: "Rzemiosło",
  },
  {
    name: "Zimowy Tort Świąteczny",
    desc: "Artystyczny tort świąteczny w zimowej dekoracji (nuty cynamonu, pomarańczy, żurawiny i czekolady).",
    tag: "Na zamówienie",
  },
];

export default function HolidaySpecials() {
  return (
    <section
      id="swieta"
      className="py-20 px-4 sm:px-6 bg-[#25201B] text-[#FAF7F2] scroll-mt-20 relative overflow-hidden"
      aria-label="Oferta świąteczna — Boże Narodzenie 2026"
    >
      {/* Subtle warm glow background */}
      <div
        className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#8C6239]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#8C6239]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C6239]/30 border border-[#8C6239]/50 text-[#EFE4D6] text-xs font-semibold tracking-widest uppercase mb-4">
            ✦ Grudzień 2026 ✦
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF7F2] font-semibold leading-tight mb-4">
            Święta z Kawałkiem
          </h2>
          <p className="text-[#C7BFB6] text-base sm:text-lg leading-relaxed font-light">
            Uwolnij się od przedświątecznego pośpiechu w kuchni. Przyjmujemy zamówienia na tradycyjne, domowe ciasta i torty świąteczne. Odbiór w kawiarni przy ul. Mareckiej 17 w Zielonce.
          </p>
        </div>

        {/* Holiday items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {holidayItems.map((item) => (
            <div
              key={item.name}
              className="bg-[#302B25] border border-[#443D35] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8C6239] transition-colors duration-200"
            >
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D4AF37] block mb-2">
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#FAF7F2] mb-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-[#A89F95] text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#443D35]/60 flex items-center justify-between text-xs text-[#EFE4D6]/70">
                <span>Zielonka</span>
                <span className="text-[#D4AF37]">Zarezerwuj →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with CTA */}
        <div className="bg-[#3A332C] border border-[#52483E] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="font-serif text-2xl text-[#FAF7F2] font-semibold mb-2">
              Zamówienia przyjmujemy telefonicznie oraz na Facebooku
            </h4>
            <p className="text-[#C7BFB6] text-sm leading-relaxed">
              Liczba wypieków na poszczególne dni odbioru przed Wigilią jest ograniczona. Skontaktuj się z Panią Kasią, aby potwierdzić dostępność i ustalić szczegóły.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <a
              href="tel:509708434"
              className="inline-flex items-center justify-center gap-2 bg-[#8C6239] hover:bg-[#734F2D] text-[#FAF7F2] px-6 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 text-center"
            >
              Zadzwoń: 509 708 434
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61586213099245"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#8C6239] text-[#EFE4D6] hover:bg-[#8C6239]/20 px-6 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 text-center"
            >
              Napisz na Facebooku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
