import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Mail, ChevronDown } from "lucide-react";

const STATS = [
  { value: "483", label: "Projects Completed" },
  { value: "14", label: "Years on Oahu" },
  { value: "1.2M+", label: "Sq Ft Painted" },
  { value: "4.8", label: "Google Rating" },
];

const SERVICES_TEASER = [
  {
    title: "Interior Painting",
    desc: "Walls, ceilings, trim, and cabinetry. We prep surfaces right so paint holds for years.",
    idealFor: "Homeowners refreshing rooms, preparing for sale, or moving in.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=75",
    alt: "Interior painting in progress",
  },
  {
    title: "Exterior Painting",
    desc: "Weather-rated coatings built for Hawaii's sun, salt air, and heavy rain.",
    idealFor: "Homeowners with fading, peeling, or chalking exterior coatings.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75",
    alt: "Exterior house painting",
  },
  {
    title: "Drywall Repair",
    desc: "Patch, skim, sand, prime. Invisible repairs before we roll a single drop of paint.",
    idealFor: "Homes with water damage, cracks, or holes before a repaint.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=75",
    alt: "Drywall repair and finishing",
  },
  {
    title: "Deck Refinishing",
    desc: "Strip, sand, stain, seal. Decks that take the sun beating without cracking or peeling.",
    idealFor: "Homeowners with graying, splintering, or peeling deck surfaces.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75",
    alt: "Deck refinishing and staining",
  },
  {
    title: "Kitchen Remodeling",
    desc: "Cabinet painting, new hardware, tile work, countertop coordination. Full kitchen refresh without a full demo.",
    idealFor: "Homeowners who want a new kitchen look without $40k+ gut renovation.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=75",
    alt: "Kitchen cabinet painting and remodeling",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Tile, paint, fixtures, and finish work. We coordinate trades so you get one crew, one timeline.",
    idealFor: "Homeowners updating tile, vanities, or dealing with mildew-prone surfaces.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=75",
    alt: "Bathroom renovation and tile work",
  },
];

const TESTIMONIALS = [
  {
    quote: "They painted our entire exterior while we were in Seattle for two weeks. Came home to a house that looked brand new. Neighbors thought we moved.",
    name: "Marcus T.",
    detail: "Kailua, Oahu · Exterior repaint · Crew: Jason & Mike · November 2024",
    stars: 5,
  },
  {
    quote: "Every contractor I called wanted to do a partial job. Hawaii Elite came out, walked the whole house, gave me a real scope with real numbers. No guessing.",
    name: "Lynn H.",
    detail: "Manoa · Interior + drywall repair · Foreman: Derek · February 2025",
    stars: 5,
  },
  {
    quote: "The kitchen cabinet painting saved us $18k over replacement. Looks better than new and they matched the trim color exactly.",
    name: "Ray & Suki F.",
    detail: "Pearl City · Cabinet refinishing · Crew: Kai & Brandon · March 2025",
    stars: 5,
  },
];

const FAQ_ITEMS = [
  {
    q: "How often should I repaint my exterior in Hawaii?",
    a: "Sun-exposed walls need recoating every 3-5 years. Shaded surfaces last 5-7 years. Salt air, UV load, and humidity cycling accelerate coating breakdown faster than mainland climate guides suggest. We assess your specific exposure during the estimate walk-through.",
  },
  {
    q: "What paint brands do you use?",
    a: "We specify coatings by the surface, not by a single brand. Sherwin-Williams Duration for most exteriors, Benjamin Moore Regal for interiors, and specialty products like elastomeric coatings for stucco. Every spec is documented in your written scope before work begins.",
  },
  {
    q: "How long does a typical interior repaint take?",
    a: "A 1,200-1,500 sq ft home interior typically takes 3-4 days: day one is prep (furniture move, masking, patching), days two and three are paint, day four is touch-up and walk-through. Larger homes or homes with extensive drywall repair may take 5-7 days.",
  },
  {
    q: "Do I need to move out during the project?",
    a: "No. We work room by room and seal off active areas with plastic sheeting. You keep access to kitchens, bathrooms, and bedrooms at all times. We clean at the end of every work day so your routine stays the same.",
  },
  {
    q: "What does the written estimate include?",
    a: "Line-item pricing for every surface: walls, ceilings, trim, doors. Coating manufacturer and product name for each area. Timeline in calendar days. Payment schedule. Warranty terms. No lump-sum guessing.",
  },
];

const WHY_ITEMS = [
  { phrase: "Written Scope First", detail: "Detailed line-item estimate before any work starts. No surprises on the invoice." },
  { phrase: "70/30 Prep Ratio", detail: "70% of every project is surface prep. No shortcuts on sanding, caulking, or priming." },
  { phrase: "Clean Site Daily", detail: "Jobsite cleaned at the end of every work day during multi-day projects." },
  { phrase: "Manufacturer Warranty", detail: "Paint warranties honored through the manufacturer. Documentation on file." },
  { phrase: "Licensed in Hawaii", detail: "Active Hawaii contractors license. Full liability and workers comp coverage." },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "var(--space-section) 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>
          Common Questions
        </span>
        <h2
          style={{
            fontSize: "var(--text-h2)",
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 0.92,
            color: "var(--color-text)",
            marginBottom: "2.5rem",
          }}
        >
          Before You Call
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "1.25rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "0.85rem",
                      letterSpacing: "0.04em",
                      color: isOpen ? "var(--color-accent)" : "var(--color-text)",
                      transition: "color 200ms ease",
                    }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    size={16}
                    style={{
                      color: "var(--color-accent)",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 300ms ease",
                  }}
                >
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      paddingBottom: "1.25rem",
                      maxWidth: "640px",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Hawaii Elite Painting and Renovation | Honolulu, Oahu</title>
        <meta
          name="description"
          content="Painting and renovation contractors serving Oahu. Interior, exterior, drywall, decks, kitchens, and bathrooms. Licensed and insured. Free estimates."
        />
      </Helmet>

      {/* ── HERO ── split desktop layout */}
      <section
        aria-labelledby="hero-heading"
        style={{
          paddingTop: "64px",
          minHeight: "100svh",
          display: "grid",
          gridTemplateColumns: "1fr",
          overflow: "hidden",
        }}
        className="md:grid-cols-2"
      >
        {/* Left, content */}
        <div
          style={{
            background: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(2.5rem, 4vw, 5rem) clamp(1.5rem, 5vw, 5rem)",
          }}
        >
          <span className="section-label" style={{ marginBottom: "1.25rem" }}>
            Honolulu, Oahu · Licensed in Hawaii
          </span>

          <h1
            id="hero-heading"
            style={{
              fontSize: "var(--text-hero)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: "var(--color-text)",
              marginBottom: "1.75rem",
            }}
          >
            483 Houses
            <br />
            <span style={{ color: "var(--color-accent)" }}>on Oahu.</span>
            <br />
            Same Crew.
          </h1>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "clamp(1rem, 1rem + 0.25vw, 1.1rem)",
              lineHeight: 1.65,
              maxWidth: "420px",
              marginBottom: "2.25rem",
            }}
          >
            Your house gets painted. Your routine stays the same. We show up on
            time, prep every surface, clean up at the end of every day, and keep
            you in the loop without a single surprise on the invoice.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link to="/contact" className="btn-primary">
              Get Free Estimate
              <ArrowRight size={14} />
            </Link>
            <Link to="/gallery" className="btn-outline">
              See Our Work
            </Link>
          </div>

          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-text-muted)",
              fontSize: "0.85rem",
              fontFamily: "var(--font-accent)",
              textDecoration: "none",
              transition: "color 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >
            <Mail size={14} />
            Send a message
          </Link>
        </div>

        {/* Right, photo */}
        <div
          style={{
            position: "relative",
            minHeight: "420px",
            overflow: "hidden",
          }}
          className="hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80"
            alt="Painter working on interior walls in a Honolulu home"
            fetchPriority="high"
            loading="eager"
            className="hero-ken-burns"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Dark overlay so the split reads cleanly */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, var(--color-bg) 0%, transparent 15%)",
            }}
          />

          {/* Floating trust badge */}
          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              right: "2rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              padding: "1rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              boxShadow: "6px 6px 0 0 var(--color-accent)",
            }}
          >
            <span
              style={{
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-accent)",
                fontWeight: 500,
              }}
            >
              Google Rating
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "var(--color-text)",
                  lineHeight: 1,
                }}
              >
                4.8
              </span>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill="hsl(38 85% 55%)"
                    color="hsl(38 85% 55%)"
                  />
                ))}
              </div>
            </div>
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-accent)",
              }}
            >
              47 reviews
            </span>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
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
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="stat-block"
              style={{
                padding: "2rem 1.5rem",
                borderRight: i < STATS.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 2rem + 0.5vw, 2.5rem)",
                  color: "var(--color-text)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-text-muted)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATION BADGES ── */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "2rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {[
            "Licensed Hawaii Contractor",
            "Fully Insured",
            "Written Warranties",
            "Free Estimates",
          ].map((badge) => (
            <div
              key={badge}
              style={{
                border: "1px solid var(--color-border)",
                padding: "0.625rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "var(--color-accent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--color-text-muted)",
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ECO RESPONSIBILITY STRIP ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.75rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.62rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--color-accent)",
            }}
          >
            Painting Responsibly on Oahu
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem 2.5rem",
            }}
          >
            {[
              "Low-VOC coatings standard on all interiors",
              "EPA Lead-Safe Certified for pre-1978 homes",
              "Leftover paint recycled through PaintCare Hawaii",
              "Zero job-site waste to storm drains",
            ].map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.82rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.4,
                }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    background: "var(--color-accent)",
                    flexShrink: 0,
                    opacity: 0.6,
                  }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section
        aria-labelledby="services-heading"
        style={{
          padding: "var(--space-section) 1.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <h2
            id="services-heading"
            style={{
              fontSize: "var(--text-h2)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 0.92,
              color: "var(--color-text)",
              marginBottom: "1rem",
            }}
          >
            What We Do
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "520px",
              lineHeight: 1.65,
              fontSize: "0.95rem",
            }}
          >
            Painting, repairs, and renovation. One crew handles it all. Every job comes
            with a written scope, daily cleanup, and someone who answers the phone.
          </p>
        </div>

        {/* Staggered grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1px",
            background: "var(--color-border)",
          }}
          className="md:grid-cols-3"
        >
          {/* Featured card, col-span-2 */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "320px",
            }}
            className="md:col-span-2"
          >
            <img
              src={SERVICES_TEASER[0].img}
              alt={SERVICES_TEASER[0].alt}
              loading="lazy"
              width={800}
              height={320}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, hsl(220 45% 7% / 0.95) 0%, hsl(220 45% 7% / 0.5) 60%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "clamp(1.5rem, 2vw, 2rem)",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                {SERVICES_TEASER[0].title}
              </h3>
              <p
                style={{
                  color: "hsl(40 30% 92% / 0.8)",
                  fontSize: "0.9rem",
                  lineHeight: 1.55,
                  maxWidth: "360px",
                }}
              >
                {SERVICES_TEASER[0].desc}
              </p>
              <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.72rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                Ideal for: {SERVICES_TEASER[0].idealFor}
              </span>
            </div>
          </div>

          {/* Single card */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "320px",
            }}
          >
            <img
              src={SERVICES_TEASER[1].img}
              alt={SERVICES_TEASER[1].alt}
              loading="lazy"
              width={400}
              height={320}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, hsl(220 45% 7% / 0.95) 0%, hsl(220 45% 7% / 0.5) 60%, transparent 100%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "1.25rem",
                  color: "var(--color-text)",
                  marginBottom: "0.375rem",
                }}
              >
                {SERVICES_TEASER[1].title}
              </h3>
              <p style={{ color: "hsl(40 30% 92% / 0.75)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                {SERVICES_TEASER[1].desc}
              </p>
              <span style={{ display: "block", marginTop: "0.375rem", fontSize: "0.68rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                Ideal for: {SERVICES_TEASER[1].idealFor}
              </span>
            </div>
          </div>

          {/* Three equal */}
          {SERVICES_TEASER.slice(2, 5).map((svc) => (
            <div
              key={svc.title}
              className="card-iron"
              style={{
                background: "var(--color-surface)",
                borderLeft: "3px solid transparent",
                transition: "transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent";
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.05em",
                }}
              >
                {svc.title}
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                {svc.desc}
              </p>
              <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.68rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                Ideal for: {svc.idealFor}
              </span>
            </div>
          ))}

          {/* Full-width strip */}
          <div
            style={{
              background: "var(--color-surface-raised)",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "flex-start",
            }}
            className="md:col-span-3 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  color: "var(--color-text)",
                  marginBottom: "0.375rem",
                  letterSpacing: "0.05em",
                }}
              >
                {SERVICES_TEASER[5].title}
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "500px" }}>
                {SERVICES_TEASER[5].desc}
              </p>
              <span style={{ display: "block", marginTop: "0.375rem", fontSize: "0.68rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                Ideal for: {SERVICES_TEASER[5].idealFor}
              </span>
            </div>
            <Link to="/services" className="btn-outline" style={{ flexShrink: 0 }}>
              All Services <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP, THE ELITE SEQUENCE ── */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-surface-raised)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <span
            className="section-label"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            The Elite Sequence
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-accent)",
              fontSize: "0.72rem",
              color: "var(--color-text-muted)",
              marginBottom: "1.5rem",
              letterSpacing: "0.06em",
            }}
          >
            Prep first. Paint right. Every house.
          </span>
        </div>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="md:grid-cols-4"
        >
          {[
            { step: "01", title: "Call or Request Online", desc: "Describe the job. We respond within one business day." },
            { step: "02", title: "Walk-Through & Estimate", desc: "We measure, photograph, and hand you a written scope with line-item pricing." },
            { step: "03", title: "Prep, Paint, Inspect", desc: "Surface prep, quality coatings, daily cleanup. Average crew tenure: 6 years. You approve the final walk-through." },
            { step: "04", title: "Warranty & Follow-Up", desc: "Manufacturer paint warranty on file. We check in at 6 months and 12 months." },
          ].map((item) => (
            <div key={item.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 2.5vw, 3rem)",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  opacity: 0.35,
                  flexShrink: 0,
                }}
              >
                {item.step}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    color: "var(--color-text)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECT ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="md:grid-cols-2"
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "260px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=75"
              alt="Completed exterior repaint on a Kailua home"
              loading="lazy"
              width={800}
              height={260}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>
              Recent Project
            </span>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                color: "var(--color-text)",
                lineHeight: 0.95,
                marginBottom: "1rem",
              }}
            >
              Kailua Beach Road
              <br />
              <span style={{ color: "var(--color-accent)" }}>Full Exterior</span>
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              {[
                { label: "Area", value: "2,800 sq ft" },
                { label: "Timeline", value: "9 days" },
                { label: "Coating", value: "Sherwin-Williams Duration" },
                { label: "Scope", value: "Exterior walls, trim, fascia, lanai" },
              ].map((item) => (
                <div key={item.label}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.62rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "var(--color-accent)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--color-text)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.85rem",
                lineHeight: 1.55,
              }}
            >
              Salt-air rated coating system. Power wash, scrape, two coats primer on bare wood, two coats finish. Homeowner stayed in residence throughout.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECENT JOBS STRIP ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          padding: "2rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span
            className="section-label"
            style={{ display: "block", marginBottom: "1.25rem" }}
          >
            Recent Jobs
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {[
              { date: "Apr 2025", job: "Full exterior repaint, Kailua Beachside. Two coats Duration on lap siding." },
              { date: "Mar 2025", job: "Kitchen cabinet refinish, Manoa. 36 doors sprayed off-site, reinstalled day four." },
              { date: "Feb 2025", job: "Interior walls + ceiling, Pearl City split-level. Color consultation included." },
              { date: "Jan 2025", job: "Deck strip and restain, Hawaii Kai. Penofin penetrating stain, 380 sq ft." },
            ].map((entry) => (
              <div
                key={entry.date}
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "baseline",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--color-accent)",
                    flexShrink: 0,
                    minWidth: "72px",
                  }}
                >
                  {entry.date}
                </span>
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {entry.job}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "var(--space-section) 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="md:grid-cols-2"
        >
          <div>
            <span className="section-label" style={{ marginBottom: "1rem", display: "block" }}>
              How We Work
            </span>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                lineHeight: 0.92,
                color: "var(--color-text)",
                marginBottom: "1.5rem",
              }}
            >
              No Surprises.
              <br />
              <span style={{ color: "var(--color-accent)" }}>Ever.</span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.65,
                maxWidth: "400px",
                marginBottom: "2rem",
                fontSize: "0.95rem",
              }}
            >
              Every project gets a written scope before we touch a brush. If something changes
              on the job, you hear about it the same day. No change orders you didn't approve.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Estimate <ArrowRight size={14} />
            </Link>
          </div>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {WHY_ITEMS.map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  padding: "1.125rem 0",
                  borderBottom:
                    i < WHY_ITEMS.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                }}
              >
                <CheckCircle
                  size={16}
                  style={{ color: "var(--color-accent)", marginTop: "3px", flexShrink: 0 }}
                />
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "0.82rem",
                      letterSpacing: "0.06em",
                      color: "var(--color-text)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.phrase}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                    {item.detail}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{
          padding: "var(--space-section) 1.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "var(--text-h2)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 0.92,
              color: "var(--color-text)",
            }}
          >
            483 Projects.
            <br />Zero Callbacks.
          </h2>

          {/* Google badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              border: "1px solid var(--color-border)",
              padding: "0.75rem 1.25rem",
              background: "var(--color-surface)",
            }}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="hsl(38 85% 55%)" color="hsl(38 85% 55%)" />
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
              }}
            >
              4.8 · 47 Google reviews
            </span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1px",
            background: "var(--color-border)",
          }}
          className="md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={12} fill="hsl(38 85% 55%)" color="hsl(38 85% 55%)" />
                ))}
              </div>
              <blockquote
                style={{
                  color: "var(--color-text)",
                  fontSize: "0.925rem",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                "{t.quote}"
              </blockquote>
              <div>
                <cite
                  style={{
                    fontStyle: "normal",
                    fontFamily: "var(--font-accent)",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "var(--color-accent)",
                    display: "block",
                  }}
                >
                  {t.name}
                </cite>
                <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                  {t.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── WARRANTY CALLOUT ── */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-surface-raised)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
          className="md:flex-row md:text-left md:justify-between"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 2.5vw, 3rem)",
                lineHeight: 1,
                color: "var(--color-accent)",
              }}
            >
              5 yr
            </span>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.95rem",
                  letterSpacing: "0.06em",
                  color: "var(--color-text)",
                }}
              >
                Written Paint Warranty
              </span>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                }}
              >
                Manufacturer-backed coverage on labor and materials. Certificate provided at project close. Prep first. Paint right.
              </span>
            </div>
          </div>
          <Link to="/contact" className="btn-outline" style={{ flexShrink: 0 }}>
            Ask About Coverage
          </Link>
        </div>
      </section>

      {/* ── SERVICE AREA STRIP ── */}
      <section
        style={{
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span
            className="section-label"
            style={{ display: "block", marginBottom: "1rem" }}
          >
            Service Area
          </span>
          <p
            style={{
              color: "var(--color-text)",
              fontSize: "clamp(1rem, 1vw + 0.5rem, 1.15rem)",
              lineHeight: 1.65,
              maxWidth: "720px",
            }}
          >
            Kailua Beachside · Lanikai · Enchanted Lake · Kaneohe Bay ·
            Manoa · Kahala · Portlock · Hawaii Loa Ridge · Aina Haina ·
            Pearl City · Aiea Heights · Mililani Mauka · Ewa Beach ·
            Kapolei · Waikiki · Downtown Honolulu · North Shore by request.
          </p>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.82rem",
              marginTop: "0.75rem",
            }}
          >
            Based out of 200 N Vineyard Blvd, Honolulu. We drive to you for the estimate.
          </p>
        </div>
      </section>

      {/* ── COLOR ADVISORY CALLOUT ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="md:grid-cols-5"
        >
          <div className="md:col-span-3">
            <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>
              Free with Every Estimate
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                lineHeight: 0.95,
                color: "var(--color-text)",
                marginBottom: "1rem",
              }}
            >
              Color Advisory
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.65,
                marginBottom: "0.75rem",
              }}
            >
              Not sure what color works with your flooring, light exposure, or existing
              trim? We bring Sherwin-Williams and Benjamin Moore fan decks to the
              walk-through and help you narrow from 3,500 options to the three that
              actually work in your room, at your latitude, with your light.
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.82rem",
                lineHeight: 1.55,
              }}
            >
              No upcharge. No pressure. Just paint knowledge from 483 houses worth of
              matching colors on Oahu.
            </p>
          </div>
          <div
            className="md:col-span-2"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.62rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--color-accent)",
              }}
            >
              What You Get
            </span>
            {[
              "On-site color consultation during estimate walk-through",
              "Fan deck review with Sherwin-Williams and Benjamin Moore palettes",
              "Light exposure assessment for each room",
              "Written color spec included in your scope document",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "0.625rem",
                  alignItems: "flex-start",
                }}
              >
                <CheckCircle
                  size={13}
                  style={{ color: "var(--color-accent)", marginTop: "3px", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRE-FOOTER CTA BAND ── */}
      <section
        style={{
          position: "relative",
          height: "clamp(280px, 40vw, 440px)",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "hsl(220 45% 7% / 0.72)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 1.5rem",
            zIndex: 10,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              color: "var(--color-text)",
              lineHeight: 0.92,
              maxWidth: "640px",
              marginBottom: "1.25rem",
            }}
          >
            Your House. Your Colors.
            <br />
            <span style={{ color: "var(--color-accent)" }}>One Call.</span>
          </h2>
          <p
            style={{
              color: "hsl(40 30% 92% / 0.75)",
              fontSize: "clamp(0.9rem, 1rem + 0.2vw, 1.05rem)",
              lineHeight: 1.55,
              maxWidth: "440px",
              marginBottom: "2rem",
            }}
          >
            Free estimate. Written scope. No pressure to sign the same day.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link to="/contact" className="btn-primary">
              Get Free Estimate <ArrowRight size={14} />
            </Link>
            <Link to="/gallery" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "hsl(40 30% 92%)" }}>
              See Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
