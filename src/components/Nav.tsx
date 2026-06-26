import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
];

function linkClass({ isActive }: { isActive: boolean }) {
  return [
    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
    isActive ? "text-accent bg-surface2" : "text-muted hover:text-heading hover:bg-surface",
  ].join(" ");
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-heading font-bold tracking-tight flex items-center gap-2">
          <span className="text-accent">~/</span>justin-daschner
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="sm:hidden text-muted hover:text-heading p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-border bg-surface px-5 py-2 flex flex-col">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
