import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-20 pb-4 sm:pt-24 md:pt-28 md:pb-12 bg-[#F7F2E6] overflow-hidden"
      aria-label="Sekcja główna"
    >
      {/* Vintage Inset Frame */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="relative border border-[#D5CBB9] rounded-2xl md:rounded-3xl overflow-hidden bg-[#F7F2E6]/50">
          {/* Botanical Corner Leaves (Top-Left) */}
          <div
            className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 pointer-events-none select-none z-10"
            aria-hidden="true"
          >
            <Image
              src="/images/leaves_top_left.png"
              alt=""
              fill
              className="object-contain object-top-left"
              priority
            />
          </div>

          {/* Botanical Corner Leaves (Bottom-Left) */}
          <div
            className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-40 pointer-events-none select-none z-10"
            aria-hidden="true"
          >
            <Image
              src="/images/leaves_bottom_left.png"
              alt=""
              fill
              className="object-contain object-bottom-left"
            />
          </div>

          {/* MOBILE VIEW (matches concept aesthetic with full artwork) */}
          <div className="block lg:hidden text-center px-4 pt-10 pb-4 relative z-20">
            <h1 className="font-serif text-[#9E7247] text-3xl sm:text-4xl font-semibold leading-[1.18] tracking-tight">
              Kawa, domowe ciasto<br />i chwila dla Ciebie
            </h1>

            <p className="text-[#2E2824] text-sm sm:text-base leading-relaxed mt-3 mb-6 max-w-sm sm:max-w-md mx-auto">
              Gorąca szarlotka z lodami, złociste naleśniki i chwila relaksu w Zielonce.
            </p>

            <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto mb-4">
              <a
                href="#desery-na-cieplo"
                className="inline-flex items-center justify-center bg-[#9E7247] hover:bg-[#855F3A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 shadow-sm text-center"
              >
                Zobacz nasze desery
              </a>
              <a
                href="tel:509708434"
                className="inline-flex items-center justify-center border-2 border-[#9E7247] hover:bg-[#EADBCA]/60 text-[#2E2824] bg-[#F7F2E6] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 text-center"
              >
                Zadzwoń do nas
              </a>
            </div>

            {/* Seamless Panoramic Culinary Illustration */}
            <div className="w-full relative mt-2">
              <Image
                src="/images/hero_culinary_art_clean.png"
                alt="Rzemieślnicze desery w kawiarni Kawałek — ciepła szarlotka z lodami waniliowymi, czekoladowy fondant, naleśniki z serem i świeżo parzona kawa"
                width={856}
                height={768}
                priority
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* DESKTOP VIEW (recreates desktop concept 1:1) */}
          <div className="hidden lg:grid lg:grid-cols-12 min-h-[580px] xl:min-h-[640px] items-center relative z-20">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left pl-12 xl:pl-16 pr-4 py-12">
              <h1 className="font-serif text-[#9E7247] text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-[1.12] mb-5 tracking-tight">
                Kawa, domowe ciasto<br />i chwila dla Ciebie
              </h1>

              <p className="text-[#2E2824] text-base xl:text-lg leading-relaxed mb-8 max-w-lg font-normal">
                Gorąca szarlotka z lodami, złociste naleśniki i chwila wytchnienia przy świeżo parzonej kawie w Zielonce.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#desery-na-cieplo"
                  className="inline-flex items-center justify-center bg-[#9E7247] hover:bg-[#855F3A] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-sm"
                >
                  Zobacz nasze desery
                </a>
                <a
                  href="tel:509708434"
                  className="inline-flex items-center justify-center border-2 border-[#9E7247] hover:bg-[#EADBCA]/60 text-[#2E2824] px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200"
                >
                  Zadzwoń do nas
                </a>
              </div>
            </div>

            {/* Right Column: Full Panoramic Culinary Illustration */}
            <div className="lg:col-span-7 xl:col-span-7 relative h-full flex items-center justify-end">
              <div className="relative w-full h-[520px] xl:h-[600px]">
                <Image
                  src="/images/hero_culinary_art_clean.png"
                  alt="Rzemieślnicze desery w kawiarni Kawałek — ciepła szarlotka z lodami, czekoladowy fondant, naleśniki z serem i owocami oraz kawa"
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
