"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { segments } from "@/lib/data";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold">
      {label}
      {children}
    </label>
  );
}

export function DemoForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: integrar com CRM/endpoint real (a definir com o cliente).
    // Ex.: await fetch("/api/demo", { method: "POST", body: JSON.stringify(data) });
    void data;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center gap-4 p-6 text-center motion-safe:animate-pop-in"
      >
        <span aria-hidden="true" className="grid size-16 place-items-center rounded-full bg-success-soft">
          <span className="size-[22px] rounded-full bg-success" />
        </span>
        <p className="max-w-[340px] text-xl font-bold leading-snug">
          Recebemos o seu pedido. Em breve um especialista da eSolution entra em contato.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="cursor-pointer text-sm font-semibold text-brand hover:text-brand-hover"
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3.5">
        <Field label="Nome completo">
          <input name="nome" required autoComplete="name" className="field" />
        </Field>
        <Field label="E-mail">
          <input name="email" type="email" required autoComplete="email" className="field" />
        </Field>
        <Field label="Telefone">
          <input name="telefone" type="tel" required autoComplete="tel" className="field" />
        </Field>
        <Field label="Empresa">
          <input name="empresa" required autoComplete="organization" className="field" />
        </Field>
        <Field label="Cargo">
          <input name="cargo" autoComplete="organization-title" className="field" />
        </Field>
        <Field label="Segmento">
          <select name="segmento" required defaultValue="" className="field">
            <option value="" disabled>
              Selecione
            </option>
            {segments.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Mensagem (opcional)">
        <textarea
          name="mensagem"
          rows={3}
          placeholder="O que você gostaria de ver na demonstração?"
          className="field resize-y"
        />
      </Field>
      <button
        type="submit"
        className="btn-primary mt-1 w-full cursor-pointer border-0 p-[15px] text-base font-bold"
      >
        Agendar demonstração
      </button>
      <p className="text-[13px] leading-normal text-ink-muted">
        Depois do envio, nosso time comercial entra em contato para combinar data e horário.
      </p>
      <p className="text-xs leading-normal text-ink-subtle">
        Ao enviar, você concorda em receber comunicações da eSolution Tecnologia, conforme a LGPD e a{" "}
        <a href="#">Política de Privacidade</a>.
      </p>
    </form>
  );
}
