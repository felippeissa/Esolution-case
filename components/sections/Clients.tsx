import { clients, contact } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Clients() {
  return (
    <section id="clientes" aria-labelledby="clientes-titulo" className="border-y border-line bg-neutral-50">
      <div className="container-page section-y">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Clientes"
            id="clientes-titulo"
            title="Quem já opera com a eSolution"
            description="De resorts com parque aquático a redes hoteleiras, estes empreendimentos rodam parte ou toda a operação na plataforma."
            className="max-w-[640px]"
          />
          <a href={contact.clientsUrl} target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold">
            Ver todos os clientes →<span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>

        <Reveal className="overflow-x-auto rounded-2xl border border-line-2 bg-white">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">Empreendimentos clientes, localização e soluções em uso</caption>
            <thead>
              <tr className="border-b border-line-2 bg-neutral-50 text-[12.5px] uppercase tracking-[0.05em] text-ink-subtle">
                <th scope="col" className="w-[24%] px-6 py-3.5 font-bold">Empreendimento</th>
                <th scope="col" className="w-[22%] px-4 py-3.5 font-bold">Local</th>
                <th scope="col" className="px-4 py-3.5 font-bold">Soluções em uso</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.name} className="border-b border-line-3 last:border-b-0">
                  <th scope="row" className="px-6 py-[18px] align-middle text-[15.5px] font-bold">{c.name}</th>
                  <td className="px-4 py-[18px] align-middle text-[14.5px] text-ink-muted">{c.place}</td>
                  <td className="px-4 py-[18px] align-middle">
                    <ul className="flex flex-wrap gap-1.5">
                      {c.tags.map((t) => (
                        <li key={t} className="rounded-full bg-brand-100 px-2.5 py-1 text-[12.5px] font-semibold text-brand">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
