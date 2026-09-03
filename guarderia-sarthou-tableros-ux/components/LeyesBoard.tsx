"use client";

import { useMemo, useState } from "react";
import { leyes, type Veredicto } from "@/data/leyes";
import { LawCard } from "@/components/LawCard";
import { FilterChips, type ChipOption } from "@/components/FilterChips";
import { LightboxProvider } from "@/components/Lightbox";

type Filtro = "todas" | Veredicto;

export function LeyesBoard() {
  const [filtro, setFiltro] = useState<Filtro>("todas");

  const counts = useMemo(() => {
    const cumple = leyes.filter((l) => l.veredicto === "cumple").length;
    const rompe = leyes.filter((l) => l.veredicto === "rompe").length;
    return { todas: leyes.length, cumple, rompe };
  }, []);

  const opciones: ChipOption<Filtro>[] = [
    { value: "todas", label: "Todas", count: counts.todas },
    { value: "cumple", label: "Cumple", count: counts.cumple },
    { value: "rompe", label: "Rompe", count: counts.rompe },
  ];

  const visibles = useMemo(
    () => (filtro === "todas" ? leyes : leyes.filter((l) => l.veredicto === filtro)),
    [filtro],
  );

  return (
    <LightboxProvider>
      <div className="mb-8">
        <FilterChips
          legend="Filtrar por veredicto"
          options={opciones}
          value={filtro}
          onChange={setFiltro}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {visibles.map((ley) => (
          <LawCard key={ley.id} ley={ley} />
        ))}
      </div>
    </LightboxProvider>
  );
}
