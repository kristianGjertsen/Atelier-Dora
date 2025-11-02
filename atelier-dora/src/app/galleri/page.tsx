import Link from "next/link";
import Image from "next/image";

const ADDRESS = "Skippergata 11, 7042 Trondheim";

export default function Galleri() {
  const mapsQuery = encodeURIComponent(`${ADDRESS}, Norway`);
  const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Om galleriet</h1>
        <p className="text-gray-600 max-w-prose">
          Vi er et kunstnerdrevet galleri med fokus på samtidskunst og samarbeid.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
            src="/images/atelierBilde.png"
            alt="Galleri Skippergata 11"
            width={1000}
            height={0}
            className="object-contain"
        />
  
</div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Besøk oss</h2>
          <p className="text-gray-700">{ADDRESS}</p>
          <ul className="space-y-1 text-sm">
            <li>
              📞 <a href="tel:+4798765432" className="text-dust-blue hover:text-highlight">+47 98 76 54 32</a>
            </li>
            <li>
              ✉️ <a href="mailto:kontakt@galleri.no" className="text-dust-blue hover:text-highlight">kontakt@galleri.no</a>
            </li>
            <li>
              📍{" "}
              <Link
                href={`https://www.google.com/maps?q=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dust-blue hover:text-highlight"
              >
                Åpne i Google Maps
              </Link>
            </li>
          </ul>
        </div>

        {/* Responsiv kart-embed */}
        <div className="rounded-xl overflow-hidden border bg-white shadow-sm">
          <div className="aspect-video">
            <iframe
              title="Galleri – kart"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Åpningstider</h2>
        <p className="text-gray-700">Tors–Søn 12:00–18:00 (og etter avtale)</p>
      </section>
    </section>
  );
}
