import Image from "next/image";
import { brands, heroImage } from "@/lib/data";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Stats } from "./Stats";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-50">
      <div
        aria-hidden="true"
        className="absolute -right-[120px] -top-[180px] size-[560px] rounded-full bg-[radial-gradient(circle,rgb(55_88_249/0.16),rgb(55_88_249/0)_70%)]"
      />

      <div className="container-page relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-14 pb-[72px] pt-[88px]">
        <div className="flex flex-col gap-6">
          <Reveal
            as="p"
            className="self-start rounded-full border border-brand-200 bg-white px-3.5 py-[7px] text-[13px] font-semibold text-brand"
          >
            Software de gestão para hotelaria, multipropriedade e parques
          </Reveal>
          <Reveal
            as="h1"
            delay={90}
            className="text-balance text-[clamp(36px,4.6vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em]"
          >
            Da sala de vendas ao check-out, toda a sua operação em um único ecossistema
          </Reveal>
          <Reveal as="p" delay={180} className="max-w-[560px] text-pretty text-lg leading-[1.65] text-ink-muted">
            A eSolution reúne multipropriedade, hotel, parque, PDV e back office em uma plataforma integrada. O que
            acontece em uma área chega às outras sem redigitação, planilhas paralelas ou rotinas manuais.
          </Reveal>
          <Reveal delay={260} className="flex flex-wrap gap-3.5">
            <Button href="#demo">Agendar uma demonstração</Button>
            <Button href="#solucoes" variant="secondary">
              Conhecer as soluções
            </Button>
          </Reveal>
          <Reveal as="p" delay={320} className="max-w-[460px] text-[13.5px] leading-[1.55] text-ink-subtle">
            Você preenche o formulário e nosso time comercial entra em contato para marcar a apresentação.
          </Reveal>
        </div>

        <Reveal delay={200} y={48} className="relative">
          <Image
            src={heroImage}
            alt="Tela do eSolution Multipropriedade em um notebook"
            width={1024}
            height={600}
            priority
            sizes="(min-width: 1200px) 560px, 100vw"
            className="h-auto w-full drop-shadow-[0_30px_40px_rgb(17_25_40/0.18)]"
          />
          <div className="absolute bottom-9 left-3 flex flex-col gap-0.5 rounded-xl bg-white px-[18px] py-3.5 shadow-float motion-safe:animate-float-up sm:-left-7">
            <span className="text-xs font-medium text-ink-subtle">Venda fechada → financeiro</span>
            <span className="text-[15px] font-bold">Sem redigitação</span>
          </div>
          <div className="absolute right-3 top-14 flex flex-col gap-0.5 rounded-xl bg-ink px-[18px] py-3.5 text-white shadow-float motion-safe:animate-float-down sm:-right-4">
            <span className="text-xs font-medium text-gray-400">PDV → conta do hotel</span>
            <span className="text-[15px] font-bold">Em tempo real</span>
          </div>
        </Reveal>
      </div>

      <div className="container-page relative pb-16">
        <Reveal delay={380}>
          <Stats />
        </Reveal>

        <div className="mt-9 flex flex-col items-center gap-[18px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-subtle">Operam com a eSolution</p>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {brands.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 60} className="text-lg font-bold tracking-[-0.01em] text-ink-brand-name">
                {b}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
