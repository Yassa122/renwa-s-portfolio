import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Work"
          title="Selected projects"
          subtitle="Architecture, migrations, platforms, and research — representative of how I approach complex builds."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {profile.projects.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-3xl border border-[var(--color-blush)] bg-white/90 p-7 shadow-sm transition hover:shadow-xl hover:shadow-[var(--color-rose-soft)]/25"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-[var(--color-ink)]">
                {p.name}
              </h3>
              <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-rose-deep)]/70" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
