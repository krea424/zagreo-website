"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "ThinkSuite", href: "#thinksuite", highlight: true },
    { name: "Academy", href: "#academy" },
    { name: "Vision", href: "#vision" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/90 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo - Using img tag for direct control */}
                    <Link href="/" className="flex-shrink-0">
                        <img
                            src="/logo.png"
                            alt="ZAGREO Strategic Consulting"
                            className="h-14 w-auto md:h-16 lg:h-20"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-base font-medium tracking-wide transition-all duration-200 hover:text-amber-400",
                                    link.highlight
                                        ? "text-amber-500 font-semibold"
                                        : "text-slate-300"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-slate-200 hover:text-amber-500 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl">
                    <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    "block py-3 text-lg font-medium transition-colors",
                                    link.highlight ? "text-amber-500" : "text-slate-200"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </header>
    );
}
