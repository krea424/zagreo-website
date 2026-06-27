"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speed: number;
    drift: number;
    baseAlpha: number;
    twinkle: number;
}

/**
 * Ambient teal particle field — the page's signature motion.
 * Renders a drifting constellation on a canvas, sized to its parent.
 * Honours prefers-reduced-motion by painting a single static frame.
 */
export default function ParticleField({ className = "" }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let particles: Particle[] = [];
        let raf = 0;
        let width = 0;
        let height = 0;

        const build = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            width = rect?.width ?? window.innerWidth;
            height = rect?.height ?? window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(110, Math.floor((width * height) / 14000));
            particles = Array.from({ length: count }, (_, i) => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.6 + 0.4,
                speed: Math.random() * 0.18 + 0.04,
                drift: (Math.random() - 0.5) * 0.12,
                baseAlpha: Math.random() * 0.5 + 0.12,
                twinkle: Math.random() * Math.PI * 2 + i,
            }));
        };

        const paint = (t: number) => {
            ctx.clearRect(0, 0, width, height);
            for (const p of particles) {
                if (!reduced) {
                    p.y -= p.speed;
                    p.x += p.drift;
                    if (p.y < -4) { p.y = height + 4; p.x = Math.random() * width; }
                    if (p.x < -4) p.x = width + 4;
                    if (p.x > width + 4) p.x = -4;
                }
                const flicker = reduced ? 1 : 0.65 + 0.35 * Math.sin(t * 0.0012 + p.twinkle);
                const alpha = p.baseAlpha * flicker;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(94, 234, 212, ${alpha.toFixed(3)})`;
                ctx.fill();
            }
            if (!reduced) raf = requestAnimationFrame(paint);
        };

        build();
        paint(0);

        let resizeTimer = 0;
        const onResize = () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                build();
                if (reduced) paint(0);
            }, 180);
        };
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", onResize);
            window.clearTimeout(resizeTimer);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
        />
    );
}
