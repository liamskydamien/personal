"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const NAV_ITEMS = [
  { href: (base: string) => `${base}#about`, label: "About" },
  { href: (base: string) => `${base}#work`, label: "Work" },
  { href: (base: string) => `${base}#side`, label: "Side" },
  { href: (base: string) => `${base}#ai`, label: "AI" },
  { href: () => "/background", label: "Background", pageKey: "background" as const },
  { href: (base: string) => `${base}#contact`, label: "Contact" },
] as const;

function NavLinks({
  base,
  page,
  onNavigate,
}: {
  base: string;
  page: "home" | "background";
  onNavigate?: () => void;
}) {
  return (
    <div className="nav-links">
      {NAV_ITEMS.map((item) => {
        const href = "pageKey" in item ? item.href() : item.href(base);
        const active = "pageKey" in item && page === item.pageKey;
        return (
          <Link
            key={item.label}
            href={href}
            className={active ? "active" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function TopNav({ page = "home" }: { page?: "home" | "background" }) {
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
              <button type="button" className="btn btn-primary btn-sm">
                Get in touch
              </button>
            </div>
          </div>

          <button
            type="button"
            className="topnav-menu-btn"
            aria-expanded={menuOpen}
            aria-controls={sidebarId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
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
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <aside
          id={sidebarId}
          className="topnav-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="topnav-sidebar-head">
            <span className="topnav-sidebar-title">Menu</span>
            <button
              type="button"
              className="topnav-sidebar-close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <span className="topnav-menu-icon" aria-hidden />
            </button>
          </div>
          <NavLinks base={base} page={page} onNavigate={closeMenu} />
          <div className="nav-status topnav-sidebar-status">
            <button type="button" className="topnav-sidebar-status-btn">
              Get in touch
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
