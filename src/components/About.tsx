import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-blush)] bg-white/50 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Introduction"
          title="Engineering with clarity and care"
          subtitle="A concise view of how I work — from systems thinking to shipping reliable software."
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <p className="text-lg leading-relaxed text-[var(--color-ink)]/90">{profile.summary}</p>
          <aside className="rounded-3xl border border-[var(--color-blush)] bg-[var(--color-paper)] p-8 shadow-inner">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Beyond the keyboard
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]">
              {profile.activities}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.softSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--color-rose-deep)] shadow-sm ring-1 ring-[var(--color-blush)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
