import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Cookie Policy | ZAGREO Consulenza Strategica",
    description: "Informativa sui cookie di ZAGREO Consulenza Strategica",
};

export default function CookiePolicy() {
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
                    Cookie Policy
                </h1>

                <div className="max-w-none">
                    <p className="text-lg text-warm-500">
                        Ultimo aggiornamento: Gennaio 2026
                    </p>

                    <section className="mt-12">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            1. Cosa sono i Cookie
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            I cookie sono piccoli file di testo che vengono memorizzati sul
                            tuo dispositivo quando visiti un sito web. Vengono utilizzati per
                            garantire il corretto funzionamento del sito, migliorare
                            l&apos;esperienza utente e, in alcuni casi, per raccogliere
                            informazioni statistiche.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            2. Cookie Utilizzati
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Questo sito utilizza esclusivamente cookie tecnici necessari per
                            il funzionamento del sito:
                        </p>

                        <div className="mt-6 overflow-hidden rounded-xl border border-warm-200">
                            <table className="w-full text-sm">
                                <thead className="bg-cream-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-warm-700">
                                            Tipo
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-warm-700">
                                            Finalità
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-warm-700">
                                            Durata
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-warm-200">
                                    <tr>
                                        <td className="px-4 py-3 text-warm-600">Cookie Tecnici</td>
                                        <td className="px-4 py-3 text-warm-500">
                                            Necessari per il funzionamento del sito
                                        </td>
                                        <td className="px-4 py-3 text-warm-500">Sessione</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-warm-600">Cookie di Navigazione</td>
                                        <td className="px-4 py-3 text-warm-500">
                                            Gestione della navigazione e sicurezza
                                        </td>
                                        <td className="px-4 py-3 text-warm-500">Sessione</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            3. Cookie di Terze Parti
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Questo sito è ospitato su Vercel, che potrebbe utilizzare cookie
                            tecnici per garantire la sicurezza e le prestazioni del servizio.
                            Non utilizziamo cookie di profilazione o di terze parti per
                            finalità pubblicitarie.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            4. Come Gestire i Cookie
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Puoi gestire le preferenze sui cookie direttamente dal tuo
                            browser. Di seguito i link alle istruzioni per i browser più
                            comuni:
                        </p>
                        <ul className="mt-4 space-y-2 text-warm-500">
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                <a
                                    href="https://support.google.com/chrome/answer/95647"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-700 hover:text-teal-800"
                                >
                                    Google Chrome
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                <a
                                    href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-700 hover:text-teal-800"
                                >
                                    Mozilla Firefox
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                <a
                                    href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-700 hover:text-teal-800"
                                >
                                    Safari
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-600" />
                                <a
                                    href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-700 hover:text-teal-800"
                                >
                                    Microsoft Edge
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            5. Aggiornamenti
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Questa Cookie Policy può essere aggiornata periodicamente. Ti
                            invitiamo a consultare questa pagina regolarmente per rimanere
                            informato su eventuali modifiche.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="mb-4 text-2xl font-semibold text-warm-800">
                            6. Contatti
                        </h2>
                        <p className="text-warm-500 leading-relaxed">
                            Per qualsiasi domanda relativa a questa Cookie Policy, puoi
                            contattarci all&apos;indirizzo:{" "}
                            <a
                                href="mailto:domenico@zagreo.io"
                                className="text-teal-700 hover:text-teal-800"
                            >
                                domenico@zagreo.io
                            </a>
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
