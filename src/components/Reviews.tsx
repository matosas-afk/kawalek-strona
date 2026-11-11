const reviews = [
  {
    id: 1,
    author: "Kasia K.",
    rating: 5,
    text: "Polecam przyjazne miejsce na mapie Zielonki! Ogromny plus za opcje bez cukru w normalnych cenach. Ciasto z bananem (wegańskie) i rafaello (bez cukru) — te wersje bez cukru nie są ciężkie i przesłodzone. Kawa w przystępnej cenie. Póki co Kawałek to nr 1 u mnie!",
  },
  {
    id: 2,
    author: "Agnieszka Z.",
    rating: 5,
    text: "Przepyszne lody. Pistacja — faktycznie czuć, że robione na prawdziwej paście pistacjowej. Wiśnia — absolutnie najlepsze wiśniowe jakie jadłam. Lokal nieduży, ale przytulny, ładny wystrój, miła obsługa. Oferta jest tak różnorodna — naleśniki, gofry, fondanty, monoporcje, ciasta, oraz kilka propozycji bez cukru. Na pewno wrócę!",
  },
  {
    id: 3,
    author: "Patrycja B.",
    rating: 5,
    text: "To miejsce totalnie mnie kupiło! Widać od razu, że Pani Kasia robi to z serca — wszystko jest dopracowane, świeże i po prostu przepyszne. Na rodzinne okazje i bez okazji będę wracać właśnie tutaj. Specjalnie wybiorę się z Marek do Zielonki, żeby zjeść coś słodkiego u Pani Kasi.",
  },
  {
    id: 4,
    author: "Marcelina Ch.",
    rating: 5,
    text: "Bardzo miła obsługa, duży plus za opcje keto słodyczy, smaczna kawa. Byliśmy w trasie na rowerze. Keto rafaello było extra. Można z pieskiem.",
  },
  {
    id: 5,
    author: "Magdalena M.",
    rating: 5,
    text: "Wspaniała obsługa, wszystko smaczne. Kasia to osoba o wielkim talencie i sercu do tego, co robi. Bardzo fajnie, że to miejsce jest na mapie Zielonki! Polecam.",
  },
  {
    id: 6,
    author: "Bartosz S.",
    rating: 5,
    text: "Kurka wodna, wyśmienite te ciasteczka, którymi mnie poczęstowano na urodzinach. Podobno to od Was — więc macie nowego klienta już od przyszłego tygodnia!",
  },
];

const STAR_POSITIONS = ["first", "second", "third", "fourth", "fifth"] as const;

function Stars({ count }: Readonly<{ count: number }>) {
  return (
    <div className="flex gap-1" aria-label={`Ocena: ${count} na 5 gwiazdek`}>
      {STAR_POSITIONS.slice(0, count).map((position) => (
        <svg
          key={position}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#D4AF37"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="opinie"
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#ECE6DC] scroll-mt-20"
      aria-label="Opinie gości o Kawiarni Kawałek"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#8C6239] text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
            Głos naszych gości
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-semibold leading-tight">
            Opinie z Zielonki i okolic
          </h2>
          <p className="text-[#57534E] text-base mt-3">
            Oto co mówią o nas goście, którzy odwiedzili lokal przy ul. Mareckiej 17.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-[#FFFFFF] border border-[#ECE6DC] rounded-2xl p-6 shadow-2xs flex flex-col justify-between hover:border-[#8C6239] transition-colors duration-200"
            >
              <div>
                <div className="mb-3">
                  <Stars count={review.rating} />
                </div>
                <blockquote className="text-[#57534E] text-sm leading-relaxed font-light">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>
              <footer className="mt-5 pt-3 border-t border-[#F3ECE2] text-xs font-semibold text-[#1C1917]">
                {review.author}
              </footer>
            </article>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/zkoZs64mFszs4NBY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAF7F2] text-[#1C1917] px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200"
          >
            Zobacz wszystkie opinie w Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
