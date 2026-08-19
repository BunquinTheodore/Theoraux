"use client";

import { useEffect, useRef } from "react";

export default function FlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Band the lines occupy: bottom of the hero, well below the text content.
    const bandStart = 0.74;
    const bandSpread = 0.26;

    const dots = Array.from({ length: 170 }, () => ({
      x: Math.random(),
      y: bandStart + Math.random() * (bandSpread + 0.05),
      r: Math.random() * 1 + 0.3,
    }));

    const lineCount = 18;
    let animationId: number;

    // Shared angular speed for every line/term keeps them locked in phase
    // forever (no drift), and wrapping t at an exact multiple of the cycle
    // keeps the sin() input bounded indefinitely without any visible jump.
    const speedBase = 0.00022;
    const cycle = (2 * Math.PI) / speedBase;
    const wrapPeriod = cycle * 10;

    const ridgeY = (nx: number, time: number) => {
      const baseY = height * bandStart;
      return (
        baseY +
        Math.sin(nx * 6 + time * speedBase) * 22 +
        Math.sin(nx * 13 + time * speedBase * 1.7) * 9
      );
    };

    const draw = (t: number) => {
      const time = t % wrapPeriod;
      const isDark = document.documentElement.classList.contains("dark");
      const lineRGB = isDark ? "255,255,255" : "0,0,0";
      const dotAlpha = isDark ? 0.18 : 0.16;

      ctx.clearRect(0, 0, width, height);

      // Soft dark blurred fill beneath the ridge line for depth.
      ctx.save();
      ctx.filter = "blur(28px)";
      ctx.beginPath();
      const fillStep = Math.max(6, Math.floor(width / 120));
      ctx.moveTo(0, ridgeY(0, time));
      for (let x = 0; x <= width; x += fillStep) {
        ctx.lineTo(x, ridgeY(x / width, time));
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const peakAlpha = isDark ? 0.5 : 0.2;
      const gradient = ctx.createLinearGradient(0, height * bandStart, 0, height);
      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(0.55, `rgba(0,0,0,${peakAlpha})`);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = `rgba(${lineRGB},${dotAlpha})`;
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x * width, d.y * height, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < lineCount; i++) {
        const progress = i / (lineCount - 1);
        const baseY = height * (bandStart + progress * bandSpread);
        const amp1 = 22 + progress * 20;
        const amp2 = 9 + progress * 9;
        const isRidge = i === 0;
        const opacity = isRidge ? 0.55 : 0.34 - progress * 0.2;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${lineRGB},${Math.max(opacity, 0.04)})`;
        ctx.lineWidth = isRidge ? 1.4 : 1;

        const step = Math.max(4, Math.floor(width / 220));
        for (let x = 0; x <= width; x += step) {
          const nx = x / width;
          const y =
            baseY +
            Math.sin(nx * 6 + time * speedBase + i * 0.35) * amp1 +
            Math.sin(nx * 13 + time * speedBase * 1.7 + i * 0.5) * amp2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}
