import Image from "next/image";
import { products } from "@/lib/data";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/** Variante alternativa da seção Soluções (prop `layout="grid"`). */
export function SolutionsGrid() {
  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-5">
        {products.map((p, i) => (
          <Reveal as="li" key={p.name} delay={i * 70} className="flex flex-col gap-4 rounded-2xl border border-brand-150 bg-white p-7">
            <div className="rounded-[10px] bg-brand-50 p-3">
              <Image
                src={p.img}
                alt={`Tela do ${p.name}`}
                width={1024}
                height={600}
                unoptimized={p.animated}
                sizes="(min-width: 1024px) 340px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold tracking-[-0.01em]">{p.name}</h3>
              <p className="text-[15px] leading-[1.55] text-ink-muted">{p.desc}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-normal text-ink-body">
                  <span aria-hidden="true" className="mt-[7px] size-1.5 flex-none rounded-full bg-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Button href="#demo">Agendar uma demonstração</Button>
      </div>
    </>
  );
}
