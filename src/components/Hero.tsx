import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sekcja główna"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_witryna_deserow.jpg"
          alt="Witryna pełna domowych deserów — beza Pavlova, sernik z truskawkami i makaroniki — kawiarnia Kawałek Zielonka"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2817]/70 via-[#3D2817]/50 to-[#3D2817]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-16 bg-[#C9956B]" aria-hidden="true" />
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Kawiarnia
          </span>
          <span className="h-px w-16 bg-[#C9956B]" aria-hidden="true" />
        </div>

        <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-bold text-[#F5E6D3] leading-tight mb-4">
          Kawałek
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-[#C9956B] italic mb-6">
          Kawa, ciasto i chwila dla Ciebie
        </p>

        <p className="text-[#F5E6D3]/90 text-base sm:text-lg mb-10 font-light">
          ul. Marecka 17, Zielonka · Wt–Pt 12:00–19:00 · Sob–Nd 10:00–18:00
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:509708434"
            className="inline-flex items-center gap-2 bg-[#C9956B] hover:bg-[#A8784F] text-[#FDF8F4] px-8 py-4 rounded-full text-base font-semibold transition-colors duration-200 shadow-lg w-full sm:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            Zadzwoń
          </a>
          <a
            href="https://maps.app.goo.gl/zkoZs64mFszs4NBY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#F5E6D3] hover:bg-[#F5E6D3]/10 text-[#F5E6D3] px-8 py-4 rounded-full text-base font-semibold transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.867a8 8 0 10-16 0c0 4.17 1.555 6.864 3.5 8.867a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            Znajdź nas
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9956B"
          strokeWidth={2}
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
