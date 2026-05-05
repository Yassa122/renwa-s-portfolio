import { profile } from "@/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-blush)] bg-[var(--color-paper)] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {profile.name}. Crafted with Next.js.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={profile.linkedIn} className="hover:text-[var(--color-rose-deep)]" target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--color-rose-deep)]">
            Email
          </a>
          <a href="#top" className="hover:text-[var(--color-rose-deep)]">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
