"use client";

import { motion } from "framer-motion";
import {
    Database,
    Shield,
    Settings,
    Workflow,
    GraduationCap,
    Network,
    ExternalLink,
    Cpu,
    Zap,
    Brain,
    FileCheck,
    Lock,
} from "lucide-react";
import clsx from "clsx";

interface CardProps {
    className?: string;
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    highlight?: boolean;
    delay?: number;
}

function FeatureCard({
    className,
    title,
    children,
    icon,
    highlight = false,
    delay = 0,
}: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={clsx(
                "group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300",
                highlight
                    ? "border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 shadow-2xl shadow-amber-500/5"
                    : "border-slate-800/80 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/80",
                className
            )}
        >
            {/* Glow effect for highlighted cards */}
            {highlight && (
                <>
                    <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:bg-amber-500/15" />
                    <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
                </>
            )}

            <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                    {icon && (
                        <div
                            className={clsx(
                                "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                                highlight
                                    ? "bg-amber-500/15 text-amber-500 group-hover:bg-amber-500/25"
                                    : "bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-300"
                            )}
                        >
                            {icon}
                        </div>
                    )}
                    <h3
                        className={clsx(
                            "font-display text-xl font-bold",
                            highlight ? "text-white" : "text-slate-100"
                        )}
                    >
                        {title}
                    </h3>
                </div>
                <div className="text-base leading-relaxed text-slate-400">{children}</div>
            </div>
        </motion.div>
    );
}

export default function BentoGrid() {
    return (
        <section id="expertise" className="relative py-32 overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

            <div className="container relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-amber-500">
                        Expertise
                    </span>
                    <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
                        Competenze Strategiche
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card A: Data Integrity */}
                    <FeatureCard
                        title="Data Governance & Remediation"
                        icon={<Database size={24} />}
                        delay={0.1}
                    >
                        Senior Advisor per primari gruppi nazionali. Bonifica massiva di
                        database, gestione portafogli NPL/UTP e data maintenance per
                        l&apos;area credito e legal workout.
                    </FeatureCard>

                    {/* Card B: Operations Engineering */}
                    <FeatureCard
                        title="Process Engineering"
                        icon={<Workflow size={24} />}
                        delay={0.2}
                    >
                        Coordinamento servizi operativi per Info Provider e società di
                        recupero. Progettazione tecnica di sistemi di controllo di
                        gestione, con conseguente riduzione dei costi operativi superiore al 50%.
                    </FeatureCard>

                    {/* Card D: Academy */}
                    <div id="academy">
                        <FeatureCard
                            title="ZAGREO Academy"
                            icon={<GraduationCap size={24} />}
                            delay={0.3}
                        >
                            Formazione accreditata e coordinamento reti professionali per il
                            settore immobiliare e amministrativo.
                        </FeatureCard>
                    </div>
                </div>

                {/* ThinkSuite - Featured Card */}
                <motion.div
                    id="thinksuite"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-8"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-900 via-slate-900/95 to-amber-950/30 p-10 shadow-2xl shadow-amber-500/5 lg:p-14">
                        {/* Background effects */}
                        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-amber-500/10 blur-[100px]" />
                        <div className="absolute -left-48 -bottom-48 h-96 w-96 rounded-full bg-amber-500/5 blur-[100px]" />

                        <div className="relative z-10">
                            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                                <div className="max-w-3xl">
                                    {/* Badge */}
                                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400">
                                        <Cpu size={14} />
                                        Proprietary Tech
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
                                        ThinkSuite
                                    </h3>
                                    <p className="mb-2 text-xl text-slate-300">
                                        Knowledge Management & Document Intelligence
                                    </p>
                                    <p className="mb-8 text-lg italic text-amber-400/80">
                                        "From Fluid Thought to Structured Assets."
                                    </p>

                                    <p className="mb-8 text-lg text-slate-400">
                                        Piattaforma production-ready ideata e sviluppata in-house.
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                                                <Zap size={20} className="text-amber-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Smart Ingestion</h4>
                                                <p className="text-sm text-slate-400">
                                                    Analizza input audio/file estraendo metadati e intenti.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                                                <Brain size={20} className="text-amber-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Semantic Core</h4>
                                                <p className="text-sm text-slate-400">
                                                    Knowledge Graph dinamico e RAG per connessioni di significato.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                                                <FileCheck size={20} className="text-amber-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Evidence-Based</h4>
                                                <p className="text-sm text-slate-400">
                                                    Generazione di deliverable editoriali senza allucinazioni.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                                                <Lock size={20} className="text-amber-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Enterprise-Grade</h4>
                                                <p className="text-sm text-slate-400">
                                                    Multi-tenant con Row-Level Security e Data Sovereignty.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
                                    <a
                                        href="https://rec2pdfweb.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 font-bold uppercase tracking-wider text-slate-950 shadow-2xl shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/40 hover:scale-105"
                                    >
                                        Launch Live Platform
                                        <ExternalLink
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </a>
                                    <p className="text-sm text-slate-500">
                                        Secure Access • Enterprise Ready
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
