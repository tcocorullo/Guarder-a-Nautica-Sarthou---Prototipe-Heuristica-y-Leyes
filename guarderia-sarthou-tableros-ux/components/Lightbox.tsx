"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";

export interface LightboxImage {
  src: string;
  caption: string;
}

interface LightboxState {
  images: LightboxImage[];
  index: number;
}

interface LightboxContextValue {
  open: (images: LightboxImage[], index: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox debe usarse dentro de <LightboxProvider>");
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const open = useCallback((images: LightboxImage[], index: number) => {
    setState({ images, index });
  }, []);

  const close = useCallback(() => setState(null), []);

  const go = useCallback(
    (delta: number) =>
      setState((s) =>
        s
          ? {
              ...s,
              index: (s.index + delta + s.images.length) % s.images.length,
            }
          : s,
      ),
    [],
  );

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state, close, go]);

  const current = state?.images[state.index];
  const many = (state?.images.length ?? 0) > 1;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {state && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Captura ampliada: ${current.caption}`}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <span aria-hidden className="text-xl leading-none">
              ✕
            </span>
          </button>

          {many && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Captura anterior"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <span aria-hidden className="text-2xl leading-none">
                ‹
              </span>
            </button>
          )}

          <div
            className="relative flex max-h-full w-full max-w-md flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[72vh] w-full">
              <Image
                src={current.src}
                alt={current.caption}
                fill
                sizes="(max-width: 640px) 90vw, 420px"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/80">
              {current.caption}
              {many && (
                <span className="ml-2 font-mono text-white/50">
                  {state.index + 1}/{state.images.length}
                </span>
              )}
            </p>
          </div>

          {many && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Captura siguiente"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <span aria-hidden className="text-2xl leading-none">
                ›
              </span>
            </button>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}
