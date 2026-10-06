import Image from "next/image";
import { logoImage } from "@/lib/data";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#clientes", label: "Clientes" },
  { href: "#sobre", label: "Nossa história" },
  { href: "#demo", label: "Contato" },
  { href: "#", label: "Política de Privacidade" }, // TODO: preencher URL real
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-wrap items-center justify-between gap-5 py-10">
        <Image src={logoImage} alt="eSolution" width={141} height={30} className="h-[30px] w-auto" />
        <nav aria-label="Rodapé" className="flex flex-wrap gap-6 text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="!text-ink-muted transition-colors hover:!text-brand">
              {l.label}
            </a>
          ))}
        </nav>
        <small className="text-[13px] text-ink-subtle">© 2026 eSolution Tecnologia</small>
      </div>
    </footer>
  );
}
