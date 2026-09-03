import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Tableros de evaluación UX — Guardería Náutica Sarthou",
  description:
    "Evaluación de usabilidad de Guardería Náutica Sarthou: tablero de leyes UX y evaluación heurística de Nielsen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
