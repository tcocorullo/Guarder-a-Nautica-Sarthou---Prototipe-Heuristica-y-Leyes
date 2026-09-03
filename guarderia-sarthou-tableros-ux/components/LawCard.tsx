import type { LeyUX } from "@/data/leyes";
import { screenLabel } from "@/data/screens";
import { VerdictBadge } from "@/components/Badges";
import { Evidence } from "@/components/Evidence";

export function LawCard({ ley }: { ley: LeyUX }) {
  const image = { src: ley.captura, caption: screenLabel(ley.captura) };

  return (
    <article className="card flex flex-col p-5 sm:p-6">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          <span className="eyebrow">{ley.id}</span>
          <h3 className="mt-0.5 text-lg font-semibold leading-tight text-ink">
            {ley.nombre}
          </h3>
        </div>
        <VerdictBadge veredicto={ley.veredicto} />
      </header>

      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="w-full shrink-0 sm:w-40">
          <Evidence images={[image]} />
          <p className="mt-1.5 text-center font-mono text-[0.68rem] leading-tight text-faint">
            {ley.pantalla}
          </p>
        </div>

        <div className="flex-1">
          <p className="text-sm italic leading-relaxed text-muted">
            {ley.preguntaGuia}
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink">
            {ley.explicacion}
          </p>
        </div>
      </div>
    </article>
  );
}
