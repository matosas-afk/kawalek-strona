import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2A1A0E] text-[#F5E6D3] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-[#6B3A1F]/40">
          {/* Brand */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kawiarnia Kawałek logo"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <span className="font-serif text-xl font-bold text-[#F5E6D3]">Kawałek</span>
            </div>
            <p className="text-[#C9956B] text-sm leading-relaxed">
              Kawiarnia rzemieślnicza<br />w sercu Zielonki
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="font-serif text-base font-bold mb-3 text-[#C9956B]">Adres</p>
            <address className="not-italic text-sm text-[#F5E6D3]/80 space-y-1">
              <p>ul. Marecka 17</p>
              <p>05-220 Zielonka</p>
              <p className="mt-2">
                <a
                  href="tel:509708434"
                  className="hover:text-[#C9956B] transition-colors"
                >
                  509 708 434
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <p className="font-serif text-base font-bold mb-3 text-[#C9956B]">Znajdź nas</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61586213099245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#F5E6D3]/80 hover:text-[#C9956B] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/zkoZs64mFszs4NBY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#F5E6D3]/80 hover:text-[#C9956B] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.867a8 8 0 10-16 0c0 4.17 1.555 6.864 3.5 8.867a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-[#F5E6D3]/40">
          © {year} Kawiarnia Kawałek, Zielonka. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
