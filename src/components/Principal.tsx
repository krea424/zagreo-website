"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Principal() {
    return (
        <section id="vision" className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="container relative z-10 mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20"
                >
                    {/* Visual Element */}
                    <div className="relative flex-shrink-0">
                        <div className="relative h-72 w-72 lg:h-80 lg:w-80">
                            {/* Gradient ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 via-transparent to-transparent" />

                            {/* Main circle */}
                            <div className="absolute inset-2 rounded-full border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm" />

                            {/* Inner content */}
                            <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900">
                                <span className="font-display text-6xl font-bold text-white lg:text-7xl">DQ</span>
                                <span className="mt-2 text-sm font-medium tracking-widest text-amber-500">PRINCIPAL</span>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-slate-700/20 blur-2xl" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-amber-500">
                                Vision
                            </span>

                            <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
                                Guidati da{" "}
                                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                                    Domenico Quaglio
                                </span>
                            </h2>

                            <div className="relative mb-8">
                                <Quote size={32} className="absolute -left-2 -top-2 text-amber-500/20" />
                                <p className="pl-8 text-xl leading-relaxed text-slate-300">
                                    Business Analyst, Senior Project Manager e Vibe Coder.
                                </p>
                            </div>

                            <p className="text-lg leading-relaxed text-slate-400">
                                ZAGREO è l&apos;estensione operativa di un&apos;esperienza decennale,
                                potenziata da un&apos;infrastruttura AI proprietaria. Un ponte tra
                                competenza consulenziale senior e innovazione tecnologica applicata.
                            </p>

                            {/* Credentials */}
                            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                                <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm text-slate-400">
                                    Banking
                                </span>
                                <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm text-slate-400">
                                    BPM
                                </span>
                                <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm text-slate-400">
                                    Data
                                </span>
                                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
                                    AI Agents
                                </span>
                                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400">
                                    Real Estate
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
