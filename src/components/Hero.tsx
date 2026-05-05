import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-28 pt-32 md:px-8 md:pb-36 md:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-gradient-to-bl from-[var(--color-blush)] via-transparent to-transparent opacity-80 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-[var(--color-rose-soft)]/35 via-transparent to-transparent blur-3xl"
      />

      <div className="relative mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-blush)] bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-rose-deep)] shadow-sm backdrop-blur">
            Portfolio
            <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
            {profile.location}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--color-ink)] [text-wrap:balance] md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-display)] text-2xl text-[var(--color-rose-deep)] md:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] [text-wrap:balance]">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[var(--color-rose-deep)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-rose-soft)]/35 transition hover:brightness-110"
            >
              View selected work
            </a>
            <a
              href={profile.cvUrl}
              download={profile.cvFileName}
              className="rounded-full border border-[var(--color-rose-soft)]/80 bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--color-rose-deep)] shadow-sm backdrop-blur transition hover:border-[var(--color-rose-deep)]"
            >
              Download CV
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-[var(--color-rose-soft)]/80 bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--color-rose-deep)] shadow-sm backdrop-blur transition hover:border-[var(--color-rose-deep)]"
            >
              LinkedIn profile
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--color-blush)] via-white to-[var(--color-sage)]/20 opacity-70 blur-xl" />
          <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-xl shadow-[var(--color-rose-soft)]/25 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              At a glance
            </p>
            <ul className="mt-5 space-y-4 text-sm text-[var(--color-ink)]">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-rose-deep)]" />
                <span>OCI-focused cloud engineering alongside full-stack backend experience.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-gold)]" />
                <span>Architecture for regulated and enterprise-scale environments.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-sage)]" />
                <span>ML thesis on serverless autoscaling (AWS DeepAR).</span>
              </li>
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-[var(--color-paper)] px-2 py-4">
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-rose-deep)]">
                  AWS
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  Cloud
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--color-paper)] px-2 py-4">
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-rose-deep)]">
                  OCI
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  Infra
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--color-paper)] px-2 py-4">
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-rose-deep)]">
                  GCP
                </p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  DevOps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
