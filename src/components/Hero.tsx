"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-slate-700/20 blur-[120px]" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
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
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm text-amber-400"
                    >
                        <Sparkles size={14} className="text-amber-500" />
                        <span>AI-Powered Strategic Consulting</span>
                    </motion.div>

                    {/* Main Headline */}
                    <h1 className="mb-8 font-display text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        Intelligence Operativa per{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            l&apos;Era dell&apos;AI
                        </span>
                        .
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl md:text-2xl">
                        ZAGREO orchestra strategia, conformità normativa e tecnologia per trasformare processi complessi in flussi di lavoro automatizzati.
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
                            className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold uppercase tracking-wider text-slate-950 shadow-2xl shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/40 hover:scale-105"
                        >
                            Scopri ThinkSuite
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#expertise"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/50 hover:text-white"
                        >
                            I Nostri Servizi
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </section>
    );
}
