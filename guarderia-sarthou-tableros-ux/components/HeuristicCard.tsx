import type { Heuristica } from "@/data/heuristicas";
import { screenLabel } from "@/data/screens";
import { SeverityBadge } from "@/components/Badges";
import { Evidence } from "@/components/Evidence";

export function HeuristicCard({ heuristica }: { heuristica: Heuristica }) {
  const images = heuristica.capturas.map((src) => ({
    src,
    caption: screenLabel(src),
  }));
  const single = images.length === 1;

  return (
    <article className="card flex flex-col p-5 sm:p-6">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          <span className="eyebrow">{heuristica.id}</span>
          <h3 className="mt-0.5 text-lg font-semibold leading-tight text-ink">
            {heuristica.nombre}
          </h3>
        </div>
        <SeverityBadge severidad={heuristica.severidad} />
      </header>

      <div className="flex flex-col gap-5 sm:flex-row">
        <div
          className={
            single
              ? "w-full shrink-0 sm:w-40"
              : "w-full shrink-0 sm:w-64"
          }
        >
          <Evidence images={images} />
          {single && (
            <p className="mt-1.5 text-center font-mono text-[0.68rem] leading-tight text-faint">
              {heuristica.pantalla}
            </p>
          )}
        </div>

        <div className="flex-1">
          <p className="text-[0.95rem] leading-relaxed text-ink">
            {heuristica.explicacion}
          </p>
        </div>
      </div>
    </article>
  );
}
