"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Faq() {
  // Um item aberto por vez; o primeiro começa aberto. -1 = todos fechados.
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-titulo" className="mx-auto w-full max-w-[860px] px-6 section-y">
      <SectionHeading align="center" eyebrow="FAQ" id="faq-titulo" title="Perguntas frequentes" className="mb-11" />
      <ul className="flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal as="li" key={f.q} delay={i * 70} className="rounded-[14px] border border-line-2 bg-white shadow-faq">
              <h3>
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-resp-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-[14px] px-6 py-[22px] text-left"
                >
                  <span className="text-[17px] font-bold">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="grid size-8 flex-none place-items-center rounded-lg bg-brand-100 text-lg font-semibold text-brand"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={`faq-resp-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="px-6 pb-[22px] motion-safe:animate-faq-in"
                >
                  <p className="text-[15.5px] leading-[1.7] text-ink-muted">{f.a}</p>
                </div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
