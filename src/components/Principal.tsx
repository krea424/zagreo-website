"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, Building2, MapPin, Mail, Globe } from "lucide-react";

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
        org: "Gruppo Internazionale RYZE",
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
        role: "Presidente",
        org: "Cosenza Calcio",
        description:
            "Pianificazione e coordinamento del Centenario del club, integrando operations, comunicazione e stakeholder engagement per oltre 20.000 partecipanti.",
        tags: ["Leadership", "Operations", "Events"],
        highlight: false,
    },
];

const competencies = [
    "AI Generativa & Agentic AI",
    "Program & Project Management",
    "Business Analysis",
    "Process Digitalization",
    "Knowledge Management",
    "Legal & Asset Strategy",
    "Cost Optimization",
    "KPI & Performance Control",
    "Stakeholder Alignment",
    "Data Governance",
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
        <section id="vision" className="relative py-24 overflow-hidden bg-cream-50">
            {/* Ambient blobs */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-teal-100/30 blur-[120px]" />
                <div className="absolute bottom-0 left-[-5%] h-[400px] w-[400px] rounded-full bg-cream-200/60 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto max-w-7xl px-6">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 flex flex-col items-center gap-4 text-center"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
                        Chi Siamo
                    </span>
                    <h2 className="font-display text-4xl text-warm-900 md:text-5xl">
                        Guidati da{" "}
                        <span className="text-teal-700">Domenico Quaglio</span>
                    </h2>
                </motion.div>

                {/* ── HERO PROFILE CARD ── */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mb-10 rounded-3xl border border-warm-200 bg-white p-8 shadow-lg shadow-warm-100/40 md:p-12"
                >
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
                        {/* Avatar */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-4">
                            <div className="relative h-40 w-40">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-200 via-teal-50 to-cream-200" />
                                <div className="absolute inset-[3px] rounded-full bg-white" />
                                <div className="absolute inset-[6px] flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-cream-100 to-cream-200">
                                    <span className="font-display text-5xl leading-none text-warm-800">DQ</span>
                                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-700">Fondatore</span>
                                </div>
                            </div>
                            {/* Contact chips */}
                            <div className="flex flex-col items-center gap-1.5 text-xs text-warm-500">
                                <span className="flex items-center gap-1.5"><MapPin size={12} />Cosenza, Italia</span>
                                <a href="mailto:domenico@zagreo.io" className="flex items-center gap-1.5 hover:text-teal-700 transition-colors">
                                    <Mail size={12} />domenico@zagreo.io
                                </a>
                                <a href="https://www.zagreo.io" className="flex items-center gap-1.5 hover:text-teal-700 transition-colors">
                                    <Globe size={12} />www.zagreo.io
                                </a>
                            </div>
                        </div>

                        {/* Main bio */}
                        <div className="flex-1">
                            <div className="mb-3 flex flex-wrap gap-2">
                                <span className="rounded-full bg-teal-700 px-4 py-1 text-sm font-semibold text-white">
                                    Board-Level Advisor
                                </span>
                                <span className="rounded-full border border-warm-200 bg-cream-100 px-4 py-1 text-sm text-warm-700">
                                    Value Creation Partner
                                </span>
                            </div>

                            <h3 className="mb-1 font-display text-2xl text-warm-900 md:text-3xl">
                                Domenico Quaglio
                            </h3>
                            <p className="mb-5 text-base font-medium text-teal-700">
                                Board-Level Advisor & Value Creation Partner
                            </p>

                            <p className="text-base leading-relaxed text-warm-500 mb-6 max-w-2xl">
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
                                        className="flex flex-col items-center rounded-2xl border border-teal-100 bg-teal-50/60 px-4 py-4 text-center"
                                    >
                                        <span className="font-display text-2xl font-normal text-teal-700 md:text-3xl">
                                            {m.value}
                                        </span>
                                        <span className="mt-1 text-xs leading-tight text-warm-500">{m.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
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
                        className="lg:col-span-3 flex flex-col gap-4"
                    >
                        <h3 className="font-display text-xl text-warm-800 mb-2 flex items-center gap-2">
                            <span className="h-px flex-1 bg-warm-200" />
                            <span>Esperienze Chiave</span>
                            <span className="h-px flex-1 bg-warm-200" />
                        </h3>

                        {experience.map((exp, i) => (
                            <motion.div
                                key={exp.org}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                                className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                                    exp.highlight
                                        ? "border-teal-200 bg-teal-50/50 shadow-sm shadow-teal-100"
                                        : "border-warm-200 bg-white hover:border-teal-200"
                                }`}
                            >
                                <div className="mb-1 flex items-start justify-between gap-3 flex-wrap">
                                    <div>
                                        <p className="font-semibold text-warm-900 text-sm">{exp.role}</p>
                                        <p className="text-xs font-medium text-teal-700">{exp.org}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-cream-200 px-2.5 py-0.5 text-[11px] font-medium text-warm-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-warm-500">{exp.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right column: Skills + Education */}
                    <div className="lg:col-span-2 flex flex-col gap-8">

                        {/* Competencies */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-2xl border border-warm-200 bg-white p-6"
                        >
                            <h3 className="mb-5 font-display text-xl text-warm-800 flex items-center gap-2">
                                <span className="h-px flex-1 bg-warm-200" />
                                <span>Competenze</span>
                                <span className="h-px flex-1 bg-warm-200" />
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {competencies.map((c, i) => (
                                    <motion.span
                                        key={c}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                                        className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                                            i < 1
                                                ? "border border-teal-200 bg-teal-700 text-white"
                                                : i < 3
                                                ? "border border-teal-200 bg-teal-50 text-teal-800"
                                                : "border border-warm-200 bg-cream-100 text-warm-700"
                                        }`}
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
                            className="rounded-2xl border border-warm-200 bg-white p-6"
                        >
                            <h3 className="mb-5 font-display text-xl text-warm-800 flex items-center gap-2">
                                <span className="h-px flex-1 bg-warm-200" />
                                <span>Formazione</span>
                                <span className="h-px flex-1 bg-warm-200" />
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
                                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50">
                                            <Award size={14} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-warm-900 leading-tight">{edu.degree}</p>
                                            <p className="text-xs text-warm-500 leading-snug">{edu.institution}</p>
                                            <p className="text-xs font-medium text-teal-700">{edu.detail}</p>
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
                            className="group flex items-center justify-center gap-2 rounded-2xl bg-teal-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-teal-700/15 transition-all duration-300 hover:bg-teal-800 hover:shadow-teal-700/25"
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
