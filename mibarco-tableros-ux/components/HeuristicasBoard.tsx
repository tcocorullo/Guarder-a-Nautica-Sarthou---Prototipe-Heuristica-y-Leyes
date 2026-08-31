"use client";

import { useMemo, useState } from "react";
import { heuristicas, type Severidad } from "@/data/heuristicas";
import { HeuristicCard } from "@/components/HeuristicCard";
import { FilterChips, type ChipOption } from "@/components/FilterChips";
import { LightboxProvider } from "@/components/Lightbox";

type Filtro = "todas" | "0" | "1" | "2" | "3" | "4";
type Orden = "severidad" | "canonico";

export function HeuristicasBoard() {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [orden, setOrden] = useState<Orden>("severidad");

  const opcionesFiltro: ChipOption<Filtro>[] = useMemo(() => {
    const base: ChipOption<Filtro>[] = [
      { value: "todas", label: "Todas", count: heuristicas.length },
    ];
    ([0, 1, 2, 3, 4] as Severidad[]).forEach((s) => {
      const count = heuristicas.filter((h) => h.severidad === s).length;
      if (count > 0) {
        base.push({ value: String(s) as Filtro, label: `Sev. ${s}`, count });
      }
    });
    return base;
  }, []);

  const opcionesOrden: ChipOption<Orden>[] = [
    { value: "severidad", label: "Severidad ↓" },
    { value: "canonico", label: "Orden H01→H10" },
  ];

  const visibles = useMemo(() => {
    const filtradas =
      filtro === "todas"
        ? heuristicas
        : heuristicas.filter((h) => String(h.severidad) === filtro);
    const ordenadas = [...filtradas].sort((a, b) => {
      if (orden === "canonico") return a.id.localeCompare(b.id);
      return b.severidad - a.severidad || a.id.localeCompare(b.id);
    });
    return ordenadas;
  }, [filtro, orden]);

  return (
    <LightboxProvider>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterChips
          legend="Filtrar por severidad"
          options={opcionesFiltro}
          value={filtro}
          onChange={setFiltro}
        />
        <FilterChips
          legend="Ordenar"
          options={opcionesOrden}
          value={orden}
          onChange={setOrden}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {visibles.map((h) => (
          <HeuristicCard key={h.id} heuristica={h} />
        ))}
      </div>
    </LightboxProvider>
  );
}
