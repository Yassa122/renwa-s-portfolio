"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--color-blush)]/80 bg-[var(--color-paper)]/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-ink)]"
        >
          Renwa Abouelella
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-blush)] bg-white/80 text-[var(--color-rose-deep)] shadow-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 rounded-full bg-current ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-blush)]/60 hover:text-[var(--color-rose-deep)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[var(--color-rose-deep)] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[var(--color-rose-soft)]/40 transition hover:brightness-110 md:inline-flex"
        >
          Let&apos;s talk
        </a>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[var(--color-blush)]/70 bg-[var(--color-paper)]/95 px-5 pb-5 pt-2 backdrop-blur-md md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-blush)]/70"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[var(--color-rose-deep)] px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
