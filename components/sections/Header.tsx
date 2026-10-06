import Image from "next/image";
import { logoImage, nav } from "@/lib/data";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="container-page flex items-center justify-between gap-6 py-4">
        <a href="#top" aria-label="eSolution, ir para o topo" className="flex items-center">
          <Image src={logoImage} alt="eSolution" width={160} height={34} className="h-[34px] w-auto" priority />
        </a>
        <nav aria-label="Principal" className="hidden gap-7 text-[15px] font-medium md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="!text-ink-muted transition-colors hover:!text-brand">
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#demo" size="sm" className="whitespace-nowrap">
          Agendar demonstração
        </Button>
      </div>
    </header>
  );
}
