export default function SpecialOffers() {
  return (
    <section
      id="oferty-specjalne"
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#ECE6DC] scroll-mt-20"
      aria-label="Oferty specjalne — Środy dla Seniorów i Czwartki z Pączkami"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#8C6239] text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
            Tradycje Kawałka
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-semibold leading-tight">
            Środy i Czwartki w Kawiarni
          </h2>
          <p className="text-[#57534E] text-base mt-3">
            Dwa wyjątkowe dni w tygodniu, na które zielonkowianie czekają najbardziej.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1 — Seniors */}
          <article className="bg-[#FFFFFF] border border-[#ECE6DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-block bg-[#EFE4D6] text-[#5C3D24] text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
                  Środy dla Seniorów
                </span>
                <span className="font-serif text-3xl font-bold text-[#8C6239]">
                  20 <span className="text-xl font-normal">zł</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-semibold mb-3 leading-snug">
                Zestaw: Kawa + Domowe Ciasto
              </h3>

              <p className="text-[#57534E] text-sm sm:text-base leading-relaxed mb-6">
                W każdą środę zapraszamy seniorów na spokojne popołudnie przy aromatycznej kawie i kawałku domowego ciasta z naszej witryny w stałej, promocyjnej cenie.
              </p>
            </div>

            <div className="pt-5 border-t border-[#F3ECE2] flex items-center justify-between text-xs text-[#78716C]">
              <span>Dotyczy ciast z witryny</span>
              <span className="font-medium text-[#8C6239]">W każdą środę 12:00–19:00</span>
            </div>
          </article>

          {/* Card 2 — Donuts */}
          <article className="bg-[#FFFFFF] border border-[#ECE6DC] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-block bg-[#EFE4D6] text-[#5C3D24] text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
                  Czwartki z Pączkami
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6239] bg-[#FAF7F2] border border-[#ECE6DC] px-3 py-1 rounded-full">
                  Prosto z pieca
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-semibold mb-3 leading-snug">
                Ciepłe Pączki & Wypieki Drożdżowe
              </h3>

              <p className="text-[#57534E] text-sm sm:text-base leading-relaxed mb-6">
                W każdy czwartek rano pracownia Pani Kasi wypełnia się zapachem maślanego ciasta. Przygotowujemy świeżutkie pączki z tradycyjną konfiturą oraz drożdżówki z kruszonką i owocami.
              </p>
            </div>

            <div className="pt-5 border-t border-[#F3ECE2] flex items-center justify-between text-xs text-[#78716C]">
              <span>Do wyczerpania zapasów</span>
              <span className="font-medium text-[#8C6239]">W każdy czwartek od 12:00</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
