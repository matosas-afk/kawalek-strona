import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-20 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden"
      aria-label="Sekcja główna"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tag / Kicker */}
            <span className="text-[#8C6239] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3 inline-block">
              Rzemiosło · Pasja · Zielonka
            </span>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-semibold leading-[1.14] mb-3 sm:mb-4 tracking-tight">
              Kawa, domowe ciasto i chwila dla Ciebie
            </h1>

            {/* Short Punchy Subheadline */}
            <p className="text-[#57534E] text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
              Gorąca szarlotka z lodami, złociste naleśniki i chwila wytchnienia przy świeżo parzonej kawie w Zielonce.
            </p>

            {/* CTA Buttons - side-by-side on mobile & desktop */}
            <div className="flex flex-row items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href="#desery-na-cieplo"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#734F2D] text-[#FAF7F2] px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-sm text-center"
              >
                Zobacz nasze desery
              </a>
              <a
                href="tel:509708434"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center border border-[#8C6239]/50 hover:bg-[#EFE4D6] text-[#5C3D24] px-4 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 text-center"
              >
                Zadzwoń do nas
              </a>
            </div>

            {/* Quick trust notes */}
            <div className="pt-4 sm:pt-6 border-t border-[#ECE6DC] w-full flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#78716C]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239]" aria-hidden="true" />
                <span><strong className="text-[#1C1917] font-medium">Czysty skład</strong> (100% masło i owoce)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239]" aria-hidden="true" />
                <span><strong className="text-[#1C1917] font-medium">Keto & Bez cukru</strong> w witrynie</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239]" aria-hidden="true" />
                <span><strong className="text-[#1C1917] font-medium">Ul. Marecka 17</strong> · Zapraszamy z psem</span>
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Artwork */}
          <div className="lg:col-span-6 relative flex justify-center items-center w-full mt-2 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#ECE6DC] bg-[#FAF7F2]">
              <Image
                src="/images/kawalek_desserts_art.jpg"
                alt="Rzemieślnicze desery w kawiarni Kawałek — ciepła szarlotka z lodami, złociste naleśniki z serem i owocami oraz kawa"
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
