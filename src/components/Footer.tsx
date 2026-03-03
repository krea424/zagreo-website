import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-warm-200 bg-cream-100">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <div className="mb-4">
                            <span className="font-display text-2xl text-warm-900">ZAGREO</span>
                            <p className="text-sm text-warm-400">Consulenza Strategica</p>
                        </div>
                        <p className="text-sm leading-relaxed text-warm-500">
                            Ottimizziamo i processi della tua azienda con strategia,
                            conformità e intelligenza artificiale.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-12 lg:gap-16">
                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-700">
                                Navigazione
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="#expertise" className="text-warm-500 transition-colors hover:text-teal-700">
                                        Servizi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#thinksuite" className="text-warm-500 transition-colors hover:text-teal-700">
                                        ThinkSuite
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#academy" className="text-warm-500 transition-colors hover:text-teal-700">
                                        Academy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#vision" className="text-warm-500 transition-colors hover:text-teal-700">
                                        Chi Siamo
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-700">
                                Contatti
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="mailto:domenico@zagreo.io"
                                        className="inline-flex items-center gap-2 text-warm-500 transition-colors hover:text-teal-700"
                                    >
                                        <Mail size={16} />
                                        domenico@zagreo.io
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-700">
                                Legale
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/privacy-policy" className="text-warm-500 transition-colors hover:text-teal-700">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookie-policy" className="text-warm-500 transition-colors hover:text-teal-700">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-warm-200">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-xs text-warm-400 md:flex-row">
                        <p>&copy; {currentYear} ZAGREO. Tutti i diritti riservati.</p>
                        <p className="flex items-center gap-1">
                            Designed & Engineered by ZAGREO
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
