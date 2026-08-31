import { severidadLabels, type Severidad } from "@/data/heuristicas";

const sevDot: Record<Severidad, string> = {
  0: "bg-sev0",
  1: "bg-sev1",
  2: "bg-sev2",
  3: "bg-sev3",
  4: "bg-sev4",
};

// Leyenda completa de la escala de severidad de Nielsen (0-4).
export function SeverityLegend() {
  return (
    <div className="card p-4 sm:p-5">
      <p className="eyebrow mb-3">Escala de severidad · Nielsen</p>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {([0, 1, 2, 3, 4] as Severidad[]).map((s) => (
          <li key={s} className="flex items-center gap-2 text-sm">
            <span
              aria-hidden
              className={
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white " +
                sevDot[s]
              }
            >
              {s}
            </span>
            <span className="text-muted">{severidadLabels[s]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Leyenda de veredictos del tablero de leyes.
export function VerdictLegend() {
  return (
    <div className="card p-4 sm:p-5">
      <p className="eyebrow mb-3">Veredicto</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <li className="flex items-center gap-2">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-cumple" />
          <span>
            <strong className="font-semibold text-ink">Cumple</strong> — el
            producto respeta la ley en el punto analizado
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-rompe" />
          <span>
            <strong className="font-semibold text-ink">Rompe</strong> — el
            producto incumple la ley en el punto analizado
          </span>
        </li>
      </ul>
    </div>
  );
}
