export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["CafeOrCoffeeShop", "LocalBusiness"],
    name: "Kawiarnia Kawałek",
    image: "https://kawiarniakáwalek.pl/images/K3.jpg",
    url: "https://kawiarniakáwalek.pl",
    telephone: "+48509708434",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Marecka 17",
      addressLocality: "Zielonka",
      postalCode: "05-220",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3115911,
      longitude: 21.1464647,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "12:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    servesCuisine: ["Desserts", "Coffee", "Ice Cream", "Cakes"],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61586213099245",
      "https://maps.app.goo.gl/zkoZs64mFszs4NBY6",
    ],
    hasMap: "https://maps.app.goo.gl/zkoZs64mFszs4NBY6",
    description:
      "Kawiarnia Kawałek w Zielonce — rzemieślnicze lody, domowe ciasta, kawa, desery na ciepło i torty na zamówienie (urodzinowe, weselne, okolicznościowe). W środy kawa + ciasto 20 zł dla seniorów, w czwartki świeże pączki i wypieki drożdżowe.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Oferta Kawiarni Kawałek",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Torty na zamówienie",
            description:
              "Torty urodzinowe, weselne i okolicznościowe (chrzty, komunie, baby shower) — każdy tworzony indywidualnie.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MenuItem",
            name: "Desery na ciepło",
            description:
              "Szarlotka, fondant czekoladowy, naleśniki, pierogi na słodko, gofry — każdy zestaw 30 zł.",
          },
          price: "30",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MenuItem",
            name: "Środy dla Seniorów — kawa + ciasto",
          },
          price: "20",
          priceCurrency: "PLN",
          eligibleCustomerType: "Senior",
          availableDay: "Wednesday",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MenuItem",
            name: "Czwartki z Pączkami — pączki i wypieki drożdżowe",
          },
          availableDay: "Thursday",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
