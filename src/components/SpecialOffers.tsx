import Image from "next/image";

export default function SpecialOffers() {
  return (
    <section
      id="oferty-specjalne"
      className="relative py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#3D2817] via-[#2A1A0E] to-[#3D2817] scroll-mt-16"
      aria-label="Oferty specjalne — Środy dla Seniorów i Czwartki z Pączkami"
    >
      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9956B 0, #C9956B 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden="true"
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,149,107,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Oferty specjalne
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F5E6D3] mt-3 leading-tight">
            Środy i Czwartki w Kawałku
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT — Seniors */}
          <article className="relative overflow-hidden flex flex-col items-center text-center rounded-2xl p-8 sm:p-10 border border-[#C9956B]/20">
            {/* Photo background */}
            <Image
              src="/images/backgrounds/kawa-ciasto-background.png"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover -z-10"
            />
            {/* Brown scrim for text legibility */}
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2A1A0E]/85 via-[#2A1A0E]/70 to-[#2A1A0E]/90"
              aria-hidden="true"
            />

            <div className="inline-block bg-[#C9956B] text-[#FDF8F4] text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6">
              Środy dla Seniorów
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-[#C9956B]/60" aria-hidden="true" />
              <span className="text-[#C9956B] text-2xl" aria-hidden="true">☕</span>
              <span className="h-px w-12 bg-[#C9956B]/60" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5E6D3] leading-tight mb-4">
              Kawa + Ciasto
            </h3>

            <div className="my-6">
              <div className="bg-[#F5E6D3] rounded-2xl px-8 py-5 shadow-2xl">
                <p className="font-serif text-6xl font-bold text-[#C9956B] leading-none">
                  20<span className="text-3xl">zł</span>
                </p>
              </div>
            </div>

            <p className="text-[#F5E6D3]/90 text-base sm:text-lg leading-relaxed">
              W każdą środę zapraszamy seniorów na wyjątkowy zestaw — kawa i ulubione
              ciasto w jednej, specjalnej cenie.
            </p>

            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-12 bg-[#C9956B]/40" aria-hidden="true" />
              <span className="text-[#F5E6D3]/50 text-xs tracking-widest uppercase">
                Tylko w środy
              </span>
              <span className="h-px w-12 bg-[#C9956B]/40" aria-hidden="true" />
            </div>
          </article>

          {/* RIGHT — Thursday donuts */}
          <article className="relative overflow-hidden flex flex-col items-center text-center rounded-2xl p-8 sm:p-10 border border-[#C9956B]/20">
            {/* Photo background */}
            <Image
              src="/images/backgrounds/czwartek-paczki-background.png"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover -z-10"
            />
            {/* Brown scrim for text legibility */}
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2A1A0E]/85 via-[#2A1A0E]/70 to-[#2A1A0E]/90"
              aria-hidden="true"
            />

            <div className="inline-block bg-[#C9956B] text-[#FDF8F4] text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6">
              Czwartki z Pączkami
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-[#C9956B]/60" aria-hidden="true" />
              <span className="text-[#C9956B] text-2xl" aria-hidden="true">🍩</span>
              <span className="h-px w-12 bg-[#C9956B]/60" aria-hidden="true" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5E6D3] leading-tight mb-4">
              Pączki & Wypieki Drożdżowe
            </h3>

            <div className="my-6">
              <div className="bg-[#F5E6D3] rounded-2xl px-8 py-5 shadow-2xl">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#C9956B] leading-tight">
                  <span>Świeże</span>
                  <span className="block text-xl text-[#6B3A1F] font-normal mt-1">
                    co czwartek
                  </span>
                </p>
              </div>
            </div>

            <p className="text-[#F5E6D3]/90 text-base sm:text-lg leading-relaxed">
              W każdy czwartek świeżutkie pączki oraz domowe wypieki drożdżowe.
            </p>

            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-12 bg-[#C9956B]/40" aria-hidden="true" />
              <span className="text-[#F5E6D3]/50 text-xs tracking-widest uppercase">
                Tylko w czwartki
              </span>
              <span className="h-px w-12 bg-[#C9956B]/40" aria-hidden="true" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
