import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-ink-950 border-t border-white/[0.06]">
            {/* Subtle top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <div className="mb-5">
                            <img
                                src="/zagreo-logo-light.png"
                                alt="ZAGREO Strategic Consulting"
                                className="h-12 w-auto"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-mist-400">
                            Ottimizziamo i processi della tua azienda con strategia,
                            conformità e intelligenza artificiale.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-12 lg:gap-16">
                        <div>
                            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-mist-500">
                                Navigazione
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="#expertise" className="text-mist-400 transition-colors hover:text-teal-400">
                                        Servizi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#thinksuite" className="text-mist-400 transition-colors hover:text-teal-400">
                                        ThinkSuite
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#academy" className="text-mist-400 transition-colors hover:text-teal-400">
                                        Academy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#vision" className="text-mist-400 transition-colors hover:text-teal-400">
                                        Chi Siamo
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-mist-500">
                                Contatti
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="mailto:domenico@zagreo.io"
                                        className="inline-flex items-center gap-2 text-mist-400 transition-colors hover:text-teal-400"
                                    >
                                        <Mail size={14} />
                                        domenico@zagreo.io
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-mist-500">
                                Legale
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/privacy-policy" className="text-mist-400 transition-colors hover:text-teal-400">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookie-policy" className="text-mist-400 transition-colors hover:text-teal-400">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/[0.06]">
                <div className="mx-auto max-w-7xl px-6 py-5">
                    <div className="flex flex-col items-center justify-between gap-3 text-xs text-mist-500 md:flex-row">
                        <p>&copy; {currentYear} ZAGREO. Tutti i diritti riservati.</p>
                        <p>Designed & Engineered by ZAGREO</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
