const hours = [
  { day: "Poniedziałek", time: "nieczynne", closed: true },
  { day: "Wtorek", time: "12:00 – 19:00" },
  { day: "Środa", time: "12:00 – 19:00" },
  { day: "Czwartek", time: "12:00 – 19:00" },
  { day: "Piątek", time: "12:00 – 19:00" },
  { day: "Sobota", time: "10:00 – 18:00" },
  { day: "Niedziela", time: "10:00 – 18:00" },
];

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#FFFFFF] border-t border-[#ECE6DC] scroll-mt-20"
      aria-label="Kontakt i lokalizacja"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#8C6239] text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
            Odwiedź nas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-semibold leading-tight">
            Kontakt & Lokalizacja
          </h2>
          <p className="text-[#57534E] text-base mt-3">
            Czekamy na Ciebie w Zielonce przy ul. Mareckiej 17. Wpadnij na kawę lub zamów słodkości na wynos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#ECE6DC] flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EFE4D6] text-[#8C6239] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.867a8 8 0 10-16 0c0 4.17 1.555 6.864 3.5 8.867a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917]">Adres Kawiarni</h3>
                <p className="text-[#57534E] text-sm mt-0.5">ul. Marecka 17, 05-220 Zielonka</p>
                <a
                  href="https://maps.app.goo.gl/zkoZs64mFszs4NBY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8C6239] text-xs font-semibold hover:underline mt-2 inline-block"
                >
                  Otwórz trasę w Google Maps →
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#ECE6DC] flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EFE4D6] text-[#8C6239] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917]">Telefon & Zamówienia</h3>
                <a
                  href="tel:509708434"
                  className="text-[#8C6239] hover:text-[#1C1917] transition-colors text-lg font-semibold block mt-0.5"
                >
                  509 708 434
                </a>
                <p className="text-xs text-[#78716C] mt-1">
                  Rezerwacje ciast, tortów okolicznościowych i zamówień świątecznych
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#ECE6DC]">
              <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-3">
                Godziny otwarcia
              </h3>
              <table className="w-full text-sm" aria-label="Godziny otwarcia kawiarni">
                <tbody>
                  {hours.map(({ day, time, closed }) => (
                    <tr key={day} className="border-b border-[#ECE6DC]/60 last:border-0">
                      <td className="py-2 pr-4 text-[#1C1917] font-medium">{day}</td>
                      <td
                        className={`py-2 text-right ${
                          closed ? "text-[#9C8979] italic" : "text-[#57534E] font-medium"
                        }`}
                      >
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-[#ECE6DC] h-[460px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9756.972404051141!2d21.1464647!3d52.3115911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecf87ea846e3d%3A0x812738c5c192b8f8!2zS2F3YcWCZWs!5e0!3m2!1spl!2spl!4v1776961352979!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kawiarnia Kawałek na Google Maps — ul. Marecka 17, Zielonka"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
