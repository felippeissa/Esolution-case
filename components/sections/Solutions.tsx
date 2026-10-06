import { SectionHeading } from "../ui/SectionHeading";
import { SolutionsGrid } from "./SolutionsGrid";
import { SolutionsTabs } from "./SolutionsTabs";

type Props = { layout?: "tabs" | "grid" };

export function Solutions({ layout = "tabs" }: Props) {
  return (
    <section id="solucoes" aria-labelledby="solucoes-titulo" className="bg-brand-50">
      <div className="container-page section-y">
        <SectionHeading
          align="center"
          eyebrow="Soluções por operação"
          id="solucoes-titulo"
          title="Uma solução para cada frente do seu empreendimento"
          description="Sete produtos que funcionam sozinhos e rendem mais quando trabalham juntos."
          className="mx-auto mb-14 max-w-[720px]"
        />
        {layout === "grid" ? <SolutionsGrid /> : <SolutionsTabs />}
      </div>
    </section>
  );
}
