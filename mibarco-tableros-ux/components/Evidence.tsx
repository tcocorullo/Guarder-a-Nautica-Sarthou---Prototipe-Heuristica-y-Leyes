"use client";

import Image from "next/image";
import { useLightbox, type LightboxImage } from "@/components/Lightbox";

// Muestra una o más capturas verticales de iPhone con altura fija y
// object-contain (nunca recortadas). Al hacer click se abren en el lightbox.
export function Evidence({ images }: { images: LightboxImage[] }) {
  const { open } = useLightbox();
  const multiple = images.length > 1;

  return (
    <div
      className={
        multiple
          ? "grid grid-cols-2 gap-2 sm:grid-cols-3"
          : "grid grid-cols-1"
      }
    >
      {images.map((img, i) => (
        <figure key={img.src} className="flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => open(images, i)}
            aria-label={`Ampliar captura: ${img.caption}`}
            className="group relative block aspect-[589/1280] w-full overflow-hidden rounded-lg border border-line bg-paper transition-shadow hover:shadow-md focus-visible:shadow-md"
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="(max-width: 768px) 45vw, 240px"
              className="object-contain"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity group-hover:bg-ink/10 group-hover:opacity-100"
            >
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink shadow">
                Ampliar
              </span>
            </span>
          </button>
          {multiple && (
            <figcaption className="text-center font-mono text-[0.68rem] leading-tight text-faint">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
