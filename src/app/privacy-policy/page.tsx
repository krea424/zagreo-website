import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | ZAGREO Strategic Consulting",
    description: "Informativa sulla privacy di ZAGREO Strategic Consulting",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Header */}
            <header className="border-b border-white/5 bg-slate-950/90 backdrop-blur-xl">
                <div className="mx-auto max-w-4xl px-6 py-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-amber-500"
                    >
                        <ArrowLeft size={18} />
                        Torna alla Home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="mb-8 font-display text-4xl font-bold text-white">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-slate max-w-none">
                    <p className="text-lg text-slate-300">
                        Ultimo aggiornamento: Gennaio 2026
                    </p>

                    <section className="mt-12">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            1. Titolare del Trattamento
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Il Titolare del trattamento dei dati personali è ZAGREO Strategic
                            Consulting, con sede legale in Italia. Per qualsiasi informazione
                            relativa al trattamento dei dati personali, è possibile contattare
                            il Titolare all&apos;indirizzo email:{" "}
                            <a
                                href="mailto:domenico.quaglio.consulting@gmail.com"
                                className="text-amber-500 hover:text-amber-400"
                            >
                                domenico.quaglio.consulting@gmail.com
                            </a>
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            2. Tipologia di Dati Raccolti
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Questo sito web non raccoglie dati personali in modo diretto. Non
                            sono presenti form di contatto, sistemi di registrazione o cookie
                            di profilazione. I dati di navigazione (come l&apos;indirizzo IP)
                            potrebbero essere raccolti automaticamente dai sistemi di hosting
                            per finalità tecniche e di sicurezza.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            3. Finalità del Trattamento
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Gli eventuali dati raccolti sono utilizzati esclusivamente per:
                        </p>
                        <ul className="mt-4 space-y-2 text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                Garantire il corretto funzionamento del sito web
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                Finalità di sicurezza e prevenzione di abusi
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                Analisi statistiche aggregate e anonime
                            </li>
                        </ul>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            4. Cookie
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Questo sito utilizza esclusivamente cookie tecnici necessari per
                            il funzionamento del sito stesso. Non vengono utilizzati cookie di
                            profilazione o di terze parti per finalità pubblicitarie.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            5. Condivisione dei Dati
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            I dati non vengono condivisi con terze parti, ad eccezione dei
                            fornitori di servizi di hosting (Vercel) che potrebbero avere
                            accesso ai dati di navigazione per finalità tecniche. Tali
                            fornitori operano in conformità con le normative vigenti sulla
                            protezione dei dati.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            6. Diritti dell&apos;Interessato
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Ai sensi del Regolamento UE 2016/679 (GDPR), l&apos;interessato ha
                            diritto di:
                        </p>
                        <ul className="mt-4 space-y-2 text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                Accedere ai propri dati personali
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                Richiedere la rettifica o la cancellazione dei dati
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                Opporsi al trattamento
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                Richiedere la portabilità dei dati
                            </li>
                        </ul>
                        <p className="mt-4 text-slate-400 leading-relaxed">
                            Per esercitare tali diritti, è possibile contattare il Titolare
                            all&apos;indirizzo email indicato sopra.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            7. Modifiche alla Privacy Policy
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Il Titolare si riserva il diritto di modificare questa Privacy
                            Policy in qualsiasi momento. Le modifiche saranno pubblicate su
                            questa pagina con indicazione della data di ultimo aggiornamento.
                        </p>
                    </section>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-amber-500 transition-colors hover:text-amber-400"
                    >
                        <ArrowLeft size={18} />
                        Torna alla Home
                    </Link>
                </div>
            </main>
        </div>
    );
}
