export default function Footer() {
    const year = new Date().getFullYear();

    return (
    <footer className="border-t border-slate bg-canvas mt-12">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:flex sm:items-start sm:justify-between">
                {/* Venstre kolonne */}
                <div className="mb-6 sm:mb-0">
                    <h2 className="text-xl font-semibold text-charcoal">Galleri</h2>
                    <p className="mt-2 max-w-sm text-sm text-charcoal">
                        Et moderne digitalt kunstgalleri drevet av fem kunstnere.
                        Vi viser nye verk, utstillinger og samarbeid hele året.
                    </p>
                </div>

                {/* Høyre kolonner */}
                <div className="grid grid-cols-2 gap-8 text-sm text-charcoal sm:grid-cols-3">
                    <div>
                        <h3 className="font-semibold text-charcoal">Navigasjon</h3>
                        <ul className="mt-2 space-y-1">
                            <li><a href="/" className="hover:text-dust-blue">Hjem</a></li>
                            <li><a href="/gallery" className="hover:text-dust-blue">Galleri</a></li>
                            <li><a href="/artists" className="hover:text-dust-blue">Kunstnere</a></li>
                            <li><a href="/exhibitions" className="hover:text-dust-blue">Utstillinger</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-charcoal">Kontakt</h3>
                        <ul className="mt-2 space-y-1">
                            <a href="https://www.google.com/maps?q=Skippergata+11,+Trondheim,+Norway,+7042"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-dust-blue">
                                Skippergata 11, 7042 Trondheim, Norge
                            </a>
                            <li><a href="mailto:kontakt@galleri.no" className="hover:text-dust-blue">
                                Hikarlse@icloud.com</a></li>
                            <a href="tel:+4798765432" className="hover:text-dust-blue">
                                901 52 578
                            </a>
                            <li><a href="/about" className="hover:text-dust-blue">Om oss</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-charcoal">Følg oss</h3>
                        <ul className="mt-2 space-y-1">
                            <li><a href="https://www.facebook.com/p/Atelier-Dora-100038758214520" target="_blank" className="hover:text-dust-blue">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bunntekst */}
            <div className="border-t border-slate bg-slate py-4">
                <p className="text-center text-xs text-dust-blue">
                    © {year} Galleri – Alle rettigheter forbeholdt.
                </p>
            </div>
        </footer>
    );
}
