import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 pb-12 border-b border-[#332D27]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kawiarnia Kawałek logo"
                width={48}
                height={48}
                className="rounded-full object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold text-[#FAF7F2]">
                  Kawałek
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                  Kawiarnia & Cukiernia
                </span>
              </div>
            </div>
            <p className="text-[#A89F95] text-sm leading-relaxed font-light">
              Rzemieślnicza kawiarnia i pracownia tortów w sercu Zielonki. Ciepłe desery, domowe wypieki i chwila wytchnienia.
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="font-serif text-lg font-semibold mb-3 text-[#FAF7F2]">
              Lokalizacja
            </p>
            <address className="not-italic text-sm text-[#A89F95] space-y-1.5 font-light">
              <p>ul. Marecka 17</p>
              <p>05-220 Zielonka</p>
              <p className="pt-2">
                <a
                  href="tel:509708434"
                  className="text-[#FAF7F2] font-medium hover:text-[#D4AF37] transition-colors"
                >
                  Tel: 509 708 434
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <p className="font-serif text-lg font-semibold mb-3 text-[#FAF7F2]">
              Social Media & Kontakt
            </p>
            <ul className="space-y-2.5 text-sm text-[#A89F95] font-light">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61586213099245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
                >
                  Facebook: Kawiarnia Kawałek →
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/torty.u.kaski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
                >
                  Instagram: @torty.u.kaski →
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/zkoZs64mFszs4NBY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
                >
                  Google Maps: Nawiguj do lokalu →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-[#78716C] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {year} Kawiarnia Kawałek & Torty u Kaśki · Zielonka, ul. Marecka 17.</p>
          <p className="text-[#A89F95]">Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
