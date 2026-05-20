import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, PaintBucket, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  function handleNavClick(href: string) {
    setMenuOpen(false);
    navigate(href);
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
          ? "hsla(220, 45%, 7%, 0.97)"
          : "hsla(220, 45%, 7%, 0.85)",
        borderBottom: scrolled
          ? "1px solid hsl(220 30% 20%)"
          : "1px solid transparent",
        backdropFilter: "blur(8px)",
        transition: "background 300ms ease, border-color 300ms ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "var(--color-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <PaintBucket size={16} color="hsl(220 45% 7%)" />
          </div>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-text)",
              lineHeight: 1,
            }}
          >
            Hawaii Elite
            <span
              style={{
                display: "block",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                color: "var(--color-accent)",
                fontWeight: 500,
              }}
            >
              Painting & Renovation
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="hidden md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color:
                  location.pathname === link.href
                    ? "var(--color-accent)"
                    : "var(--color-text-muted)",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+18085550192"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              color: "var(--color-text-muted)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-accent)",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "color 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >
            <Phone size={13} />
            (808) 555-0192
          </a>
          <Link to="/contact" className="btn-primary" style={{ fontSize: "0.7rem", padding: "0.7rem 1.25rem" }}>
            Free Estimate
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text)",
            padding: "0.5rem",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          style={{
            background: "var(--color-surface)",
            borderTop: "1px solid var(--color-border)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          aria-label="Mobile navigation"
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid var(--color-border)",
                    cursor: "pointer",
                    padding: "0.875rem 0",
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color:
                      location.pathname === link.href
                        ? "var(--color-accent)"
                        : "var(--color-text)",
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li style={{ marginTop: "1rem" }}>
              <a
                href="tel:+18085550192"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-accent)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  marginBottom: "0.75rem",
                }}
              >
                <Phone size={14} style={{ color: "var(--color-accent)" }} />
                (808) 555-0192
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Free Estimate
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
