# Tableros de evaluación UX — Guardería Náutica Sarthou

Dos tableros de evaluación de usabilidad, navegables, sobre la **app móvil de socios**
de la **Guardería Náutica Sarthou** (versión relevada
V 5.2711.1038). Trabajo práctico de Diseño UX/UI (UdeSA).

- **Tablero 1 — Leyes UX:** 14 leyes UX aplicadas como checklist sobre las
  navegaciones principales, con veredicto cumple/rompe, captura y explicación.
- **Tablero 2 — Heurísticas de Nielsen:** las 10 heurísticas completas, cada una
  con severidad 0-4, captura del punto de dolor e impacto en la persona usuaria.

Es contenido estático (sin backend): el análisis está redactado en
`data/leyes.ts` y `data/heuristicas.ts`, y cada hallazgo se apoya en una captura
real de la app en `public/screens/`.

## Integrantes

- Tomás Cocorullo
- _(completar resto del equipo)_

## Enlaces

- **Tablero desplegado (Vercel):** _(pendiente — completar al deployar)_
- **Repositorio:** _(pendiente — completar al crear el repo)_
- **Documento de prompts:** [`prompts_leyes_heuristicas.md`](./prompts_leyes_heuristicas.md)

## Método

Se recorrieron las navegaciones principales del producto. Para el Tablero 1 se usó
un checklist de 14 leyes UX (basadas en la ficha de la cátedra y en
[lawsofux.com](https://lawsofux.com/es/)); para el Tablero 2 se aplicó la
evaluación heurística completa de Nielsen con su escala de severidad 0-4
(0 sin problema · 1 cosmético · 2 menor · 3 mayor · 4 catástrofe).

Los tableros se construyeron con asistencia de IA generativa de código
(Claude Code); el registro de esa iteración está en `prompts_leyes_heuristicas.md`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Sin backend — todo el contenido es estático

## Cómo correr

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # build de producción
pnpm lint    # eslint
```

## Estructura

```
app/
  page.tsx                → portada: contexto del producto + accesos a los tableros
  leyes/page.tsx          → Tablero 1 (Leyes UX)
  heuristicas/page.tsx    → Tablero 2 (Heurísticas de Nielsen)
components/               → SiteHeader, cards, badges, Evidence, Lightbox, filtros
data/
  leyes.ts                → 14 leyes UX (tipado)
  heuristicas.ts          → 10 heurísticas de Nielsen (tipado)
  screens.ts              → registro de capturas → nombre de pantalla
public/screens/          → 20 capturas relevadas de la app
```

## Nota sobre las capturas

Las capturas son propiedad de Guardería Náutica Sarthou y se
reproducen únicamente con fines académicos, para el análisis de usabilidad.
