"use client";

import { motion } from "framer-motion";
import {
    Database,
    Workflow,
    GraduationCap,
    ExternalLink,
    Lightbulb,
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
                    ? "border-teal-200 bg-teal-50/50 shadow-lg shadow-teal-100/50"
                    : "border-warm-200 bg-white hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50",
                className
            )}
        >
            <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                    {icon && (
                        <div
                            className={clsx(
                                "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                                highlight
                                    ? "bg-teal-100 text-teal-700 group-hover:bg-teal-200"
                                    : "bg-cream-200 text-warm-500 group-hover:bg-teal-100 group-hover:text-teal-700"
                            )}
                        >
                            {icon}
                        </div>
                    )}
                    <h3
                        className={clsx(
                            "font-display text-xl",
                            highlight ? "text-warm-900" : "text-warm-800"
                        )}
                    >
                        {title}
                    </h3>
                </div>
                <div className="text-base leading-relaxed text-warm-500">{children}</div>
            </div>
        </motion.div>
    );
}

export default function BentoGrid() {
    return (
        <section id="expertise" className="relative py-32 overflow-hidden bg-cream-100">
            <div className="container relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-teal-700">
                        Servizi
                    </span>
                    <h2 className="font-display text-4xl text-warm-900 md:text-5xl">
                        Come possiamo aiutarti
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card A: Data Governance */}
                    <FeatureCard
                        title="Governance dei Dati"
                        icon={<Database size={24} />}
                        delay={0.1}
                    >
                        Consulenza senior per la bonifica e la gestione di grandi archivi dati.
                        Esperienza diretta con primari gruppi nazionali nel settore credito
                        e nella gestione di portafogli complessi.
                    </FeatureCard>

                    {/* Card B: Process Engineering */}
                    <FeatureCard
                        title="Ottimizzazione dei Processi"
                        icon={<Workflow size={24} />}
                        delay={0.2}
                    >
                        Progettiamo sistemi di controllo di gestione e coordiniamo servizi
                        operativi con risultati misurabili: riduzione dei costi operativi
                        superiore al 50%.
                    </FeatureCard>

                    {/* Card D: Academy */}
                    <div id="academy">
                        <FeatureCard
                            title="ZAGREO Academy"
                            icon={<GraduationCap size={24} />}
                            delay={0.3}
                        >
                            Formazione accreditata e coordinamento reti professionali
                            per il settore immobiliare e amministrativo.
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
                    <div className="relative overflow-hidden rounded-3xl border border-teal-200 bg-white p-10 shadow-xl shadow-teal-50 lg:p-14">
                        <div className="relative z-10">
                            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                                <div className="max-w-3xl">
                                    {/* Badge */}
                                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
                                        <Lightbulb size={14} />
                                        La Nostra Piattaforma
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-4 font-display text-3xl text-warm-900 md:text-4xl">
                                        ThinkSuite
                                    </h3>
                                    <p className="mb-2 text-xl text-warm-600">
                                        Gestione della Conoscenza Aziendale
                                    </p>
                                    <p className="mb-8 text-lg italic text-teal-700/80">
                                        &ldquo;Dal pensiero fluido agli asset strutturati.&rdquo;
                                    </p>

                                    <p className="mb-8 text-lg text-warm-500">
                                        Una piattaforma sviluppata internamente per trasformare
                                        informazioni destrutturate in conoscenza organizzata e
                                        pronta all&apos;uso.
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                                                <Zap size={20} className="text-teal-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-warm-800">Acquisizione Intelligente</h4>
                                                <p className="text-sm text-warm-500">
                                                    Analizza audio, documenti e file estraendo automaticamente le informazioni chiave.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                                                <Brain size={20} className="text-teal-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-warm-800">Comprensione Semantica</h4>
                                                <p className="text-sm text-warm-500">
                                                    Collega automaticamente concetti e documenti per trovare relazioni nascoste.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                                                <FileCheck size={20} className="text-teal-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-warm-800">Documenti Affidabili</h4>
                                                <p className="text-sm text-warm-500">
                                                    Genera report e deliverable basati su dati verificati, mai su supposizioni.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                                                <Lock size={20} className="text-teal-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-warm-800">Sicurezza Aziendale</h4>
                                                <p className="text-sm text-warm-500">
                                                    I tuoi dati restano tuoi. Accesso controllato e protezione completa delle informazioni.
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
                                        className="group inline-flex items-center gap-3 rounded-xl bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-700/15 transition-all duration-300 hover:bg-teal-800 hover:shadow-teal-700/25"
                                    >
                                        Prova la Piattaforma
                                        <ExternalLink
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </a>
                                    <p className="text-sm text-warm-400">
                                        Accesso sicuro
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
