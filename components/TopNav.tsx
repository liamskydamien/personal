"use client";
import Link from "next/link";

import { Github, Instagram, Linkedin, Threads } from "iconoir-react";
import { PROFILE } from "@/lib/profile";
import { useCallback, useEffect, useId, useState } from "react";
import { ExternalLink } from "lucide-react";

interface NavItem {
  href: (base: string) => string;
  label: string;
  pageKey?: "background" | "contact";
  external?: boolean;
}

const NAV_ITEMS = [
  { href: (base: string) => `${base}#about`, label: "About", external: false},
  { href: (base: string) => `${base}#skills`, label: "Skills", external: false },
  { href: (base: string) => `${base}#work`, label: "Work", external: false },
  { href: (base: string) => `${base}#side`, label: "Projects", external: false },
  { href: (base: string) => `${base}#contact`, label: "Contact", external: false },
  { href: () => `https://cv.liamhess.dev`, label: "CV", external: true },
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
            className={`nav-link ${active ? "active" : ""}`}
            aria-label={item.label}
            onClick={onNavigate}
          >
            {item.label}
            {item.external && <ExternalLink width={12} height={12} />}
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
              <Link href={`https://www.linkedin.com/in/${PROFILE.contact.linkedin}/`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm" aria-label="LinkedIn">
                  <Linkedin width={20} height={20} />
                </button>
              </Link>
              <Link href={`https://github.com/${PROFILE.contact.github}/`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm" aria-label="GitHub">
                  <Github width={20} height={20} />
                </button>
              </Link>
              <Link href={`https://www.instagram.com/${PROFILE.contact.instagram}/`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm" aria-label="Instagram">
                  <Instagram width={20} height={20} />
                </button>
              </Link>
              <Link href={`https://www.threads.net/${PROFILE.contact.threads}/`} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm" aria-label="Threads">
                  <Threads width={20} height={20} />
                </button>
              </Link>
            </div>
            </div>
            <button type="button"
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
