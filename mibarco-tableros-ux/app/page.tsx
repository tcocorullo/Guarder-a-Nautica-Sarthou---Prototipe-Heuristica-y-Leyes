import Link from "next/link";
import { leyes } from "@/data/leyes";
import { heuristicas } from "@/data/heuristicas";

const limitaciones = [
  "No hay captura de “Mis Salidas”, la sección donde presumiblemente vive el historial de pedidos de salida. Es la única pestaña de la tab bar sin evidencia.",
  "No hay capturas del flujo de registro (“Registrarme”) ni de estados de error del login.",
  "No hay captura del estado de cuenta con cuotas impagas; solo el estado “al día”.",
  "El QR de Inicio y el comprobante de salida están relevados, pero no la transición entre pedir la salida y obtener el comprobante.",
];

function BoardLink({
  href,
  eyebrow,
  titulo,
  descripcion,
  stat,
}: {
  href: string;
  eyebrow: string;
  titulo: string;
  descripcion: string;
  stat: string;
}) {
  return (
    <Link
      href={href}
      className="card group flex flex-col justify-between gap-8 p-7 transition-shadow hover:shadow-lg sm:p-8"
    >
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
          {titulo}
        </h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          {descripcion}
        </p>
      </div>
      <div className="flex items-end justify-between">
        <span className="font-mono text-sm text-faint">{stat}</span>
        <span
          aria-hidden
          className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const leyesRompe = leyes.filter((l) => l.veredicto === "rompe").length;
  const leyesCumple = leyes.length - leyesRompe;
  const heuristicasCriticas = heuristicas.filter((h) => h.severidad >= 3).length;

  return (
    <div className="container-page py-14 sm:py-20">
      {/* Hero */}
      <section className="max-w-3xl">
        <span className="eyebrow">Evaluación de usabilidad · Diseño UX/UI</span>
        <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          MiBarco.Online
        </h1>
        <p className="mt-4 text-lg text-muted">
          Guardería Náutica Sarthou · App móvil de socios ·{" "}
          <span className="font-mono text-base text-faint">V 5.2711.1038</span>
        </p>
        <p className="mt-6 text-[1.05rem] leading-relaxed text-ink">
          Dos tableros de evaluación navegables sobre la app que usan los socios
          de la guardería para pedir que les bajen el barco al agua, gestionar
          navegantes autorizados, informar visitas y mostrar el QR de salida en
          el acceso. Cada hallazgo se apoya en una captura real de la interfaz y
          en un análisis escrito.
        </p>
      </section>

      {/* Accesos a los tableros */}
      <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        <BoardLink
          href="/leyes"
          eyebrow="Tablero 1"
          titulo="Leyes UX"
          descripcion="14 leyes UX aplicadas como checklist sobre las navegaciones principales, con veredicto cumple/rompe, captura y explicación."
          stat={`${leyes.length} leyes · ${leyesCumple} cumple · ${leyesRompe} rompe`}
        />
        <BoardLink
          href="/heuristicas"
          eyebrow="Tablero 2"
          titulo="Heurísticas de Nielsen"
          descripcion="Evaluación heurística completa: las 10 heurísticas de Nielsen con severidad 0-4, captura del punto de dolor e impacto en la persona usuaria."
          stat={`10 heurísticas · ${heuristicasCriticas} con severidad ≥ 3`}
        />
      </section>

      {/* Contexto del producto */}
      <section className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="eyebrow">Contexto</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
            Qué es y a quién sirve
          </h2>
          <div className="mt-5 space-y-4 text-[0.98rem] leading-relaxed text-muted">
            <p>
              La Guardería Náutica Sarthou es un complejo náutico en San
              Fernando, provincia de Buenos Aires. Guarda embarcaciones en silos
              y las baja al agua cuando el propietario las solicita. MiBarco.Online
              es la app móvil que usan los socios: no es desarrollo propio de
              Sarthou, sino una plataforma de terceros white-label para
              guarderías náuticas, personalizada con la marca.
            </p>
            <p>
              La tarea principal del usuario es pedir que le preparen y bajen el
              barco para salir a navegar, además de gestionar quiénes pueden
              subir a la embarcación, informar visitas al predio y mostrar el QR
              de salida en el acceso.
            </p>
            <p>
              La persona usuaria de referencia es Francisco, propietario de una
              moto de agua (MOTO AJAXX, modelo SPARK) guardada en el silo 10.
              Sobre su recorrido real se tomaron las 20 capturas que respaldan
              cada tablero.
            </p>
          </div>
        </div>

        <div>
          <span className="eyebrow">Alcance del relevamiento</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
            Qué no se pudo relevar
          </h2>
          <ul className="mt-5 space-y-3">
            {limitaciones.map((l, i) => (
              <li
                key={i}
                className="flex gap-3 text-[0.92rem] leading-relaxed text-muted"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
