import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Capabilities"
          title="Technical skills"
          subtitle="Languages, platforms, and patterns I use to design and deliver production systems."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {profile.skillGroups.map((g) => (
            <div
              key={g.label}
              className="group rounded-3xl border border-[var(--color-blush)]/90 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-rose-soft)]/20"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
                {g.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-[var(--color-paper)] px-3 py-1 text-xs font-medium text-[var(--color-muted)] ring-1 ring-[var(--color-blush)]/70 transition group-hover:text-[var(--color-ink)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
