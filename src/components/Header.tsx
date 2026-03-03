"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Servizi", href: "#expertise" },
    { name: "ThinkSuite", href: "#thinksuite", highlight: true },
    { name: "Academy", href: "#academy" },
    { name: "Chi Siamo", href: "#vision" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-warm-200 bg-cream-50/90 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex-shrink-0">
                        <img
                            src="/logo-dark.png"
                            alt="ZAGREO Consulenza Strategica"
                            className="h-8 w-auto md:h-9 lg:h-10"
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-base font-medium tracking-wide transition-all duration-200 hover:text-teal-700",
                                    link.highlight
                                        ? "text-teal-700 font-semibold"
                                        : "text-warm-600"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:domenico@zagreo.io"
                            className="rounded-full bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-teal-800"
                        >
                            Contattaci
                        </a>
                    </nav>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-warm-700 hover:text-teal-700 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden border-t border-warm-200 bg-cream-50/98 backdrop-blur-xl">
                    <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block py-3 text-lg font-medium transition-colors",
                                    link.highlight ? "text-teal-700" : "text-warm-700"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:domenico@zagreo.io"
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-base font-semibold text-white"
                        >
                            Contattaci
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
