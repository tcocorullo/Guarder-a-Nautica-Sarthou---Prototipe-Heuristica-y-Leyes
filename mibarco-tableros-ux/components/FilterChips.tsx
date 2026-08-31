"use client";

export interface ChipOption<T extends string> {
  value: T;
  label: string;
  count?: number;
}

interface FilterChipsProps<T extends string> {
  legend: string;
  options: ChipOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function FilterChips<T extends string>({
  legend,
  options,
  value,
  onChange,
}: FilterChipsProps<T>) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="eyebrow mr-1 inline">{legend}</legend>
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.value)}
            className={
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors " +
              (active
                ? "border-ink bg-ink text-white"
                : "border-line bg-surface text-muted hover:border-ink/40 hover:text-ink")
            }
          >
            {opt.label}
            {typeof opt.count === "number" && (
              <span
                className={
                  "font-mono text-xs " +
                  (active ? "text-white/70" : "text-faint")
                }
              >
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </fieldset>
  );
}
