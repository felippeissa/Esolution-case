import { contact } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { DemoForm } from "./DemoForm";

export function DemoCta() {
  return (
    <section id="demo" aria-labelledby="demo-titulo" className="px-6 pb-[110px]">
      <Reveal scale className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-brand text-white">
        <div
          aria-hidden="true"
          className="absolute -bottom-[200px] -left-[120px] size-[520px] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.14),rgb(255_255_255/0)_70%)]"
        />
        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-12 p-8 sm:px-14 sm:py-16">
          <div className="flex flex-col gap-5">
            <h2 id="demo-titulo" className="h2">
              Veja a eSolution funcionando na sua operação
            </h2>
            <p className="text-pretty text-[17px] leading-[1.65] text-brand-250">
              Conte qual é o seu segmento e o que você precisa resolver. Um especialista apresenta os módulos que fazem
              sentido para o seu empreendimento.
            </p>
            <div className="mt-4 flex flex-col gap-3.5 border-t border-white/20 pt-6">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-brand-300">Outros canais</h3>
              <a href={contact.phone.href} className="text-base font-semibold !text-white hover:underline">
                {contact.phone.label}
              </a>
              <a href={`mailto:${contact.email}`} className="text-base font-semibold !text-white hover:underline">
                {contact.email}
              </a>
              <address className="text-[14.5px] not-italic leading-[1.55] text-brand-250">{contact.address}</address>
            </div>
          </div>

          <div className="rounded-[18px] bg-white p-8 text-ink shadow-form">
            <DemoForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
