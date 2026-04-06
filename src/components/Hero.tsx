"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const metrics = [
    { value: "30+", label: "Anni di Esperienza" },
    { value: ">50%", label: "Riduzione Costi" },
    { value: "24K+", label: "Siti Ottimizzati" },
    { value: "20K+", label: "Partecipanti Gestiti" },
];

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream-50">
            {/* Dot grid background */}
            <div className="absolute inset-0 z-0 bg-dot-grid opacity-[0.45]" />

            {/* Radial fade — dot grid brighter in center */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, #FEFDFB 100%)",
                }}
            />

            {/* Teal ambient glow — top right */}
            <div className="absolute top-[-5%] right-[-5%] h-[560px] w-[560px] rounded-full bg-teal-100/50 blur-[120px] z-0" />
            {/* Warm ambient glow — bottom left */}
            <div className="absolute bottom-[-10%] left-[-5%] h-[440px] w-[440px] rounded-full bg-cream-300/60 blur-[100px] z-0" />

            <div className="container relative z-10 mx-auto px-6 py-28 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-5xl"
                >
                    {/* Eyebrow badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-teal-200/80 bg-white/80 px-5 py-2.5 text-sm font-medium text-warm-700 shadow-sm backdrop-blur-sm"
                    >
                        <span
                            className="h-2 w-2 rounded-full bg-teal-500"
                            style={{ animation: "pulse-dot 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
                        />
                        <span>Consulenza Strategica & AI</span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="mb-8 font-display font-normal leading-[1.05] tracking-tight text-warm-900"
                        style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}>
                        La tua azienda,{" "}
                        <br className="hidden sm:block" />
                        <span className="text-teal-700">
                            più efficiente
                        </span>
                        .
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-warm-500 sm:text-xl"
                    >
                        Ottimizziamo i tuoi processi aziendali con strategia, conformità normativa
                        e intelligenza artificiale. Meno complessità, più risultati.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#thinksuite"
                            className="group inline-flex items-center gap-2.5 rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/20 transition-all duration-300 hover:bg-teal-800 hover:shadow-teal-700/30 hover:-translate-y-px"
                        >
                            Scopri ThinkSuite
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#expertise"
                            className="inline-flex items-center gap-2 rounded-full border border-warm-300 bg-white/70 backdrop-blur-sm px-8 py-4 text-base font-medium text-warm-700 transition-all duration-300 hover:border-teal-300 hover:bg-white hover:text-teal-700"
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
                    className="mt-20 flex flex-wrap items-stretch justify-center divide-x divide-warm-200"
                >
                    {metrics.map((m) => (
                        <div
                            key={m.label}
                            className="flex flex-col items-center px-8 py-4 sm:px-12"
                        >
                            <span className="font-display text-3xl leading-none text-warm-900 md:text-4xl">
                                {m.value}
                            </span>
                            <span className="mt-2 text-xs tracking-wide text-warm-400 uppercase">
                                {m.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-100 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
