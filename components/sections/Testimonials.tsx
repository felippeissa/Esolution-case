import Image from "next/image";
import { testimonials } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos" className="container-page section-y">
      <SectionHeading
        align="center"
        eyebrow="Depoimentos"
        id="depoimentos"
        title="O que dizem os clientes e parceiros"
        className="mb-12"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-5">
        {testimonials.map((t, i) => (
          <Reveal as="figure" key={t.name} delay={i * 120} className="flex flex-col justify-between gap-6 rounded-2xl bg-brand-50 p-8">
            <div className="flex flex-col gap-3.5">
              <span aria-hidden="true" className="text-5xl font-extrabold leading-[0.6] text-brand">“</span>
              <blockquote className="text-pretty text-[17px] leading-[1.7] text-ink-strong">{t.quote}</blockquote>
            </div>
            <figcaption className="flex items-center gap-3.5">
              <Image
                src={t.photo}
                alt=""
                width={56}
                height={56}
                className="size-14 flex-none rounded-full bg-[#e3e9fd] object-cover"
              />
              <span className="flex flex-col gap-0.5">
                <span className="text-[15.5px] font-bold">{t.name}</span>
                <span className="text-[13.5px] leading-snug text-ink-muted">{t.role}</span>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
