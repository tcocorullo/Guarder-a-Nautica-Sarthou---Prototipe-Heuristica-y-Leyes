import type { Veredicto } from "@/data/leyes";
import type { Severidad } from "@/data/heuristicas";
import { severidadLabels } from "@/data/heuristicas";

// Clases estáticas completas: nunca construir nombres de clase por concatenación,
// el JIT de Tailwind no los detecta.

const verdictClass: Record<Veredicto, string> = {
  cumple: "bg-cumple-soft text-cumple",
  rompe: "bg-rompe-soft text-rompe",
};

const verdictLabel: Record<Veredicto, string> = {
  cumple: "Cumple",
  rompe: "Rompe",
};

export function VerdictBadge({ veredicto }: { veredicto: Veredicto }) {
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold " +
        verdictClass[veredicto]
      }
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-current"
      />
      {verdictLabel[veredicto]}
    </span>
  );
}

const sevBadgeClass: Record<Severidad, string> = {
  0: "bg-sev0-soft text-sev0",
  1: "bg-sev1-soft text-sev1",
  2: "bg-sev2-soft text-sev2",
  3: "bg-sev3-soft text-sev3",
  4: "bg-sev4-soft text-sev4",
};

const sevNumBg: Record<Severidad, string> = {
  0: "bg-sev0",
  1: "bg-sev1",
  2: "bg-sev2",
  3: "bg-sev3",
  4: "bg-sev4",
};

// Badge de severidad: número siempre visible + etiqueta. El color nunca es
// la única señal (accesibilidad).
export function SeverityBadge({ severidad }: { severidad: Severidad }) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-xs font-semibold " +
        sevBadgeClass[severidad]
      }
    >
      <span
        aria-hidden
        className={
          "flex h-5 w-5 items-center justify-center rounded-full text-[0.7rem] font-bold text-white " +
          sevNumBg[severidad]
        }
      >
        {severidad}
      </span>
      <span>
        <span className="sr-only">Severidad {severidad}: </span>
        {severidadLabels[severidad]}
      </span>
    </span>
  );
}
