import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-blush)] bg-gradient-to-b from-white/60 to-[var(--color-paper)] px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Career"
          title="Professional experience"
          subtitle="Cloud platforms, regulated workloads, and hands-on software delivery."
        />
        <ol className="relative space-y-12 before:absolute before:left-[11px] before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-gradient-to-b before:from-[var(--color-rose-soft)] before:via-[var(--color-blush)] before:to-[var(--color-sage)]/40 md:before:left-[15px]">
          {profile.experience.map((job) => (
            <li key={`${job.org}-${job.role}`} className="relative pl-10 md:pl-14">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[var(--color-rose-deep)] shadow-md shadow-[var(--color-rose-soft)]/50 md:top-1.5 md:h-8 md:w-8" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                    {job.role}
                  </p>
                  <p className="text-sm font-medium text-[var(--color-rose-deep)]">{job.org}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  {job.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-gold)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
