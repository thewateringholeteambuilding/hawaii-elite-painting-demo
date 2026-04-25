import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";

const STATS = [
  { value: "483", label: "Projects Completed" },
  { value: "14", label: "Years on Oahu" },
  { value: "4.8", label: "Google Rating" },
  { value: "Free", label: "Written Estimates" },
];

const SERVICES_TEASER = [
  {
    title: "Interior Painting",
    desc: "Walls, ceilings, trim, and cabinetry. We prep surfaces right so paint holds for years.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=75",
    alt: "Interior painting in progress",
  },
  {
    title: "Exterior Painting",
    desc: "Weather-rated coatings built for Hawaii's sun, salt air, and heavy rain.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75",
    alt: "Exterior house painting",
  },
  {
    title: "Drywall Repair",
    desc: "Patch, skim, sand, prime. Invisible repairs before we roll a single drop of paint.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=75",
    alt: "Drywall repair and finishing",
  },
  {
    title: "Deck Refinishing",
    desc: "Strip, sand, stain, seal. Decks that take the sun beating without cracking or peeling.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75",
    alt: "Deck refinishing and staining",
  },
  {
    title: "Kitchen Remodeling",
    desc: "Cabinet painting, new hardware, tile work, countertop coordination. Full kitchen refresh without a full demo.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=75",
    alt: "Kitchen cabinet painting and remodeling",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Tile, paint, fixtures, and finish work. We coordinate trades so you get one crew, one timeline.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=75",
    alt: "Bathroom renovation and tile work",
  },
];

const TESTIMONIALS = [
  {
    quote: "They painted our entire exterior while we were in Seattle for two weeks. Came home to a house that looked brand new. Neighbors thought we moved.",
    name: "Marcus T.",
    detail: "Kailua, Oahu · Exterior repaint",
    stars: 5,
  },
  {
    quote: "Every contractor I called wanted to do a partial job. Hawaii Elite came out, walked the whole house, gave me a real scope with real numbers. No guessing.",
    name: "Lynn H.",
    detail: "Manoa · Interior + drywall repair",
    stars: 5,
  },
  {
    quote: "The kitchen cabinet painting saved us $18k over replacement. Looks better than new and they matched the trim color exactly.",
    name: "Ray & Suki F.",
    detail: "Pearl City · Cabinet refinishing",
    stars: 5,
  },
];

const WHY_ITEMS = [
  "Detailed written estimate before any work starts",
  "Prep work included: no shortcuts on sanding, caulking, or priming",
  "Jobsite cleaned daily during multi-day projects",
  "Paint warranties honored through the manufacturer",
  "Hawaii contractors license on file",
];

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
        {/* Left — content */}
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
            § Honolulu, Oahu
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
            Paint It
            <br />
            <span style={{ color: "var(--color-accent)" }}>Right.</span>
            <br />
            Renovate
            <br />
            It Better.
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

          <a
            href="tel:+18085550192"
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
            <Phone size={14} />
            (808) 555-0192
          </a>
        </div>

        {/* Right — photo */}
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
          {/* Featured card — col-span-2 */}
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
            </div>
          </div>

          {/* Three equal */}
          {SERVICES_TEASER.slice(2, 5).map((svc) => (
            <div
              key={svc.title}
              style={{
                background: "var(--color-surface)",
                padding: "1.75rem",
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
            </div>
            <Link to="/services" className="btn-outline" style={{ flexShrink: 0 }}>
              All Services <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
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
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="md:grid-cols-4"
        >
          {[
            { step: "01", title: "Call or Request Online", desc: "Describe the job. We respond within one business day." },
            { step: "02", title: "Walk-Through & Estimate", desc: "We measure, photograph, and hand you a written scope with line-item pricing." },
            { step: "03", title: "Prep, Paint, Inspect", desc: "Surface prep, quality coatings, daily cleanup. You approve the final walk-through." },
            { step: "04", title: "Warranty & Follow-Up", desc: "Manufacturer paint warranty on file. We check in at 6 months." },
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
              § How We Work
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
                <span style={{ fontSize: "0.925rem", color: "var(--color-text)", lineHeight: 1.55 }}>
                  {item}
                </span>
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
            What Oahu
            <br />Homeowners Say
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
            Honolulu · Kailua · Kaneohe · Pearl City · Aiea · Hawaii Kai ·
            Mililani · Ewa Beach · Kapolei · Manoa · Waikiki ·
            North Shore by request.
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
            Ready to Change
            <br />
            <span style={{ color: "var(--color-accent)" }}>What You Come Home To?</span>
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
