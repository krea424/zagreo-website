"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Building2, MapPin, Mail, Globe, BadgeCheck, GraduationCap } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const impactMetrics = [
    { value: "30+", label: "Anni di Esperienza", icon: <TrendingUp size={18} /> },
    { value: ">50%", label: "Riduzione Costi", icon: <TrendingUp size={18} /> },
    { value: "24K+", label: "Siti Ottimizzati", icon: <Building2 size={18} /> },
    { value: "20K+", label: "Partecipanti Gestiti", icon: <Users size={18} /> },
];

const experience = [
    {
        role: "Founder & Senior Strategic Consultant",
        org: "ZAGREO Strategic Consulting",
        description:
            "Consulenza strategica, AI-enabled operations e sviluppo di ThinkSuite, piattaforma SaaS multi-tenant per knowledge & document intelligence.",
        tags: ["Strategy", "AI", "SaaS"],
        highlight: true,
    },
    {
        role: "Senior Advisor & Board Partner",
        org: "Gruppo Internazionale",
        description:
            "Data remediation, legal workout e gestione patrimonio immobiliare complesso: 19.000 immobili + 4.500 linee ipotecarie analizzate in 16 giorni.",
        tags: ["NPL", "Real Estate", "Data"],
        highlight: false,
    },
    {
        role: "Chief Process Analyst",
        org: "Sistemi Enterprise BPMS/PPM",
        description:
            "Coordinamento implementazione soluzioni per process management, performance measurement e gestione documentale per primari gruppi bancari.",
        tags: ["BPM", "Banking", "Governance"],
        highlight: false,
    },
    {
        role: "Program Lead – Due Diligence Alberghiera",
        org: "Portfolio Multi-Regione",
        description:
            "Gestione due diligence integrata su 5 strutture alberghiere: asset review, verifica documentale e readiness alla vendita.",
        tags: ["M&A", "Hospitality", "Asset"],
        highlight: false,
    },
    {
        role: "Amministratore Delegato",
        org: "Cosenza Calcio",
        description:
            "Pianificazione e coordinamento del Centenario del club, integrando operations, comunicazione e stakeholder engagement per oltre 20.000 partecipanti.",
        tags: ["Leadership", "Operations", "Events"],
        highlight: false,
    },
];

const qualifications = [
    {
        category: "Project Management",
        title: "Project Manager Avanzato ISIPM-Av®",
        detail: "Qualificazione secondo UNI ISO 21502:2021",
        badge: "Reg. n. 2081",
        icon: <BadgeCheck size={16} className="text-teal-600" />,
    },
    {
        category: "Executive Education",
        title: "SDA Bocconi School of Management",
        detail: "Executive Program — Artificial Intelligence per il Business",
        icon: <GraduationCap size={16} className="text-teal-600" />,
    },
];

const competencies = [
    "Project & Program Management (UNI ISO 21502:2021)",
    "AI Generativa & Agentic AI",
    "Business Analysis & Problem Solving",
    "Process Digitalization & Knowledge Management",
    "KPI & Performance Control",
    "Contractual Process Optimization",
    "Stakeholder Alignment & Governance",
];

const education = [
    {
        degree: "Laurea in Giurisprudenza",
        institution: "Università La Sapienza",
        detail: "110/110 e lode",
    },
    {
        degree: "Direttore Sportivo",
        institution: "Coverciano",
        detail: "110/110 e lode",
    },
    {
        degree: "Executive Programs",
        institution: "IBM · Rice · SUNY · Emory · Microsoft · Univ. of Alberta",
        detail: "Business & Technology",
    },
    {
        degree: "Mediatore Professionista",
        institution: "Tribunale Civile di Cosenza",
        detail: "Albo Curatori Fallimentari",
    },
];

export default function Principal() {
    return (
        <section id="vision" className="relative overflow-hidden bg-ink-950 py-28 md:py-36">
            {/* Ambient teal aurora */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="aurora absolute -top-24 right-[-8%] h-[560px] w-[560px]" />
                <div className="aurora absolute bottom-0 left-[-6%] h-[420px] w-[420px] opacity-60" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-6">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 flex flex-col items-center gap-4 text-center"
                >
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                        <span className="h-px w-7 bg-teal-400/60" />
                        Chi Siamo
                        <span className="h-px w-7 bg-teal-400/60" />
                    </span>
                    <h2 className="font-display text-4xl font-medium text-chalk md:text-5xl">
                        Guidati da{" "}
                        <span className="font-serif italic font-normal text-gradient-teal">Domenico Quaglio</span>
                    </h2>
                </motion.div>

                {/* ── HERO PROFILE CARD ── */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="surface relative mb-10 overflow-hidden rounded-[2rem] p-8 md:p-12"
                >
                    <div className="aurora pointer-events-none absolute -left-16 -top-20 h-56 w-56 opacity-70" />
                    <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
                        {/* Avatar */}
                        <div className="flex flex-shrink-0 flex-col items-center gap-4">
                            <div className="relative h-40 w-40">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300 via-teal-500 to-teal-800 opacity-80 blur-[2px]" />
                                <div className="absolute inset-[3px] rounded-full bg-ink-900" />
                                <div className="absolute inset-[6px] overflow-hidden rounded-full ring-1 ring-white/10">
                                    <Image
                                        src="/foto_cv_2026.jpeg"
                                        alt="Domenico Quaglio"
                                        fill
                                        className="object-cover object-[center_18%]"
                                        sizes="160px"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Contact chips */}
                            <div className="flex flex-col items-center gap-1.5 text-xs text-mist-400">
                                <span className="flex items-center gap-1.5"><MapPin size={12} />Cosenza, Italia</span>
                                <a href="mailto:domenico@zagreo.io" className="flex items-center gap-1.5 transition-colors hover:text-teal-300">
                                    <Mail size={12} />domenico@zagreo.io
                                </a>
                                <a href="https://www.zagreo.io" className="flex items-center gap-1.5 transition-colors hover:text-teal-300">
                                    <Globe size={12} />www.zagreo.io
                                </a>
                            </div>
                        </div>

                        {/* Main bio */}
                        <div className="flex-1">
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-teal-400 px-4 py-1 text-sm font-semibold text-ink-950">
                                    Board-Level Advisor
                                </span>
                                <span className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-1 text-sm text-mist-300">
                                    Value Creation Partner
                                </span>
                            </div>

                            <h3 className="mb-1 font-display text-2xl font-medium text-chalk md:text-3xl">
                                Domenico Quaglio
                            </h3>
                            <p className="mb-5 text-base font-medium text-teal-300">
                                Board-Level Advisor & Value Creation Partner
                            </p>

                            <p className="mb-6 max-w-2xl text-base leading-relaxed text-mist-400">
                                Executive con oltre 30 anni di esperienza in legal advisory, business transformation
                                e performance turnaround. Supporta board e top management su cost optimization,
                                governance operativa, digitalizzazione e valorizzazione di patrimoni complessi,
                                con approccio data-driven ed execution rigorosa.
                            </p>

                            {/* Metrics row */}
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {impactMetrics.map((m, i) => (
                                    <motion.div
                                        key={m.label}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                                        className="flex flex-col items-center rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-center"
                                    >
                                        <span className="font-display text-2xl font-semibold text-teal-300 md:text-3xl">
                                            {m.value}
                                        </span>
                                        <span className="mt-1 text-xs leading-tight text-mist-400">{m.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── ADVISORY SHOWCASE ── */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-center"
                >
                    {/* Image */}
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/8">
                        <Image
                            src="/zagreo-boardroom-v3.jpg"
                            alt="Domenico Quaglio durante una sessione strategica sul masterplan Aurea City, con il team che assiste"
                            fill
                            className="object-cover object-[50%_72%]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Tints to seat the dark theme + caption */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                        <div className="pointer-events-none absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
                        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2.5">
                            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-teal-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.6)]" />
                            <span className="text-xs font-medium text-mist-300">
                                Masterplan <span className="text-chalk"></span> · sessione strategica con il management
                            </span>
                        </div>
                    </div>

                    {/* Narrative */}
                    <div className="surface flex flex-col justify-center rounded-[2rem] p-8 md:p-10">
                        <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                            <span className="h-px w-7 bg-teal-400/60" />
                            Advisory in azione
                        </span>
                        <h3 className="mb-4 font-display text-2xl font-medium leading-snug text-chalk md:text-3xl">
                            Accanto al board,{" "}
                            <span className="font-serif italic font-normal text-gradient-teal">
                                dalla strategia all&apos;execution
                            </span>
                            .
                        </h3>
                        <p className="mb-6 text-base leading-relaxed text-mist-400">
                            Sessioni di lavoro con il management su masterplan, governance e valorizzazione
                            di patrimoni complessi. Decisioni guidate dai dati e da deliverable verificati,
                            mai da supposizioni.
                        </p>
                        <div className="hairline-node mb-5" />
                        <p className="text-sm text-mist-500">
                            Un metodo data-driven che unisce analisi rigorosa, AI generativa ed execution
                            misurabile a fianco di chi guida l&apos;azienda.
                        </p>
                    </div>
                </motion.div>

                {/* ── TWO-COLUMN: Experience + Education/Skills ── */}
                <div className="grid gap-8 lg:grid-cols-5">

                    {/* Experience column (wider) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col gap-4 lg:col-span-3"
                    >
                        <h3 className="mb-2 flex items-center gap-3 font-display text-xl font-medium text-chalk">
                            <span>Esperienze Chiave</span>
                            <span className="hairline-node flex-1" />
                        </h3>

                        {experience.map((exp, i) => (
                            <motion.div
                                key={exp.org}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                                className={clsx(
                                    "surface surface-hover rounded-2xl p-5",
                                    exp.highlight && "border-teal-400/30 bg-teal-400/[0.06]"
                                )}
                            >
                                <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-semibold text-chalk">{exp.role}</p>
                                        <p className="text-xs font-medium text-teal-300">{exp.org}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-mist-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-mist-400">{exp.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right column: Skills + Education */}
                    <div className="flex flex-col gap-8 lg:col-span-2">

                        {/* Qualifiche in Evidenza */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="surface rounded-2xl p-6"
                        >
                            <h3 className="mb-5 flex items-center gap-3 font-display text-xl font-medium text-chalk">
                                <span>Qualifiche in Evidenza</span>
                                <span className="hairline-node flex-1" />
                            </h3>
                            <div className="flex flex-col gap-4">
                                {qualifications.map((q, i) => (
                                    <motion.div
                                        key={q.title}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                                        className="rounded-xl border border-teal-400/20 bg-teal-400/[0.05] p-4"
                                    >
                                        <div className="mb-1.5 flex items-center gap-2">
                                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                                                {q.icon}
                                            </span>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                                                {q.category}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold leading-snug text-chalk">{q.title}</p>
                                        <p className="mt-0.5 text-xs leading-snug text-mist-400">{q.detail}</p>
                                        {q.badge && (
                                            <span className="mt-2 inline-block rounded-md border border-teal-400/30 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-teal-200">
                                                {q.badge}
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Competencies */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="surface rounded-2xl p-6"
                        >
                            <h3 className="mb-5 flex items-center gap-3 font-display text-xl font-medium text-chalk">
                                <span>Competenze</span>
                                <span className="hairline-node flex-1" />
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {competencies.map((c, i) => (
                                    <motion.span
                                        key={c}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                                        className={clsx(
                                            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                                            i < 1
                                                ? "bg-teal-400 text-ink-950"
                                                : i < 3
                                                    ? "border border-teal-400/30 bg-teal-400/10 text-teal-200"
                                                    : "border border-white/10 bg-white/[0.04] text-mist-300"
                                        )}
                                    >
                                        {c}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="surface rounded-2xl p-6"
                        >
                            <h3 className="mb-5 flex items-center gap-3 font-display text-xl font-medium text-chalk">
                                <span>Formazione</span>
                                <span className="hairline-node flex-1" />
                            </h3>
                            <div className="flex flex-col gap-4">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={edu.degree}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                                            <Award size={14} className="text-teal-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold leading-tight text-chalk">{edu.degree}</p>
                                            <p className="text-xs leading-snug text-mist-400">{edu.institution}</p>
                                            <p className="text-xs font-medium text-teal-300">{edu.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA contact */}
                        <motion.a
                            href="mailto:domenico@zagreo.io"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="group flex items-center justify-center gap-2 rounded-2xl bg-teal-400 px-6 py-4 text-sm font-semibold text-ink-950 shadow-[0_0_40px_-10px_rgba(45,212,191,0.5)] transition-all duration-300 hover:bg-teal-300 hover:-translate-y-px"
                        >
                            <Mail size={16} />
                            Lavora con Domenico
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
