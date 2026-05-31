import Image from "next/image";

export default function About() {
  return (
    <section
      id="o-nas"
      className="bg-[#FDF8F4] py-20 px-4 sm:px-6 scroll-mt-16"
      aria-label="O kawiarni"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Nasza historia
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D2817] mt-3 mb-6 leading-tight">
            Miejsce, do którego chce się wracać
          </h2>
          <div className="space-y-4 text-[#6B3A1F] text-lg leading-relaxed">
            <p>
              Kawałek to przytulna kawiarnia w sercu Zielonki, gdzie dobra kawa
              spotyka się z domowymi deserami i rzemieślniczymi lodami.
            </p>
            <p>
              Tworzymy miejsce, w którym można zwolnić na chwilę, spotkać się z
              bliskimi albo po prostu sprawić sobie małą przyjemność. Znajdziesz
              u nas również opcje bez cukru i propozycje dla wegan.
            </p>
            <p className="italic text-[#C9956B] font-medium">
              Usiądź wygodnie i poczuj się jak u siebie. 🤍
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: "Lody rzemieślnicze", icon: "🍦" },
              { label: "Opcje bez cukru", icon: "🌿" },
              { label: "Opcje dla wegan", icon: "🫶" },
              { label: "Przyjazne dla pupili", icon: "🐾" },
            ].map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-[#F5E6D3] rounded-xl px-4 py-3"
              >
                <span className="text-2xl" aria-hidden="true">
                  {icon}
                </span>
                <span className="text-[#3D2817] font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/drinks/lemoniada_mason_jar.jpg"
              alt="Lemoniada w słoiku z cytryną, limonką, pomarańczą i miętą — kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 22vw"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md mt-6">
            <Image
              src="/images/desery_serduszka_w_pudelku.jpg"
              alt="Desery w pudełku prezentowym — monoporcje w kształcie serduszek z truskawkami — kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 22vw"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md -mt-6">
            <Image
              src="/images/K3.jpg"
              alt="Gofry z bitą śmietaną i owocami — kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 22vw"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/K6.jpg"
              alt="Czekoladowy fondant z lodami i świeżymi owocami — kawiarnia Kawałek"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 22vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
