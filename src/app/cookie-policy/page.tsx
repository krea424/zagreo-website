import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Cookie Policy | ZAGREO Strategic Consulting",
    description: "Informativa sui cookie di ZAGREO Strategic Consulting",
};

export default function CookiePolicy() {
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
                    Cookie Policy
                </h1>

                <div className="prose prose-invert prose-slate max-w-none">
                    <p className="text-lg text-slate-300">
                        Ultimo aggiornamento: Gennaio 2026
                    </p>

                    <section className="mt-12">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            1. Cosa sono i Cookie
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            I cookie sono piccoli file di testo che vengono memorizzati sul
                            tuo dispositivo quando visiti un sito web. Vengono utilizzati per
                            garantire il corretto funzionamento del sito, migliorare
                            l&apos;esperienza utente e, in alcuni casi, per raccogliere
                            informazioni statistiche.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            2. Cookie Utilizzati
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Questo sito utilizza esclusivamente cookie tecnici necessari per
                            il funzionamento del sito:
                        </p>

                        <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-900">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-slate-200">
                                            Tipo
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-slate-200">
                                            Finalità
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-slate-200">
                                            Durata
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    <tr>
                                        <td className="px-4 py-3 text-slate-300">Cookie Tecnici</td>
                                        <td className="px-4 py-3 text-slate-400">
                                            Necessari per il funzionamento del sito
                                        </td>
                                        <td className="px-4 py-3 text-slate-400">Sessione</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-slate-300">Cookie di Navigazione</td>
                                        <td className="px-4 py-3 text-slate-400">
                                            Gestione della navigazione e sicurezza
                                        </td>
                                        <td className="px-4 py-3 text-slate-400">Sessione</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            3. Cookie di Terze Parti
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Questo sito è ospitato su Vercel, che potrebbe utilizzare cookie
                            tecnici per garantire la sicurezza e le prestazioni del servizio.
                            Non utilizziamo cookie di profilazione o di terze parti per
                            finalità pubblicitarie.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            4. Come Gestire i Cookie
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Puoi gestire le preferenze sui cookie direttamente dal tuo
                            browser. Di seguito i link alle istruzioni per i browser più
                            comuni:
                        </p>
                        <ul className="mt-4 space-y-2 text-slate-400">
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                <a
                                    href="https://support.google.com/chrome/answer/95647"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-500 hover:text-amber-400"
                                >
                                    Google Chrome
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                <a
                                    href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-500 hover:text-amber-400"
                                >
                                    Mozilla Firefox
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                <a
                                    href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-500 hover:text-amber-400"
                                >
                                    Safari
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                                <a
                                    href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-500 hover:text-amber-400"
                                >
                                    Microsoft Edge
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            5. Aggiornamenti
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Questa Cookie Policy può essere aggiornata periodicamente. Ti
                            invitiamo a consultare questa pagina regolarmente per rimanere
                            informato su eventuali modifiche.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-white">
                            6. Contatti
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Per qualsiasi domanda relativa a questa Cookie Policy, puoi
                            contattarci all&apos;indirizzo:{" "}
                            <a
                                href="mailto:domenico.quaglio.consulting@gmail.com"
                                className="text-amber-500 hover:text-amber-400"
                            >
                                domenico.quaglio.consulting@gmail.com
                            </a>
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
