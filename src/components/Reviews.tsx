const reviews = [
  {
    id: 1,
    author: "Kasia K.",
    rating: 5,
    text: "Polecam przyjazne miejsce na mapie Zielonki! Ogromny plus za opcje bez cukru w normalnych cenach. Ciasto z bananem (wegańskie) i rafaello (bez cukru) — te wersje bez cukru dostają ode mnie dodatkowego plusa za to, że nie są ciężkie i przesłodzone. Kawa w przystępnej cenie. Póki co Kawałek to nr 1 u mnie!",
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
    text: "To miejsce totalnie mnie kupiło! Widać od razu, że Pani Kasia robi to z serca — wszystko jest dopracowane, świeże i po prostu przepyszne. Na rodzinne okazje i bez okazji będę wracać właśnie tutaj. Specjalnie wybiorę się z Marek do Zielonki, żeby zjeść coś słodkiego u Pani Kasi. Z całego serca polecam!",
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

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`Ocena: ${count} na 5 gwiazdek`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#C9956B"
          className="w-5 h-5"
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
      className="bg-[#3D2817] py-20 px-4 sm:px-6 scroll-mt-16"
      aria-label="Opinie klientów"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Co mówią goście
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#F5E6D3] mt-3 leading-tight">
            Opinie
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-[#FDF8F4] rounded-2xl p-6 shadow-lg flex flex-col gap-4"
            >
              <Stars count={review.rating} />
              <blockquote className="text-[#3D2817] leading-relaxed text-sm flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="text-[#C9956B] text-sm font-semibold">
                — {review.author}
              </footer>
            </article>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/zkoZs64mFszs4NBY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#C9956B] text-[#C9956B] hover:bg-[#C9956B] hover:text-[#FDF8F4] px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
          >
            Wszystkie opinie w Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
