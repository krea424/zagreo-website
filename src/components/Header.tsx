"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Servizi", href: "#expertise" },
    { name: "ThinkSuite", href: "#thinksuite", highlight: true },
    { name: "Academy", href: "#academy" },
    { name: "Chi Siamo", href: "#vision" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
            <div
                className={clsx(
                    "w-full max-w-5xl rounded-full border transition-all duration-500",
                    scrolled
                        ? "border-white/10 bg-ink-900/80 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                        : "border-white/[0.06] bg-ink-900/40 backdrop-blur-md"
                )}
            >
                <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
                    {/* Brand */}
                    <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
                        <img
                            src="/zagreo-logo-light.png"
                            alt="ZAGREO Strategic Consulting"
                            className="h-9 w-auto md:h-10"
                        />
                    </Link>

                    {/* Center nav */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "rounded-full px-4 py-2 text-sm tracking-wide transition-colors duration-200",
                                    link.highlight
                                        ? "font-semibold text-teal-300 hover:text-teal-200"
                                        : "font-medium text-mist-400 hover:text-chalk"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <a
                        href="mailto:domenico@zagreo.io"
                        className="group hidden items-center gap-1.5 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-teal-300 sm:inline-flex"
                    >
                        Contattaci
                        <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-full p-1.5 text-mist-300 transition-colors hover:text-chalk lg:hidden"
                        aria-label="Apri menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile drawer */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="mx-3 mb-3 flex flex-col gap-1 border-t border-white/10 pt-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                                        link.highlight ? "text-teal-300" : "text-mist-300 hover:text-chalk"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="mailto:domenico@zagreo.io"
                                onClick={() => setIsOpen(false)}
                                className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-teal-400 px-5 py-3 text-base font-semibold text-ink-950"
                            >
                                Contattaci
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
