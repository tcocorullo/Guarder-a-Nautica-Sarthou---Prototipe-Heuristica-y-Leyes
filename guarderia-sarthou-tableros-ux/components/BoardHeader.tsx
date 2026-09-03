export function BoardHeader({
  eyebrow,
  titulo,
  metodo,
  children,
}: {
  eyebrow: string;
  titulo: string;
  metodo: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="border-b border-line pb-8">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {titulo}
      </h1>
      <p className="mt-4 max-w-3xl text-[1.02rem] leading-relaxed text-muted">
        {metodo}
      </p>
      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}
