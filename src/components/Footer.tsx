import { Link } from "react-router-dom";
import { MapPin, Mail, Clock, PaintBucket } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "hsl(220 45% 5%)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
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
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.875rem",
                lineHeight: "1.65",
                maxWidth: "260px",
              }}
            >
              Prep-First Painting™. Every surface, every time.
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.78rem",
                lineHeight: "1.55",
                marginTop: "0.5rem",
                opacity: 0.7,
              }}
            >
              483 houses on Oahu and counting. We've probably already painted on your street.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "0.75rem",
                color: "var(--color-accent)",
                marginBottom: "1rem",
              }}
            >
              Pages
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-accent)",
                      textDecoration: "none",
                      transition: "color 200ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick list */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "0.75rem",
                color: "var(--color-accent)",
                marginBottom: "1rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { name: "Interior Painting", id: "interior-painting" },
                { name: "Exterior Painting", id: "exterior-painting" },
                { name: "Drywall Repair", id: "drywall-repair" },
                { name: "Deck Refinishing", id: "deck-refinishing" },
                { name: "Kitchen Remodeling", id: "kitchen-remodeling" },
                { name: "Bathroom Remodeling", id: "bathroom-remodeling" },
                { name: "Commercial Painting", id: "commercial-painting" },
              ].map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services#${svc.id}`}
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "color 200ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "0.75rem",
                color: "var(--color-accent)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <MapPin size={14} style={{ color: "var(--color-accent)", marginTop: "3px", flexShrink: 0 }} />
                <span style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.5 }}>
                  200 N Vineyard Blvd, Ste A325-148<br />
                  Honolulu, HI 96817
                  <br />
                  <span style={{ fontSize: "0.72rem", opacity: 0.6 }}>
                    Shop &amp; material storage: Kalihi warehouse. Crew meets here at 7:00 AM.
                  </span>
                </span>
              </li>
              <li style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <Mail size={14} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <a
                  href="mailto:info@hawaiielitepainting.com"
                  style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}
                >
                  info@hawaiielitepainting.com
                </a>
              </li>
              <li style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <Clock size={14} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.5 }}>
                  Mon–Fri: 7:30 AM – 4:30 PM HST<br />
                  Sat: 8:00 AM – 12:00 PM (estimates only)<br />
                  <span style={{ fontSize: "0.78rem", opacity: 0.7 }}>Closed Sunday · Voicemails returned within 4 hours</span>
                  <br />
                  <span style={{ fontSize: "0.78rem", opacity: 0.7 }}>Estimate requests: personal callback within 24 hours</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
            &copy; {year} Hawaii Elite Painting and Renovation. All rights reserved.
          </p>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
            Licensed &amp; Insured · CT-35891 · C-33 Painting &amp; Decorating · Honolulu, HI · Est. 2012 · Prep-First Painting™
          </p>
        </div>
      </div>
    </footer>
  );
}
