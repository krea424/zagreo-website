"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-cream-50">
            {/* Soft decorative shapes */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-[10%] h-[500px] w-[500px] rounded-full bg-teal-100/40 blur-[100px]" />
                <div className="absolute bottom-20 left-[5%] h-[400px] w-[400px] rounded-full bg-cream-300/50 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto max-w-5xl"
                >
                    {/* Eyebrow badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-sm font-medium text-teal-800"
                    >
                        <TrendingUp size={16} className="text-teal-600" />
                        <span>Consulenza Strategica & AI</span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="mb-8 font-display text-5xl font-normal leading-[1.1] tracking-tight text-warm-900 sm:text-6xl md:text-7xl lg:text-8xl">
                        La tua azienda,{" "}
                        <span className="text-teal-700">
                            più efficiente
                        </span>
                        .
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-warm-500 sm:text-xl md:text-2xl">
                        Ottimizziamo i tuoi processi aziendali con strategia, conformità normativa e intelligenza artificiale. Meno complessità, più risultati.
                    </p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#thinksuite"
                            className="group inline-flex items-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-700/15 transition-all duration-300 hover:bg-teal-800 hover:shadow-teal-700/25"
                        >
                            Scopri ThinkSuite
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#expertise"
                            className="inline-flex items-center gap-2 rounded-full border border-warm-300 bg-white px-8 py-4 text-base font-medium text-warm-700 transition-all duration-300 hover:border-warm-400 hover:bg-cream-100"
                        >
                            I Nostri Servizi
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
