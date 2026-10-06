import Image from "next/image";
import { partners } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";

/** Uma "faixa" de logos. Renderizada duas vezes para o loop contínuo (-50%). */
function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex flex-none items-center" aria-hidden={hidden || undefined}>
      {partners.map((p) => (
        <li key={p.name} className="flex-none px-6 sm:px-9">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={hidden ? -1 : undefined}
            aria-label={`${p.name} (abre em nova aba)`}
            className="relative block h-14 w-36 opacity-60 grayscale transition-opacity hover:opacity-100 sm:w-40"
          >
            {/* Mesma caixa para todas as logos; object-contain preserva a proporção */}
            <Image src={p.logo} alt={hidden ? "" : p.name} fill sizes="160px" className="object-contain" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Partners() {
  return (
    <section aria-labelledby="parceiros" className="border-y border-line bg-neutral-50 py-20">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Nossos parceiros"
          id="parceiros"
          title="Quem caminha com a eSolution"
          className="mb-12"
        />
      </div>

      {/* Pausa ao passar o mouse ou focar um link; sem animação com prefers-reduced-motion */}
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] motion-safe:group-focus-within:[animation-play-state:paused] motion-reduce:w-full motion-reduce:overflow-x-auto">
          <LogoRow />
          <span className="contents motion-reduce:hidden">
            <LogoRow hidden />
          </span>
        </div>
      </div>
    </section>
  );
}
