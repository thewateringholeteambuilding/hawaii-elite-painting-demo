import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  img: string;
  alt: string;
  scope: string;
  detail: string[];
  note: string;
  category: "interior" | "exterior" | "remodeling" | "commercial";
}

const CATEGORIES: { key: ServiceItem["category"]; label: string; sublabel: string }[] = [
  { key: "interior", label: "Interior", sublabel: "Walls, ceilings, trim, and everything you live inside" },
  { key: "exterior", label: "Exterior", sublabel: "Every surface the sun and salt air can reach" },
  { key: "remodeling", label: "Remodeling", sublabel: "Kitchen and bath refreshes without the gut-job price tag" },
  { key: "commercial", label: "Commercial", sublabel: "Offices, retail, warehouses, and common areas" },
];

const SERVICES: ServiceItem[] = [
  {
    title: "Interior Painting",
    category: "interior",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=75",
    alt: "Interior painting in a Honolulu home",
    scope: "Walls, ceilings, trim, doors, window frames, built-ins, and cabinetry.",
    detail: [
      "Surface prep: hole filling, crack repair, sanding",
      "Two-coat prime + finish on new drywall",
      "Benjamin Moore Regal Select and Sherwin-Williams Harmony low-VOC lines standard; specialty finishes available (limewash, Venetian plaster, roman clay)",
      "Furniture moved and protected before start",
      "Daily cleanup: no dried roller trays left overnight",
    ],
    note: "Interior repaints hold 7-10 years in most rooms. High-humidity areas (bathrooms, kitchens) may need attention at 4-5 years. We match existing colors using spectrophotometer readings.",
  },
  {
    title: "Exterior Painting",
    category: "exterior",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=75",
    alt: "Exterior house painting Oahu",
    scope: "Siding, stucco, concrete block, wood trim, fascia, soffits, gates, fences.",
    detail: [
      "Full pressure wash before any coating",
      "Substrate assessment: identify rot, spall, efflorescence on wood, stucco, CMU block, and lava rock veneer",
      "Sherwin-Williams Duration and PPG Diamond exterior lines rated for coastal UV",
      "Elastomeric coatings spec'd for CMU block and poured concrete (standard latex peels within 18 months on block)",
      "Caulk all penetrations and cracks before first coat",
      "Two finish coats minimum on sun-exposed surfaces",
    ],
    note: "Exterior repaints in Hawaii last 3-5 years on sun-exposed surfaces, 5-7 for shaded walls. Salt air, UV load, and humidity cycling accelerate coating breakdown faster than mainland guides suggest. Pre-1978 homes get lead testing before any scraping begins (EPA RRP Rule). We specify coatings by substrate type, not brand.",
  },
  {
    title: "Drywall Repair",
    category: "interior",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=75",
    alt: "Drywall repair and finishing",
    scope: "Patches, water damage repairs, texture matching, full skim coats.",
    detail: [
      "Damage assessment: mold inspection and moisture meter readings before close-up",
      "Like-for-like texture matching on all patches (orange peel, knockdown, skip trowel)",
      "Three-coat mud process on larger repairs",
      "Feathering and skim where required for invisible finish",
      "Prime + paint to match existing wall",
    ],
    note: "We don't close up water-damaged drywall until moisture readings confirm the source is resolved.",
  },
  {
    title: "Deck Refinishing",
    category: "exterior",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=75",
    alt: "Deck sanding and refinishing",
    scope: "Wood decks, composite decks, railings, stairs, and pool surrounds.",
    detail: [
      "Full strip of existing finish down to bare wood",
      "Deck board inspection: replace splits and soft spots before refinishing",
      "Power sand entire deck surface",
      "Penofin or TWP penetrating stain, or Arborcoat film-forming finish per wood species",
      "Seal all end grain and cut surfaces",
    ],
    note: "Deck refinishing in Hawaii runs on a 12-18 month cycle for penetrating stains, 2-3 years for film-forming finishes. Mainland stain products rated for 3-5 years last half that here. We specify products tested in high-UV coastal climates.",
  },
  {
    title: "Kitchen Remodeling",
    category: "remodeling",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=75",
    alt: "Kitchen cabinet painting and remodeling in Honolulu",
    scope: "Cabinet painting, hardware replacement, backsplash tile, countertop coordination.",
    detail: [
      "Cabinet door and drawer front removal, sanding, and spray finish",
      "Cabinet box painting in place",
      "New hardware installation (client-supplied or we source)",
      "Tile backsplash installation with custom cuts",
      "Coordinate countertop timeline with fabricator",
    ],
    note: "Cabinet painting saves 60-70% compared to cabinet replacement with equivalent visual impact.",
  },
  {
    title: "Bathroom Remodeling",
    category: "remodeling",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=75",
    alt: "Bathroom renovation with tile and paint",
    scope: "Full paint refresh, tile replacement, vanity painting, fixture coordination.",
    detail: [
      "Zinsser Mold Killing Primer on all walls and ceiling",
      "Tile removal and substrate repair before new tile",
      "Grout sealing included on all tile work",
      "Vanity cabinet painting to match or contrast walls",
      "Coordinate plumber timing for fixture replacements",
    ],
    note: "Bathrooms are the highest-risk surface for moisture intrusion in Hawaii. We use mold-resistant coatings standard on all bath jobs.",
  },
  {
    title: "Commercial Painting",
    category: "commercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=75",
    alt: "Commercial painting project on Oahu",
    scope: "Office interiors, retail spaces, warehouses, common areas, and exterior facades.",
    detail: [
      "Off-hours scheduling to minimize business disruption",
      "Benjamin Moore Natura zero-VOC coatings for occupied spaces",
      "Single-day small suite refreshes available",
      "Multi-phase large projects with phased access",
      "Written scope and certificate of insurance for property managers",
    ],
    note: "We carry liability limits required by major property management firms. COI available before first day on site.",
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Hawaii Elite Painting and Renovation</title>
        <meta
          name="description"
          content="Interior painting, exterior painting, drywall repair, deck refinishing, kitchen remodeling, bathroom remodeling, and commercial painting on Oahu."
        />
      </Helmet>

      {/* Page header */}
      <header
        style={{
          background: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          padding: "calc(64px + 4rem) 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>
            What We Do
          </span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "var(--text-h1)",
              lineHeight: 0.9,
              color: "var(--color-text)",
              maxWidth: "600px",
            }}
          >
            Full-Scope
            <br />
            <span style={{ color: "var(--color-accent)" }}>Services</span>
          </h1>
        </div>
      </header>

      {/* Sticky service quick-nav */}
      <nav
        aria-label="Jump to service"
        style={{
          position: "sticky",
          top: "64px",
          zIndex: 40,
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          padding: "0.875rem 1.5rem",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "nowrap",
          }}
        >
          {SERVICES.map((svc) => {
            const id = svc.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 120;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                style={{
                  border: "1px solid var(--color-border)",
                  padding: "0.375rem 0.875rem",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "border-color 200ms ease, color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-text-muted)";
                }}
              >
                {svc.title}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Service list — grouped by category */}
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {CATEGORIES.map((cat) => {
          const catServices = SERVICES.filter((s) => s.category === cat.key);
          if (catServices.length === 0) return null;
          return (
            <div key={cat.key}>
              {/* Category header */}
              <div
                style={{
                  padding: "2.5rem 1.5rem 0.75rem",
                  borderBottom: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                    letterSpacing: "0.08em",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {cat.label}
                </h2>
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.72rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {cat.sublabel}
                </span>
              </div>
              {catServices.map((svc, i) => (
          <section
            key={svc.title}
            id={svc.title.toLowerCase().replace(/\s+/g, "-")}
            style={{
              borderBottom: "1px solid var(--color-border)",
              padding: "4rem 1.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "3rem",
                alignItems: "start",
              }}
              className={`md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              {/* Photo */}
              <div
                style={{
                  overflow: "hidden",
                  order: i % 2 === 1 ? 2 : 1,
                }}
                className="md:order-auto"
              >
                <img
                  src={svc.img}
                  alt={svc.alt}
                  loading="lazy"
                  width={800}
                  height={500}
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ order: i % 2 === 1 ? 1 : 2 }} className="md:order-auto">
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "var(--text-h2)",
                    lineHeight: 0.92,
                    color: "var(--color-text)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {svc.title}
                </h2>
                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-accent)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.5,
                  }}
                >
                  {svc.scope}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    marginBottom: "1.5rem",
                  }}
                >
                  {svc.detail.map((d) => (
                    <li
                      key={d}
                      style={{
                        padding: "0.625rem 0",
                        borderBottom: "1px solid var(--color-border)",
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        display: "flex",
                        gap: "0.75rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          background: "var(--color-accent)",
                          display: "inline-block",
                          marginTop: "8px",
                          flexShrink: 0,
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    background: "var(--color-surface-raised)",
                    borderLeft: "2px solid var(--color-accent)",
                    padding: "1rem 1.25rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                    }}
                  >
                    {svc.note}
                  </p>
                </div>

                <Link to="/contact" className="btn-primary">
                  Get Estimate for This Service <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </section>
              ))}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "var(--text-h2)",
            lineHeight: 0.92,
            color: "var(--color-text)",
            marginBottom: "1.25rem",
          }}
        >
          Not Sure Which
          <br />
          <span style={{ color: "var(--color-accent)" }}>Service You Need?</span>
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.65,
            maxWidth: "400px",
            margin: "0 auto 2rem",
          }}
        >
          Send us photos of the space or describe what you're trying to accomplish.
          We'll tell you exactly what scope of work it takes.
        </p>
        <Link to="/contact" className="btn-primary">
          Tell Us About Your Project <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
