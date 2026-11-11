import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden"
      aria-label="Sekcja główna"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE4D6] border border-[#D9C4AC] text-[#5C3D24] text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8C6239]" aria-hidden="true" />
              Rzemiosło · Pasja · Zielonka
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-semibold leading-[1.12] mb-5 tracking-tight">
              Kawa, domowe ciasto i chwila dla Ciebie
            </h1>

            {/* Short Punchy Subheadline */}
            <p className="text-[#57534E] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              Gorąca szarlotka z lodami, złociste naleśniki i chwila wytchnienia przy świeżo parzonej kawie w Zielonce.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#menu"
                className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#734F2D] text-[#FAF7F2] px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-sm"
              >
                Zobacz nasze desery
              </a>
              <a
                href="tel:509708434"
                className="inline-flex items-center justify-center border border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2] text-[#1C1917] px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200"
              >
                Zadzwoń do nas
              </a>
            </div>

            {/* Quick trust notes */}
            <div className="pt-6 border-t border-[#ECE6DC] w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#78716C]">
              <div>
                <p className="font-semibold text-[#1C1917]">Czysty skład</p>
                <p>100% naturalne masło i owoce</p>
              </div>
              <div>
                <p className="font-semibold text-[#1C1917]">Keto & Bez Cukru</p>
                <p>Dostępne codziennie w witrynie</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold text-[#1C1917]">Ul. Marecka 17</p>
                <p>Zielonka · Zapraszamy z pieskiem</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Artwork */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-16/11 rounded-3xl overflow-hidden shadow-xl border border-[#ECE6DC] bg-[#F5EDE2]">
              <Image
                src="/images/hero_illustration_desktop.jpg"
                alt="Rzemieślnicze desery w kawiarni Kawałek — ciepła szarlotka z lodami, naleśniki z serem i owocami oraz kawa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
