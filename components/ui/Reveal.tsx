"use client";

import { createElement, useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  /** atraso base em ms */
  delay?: number;
  /** deslocamento vertical inicial em px */
  y?: number;
  /** usa scale(.96) em vez de translateY */
  scale?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Anima o elemento ao entrar na viewport. Respeita prefers-reduced-motion via CSS. */
export function Reveal({ as = "div", delay = 0, y = 24, scale = false, id, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms`, "--reveal-y": `${y}px` } as CSSProperties;

  return createElement(
    as,
    {
      ref,
      id,
      className,
      style,
      "data-reveal": "",
      "data-scale": scale ? "" : undefined,
      "data-revealed": revealed ? "" : undefined,
    },
    children,
  );
}
