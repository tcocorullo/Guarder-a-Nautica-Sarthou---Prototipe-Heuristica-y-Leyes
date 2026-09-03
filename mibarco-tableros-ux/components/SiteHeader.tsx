"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Portada" },
  { href: "/leyes", label: "Leyes UX" },
  { href: "/heuristicas", label: "Heurísticas" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-3">
        <Link href="/" className="group flex shrink-0 items-baseline gap-2">
          <span className="font-mono text-[13px] font-semibold tracking-tight text-ink sm:text-sm">
            Guardería Sarthou
          </span>
          <span className="eyebrow hidden sm:inline">Evaluación UX</span>
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      "block whitespace-nowrap rounded-full px-2 py-1.5 text-[13px] transition-colors sm:px-3 sm:text-sm " +
                      (active
                        ? "bg-ink text-white"
                        : "text-muted hover:bg-brand-soft hover:text-ink")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
