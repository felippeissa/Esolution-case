"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

const DURATION = 1700;
const START_DELAY = 300;

/** Faixa de números que contam de 0 ao valor final quando entram na viewport. */
export function Stats() {
  const ref = useRef<HTMLDListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = setTimeout(() => {
          const t0 = performance.now();
          const step = (now: number) => {
            const k = Math.min(1, (now - t0) / DURATION);
            setProgress(1 - Math.pow(1 - k, 3)); // ease-out cúbico
            if (k < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        }, START_DELAY);
      },
      { threshold: 0.12 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <dl
      ref={ref}
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] overflow-hidden rounded-2xl border border-brand-150 bg-white"
    >
      {stats.map((s) => {
        const final = `${s.prefix ?? ""}${s.value}${s.suffix ?? ""}`;
        const current = `${s.prefix ?? ""}${Math.round(s.value * progress)}${s.suffix ?? ""}`;
        return (
          <div key={s.label} className="flex flex-col-reverse gap-1.5 border-r border-line px-7 py-[26px] last:border-r-0">
            <dt className="text-sm leading-normal text-ink-muted">{s.label}</dt>
            <dd className="text-[32px] font-extrabold tracking-[-0.03em] text-brand">
              <span aria-hidden="true">{current}</span>
              <span className="sr-only">{final}</span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
