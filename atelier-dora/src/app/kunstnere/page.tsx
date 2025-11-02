export default function Kunstnere() {
  const artists = [
    { name: "Kunstner 1", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
    { name: "Kunstner 2", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
    { name: "Kunstner 3", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
    { name: "Kunstner 4", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
    { name: "Kunstner 5", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
    { name: "Kunstner 6", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
    { name: "Kunstner 7", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
    { name: "Kunstner 8", bio: "Spesialisering innen ----", style: "Spesialisering innen ----", image: "" },
  ];

  return (
    <main className="min-h-screen bg-canvas">
      <section className="mx-auto max-w-5xl px-6 py-12 space-y-8">
        <h1 className="text-4xl font-bold text-charcoal">Kunstnere</h1>
        <p className="text-charcoal text-sm">
        Her vil du finne en oversikt over våre tilknyttede kunstnere og deres spesialområder.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {artists.map((artist) => (
          <article
            key={artist.name}
            className="bg-slate rounded-md overflow-hidden shadow-sm border border-slate flex flex-col"
            aria-label={artist.name}
          >
            <div className="w-full h-28 bg-clay flex items-center justify-center text-charcoal">
              {artist.image ? (
                // bytt til <img src={artist.image} ... /> når tilgjengelig
                // bildet får object-cover for å holde høyden kompakt
                // eslint-disable-next-line @next/next/no-img-element
                <img src={artist.image} alt={artist.name} className="w-full h-28 object-cover" />
              ) : (
                <div className="text-xs text-dust-blue">Bilde kommer</div>
              )}
            </div>

            <div className="p-3 flex-1">
              <h2 className="text-sm font-semibold leading-tight text-charcoal">{artist.name}</h2>
              <p className="text-xs text-dust-blue mt-1">{artist.style}</p>
              <p className="text-xs text-charcoal mt-2 line-clamp-3">{artist.bio}</p>
            </div>
          </article>
        ))}
          </div>
        </section>
      </main>
  );
}
