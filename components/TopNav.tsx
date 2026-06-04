"use client";
import Link from "next/link";
import posthog from "posthog-js";

import { Github, Instagram, Linkedin, Threads } from "iconoir-react";
import { PROFILE } from "@/lib/profile";
import { useCallback, useEffect, useId, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

interface NavItem {
  href: (base: string) => string;
  labelKey: keyof ReturnType<typeof useLocale>["t"]["nav"];
  pageKey?: "background" | "contact";
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { href: (base) => `${base}#about`, labelKey: "about", external: false },
  { href: (base) => `${base}#skills`, labelKey: "skills", external: false },
  { href: (base) => `${base}#work`, labelKey: "work", external: false },
  { href: (base) => `${base}#side`, labelKey: "projects", external: false },
  { href: (base) => `${base}#contact`, labelKey: "contact", external: false },
  { href: () => `https://cv.liamhess.dev`, labelKey: "cv", external: true },
  { href: () => `https://medium.com/@liamskydamien`, labelKey: "blog", external: true },
];

function NavLinks({
  base,
  page,
  onNavigate,
}: {
  base: string;
  page: "home" | "background";
  onNavigate?: () => void;
}) {
  const { t } = useLocale();
  return (
    <div className="nav-links">
      {NAV_ITEMS.map((item) => {
        const href = "pageKey" in item ? item.href("") : item.href(base);
        const active = "pageKey" in item && page === item.pageKey;
        const label = t.nav[item.labelKey] as string;
        return (
          <Link
            key={item.labelKey}
            href={href}
            className={`nav-link ${active ? "active" : ""}`}
            aria-label={label}
            onClick={() => {
              posthog.capture("nav_link_clicked", { label: item.labelKey, external: item.external ?? false });
              onNavigate?.();
            }}
          >
            {label}
            {item.external && <ExternalLink width={12} height={12} />}
          </Link>
        );
      })}
    </div>
  );
}

export function TopNav({ page = "home" }: { page?: "home" | "background" }) {
  const { t } = useLocale();
  const base = page === "home" ? "" : "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [page, closeMenu]);

  return (
    <>
      <nav
        className={`topnav${menuOpen ? " topnav--open" : ""}`}
        aria-label="Main"
      >
        <div className="topnav-inner">
          <Link
            href={page === "home" ? "#home" : "/"}
            className="brand"
            style={{ color: "inherit" }}
            onClick={closeMenu}
          >
            <div className="brand-mark">LH</div>
            <span className="brand-name">Liam Hess</span>
          </Link>

          <div className="topnav-panel topnav-panel--desktop">
            <NavLinks base={base} page={page} />
            <div className="nav-spacer" />
            <div className="nav-status">
              <Link href={`https://www.linkedin.com/in/${PROFILE.contact.linkedin}/`} target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture("social_link_clicked", { platform: "linkedin", source: "nav" })}>
                <button className="btn btn-sm" aria-label="LinkedIn">
                  <Linkedin width={20} height={20} />
                </button>
              </Link>
              <Link href={`https://github.com/${PROFILE.contact.github}/`} target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture("social_link_clicked", { platform: "github", source: "nav" })}>
                <button className="btn btn-sm" aria-label="GitHub">
                  <Github width={20} height={20} />
                </button>
              </Link>
              <Link href={`https://www.instagram.com/${PROFILE.contact.instagram}/`} target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture("social_link_clicked", { platform: "instagram", source: "nav" })}>
                <button className="btn btn-sm" aria-label="Instagram">
                  <Instagram width={20} height={20} />
                </button>
              </Link>
              <Link href={`https://www.threads.net/${PROFILE.contact.threads}/`} target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture("social_link_clicked", { platform: "threads", source: "nav" })}>
                <button className="btn btn-sm" aria-label="Threads">
                  <Threads width={20} height={20} />
                </button>
              </Link>
            </div>
          </div>
          <button
            type="button"
            className="topnav-menu-btn"
            aria-expanded={menuOpen}
            aria-controls={sidebarId}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => {
              const opening = !menuOpen;
              setMenuOpen(opening);
              if (opening) posthog.capture("mobile_menu_opened");
            }}
          >
            <span className="topnav-menu-icon" aria-hidden />
          </button>
        </div>
      </nav>

      <div
        className={`topnav-drawer${menuOpen ? " topnav-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <button
          type="button"
          className="topnav-backdrop"
          aria-label={t.nav.closeMenu}
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <aside
          id={sidebarId}
          className="topnav-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.navigationLabel}
        >
          <div className="topnav-sidebar-head">
            <span className="topnav-sidebar-title">{t.nav.menuLabel}</span>
            <button
              type="button"
              className="topnav-sidebar-close"
              aria-label={t.nav.closeMenu}
              onClick={closeMenu}
            >
              <span className="topnav-menu-icon" aria-hidden />
            </button>
          </div>
          <NavLinks base={base} page={page} onNavigate={closeMenu} />
          <div className="nav-status topnav-sidebar-status">
            <button type="button" className="topnav-sidebar-status-btn">
              {t.nav.getInTouch}
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
