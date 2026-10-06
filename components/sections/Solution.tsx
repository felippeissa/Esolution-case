import { pillars } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Solution() {
  return (
    <section aria-labelledby="solucao" className="bg-night text-white">
      <div className="container-page section-y">
        <SectionHeading
          tone="dark"
          eyebrow="A solução"
          id="solucao"
          title="Um ecossistema feito para o ciclo inteiro da hospitalidade"
          description="Os produtos eSolution compartilham a mesma base. O contrato vendido alimenta o financeiro, a reserva respeita o uso das cotas e o consumo no PDV cai direto na conta do hotel. Você contrata a plataforma completa ou só os módulos de que a operação precisa hoje."
          className="mb-14 max-w-[760px] gap-5"
        />
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.n}
              delay={i * 120}
              className="flex flex-col gap-3.5 rounded-2xl border border-night-line bg-night-card p-8"
            >
              <span className="font-mono text-[13px] text-brand-soft">{p.n}</span>
              <h3 className="text-[22px] font-bold tracking-[-0.01em]">{p.title}</h3>
              <p className="text-[15.5px] leading-[1.65] text-night-text">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
