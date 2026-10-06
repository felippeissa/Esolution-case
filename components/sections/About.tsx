import Image from "next/image";
import { board, hqImage, timeline } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-night text-white">
      <div className="container-page section-y grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-16">
        <div className="flex flex-col gap-5">
          <SectionHeading
            tone="dark"
            eyebrow="Sobre a eSolution"
            id="sobre-titulo"
            title="Mais de 20 anos dedicados à hospitalidade"
            description="O primeiro sistema hoteleiro da eSolution começou a ser desenvolvido em 2002. A empresa foi constituída em 2007, em Caldas Novas (GO), por Carmelito Júnior, Lincon Cléver e Marcello Guimarães, e lançou a primeira versão do sistema de Multipropriedade em 2010, quando o mercado ainda tinha poucas opções para gestão de timeshare."
            className="gap-5"
          />
          <Reveal as="p" delay={140} className="text-pretty text-[16.5px] leading-[1.7] text-night-text">
            Em 2019 veio a expansão internacional e o Só Falta.eu. Em 2024, as integrações com inteligência artificial.
            Hoje a plataforma atende empreendimentos no Brasil, na Argentina, no Paraguai e em Portugal.
          </Reveal>

          <div className="mt-3 flex flex-col gap-3">
            <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-ink-subtle">Diretoria</h3>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2.5">
              {board.map((b, i) => (
                <Reveal
                  as="li"
                  key={b.name}
                  delay={i * 70}
                  className="flex items-center gap-3 rounded-xl border border-night-line bg-night-card px-3.5 py-3"
                >
                  <Image
                    src={b.photo}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12 flex-none rounded-full bg-night-line object-cover object-top"
                  />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-bold">{b.name}</span>
                    <span className="text-[13px] text-night-text">{b.role}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col pt-2">
          <ol>
            {timeline.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 110} className="grid grid-cols-[72px_20px_1fr] items-start gap-4">
                <span className="text-xl font-extrabold leading-[1.3] tracking-[-0.02em] text-brand-soft">{m.year}</span>
                <span aria-hidden="true" className="flex flex-col items-center self-stretch">
                  <span className="mt-1.5 size-3.5 flex-none rounded-full border-[3px] border-night bg-brand shadow-[0_0_0_1px_var(--color-brand)]" />
                  <span className="w-px flex-1 bg-night-line" />
                </span>
                <span className="pb-[30px] text-[15.5px] leading-[1.6] text-night-text-2">{m.text}</span>
              </Reveal>
            ))}
          </ol>
          <Reveal as="figure" className="mt-2 flex flex-col gap-2.5">
            <Image
              src={hqImage}
              alt="Fachada da sede da eSolution em Caldas Novas (GO)"
              width={1024}
              height={640}
              sizes="(min-width: 1200px) 520px, 100vw"
              className="h-auto w-full rounded-[14px]"
            />
            <figcaption className="text-[13px] text-ink-subtle">Sede da eSolution em Caldas Novas (GO)</figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
