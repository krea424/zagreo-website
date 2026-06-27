"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParticleField from "./ParticleField";

const metrics = [
    { value: "30+", label: "Anni di Esperienza" },
    { value: ">50%", label: "Riduzione Costi" },
    { value: "24K+", label: "Siti Ottimizzati" },
    { value: "20K+", label: "Partecipanti Gestiti" },
];

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950">
            {/* Constellation grid + particle field + aurora */}
            <div className="absolute inset-0 z-0 bg-constellation opacity-70" />
            <ParticleField />
            <div className="aurora pointer-events-none absolute left-1/2 top-[34%] z-0 h-[620px] w-[820px] -translate-x-1/2 -translate-y-1/2" />
            {/* Vignette to seat the content */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 75% 55% at 50% 42%, transparent 35%, rgba(6,16,14,0.85) 100%)",
                }}
            />

            <div className="container relative z-10 mx-auto px-6 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-5xl"
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-medium text-mist-300 backdrop-blur-sm"
                    >
                        <span
                            className="h-2 w-2 rounded-full bg-teal-400"
                            style={{ animation: "pulse-dot 2.4s cubic-bezier(0.4,0,0.6,1) infinite" }}
                        />
                        <span>Consulenza Strategica & AI</span>
                    </motion.div>

                    {/* Headline — grotesk + italic-serif accent */}
                    <h1
                        className="mb-8 font-display font-medium leading-[1.02] tracking-tight text-chalk"
                        style={{ fontSize: "clamp(2.9rem, 8.5vw, 7rem)" }}
                    >
                        La tua azienda,
                        <br className="hidden sm:block" />{" "}
                        <span className="font-serif italic font-normal text-gradient-teal">
                            più efficiente
                        </span>
                        <span className="text-teal-400">.</span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mx-auto mb-11 max-w-2xl text-lg leading-relaxed text-mist-400 sm:text-xl"
                    >
                        Ottimizziamo i tuoi processi aziendali con strategia, conformità normativa
                        e intelligenza artificiale. Meno complessità, più risultati.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <a
                            href="#thinksuite"
                            className="group inline-flex items-center gap-2.5 rounded-full bg-teal-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_0_40px_-8px_rgba(45,212,191,0.5)] transition-all duration-300 hover:bg-teal-300 hover:-translate-y-px"
                        >
                            Scopri ThinkSuite
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#expertise"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-medium text-mist-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/40 hover:text-chalk"
                        >
                            I Nostri Servizi
                        </a>
                    </motion.div>
                </motion.div>

                {/* Metrics strip */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="mt-20 flex flex-wrap items-stretch justify-center divide-x divide-white/10"
                >
                    {metrics.map((m) => (
                        <div key={m.label} className="flex flex-col items-center px-8 py-3 sm:px-12">
                            <span className="font-display text-3xl font-semibold leading-none text-chalk md:text-4xl">
                                {m.value}
                            </span>
                            <span className="mt-2 text-[11px] uppercase tracking-[0.18em] text-mist-500">
                                {m.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade into next section */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
        </section>
    );
}
