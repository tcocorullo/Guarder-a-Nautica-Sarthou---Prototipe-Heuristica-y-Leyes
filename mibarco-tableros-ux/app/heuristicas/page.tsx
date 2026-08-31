import type { Metadata } from "next";
import { BoardHeader } from "@/components/BoardHeader";
import { SeverityLegend } from "@/components/Legends";
import { HeuristicasBoard } from "@/components/HeuristicasBoard";

export const metadata: Metadata = {
  title: "Tablero 2 · Heurísticas de Nielsen — MiBarco.Online",
  description:
    "Evaluación heurística completa de MiBarco.Online sobre las 10 heurísticas de Nielsen, con severidad 0-4.",
};

export default function HeuristicasPage() {
  return (
    <div className="container-page py-12 sm:py-16">
      <BoardHeader
        eyebrow="Tablero 2"
        titulo="Heurísticas de Nielsen"
        metodo="Evaluación heurística completa: las 10 heurísticas de Nielsen sobre MiBarco.Online. Cada una lleva una severidad de 0 a 4, una captura del punto de dolor (o del punto donde se cumple bien) y una explicación de qué pasa, por qué rompe o cumple la heurística y qué impacto tiene en la persona usuaria."
      >
        <SeverityLegend />
      </BoardHeader>

      <div className="mt-10">
        <HeuristicasBoard />
      </div>
    </div>
  );
}
