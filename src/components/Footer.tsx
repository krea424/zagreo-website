import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 bg-slate-950">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <div className="mb-4">
                            <span className="font-display text-2xl font-bold text-white">ZAGREO</span>
                            <p className="text-sm text-slate-500">Strategic Consulting</p>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Intelligence Operativa per l&apos;Era dell&apos;AI. Orchestriamo strategia,
                            conformità e tecnologia per l&apos;eccellenza operativa.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-12 lg:gap-16">
                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
                                Navigazione
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="#expertise" className="text-slate-400 transition-colors hover:text-amber-500">
                                        Expertise
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#thinksuite" className="text-slate-400 transition-colors hover:text-amber-500">
                                        ThinkSuite
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#academy" className="text-slate-400 transition-colors hover:text-amber-500">
                                        Academy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#vision" className="text-slate-400 transition-colors hover:text-amber-500">
                                        Vision
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
                                Connetti
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="mailto:domenico@zagreo.io"
                                        className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-amber-500"
                                    >
                                        <Mail size={16} />
                                        domenico.quaglio.consulting@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
                                Legale
                            </h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <Link href="/privacy-policy" className="text-slate-400 transition-colors hover:text-amber-500">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookie-policy" className="text-slate-400 transition-colors hover:text-amber-500">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-6">
                    <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
                        <p>&copy; {currentYear} ZAGREO. All rights reserved.</p>
                        <p className="flex items-center gap-1">
                            Designed & Engineered by ZAGREO
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
