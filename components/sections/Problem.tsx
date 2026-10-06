import { pains } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Problem() {
  return (
    <section aria-labelledby="problema" className="container-page section-y">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-14">
        <SectionHeading
          eyebrow="O problema"
          id="problema"
          title="Quando cada área usa um sistema, quem faz a integração é a sua equipe"
          description="Um empreendimento de hospitalidade vende cotas, hospeda, opera parque e restaurante e ainda fecha o financeiro. Com um software para cada frente, a informação circula por exportações, planilhas e retrabalho."
          className="gap-5"
        />
        <div className="flex flex-col gap-3">
          <ol className="flex flex-col gap-3">
            {pains.map((text, i) => (
              <Reveal
                as="li"
                key={text}
                delay={i * 100}
                className="flex items-start gap-4 rounded-xl border border-line bg-neutral-50 px-[22px] py-5"
              >
                <span
                  aria-hidden="true"
                  className="grid size-7 flex-none place-items-center rounded-lg bg-danger-soft text-[13px] font-bold text-danger"
                >
                  {i + 1}
                </span>
                <span className="text-base leading-[1.55] text-ink-body">{text}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-3 text-pretty text-[17px] font-semibold leading-[1.6]">
            O custo aparece em horas de equipe, em erros de cobrança e em decisões tomadas com dados de ontem.
          </p>
        </div>
      </div>
    </section>
  );
}
