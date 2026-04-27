import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=75",
    alt: "Interior painting in Kailua living room",
    label: "Interior Repaint",
    location: "Kailua",
    detail: "Walls + ceiling + trim refresh on 1,400 sq ft single-story. Sherwin-Williams Emerald interior, eggshell finish.",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=75",
    alt: "Exterior painting project Pearl City",
    label: "Exterior Full Repaint",
    location: "Pearl City",
    detail: "Full exterior repaint on single-family home. Two coats Duration Exterior on all siding and trim.",
  },
  {
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=75",
    alt: "Kitchen cabinet painting Honolulu",
    label: "Cabinet Repaint",
    location: "Manoa",
    detail: "24 cabinet doors and 12 drawer fronts. Sprayed in shop, installed same week.",
  },
  {
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=75",
    alt: "Bathroom renovation Oahu",
    label: "Bathroom Refresh",
    location: "Kaneohe",
    detail: "Tile replacement, vanity paint, mildew-resistant ceiling coat. Three-day project.",
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=75",
    alt: "Deck refinishing Oahu backyard",
    label: "Deck Refinish",
    location: "Hawaii Kai",
    detail: "Full strip and re-stain on 400 sq ft deck. Two coats Defy Extreme wood stain.",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=75",
    alt: "Drywall repair water damage Honolulu",
    label: "Drywall + Repaint",
    location: "Moiliili",
    detail: "Water damage repair: 6 patch areas, skim coat, prime, and full room repaint.",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=75",
    alt: "Commercial office painting Honolulu",
    label: "Commercial Interior",
    location: "Downtown Honolulu",
    detail: "2,200 sq ft office suite. After-hours paint over two nights. Zero business disruption.",
  },
  {
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=75",
    alt: "Interior painting open plan living area",
    label: "Open Floor Repaint",
    location: "Mililani",
    detail: "Open-plan living, dining, and kitchen walls. Color consultation included.",
  },
  {
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=75",
    alt: "New construction painting Oahu",
    label: "New Construction Paint",
    location: "Ewa Beach",
    detail: "New construction interior: all walls, ceilings, and millwork on 2,800 sq ft home.",
  },
  {
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=75",
    alt: "Kitchen renovation painting",
    label: "Kitchen + Dining Refresh",
    location: "Palolo",
    detail: "Walls, ceiling, and cabinet refresh coordinated with countertop replacement.",
  },
  {
    img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=75",
    alt: "Stucco exterior painting Hawaii",
    label: "Stucco Exterior Repaint",
    location: "Aiea",
    detail: "Masonry primer + two coats Elastomeric on stucco exterior. Crack fill included.",
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75",
    alt: "Residential bedroom painting",
    label: "Master Suite Refresh",
    location: "Nuuanu",
    detail: "Master bedroom, bath, and walk-in closet. Single-day project.",
  },
];

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | Hawaii Elite Painting and Renovation</title>
        <meta
          name="description"
          content="Browse completed painting and renovation projects by Hawaii Elite Painting and Renovation on Oahu: interior, exterior, kitchens, decks, and commercial work."
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
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "2rem",
          }}
        >
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>
              Completed Work
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
              Before the Brush.
              <br />
              <span style={{ color: "var(--color-accent)" }}>After the Crew.</span>
            </h1>
          </div>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.9rem",
              maxWidth: "300px",
              lineHeight: 1.65,
            }}
          >
            {GALLERY_ITEMS.length} projects shown. Interior, exterior, residential, and commercial.
          </p>
        </div>
      </header>

      {/* Portfolio metrics strip */}
      <section
        style={{
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
          className="md:grid-cols-4"
        >
          {[
            { value: "483", label: "Projects Completed" },
            { value: "12", label: "Oahu Neighborhoods" },
            { value: "4.8", label: "Average Rating" },
            { value: "9", label: "Day Avg. Timeline" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "1.5rem 1.25rem",
                borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 1.75rem + 0.5vw, 2.25rem)",
                  color: "var(--color-accent)",
                  lineHeight: 1,
                  marginBottom: "0.2rem",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--color-text-muted)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
          }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <article
              key={i}
              style={{
                background: "var(--color-bg)",
                overflow: "hidden",
                position: "relative",
                borderLeft: "3px solid transparent",
                transition: "border-color 300ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent";
              }}
              className="group"
            >
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 400ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                {/* Iron-frame label */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-accent)",
                    padding: "0.25rem 0.625rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.62rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "var(--color-accent)",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
              <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid var(--color-border)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "0.375rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "0.9rem",
                      letterSpacing: "0.05em",
                      color: "var(--color-text)",
                    }}
                  >
                    {item.label}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-accent)",
                    }}
                  >
                    {item.location}
                  </span>
                </div>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", lineHeight: 1.55 }}>
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

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
          Your Project
          <br />
          <span style={{ color: "var(--color-accent)" }}>Could Be Next</span>
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.65,
            maxWidth: "380px",
            margin: "0 auto 2rem",
          }}
        >
          Free estimate. We come to you, measure the scope, and give you a written number.
        </p>
        <Link to="/contact" className="btn-primary">
          Request Free Estimate <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}
