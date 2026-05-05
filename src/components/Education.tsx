import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-[var(--color-blush)] bg-white/55 px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Academics"
          title="Education & credentials"
          subtitle="Formal training in software engineering complemented by cloud certifications."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl border border-[var(--color-blush)] bg-[var(--color-paper)] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {profile.education.period}
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-ink)]">
              {profile.education.school}
            </h3>
            <p className="mt-2 text-sm font-medium text-[var(--color-rose-deep)]">
              {profile.education.degree}
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Major: {profile.education.major}</p>
            <div className="mt-8 rounded-2xl bg-white/90 p-6 ring-1 ring-[var(--color-blush)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-rose-deep)]">
                Bachelor thesis
              </p>
              <p className="mt-2 font-medium text-[var(--color-ink)]">
                {profile.education.thesis.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {profile.education.thesis.description}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Certifications
            </p>
            <ul className="space-y-4">
              {profile.certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-blush)] bg-white/90 px-5 py-4 shadow-sm"
                >
                  <span className="text-sm font-medium text-[var(--color-ink)]">{c.name}</span>
                  <span className="rounded-full bg-[var(--color-blush)]/80 px-3 py-1 text-xs font-semibold text-[var(--color-rose-deep)]">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
