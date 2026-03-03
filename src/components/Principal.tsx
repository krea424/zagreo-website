"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Principal() {
    return (
        <section id="vision" className="relative py-32 overflow-hidden bg-cream-50">
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
                            {/* Soft ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-100 via-transparent to-cream-200" />

                            {/* Main circle */}
                            <div className="absolute inset-2 rounded-full border border-warm-200 bg-white" />

                            {/* Inner content */}
                            <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-cream-100 to-cream-200">
                                <span className="font-display text-6xl text-warm-800 lg:text-7xl">DQ</span>
                                <span className="mt-2 text-sm font-medium tracking-widest text-teal-700 uppercase">Fondatore</span>
                            </div>
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
                            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-teal-700">
                                Chi Siamo
                            </span>

                            <h2 className="mb-6 font-display text-4xl text-warm-900 md:text-5xl">
                                Guidati da{" "}
                                <span className="text-teal-700">
                                    Domenico Quaglio
                                </span>
                            </h2>

                            <div className="relative mb-8">
                                <Quote size={32} className="absolute -left-2 -top-2 text-teal-200" />
                                <p className="pl-8 text-xl leading-relaxed text-warm-600">
                                    Business Analyst, Senior Project Manager e appassionato di innovazione tecnologica.
                                </p>
                            </div>

                            <p className="text-lg leading-relaxed text-warm-500">
                                ZAGREO nasce da oltre dieci anni di esperienza nella consulenza
                                strategica, oggi potenziata dall&apos;intelligenza artificiale. Un ponte
                                tra competenza operativa e innovazione, al servizio della
                                crescita della tua azienda.
                            </p>

                            {/* Credentials */}
                            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                                <span className="rounded-full border border-warm-200 bg-white px-4 py-1.5 text-sm text-warm-600">
                                    Banking
                                </span>
                                <span className="rounded-full border border-warm-200 bg-white px-4 py-1.5 text-sm text-warm-600">
                                    Project Management
                                </span>
                                <span className="rounded-full border border-warm-200 bg-white px-4 py-1.5 text-sm text-warm-600">
                                    Gestione Dati
                                </span>
                                <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm text-teal-700">
                                    Intelligenza Artificiale
                                </span>
                                <span className="rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm text-teal-700">
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
