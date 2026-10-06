"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { products } from "@/lib/data";
import { Button } from "../ui/Button";

export function SolutionsTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const product = products[active];

  // Padrão WAI-ARIA de tabs: setas, Home e End movem a seleção
  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = products.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="flex flex-wrap items-start gap-6">
      <div
        role="tablist"
        aria-label="Produtos eSolution"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex max-w-full flex-[1_1_260px] flex-col gap-1.5"
      >
        {products.map((p, i) => {
          const on = i === active;
          return (
            <button
              key={p.name}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`tab-${i}`}
              aria-selected={on}
              aria-controls="painel-produto"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`flex cursor-pointer flex-col gap-[3px] rounded-xl border px-[18px] py-4 text-left transition-colors ${
                on
                  ? "border-brand bg-brand text-white"
                  : "border-brand-150 bg-white text-ink hover:border-brand-300"
              }`}
            >
              <span className="text-base font-bold">{p.name}</span>
              <span className="text-[13px] opacity-75">{p.tag}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="painel-produto"
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
        className="min-w-0 flex-[999_1_420px] rounded-[20px] border border-brand-150 bg-white p-6 shadow-panel sm:p-9"
      >
        {/* key reinicia a animação de entrada a cada troca de produto */}
        <div key={active} className="flex flex-col gap-6 [&>*]:motion-safe:animate-panel-in">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-[28px] font-extrabold tracking-[-0.02em]">{product.name}</h3>
            <p className="text-pretty text-[16.5px] leading-[1.6] text-ink-muted">{product.desc}</p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-start gap-6" style={{ animationDelay: "60ms" }}>
            <ul className="flex flex-col gap-3.5">
              {product.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] leading-[1.55] text-ink-body">
                  <span aria-hidden="true" className="mt-[3px] grid size-[18px] flex-none place-items-center rounded-full bg-brand">
                    <span className="size-1.5 rounded-full bg-white" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="grid place-items-center rounded-xl bg-brand-50 p-4">
              <Image
                src={product.img}
                alt={`Tela do ${product.name}`}
                width={1024}
                height={600}
                unoptimized={product.animated}
                sizes="(min-width: 1024px) 400px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div
            className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5"
            style={{ animationDelay: "120ms" }}
          >
            <span className="text-sm text-ink-subtle">
              {active + 1} de {products.length} produtos
            </span>
            <Button href="#demo" size="md">
              Agendar uma demonstração
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
