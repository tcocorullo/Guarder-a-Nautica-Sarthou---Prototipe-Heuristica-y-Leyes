# prompts_leyes_heuristicas

Registro de la iteración con IA generativa para construir los dos tableros de
evaluación UX de **MiBarco.Online** (Guardería Náutica Sarthou).

- **Herramienta de IA principal:** Claude Code (modelo Claude Opus), corriendo en
  la terminal con acceso a archivos, navegador y ejecución de comandos.
- **Producto evaluado:** MiBarco.Online, app móvil iOS de socios (V 5.2711.1038).
- **Formato del registro:** por cada prompt relevante — herramienta usada,
  objetivo, prompt completo, y resultado + ajustes (incluyendo lo que salió mal).

> Nota de método: la mayor parte del trabajo se pidió con dos prompts grandes (la
> consigna y el brief completo del producto). Claude Code descompuso esos pedidos
> en subtareas (scaffolding, componentes, ajustes de layout, verificación) y las
> resolvió de forma autónoma. Documentamos tanto los prompts de la persona como
> los ajustes que hubo que hacer sobre lo que devolvió la IA, que es donde está
> la iteración real.

---

## Prompt 1 — Encuadre inicial y relevamiento de requisitos

- **Herramienta:** Claude Code
- **Objetivo:** pasarle a la IA la consigna completa de la cátedra y que dijera
  qué necesitaba antes de construir, en vez de arrancar a tirar código.

**Prompt completo:**

```
Claude, me mandaron para hacer esto: [consigna de la cátedra]

Qué tienen que crear: dos tableros de evaluación, construidos como una mini-web
con asistencia de IA generativa de código. [...] Tablero 1: leyes UX (14 leyes de
la ficha de referencia). Tablero 2: heurísticas de Nielsen (las 10 completas, con
severidad 0-4). Documento de prompts "prompts_leyes_heuristicas" al Drive.
Entregables: link a Vercel, repo en GitHub, doc de prompts. Fecha: jueves 3 de
septiembre.

Que necesitas?
```

- **Resultado y ajustes:** en vez de asumir, la IA hizo una lectura del encargo y
  pidió cuatro definiciones con opciones (producto a evaluar, un proyecto vs. dos,
  stack, y quién saca las capturas). Se eligió: otro producto/app, un proyecto con
  dos secciones, stack tipo Next.js, y la IA saca capturas y nosotros revisamos.
  **Ajuste clave:** obligó a definir el alcance antes de escribir una línea, que
  evitó rehacer trabajo después.

---

## Prompt 2 — Extraer las leyes y heurísticas de la ficha de la cátedra

- **Herramienta:** Claude Code (lectura de PDF)
- **Objetivo:** que la IA sacara de la ficha teórica (PDF de la cátedra) la lista
  exacta de las 14 leyes UX y las 10 heurísticas de Nielsen con su escala.

**Prompt completo:**

```
[PDF: "Gestalt, leyes UX y heurísticas de Nielsen.pdf"]
Aca esta el punto 2
```

- **Resultado y ajustes:** acá salieron **dos cosas mal** que hubo que resolver:
  1. El lector de PDF falló porque faltaba `poppler` en el sistema. **Ajuste:** la
     IA instaló `pymupdf` vía pip y extrajo el texto y las imágenes de las 61
     páginas.
  2. Al leer la ficha, el PDF traía las **10 heurísticas completas con la escala
     0-4**, pero de las leyes UX solo nombraba 4 (Hick, Fitts, Tesler, Jakob) +
     Miller en la bibliografía. **No estaba la lista de las 14.** La IA lo detectó
     y avisó en lugar de inventar las 14, evitando documentar leyes que no
     correspondían.

---

## Prompt 3 — Resolver cuáles son las 14 leyes

- **Herramienta:** Claude Code (WebFetch a lawsofux.com)
- **Objetivo:** conseguir la lista concreta de 14 leyes al no estar la ficha.

**Prompt completo:**

```
1. https://lawsofux.com/es/
```

- **Resultado y ajustes:** la IA trajo la lista del sitio y detectó que
  **lawsofux.com tiene 30 leyes, no 14** — es la fuente bibliográfica, pero la
  cátedra recortó un subconjunto. **Ajuste:** en vez de elegir 14 al azar, propuso
  un set de 14 anclado en lo que la clase efectivamente cubrió (las 4 leyes del
  PPT + Miller + los 6 principios Gestalt vistos, mapeados a sus leyes en
  lawsofux), y lo dejó marcado como reemplazable si aparecía la ficha oficial.

---

## Prompt 4 — Brief del producto y contenido de los tableros

- **Herramienta:** Claude Code
- **Objetivo:** el prompt más grande — entregar el relevamiento completo de
  MiBarco.Online (arquitectura, 20 capturas descriptas, contenido redactado de las
  14 leyes y las 10 heurísticas, modelo de datos y specs técnicas) para que la IA
  construyera la mini-web.

**Prompt completo:** (documento extenso; se transcribe su estructura y los puntos
operativos; el texto íntegro se conserva en el brief del equipo)

```
2. # Brief para Claude Code — Tableros de evaluación UX
Producto analizado: MiBarco.Online (Guardería Náutica Sarthou)

0. Qué construir: mini-web estática en Vercel con dos tableros navegables
   (Tablero 1: 14 leyes UX; Tablero 2: 10 heurísticas de Nielsen), sin backend.
1. Contexto del producto: guardería náutica en San Fernando; app white-label de
   terceros; persona usuaria Francisco (MOTO AJAXX, silo 10).
2. Arquitectura de la información relevada (tab bar de 4: Inicio, Mis Salidas,
   Mis Visitas, Más; pre-login; Ayuda) + problemas estructurales detectados
   (duplicación de "Visitas", "Más" casi vacío, mezcla voseo/tuteo, errores de
   redacción como "Deacuerdo").
3. Inventario de 21 capturas con mapeo de nombres a /public/screens y descripción
   detallada de cada pantalla + limitaciones del relevamiento.
4. Nota: la ficha oficial de 14 leyes no está; comparar nombres antes de publicar.
5. TABLERO 1 — contenido redactado de las 14 leyes (L01..L14): ley, veredicto
   cumple/rompe, captura, explicación y pregunta guía.
6. TABLERO 2 — contenido redactado de las 10 heurísticas (H01..H10): heurística,
   severidad 0-4, capturas, explicación (qué pasa · por qué · impacto).
7. Especificación técnica: Next.js App Router + TS + Tailwind, un proyecto con dos
   vistas, estructura de carpetas, modelo de datos tipado (LeyUX, Heuristica),
   requisitos de interfaz (grilla responsive, badges, filtros, lightbox,
   accesibilidad AA, sin dark mode), identidad visual (acentos Sarthou, severidad
   independiente), deploy en Vercel.
8. Documento "prompts_leyes_heuristicas" con los prompts usados.
9. Reglas: no inventar hallazgos ni pantallas; cargar el contenido tal cual;
   español rioplatense; sin markdown en las cards.
```

- **Resultado y ajustes:** a partir de este brief la IA:
  - Localizó las 21 capturas reales (los nombres del brief usaban guiones bajos y
    "_copy"; los archivos reales tenían espacios y "(N)") y las renombró 1:1 a
    `/public/screens`, descartando la duplicada.
  - **Verificó** que el mapeo fuera correcto abriendo la captura más detallada
    (`08-inicio.jpg`) y contrastándola con la descripción, antes de construir.
  - Cargó el contenido tal cual en `data/leyes.ts` y `data/heuristicas.ts`
    (tipados) y construyó portada + dos tableros + componentes.
  - **Ajuste de stack:** el brief pedía "Next.js 14+ / npm"; se usó pnpm y Next 16
    (misma familia App Router + TS + Tailwind), sin conflicto de fondo.

---

## Prompt 5 — Corrección de ubicación del proyecto

- **Herramienta:** Claude Code
- **Objetivo:** el proyecto se había creado por error dentro de una carpeta de
  otros trabajos; sacarlo a un lugar neutral sin tocar nada de esos proyectos.

**Prompt completo:**

```
Espera, me confundi y lo meti en la carpeta de BLC, esto no tiene nada que ver con
klee ni blc ni nada. Es aparte, ni se te ocurra tocar nada de esos proyectos
```

- **Resultado y ajustes:** la IA confirmó que solo había leído archivos de los
  otros proyectos (nunca escrito) y movió la carpeta nueva fuera, verificando con
  `git status` que el repo vecino quedara intacto. **Ajuste de proceso:** a partir
  de ahí, todas las operaciones apuntaron con ruta absoluta a la carpeta nueva.

---

## Ajustes de implementación (iteración interna de Claude Code)

Estos no fueron prompts separados de la persona, sino correcciones que la IA hizo
sobre su propio output al verificar en el navegador. Se listan porque son parte de
la iteración real.

1. **Scaffolding del proyecto.** `pnpm create next-app` con flags no interactivos
   (TS, Tailwind, App Router, sin src-dir). Resultado: Next 16.3.3 + React 19 +
   Tailwind v4.

2. **Sistema de badges y rampa de severidad.** Se definieron tokens de color en
   `globals.css` con `@theme`. **Ajuste:** las clases de Tailwind se escribieron
   con strings estáticos completos en mapas de lookup (`sev0`..`sev4`,
   `cumple`/`rompe`), porque el JIT no detecta clases construidas por
   concatenación. La rampa de severidad se hizo independiente de la paleta de
   marca (rojo/amarillo Sarthou) para no confundir "problema" con "color del
   producto", y el número siempre visible además del color (accesibilidad).

3. **Layout de capturas verticales.** Las capturas son de iPhone (589×1280). Se
   usó un contenedor con `aspect-[589/1280]` y `object-contain` para mostrarlas
   completas, nunca recortadas, tanto en la grilla como en el lightbox.

4. **Lightbox con contexto.** Se implementó un `LightboxProvider` con contexto de
   React para abrir cualquier captura ampliada, con navegación por teclado (Esc /
   flechas) y soporte de varias capturas por heurística.

5. **Verificación en navegador — dos hallazgos:**
   - Al probar clicks, el pane devolvía capturas escaladas (viewport 1214px →
     screenshot 800px), así que los clicks por coordenada caían corridos.
     **Ajuste:** se verificó el lightbox por referencia de elemento y por JS,
     confirmando que abría con la imagen correcta.
   - En mobile (375px) el ítem "Heurísticas" del nav se cortaba en el borde.
     **Ajuste:** se redujeron tamaños de logo y nav en mobile y se agregó
     `whitespace-nowrap` para que el header entre completo.

6. **Cierre de calidad.** `pnpm build` y typecheck en verde; las 3 páginas se
   generan como estáticas; verificación visual de portada, ambos tableros,
   filtros, lightbox y responsive.

---

## Pendiente declarado

- Comparar los **nombres de las 14 leyes** con la ficha oficial de la cátedra
  cuando aparezca, y reemplazar las que no coincidan (la evidencia y los hallazgos
  se conservan; solo cambia la etiqueta).
- Push a GitHub y deploy en Vercel (se resuelve al cierre; el repo queda listo).
