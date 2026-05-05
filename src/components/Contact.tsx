import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 md:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--color-blush)]/50 to-transparent"
      />
      <div className="relative mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Connect"
          title="Let’s build something reliable"
          subtitle="Open to software engineering opportunities focused on backend systems, distributed applications, and cloud-native delivery."
        />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-stretch">
          <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-blush)] bg-white/90 p-8 shadow-lg shadow-[var(--color-rose-soft)]/20">
            <div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Prefer email or LinkedIn — I reply thoughtfully and quickly to serious conversations about
                roles, architecture reviews, or collaboration.
              </p>
              <dl className="mt-8 space-y-6 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-[var(--color-rose-deep)] underline-offset-4 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, "")}`}
                      className="font-medium text-[var(--color-rose-deep)] underline-offset-4 hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                    Location
                  </dt>
                  <dd className="mt-1 font-medium text-[var(--color-ink)]">{profile.location}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full bg-[var(--color-rose-deep)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                Message on LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}?subject=Opportunity%20%E2%80%94%20Renwa%20Abouelella`}
                className="rounded-full border border-[var(--color-rose-soft)] bg-[var(--color-paper)] px-5 py-2.5 text-sm font-semibold text-[var(--color-rose-deep)] transition hover:border-[var(--color-rose-deep)]"
              >
                Send an email
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-rose-deep)] via-[#a85563] to-[var(--color-sage)] p-[1px] shadow-xl">
            <div className="h-full rounded-[calc(1.5rem-1px)] bg-[var(--color-ink)]/95 p-10 text-white">
              <p className="font-[family-name:var(--font-display)] text-2xl leading-snug">
                Polished systems, compassionate craft.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                This portfolio highlights the arc of my work so far: from regulated cloud migrations to
                full-stack services and machine-learning research. I bring the same attention to detail to
                code reviews, design docs, and production operations.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.18em] text-white/55">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-[10px]">Focus</p>
                  <p className="mt-2 text-sm font-semibold normal-case tracking-normal text-white">
                    Backend &amp; cloud
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-[10px]">Style</p>
                  <p className="mt-2 text-sm font-semibold normal-case tracking-normal text-white">
                    Calm, precise, kind
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
