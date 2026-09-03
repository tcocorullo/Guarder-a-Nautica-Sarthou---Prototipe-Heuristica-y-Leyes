import type { Metadata } from "next";
import { BoardHeader } from "@/components/BoardHeader";
import { VerdictLegend } from "@/components/Legends";
import { LeyesBoard } from "@/components/LeyesBoard";

export const metadata: Metadata = {
  title: "Tablero 1 · Leyes UX — Guardería Náutica Sarthou",
  description:
    "Evaluación de Guardería Náutica Sarthou contra 14 leyes UX, con captura y explicación por ley.",
};

export default function LeyesPage() {
  return (
    <div className="container-page py-12 sm:py-16">
      <BoardHeader
        eyebrow="Tablero 1"
        titulo="Leyes UX"
        metodo="Recorrimos las navegaciones principales de Guardería Náutica Sarthou usando 14 leyes UX como checklist. Por cada una buscamos un punto concreto de la interfaz donde la ley se cumple o se rompe, lo respaldamos con una captura y respondemos su pregunta guía en una o dos frases. No todas las 14 tienen por qué aparecer en el mismo producto: priorizamos las más evidentes."
      >
        <VerdictLegend />
      </BoardHeader>

      <div className="mt-10">
        <LeyesBoard />
      </div>
    </div>
  );
}
