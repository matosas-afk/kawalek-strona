import Image from "next/image";

const images = [
  { src: "/images/K9.jpg", alt: "Beza Pavlova z kawą latte" },
  { src: "/images/K4.jpg", alt: "Szarlotka z lodami" },
  { src: "/images/K3.jpg", alt: "Gofry z bitą śmietaną i owocami" },
  { src: "/images/K5.jpg", alt: "Naleśniki z owocami i bitą śmietaną" },
  { src: "/images/K2.jpg", alt: "Pierogi na słodko z owocami" },
  { src: "/images/K6.jpg", alt: "Lava cake z lodami i owocami" },
  { src: "/images/K8.jpg", alt: "Lody rzemieślnicze — plansza smaków" },
  { src: "/images/K1.jpg", alt: "Plakat środowych zniżek dla seniorów" },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-[#FDF8F4] py-20 px-4 sm:px-6 scroll-mt-16"
      aria-label="Galeria zdjęć"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#C9956B] text-sm tracking-[0.3em] uppercase font-medium">
            Oczami aparatu
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D2817] mt-3 leading-tight">
            Galeria
          </h2>
        </div>

        {/* Grid 4×2 */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          aria-label="Galeria zdjęć potraw i deserów"
        >
          {images.map(({ src, alt }) => (
            <div
              key={src}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 45vw, (max-width: 1280px) 25vw, 300px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#3D2817]/0 group-hover:bg-[#3D2817]/50 transition-all duration-300 flex items-end p-3">
                <p className="text-[#F5E6D3] text-xs font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
