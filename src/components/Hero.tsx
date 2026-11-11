import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-20 pb-4 sm:pt-24 md:pt-32 md:pb-16 px-4 sm:px-6 bg-[#F6EFDF] overflow-hidden"
      aria-label="Sekcja główna"
    >
      <div className="max-w-6xl mx-auto">
        {/* MOBILE VIEW (matches mobile_hero_v2 concept 1:1) */}
        <div className="block lg:hidden text-center">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-semibold leading-[1.18] tracking-tight">
            Kawa, domowe ciasto<br />i chwila dla Ciebie
          </h1>

          <p className="text-[#57534E] text-sm sm:text-base leading-relaxed mt-3 mb-6 max-w-sm sm:max-w-md mx-auto">
            Gorąca szarlotka z lodami, złociste naleśniki i chwila relaksu w Zielonce.
          </p>

          <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href="#desery-na-cieplo"
              className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#734F2D] text-[#FAF7F2] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-sm text-center"
            >
              Zobacz nasze desery
            </a>
            <a
              href="tel:509708434"
              className="inline-flex items-center justify-center border border-[#8C6239]/50 hover:bg-[#EFE4D6] text-[#5C3D24] bg-[#FAF7F2] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 text-center"
            >
              Zadzwoń do nas
            </a>
          </div>

          {/* Seamless Watercolor Dessert Artwork */}
          <div className="w-full mt-5 relative">
            <Image
              src="/images/concept_mobile_artwork.jpg"
              alt="Rzemieślnicze desery w kawiarni Kawałek — szarlotka na ciepło z lodami waniliowymi, złociste naleśniki z serem i świeżo parzona kawa"
              width={768}
              height={756}
              priority
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* DESKTOP VIEW (matches desktop_hero_v2 concept 1:1) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 className="font-serif text-5xl xl:text-6xl text-[#1C1917] font-semibold leading-[1.12] mb-5 tracking-tight">
              Kawa, domowe ciasto<br />i chwila dla Ciebie
            </h1>

            <p className="text-[#57534E] text-lg leading-relaxed mb-8 max-w-xl font-normal">
              Gorąca szarlotka z lodami, złociste naleśniki i chwila wytchnienia przy świeżo parzonej kawie w Zielonce.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#desery-na-cieplo"
                className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#734F2D] text-[#FAF7F2] px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-sm"
              >
                Zobacz nasze desery
              </a>
              <a
                href="tel:509708434"
                className="inline-flex items-center justify-center border border-[#8C6239]/50 hover:bg-[#EFE4D6] text-[#5C3D24] bg-[#FAF7F2] px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200"
              >
                Zadzwoń do nas
              </a>
            </div>
          </div>

          {/* Right Column: Seamless Watercolor Artwork */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <Image
              src="/images/concept_desktop_artwork.jpg"
              alt="Rzemieślnicze desery w kawiarni Kawałek — ciepła szarlotka z lodami, złociste naleśniki z serem i owocami oraz kawa"
              width={726}
              height={658}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
