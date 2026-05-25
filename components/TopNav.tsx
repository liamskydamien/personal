import Link from "next/link";

export function TopNav({ page = "home" }: { page?: "home" | "background" }) {
  const base = page === "home" ? "" : "/";

  return (
    <nav className="topnav">
      <div className="topnav-inner">
        <Link
          href={page === "home" ? "#home" : "/"}
          className="brand"
          style={{ color: "inherit" }}
        >
          <div className="brand-mark">LH</div>
          <span>Liam Hess</span>
        </Link>
        <div className="nav-links">
          <Link href={`${base}#about`}>About</Link>
          <Link href={`${base}#work`}>Work</Link>
          <Link href={`${base}#side`}>Side</Link>
          <Link href={`${base}#ai`}>AI</Link>
          <Link href="/background" className={page === "background" ? "active" : ""}>
            Background
          </Link>
          <Link href={`${base}#contact`}>Contact</Link>
        </div>
        <div className="nav-spacer" />
        <div className="nav-status">
          <span className="status-dot" />
          <span>Open to opportunities</span>
        </div>
      </div>
    </nav>
  );
}
