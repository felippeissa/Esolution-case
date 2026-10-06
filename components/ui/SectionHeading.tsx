import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  /** "center" para seções com título centralizado */
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, id, align = "left", tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : ""} ${className}`}>
      <Reveal as="span" className={`eyebrow ${dark ? "!text-brand-soft" : ""}`}>
        {eyebrow}
      </Reveal>
      <Reveal as="h2" id={id} delay={70} className="h2">
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={140}
          className={`text-[17px] leading-[1.65] text-pretty ${dark ? "text-night-text" : "text-ink-muted"}`}
        >
          {description}
        </Reveal>
      )}
    </div>
  );
}
