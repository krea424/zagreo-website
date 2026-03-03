import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | ZAGREO Consulenza Strategica",
    description: "Informativa sulla privacy di ZAGREO Consulenza Strategica",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-cream-50">
            {/* Header */}
            <header className="border-b border-warm-200 bg-cream-50/90 backdrop-blur-xl">
                <div className="mx-auto max-w-4xl px-6 py-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-warm-500 transition-colors hover:text-teal-700"
                    >
                        <ArrowLeft size={18} />
                        Torna alla Home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="mb-8 font-display text-4xl text-warm-900">
                    Privacy Policy
                </h1>

                <div className="max-w-none">
                    <p className="text-lg text-warm-500">
                        Ultimo aggiornamento: Gennaio 2026
                    </p>

                    <section className="mt-12">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            1. Titolare del Trattamento
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Il Titolare del trattamento dei dati personali è ZAGREO Consulenza
                            Strategica, con sede legale in Italia. Per qualsiasi informazione
                            relativa al trattamento dei dati personali, è possibile contattare
                            il Titolare all&apos;indirizzo email:{" "}
                            <a
                                href="mailto:domenico@zagreo.io"
                                className="text-teal-700 hover:text-teal-800"
                            >
                                domenico@zagreo.io
                            </a>
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            2. Tipologia di Dati Raccolti
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Questo sito web non raccoglie dati personali in modo diretto. Non
                            sono presenti form di contatto, sistemi di registrazione o cookie
                            di profilazione. I dati di navigazione (come l&apos;indirizzo IP)
                            potrebbero essere raccolti automaticamente dai sistemi di hosting
                            per finalità tecniche e di sicurezza.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            3. Finalità del Trattamento
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Gli eventuali dati raccolti sono utilizzati esclusivamente per:
                        </p>
                        <ul className="mt-4 space-y-2 text-warm-500">
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                Garantire il corretto funzionamento del sito web
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                Finalità di sicurezza e prevenzione di abusi
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                Analisi statistiche aggregate e anonime
                            </li>
                        </ul>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            4. Cookie
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Questo sito utilizza esclusivamente cookie tecnici necessari per
                            il funzionamento del sito stesso. Non vengono utilizzati cookie di
                            profilazione o di terze parti per finalità pubblicitarie.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            5. Condivisione dei Dati
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            I dati non vengono condivisi con terze parti, ad eccezione dei
                            fornitori di servizi di hosting (Vercel) che potrebbero avere
                            accesso ai dati di navigazione per finalità tecniche. Tali
                            fornitori operano in conformità con le normative vigenti sulla
                            protezione dei dati.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            6. Diritti dell&apos;Interessato
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Ai sensi del Regolamento UE 2016/679 (GDPR), l&apos;interessato ha
                            diritto di:
                        </p>
                        <ul className="mt-4 space-y-2 text-warm-500">
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                Accedere ai propri dati personali
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                Richiedere la rettifica o la cancellazione dei dati
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                Opporsi al trattamento
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                Richiedere la portabilità dei dati
                            </li>
                        </ul>
                        <p className="mt-4 text-warm-500 leading-relaxed">
                            Per esercitare tali diritti, è possibile contattare il Titolare
                            all&apos;indirizzo email indicato sopra.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            7. Modifiche alla Privacy Policy
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Il Titolare si riserva il diritto di modificare questa Privacy
                            Policy in qualsiasi momento. Le modifiche saranno pubblicate su
                            questa pagina con indicazione della data di ultimo aggiornamento.
                        </p>
                    </section>
                </div>

                <div className="mt-16 border-t border-warm-200 pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-800"
                    >
                        <ArrowLeft size={18} />
                        Torna alla Home
                    </Link>
                </div>
            </main>
        </div>
    );
}
