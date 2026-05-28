const hours = [
  { day: "Poniedziałek", time: "zamknięte", closed: true },
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
      className="bg-[#F5E6D3] py-20 px-4 sm:px-6 scroll-mt-16"
      aria-label="Kontakt i lokalizacja"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Jak nas znaleźć
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D2817] mt-3 leading-tight">
            Kontakt
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#3D2817] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#C9956B"
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
                <p className="font-serif text-lg font-bold text-[#3D2817]">Adres</p>
                <p className="text-[#6B3A1F]">ul. Marecka 17</p>
                <p className="text-[#6B3A1F]">05-220 Zielonka</p>
                <a
                  href="https://maps.app.goo.gl/zkoZs64mFszs4NBY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9956B] text-sm font-medium hover:underline mt-1 inline-block"
                >
                  Otwórz w Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#3D2817] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#C9956B"
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
                <p className="font-serif text-lg font-bold text-[#3D2817]">Telefon</p>
                <a
                  href="tel:509708434"
                  className="text-[#6B3A1F] hover:text-[#C9956B] transition-colors text-lg font-medium"
                >
                  509 708 434
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#3D2817] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#C9956B"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-serif text-lg font-bold text-[#3D2817] mb-3">
                  Godziny otwarcia
                </p>
                <table className="w-full text-sm" aria-label="Godziny otwarcia kawiarni">
                  <tbody>
                    {hours.map(({ day, time, closed }) => (
                      <tr key={day} className="border-b border-[#C9956B]/20 last:border-0">
                        <td className="py-1.5 pr-4 text-[#3D2817] font-medium">{day}</td>
                        <td
                          className={`py-1.5 ${
                            closed ? "text-[#A8784F] italic" : "text-[#6B3A1F]"
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
          </div>

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
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
