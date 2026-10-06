import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
};

const sizes = {
  sm: "px-5 py-[11px] text-[15px]",
  md: "px-[22px] py-3 text-[15px]",
  lg: "px-[26px] py-[15px] text-base",
};

/** Link estilizado como botão (CTAs âncora da página). */
export function Button({ href, variant = "primary", size = "lg", className = "", children }: Props) {
  const base =
    variant === "primary"
      ? "btn-primary shadow-cta"
      : "inline-block rounded-lg border border-line-input bg-white font-semibold !text-ink transition-colors hover:border-brand hover:!text-brand";
  return (
    <a href={href} className={`${base} ${sizes[size]} ${variant === "primary" && size !== "lg" ? "!shadow-none" : ""} ${className}`}>
      {children}
    </a>
  );
}
