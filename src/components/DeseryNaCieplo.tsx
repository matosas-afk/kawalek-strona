import Image from "next/image";

const items = [
  {
    name: "Szarlotka na kruchym cieście z cynamonem",
    description: "z lodami i sosem malinowym",
  },
  {
    name: "Fondant czekoladowy",
    description: "z lodami, sosem malinowym i owocami",
  },
  {
    name: "Naleśniki (2 szt.)",
    description: "z serem ze słodką śmietaną i owocami",
  },
  {
    name: "Pierogi (6 szt.)",
    description: "z serem na słodko, śmietaną i owocami",
  },
  {
    name: "Gofry (2 szt.) z dodatkami",
    description:
      "Nutella · Frużelina owocowa (wiśnia, jagoda, truskawka) · Cukier puder · Bita śmietana · Owoce",
  },
];

export default function DeseryNaCieplo() {
  return (
    <section
      id="desery-na-cieplo"
      className="bg-[#F5E6D3] py-20 px-4 sm:px-6 scroll-mt-16"
      aria-label="Desery na ciepło — menu"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Słodko i na ciepło
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D2817] mt-3 leading-tight">
            Desery na ciepło
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-16 bg-[#C9956B]/60" aria-hidden="true" />
            <span className="text-[#C9956B] text-xl" aria-hidden="true">🍮</span>
            <span className="h-px w-16 bg-[#C9956B]/60" aria-hidden="true" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Poster */}
          <div className="relative aspect-[2/3] max-w-md mx-auto md:mx-0 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/marketing/menu_desery_na_cieple.jpg"
              alt="Plakat menu — desery na ciepło w kawiarni Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>

          {/* List + price */}
          <div className="flex flex-col gap-6">
            <ol className="flex flex-col gap-5">
              {items.map((item, idx) => (
                <li key={item.name} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3D2817] text-[#F5E6D3] font-serif text-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {idx + 1}
                  </span>
                  <div className="flex-1 pt-0.5">
                    <p className="font-semibold text-[#3D2817] text-base sm:text-lg leading-snug">
                      {item.name}
                    </p>
                    <p className="text-[#6B3A1F] text-sm sm:text-base mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Price callout */}
            <div className="mt-4 self-start">
              <div className="bg-[#3D2817] rounded-2xl px-8 py-5 shadow-xl">
                <p className="text-[#C9956B] text-xs tracking-[0.25em] uppercase font-medium mb-1">
                  Każdy zestaw
                </p>
                <p className="font-serif text-5xl font-bold text-[#F5E6D3] leading-none">
                  30<span className="text-2xl text-[#C9956B] ml-1">zł</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
