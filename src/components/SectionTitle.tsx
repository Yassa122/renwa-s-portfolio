export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-rose-deep)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-[var(--color-muted)] leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
