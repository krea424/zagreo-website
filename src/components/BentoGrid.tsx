"use client";

import { motion } from "framer-motion";
import {
    Database,
    Workflow,
    GraduationCap,
    ExternalLink,
    Sparkles,
    Zap,
    Brain,
    FileCheck,
    Lock,
    ArrowRight,
} from "lucide-react";
import clsx from "clsx";

interface ServiceProps {
    title: string;
    body: string;
    icon: React.ReactNode;
    action: string;
    href: string;
    delay?: number;
    id?: string;
}

function ServiceCard({ title, body, icon, action, href, delay = 0, id }: ServiceProps) {
    return (
        <motion.a
            id={id}
            href={href}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
            className="surface surface-hover group flex flex-col rounded-3xl p-8"
        >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-teal-300 transition-colors duration-300 group-hover:border-teal-400/40 group-hover:text-teal-200">
                {icon}
            </div>
            <h3 className="mb-3 font-display text-xl font-medium text-chalk">{title}</h3>
            <p className="flex-1 text-[15px] leading-relaxed text-mist-400">{body}</p>

            <div className="mt-7 h-px w-full bg-white/10" />
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-mist-500 transition-colors duration-300 group-hover:text-teal-300">
                {action}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
        </motion.a>
    );
}

const thinkSuiteFeatures = [
    {
        icon: <Zap size={20} />,
        title: "Acquisizione Intelligente",
        body: "Analizza audio, documenti e file estraendo automaticamente le informazioni chiave.",
    },
    {
        icon: <Brain size={20} />,
        title: "Comprensione Semantica",
        body: "Collega automaticamente concetti e documenti per trovare relazioni nascoste.",
    },
    {
        icon: <FileCheck size={20} />,
        title: "Documenti Affidabili",
        body: "Genera report e deliverable basati su dati verificati, mai su supposizioni.",
    },
    {
        icon: <Lock size={20} />,
        title: "Sicurezza Aziendale",
        body: "I tuoi dati restano tuoi. Accesso controllato e protezione completa delle informazioni.",
    },
];

export default function BentoGrid() {
    return (
        <section id="expertise" className="relative overflow-hidden bg-ink-950 py-28 md:py-36">
            <div className="container relative z-10 mx-auto max-w-7xl px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-2xl"
                >
                    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                        <span className="h-px w-7 bg-teal-400/60" />
                        Servizi
                    </span>
                    <h2 className="font-display text-4xl font-medium leading-tight text-chalk md:text-5xl">
                        Come possiamo{" "}
                        <span className="font-serif italic font-normal text-gradient-teal">aiutarti</span>
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard
                        title="Governance dei Dati"
                        icon={<Database size={22} />}
                        action="Richiedi una call"
                        href="mailto:domenico@zagreo.io"
                        delay={0.05}
                        body="Consulenza senior per la bonifica e la gestione di grandi archivi dati. Esperienza diretta con primari gruppi nazionali nel settore credito e nei portafogli complessi."
                    />
                    <ServiceCard
                        title="Ottimizzazione dei Processi"
                        icon={<Workflow size={22} />}
                        action="Richiedi una call"
                        href="mailto:domenico@zagreo.io"
                        delay={0.12}
                        body="Progettiamo sistemi di controllo di gestione e coordiniamo servizi operativi con risultati misurabili: riduzione dei costi operativi superiore al 50%."
                    />
                    <ServiceCard
                        id="academy"
                        title="ZAGREO Academy"
                        icon={<GraduationCap size={22} />}
                        action="Scopri i percorsi"
                        href="mailto:domenico@zagreo.io"
                        delay={0.19}
                        body="Formazione accreditata e coordinamento di reti professionali per il settore immobiliare e amministrativo."
                    />
                </div>

                {/* ── ThinkSuite — featured ── */}
                <motion.div
                    id="thinksuite"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 p-10 lg:p-14"
                >
                    {/* Ambient teal glow */}
                    <div className="aurora pointer-events-none absolute -right-20 -top-24 h-72 w-72" />
                    <div className="absolute inset-0 bg-constellation opacity-30" />

                    <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-3xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-1.5 text-sm font-semibold text-teal-300">
                                <Sparkles size={14} />
                                La Nostra Piattaforma
                            </div>

                            <h3 className="mb-3 font-display text-3xl font-medium text-chalk md:text-4xl">
                                ThinkSuite
                            </h3>
                            <p className="mb-2 text-xl text-mist-300">Gestione della Conoscenza Aziendale</p>
                            <p className="mb-8 font-serif text-lg italic text-teal-300/90">
                                &ldquo;Dal pensiero fluido agli asset strutturati.&rdquo;
                            </p>

                            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-mist-400">
                                Una piattaforma sviluppata internamente per trasformare informazioni
                                destrutturate in conoscenza organizzata e pronta all&apos;uso.
                            </p>

                            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                                {thinkSuiteFeatures.map((f) => (
                                    <div key={f.title} className="flex gap-4">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-teal-300">
                                            {f.icon}
                                        </div>
                                        <div>
                                            <h4 className="mb-1 font-semibold text-chalk">{f.title}</h4>
                                            <p className="text-sm leading-relaxed text-mist-400">{f.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col items-start gap-3 lg:items-end lg:text-right">
                            <a
                                href="https://rec2pdfweb.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 rounded-full bg-teal-400 px-8 py-4 font-semibold text-ink-950 shadow-[0_0_40px_-8px_rgba(45,212,191,0.5)] transition-all duration-300 hover:bg-teal-300 hover:-translate-y-px"
                            >
                                Prova la Piattaforma
                                <ExternalLink size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                            <p className="text-sm text-mist-500">Accesso sicuro</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
