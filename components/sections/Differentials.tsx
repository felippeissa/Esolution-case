import { differentials } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-titulo" className="container-page section-y">
      <SectionHeading
        eyebrow="Diferenciais"
        id="diferenciais-titulo"
        title="Por que empreendimentos escolhem a eSolution"
        className="mb-12 max-w-[620px]"
      />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        {differentials.map((d, i) => (
          <Reveal as="li" key={d.title} delay={i * 90} className="flex">
            <article className="flex w-full flex-col gap-3.5 rounded-2xl border border-line bg-white p-[30px] transition duration-[250ms] hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
              <span aria-hidden="true" className="grid size-11 place-items-center rounded-xl bg-brand-100 text-[15px] font-extrabold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[19px] font-bold">{d.title}</h3>
              <p className="text-[15px] leading-[1.65] text-ink-muted">{d.text}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
