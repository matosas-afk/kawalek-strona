import Image from "next/image";

const items = [
  {
    name: "Szarlotka na kruchym cieście z cynamonem",
    description: "Ciepła domowa szarlotka podawana z gałką rzemieślniczych lodów waniliowych i sosem malinowym.",
    badge: "Kultowa pozycja",
  },
  {
    name: "Czekoladowy Fondant (Lava Cake)",
    description: "Ciepłe ciastko z płynną czekoladą w środku, lodami, sosem malinowym i świeżymi owocami.",
    badge: "Dla czekoladoholików",
  },
  {
    name: "Naleśniki z delikatnym serem (2 szt.)",
    description: "Złociste, cienkie naleśniki z kremowym twarogiem na słodko, aksamitną śmietaną i owocami.",
    badge: "Ulubieniec dzieci",
  },
  {
    name: "Pierogi z serem na słodko (6 szt.)",
    description: "Domowe ciasto, delikatny słodki twaróg, gęsta śmietana i sezonowe owoce.",
    badge: "Tradycyjny smak",
  },
  {
    name: "Chrupiące Gofry (2 szt.) z dodatkami",
    description: "Wypiekane na bieżąco. Dodatki do wyboru: Nutella, bita śmietana, owoce lub domowa frużelina.",
    badge: "Na chrupko",
  },
];

export default function DeseryNaCieplo() {
  return (
    <section
      id="desery-na-cieplo"
      className="py-16 md:py-24 px-4 sm:px-6 bg-[#FFFFFF] border-t border-[#ECE6DC] scroll-mt-20"
      aria-label="Desery na ciepło — menu kawiarni Kawałek"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column: Menu list */}
          <div className="lg:col-span-7">
            <span className="text-[#8C6239] text-xs tracking-[0.25em] uppercase font-semibold block mb-2">
              Słodko i na ciepło
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-semibold leading-tight mb-4">
              Karta Deserów na Ciepło
            </h2>
            <p className="text-[#57534E] text-base leading-relaxed mb-8">
              Wypiekane i serwowane na gorąco, idealne na chłodniejsze dni. Każdy zestaw podajemy z dopasowanymi dodatkami w jednolitej, stałej cenie.
            </p>

            <div className="space-y-4">
              {items.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl border border-[#F0EAE1] bg-[#FAF7F2] hover:border-[#D9C4AC] transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <span className="font-serif text-base font-bold text-[#8C6239] w-6 shrink-0 pt-0.5">
                        0{idx + 1}.
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-[#1C1917] leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-[#6B655F] text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5C3D24] bg-[#EFE4D6] px-2.5 py-1 rounded-full shrink-0 hidden sm:inline-block">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Highlights & Price Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#ECE6DC] aspect-[4/3] bg-[#FAF7F2]">
              <Image
                src="/images/marketing/menu_desery_na_cieple.jpg"
                alt="Plakat menu desery na ciepło w kawiarni Kawałek"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Price Callout */}
            <div className="bg-[#FAF7F2] border border-[#ECE6DC] rounded-3xl p-6 sm:p-8 flex items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#8C6239] block mb-1">
                  Cena zestawu
                </span>
                <h4 className="font-serif text-2xl text-[#1C1917] font-semibold">
                  Dowolny ciepły deser
                </h4>
                <p className="text-xs text-[#78716C] mt-1">
                  Zawsze ze świeżymi dodatkami i sosem
                </p>
              </div>
              <div className="text-right">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#8C6239]">
                  30
                </span>
                <span className="text-xl font-medium text-[#1C1917] ml-1">zł</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
