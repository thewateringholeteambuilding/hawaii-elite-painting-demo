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
    desc: "Walls, ceilings, trim, and cabinetry. Specialty finishes available: limewash, Venetian plaster, roman clay.",
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
    quote: "They painted our entire exterior while we were in Seattle for two weeks. Jason texted us a photo every evening so we could see the progress. Came home to a house that looked brand new. Neighbors thought we moved.",
    name: "Marcus T., Kailua",
    detail: "Exterior repaint · Crew: Jason & Mike · November 2024",
    stars: 5,
  },
  {
    quote: "Derek measured every wall before he quoted. Line-item pricing, no guessing.",
    name: "Lynn H., Manoa",
    detail: "Interior + drywall repair · Foreman: Derek · February 2025",
    stars: 5,
  },
  {
    quote: "The kitchen cabinet painting saved us $18k over replacement. Kai brought three sample doors home from the spray booth so we could compare the sheen in our own kitchen light before they did the full set. We went with the satin. Perfect call.",
    name: "Ray & Suki F., Pearl City",
    detail: "Cabinet refinishing · Crew: Kai & Brandon · March 2025",
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
  {
    q: "What does a typical project cost?",
    a: "A single-room interior repaint starts around $1,800-$2,500 depending on ceiling height, trim detail, and prep work. Full interior for a 3-bedroom home runs $5,500-$8,000. Exterior repaints range from $4,500 for a single-story to $9,000+ for two-story homes with extensive wood trim. Cabinet refinishing averages $3,200-$5,500 per kitchen. Every number depends on condition and scope, which is why the walk-through matters.",
  },
];

const WHY_ITEMS = [
  { phrase: "We quote it before we touch it", detail: "Line-item pricing for every surface. You sign the scope before we open a can." },
  { phrase: "We prep like the paint depends on it", detail: "70% of every project is surface prep. Sanding, caulking, priming. No shortcuts." },
  { phrase: "We clean up every single day", detail: "Jobsite cleared at the end of every work day. Your routine stays the same." },
  { phrase: "We answer the phone when you call", detail: "Same number, same crew. No call center, no voicemail maze." },
  { phrase: "We stand behind the finish", detail: "2-year workmanship warranty. Manufacturer coating warranty on file. We call at 6 and 12 months." },
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
            Est. 2012 · Honolulu, Oahu
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
              marginBottom: "1.25rem",
            }}
          >
            483 Houses
            <br />
            <span style={{ color: "var(--color-accent)" }}>on Oahu.</span>
            <br />
            Same Crew.
          </h1>

          <span
            style={{
              display: "block",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(0.82rem, 0.8rem + 0.2vw, 0.95rem)",
              letterSpacing: "0.1em",
              color: "var(--color-accent)",
              marginBottom: "1.5rem",
              lineHeight: 1.4,
            }}
          >
            24-hour quotes. Start in 5 business days.
          </span>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "clamp(1rem, 1rem + 0.25vw, 1.1rem)",
              lineHeight: 1.65,
              maxWidth: "420px",
              marginBottom: "2.25rem",
            }}
          >
            Same crew every day. They show up at 7:30, prep every
            surface, and clean the jobsite before they leave. No calls
            wondering where the crew went. No line items you didn't
            approve. Just paint on the wall and a scope you signed.
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
            "Licensed Hawaii Contractor · Since 2012",
            "Fully Insured · GL + Workers Comp",
            "Background Checked Crew",
            "6-Year Avg Crew Tenure",
            "Written Warranties on Every Job",
            "Free Estimates · 24-Hour Response",
            "Best of Houzz 2023, 2024, 2025",
            "2024 PCA Image Award · Residential Exterior",
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

      {/* ── EPA LEAD-SAFE BADGE ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              border: "2px solid var(--color-accent)",
              padding: "0.625rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: "var(--color-surface)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                border: "2px solid var(--color-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CheckCircle size={18} style={{ color: "var(--color-accent)" }} />
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  letterSpacing: "0.06em",
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                }}
              >
                EPA Lead-Safe Certified
              </span>
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                }}
              >
                Firm #NAT-F217946-1 · Required for pre-1978 homes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREW TRUST STRIP ── */}
      <section
        style={{
          background: "var(--color-surface-raised)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "2.5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
              letterSpacing: "0.06em",
              color: "var(--color-text)",
              marginBottom: "0.75rem",
              lineHeight: 1.1,
            }}
          >
            Background Checked. Drug Tested.{" "}
            <span style={{ color: "var(--color-accent)" }}>Trusted in Your Home.</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Every crew member passes a background check and drug screening before
            their first job. Average tenure on our crew is 6 years. You get the
            same faces on day one and day five.
          </p>
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
              "Sherwin-Williams Harmony zero-VOC on all interiors",
              "EPA Lead-Safe Certified for pre-1978 homes (Firm #NAT-F217946-1)",
              "Leftover paint recycled through PaintCare Hawaii drop-off in Kapolei",
              "Zero job-site waste to storm drains (tarps under every ladder)",
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

      {/* ── COMMUNITY INVOLVEMENT ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem 2.5rem",
            alignItems: "center",
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
              flexShrink: 0,
            }}
          >
            In the Community
          </span>
          {[
            "Partnered with Habitat for Humanity Honolulu on 3 home repaints in 2024",
            "Annual Paint Day at Kailua Elementary (4th year running)",
            "120 gallons donated to community cleanups since 2021",
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
      </section>

      {/* ── WHO WE PAINT FOR ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "0.5rem" }}>
            Who We Paint For
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "var(--color-border)",
              marginTop: "1.5rem",
            }}
            className="md:grid-cols-4"
          >
            {[
              {
                type: "Homeowners",
                scenario: "Refreshing rooms before a move-in, prepping for sale, or recoating after years of island sun.",
              },
              {
                type: "Vacation Rental Owners",
                scenario: "Quick turnaround between bookings. Neutrals that photograph well and coatings that handle guest traffic.",
              },
              {
                type: "Property Managers",
                scenario: "Multi-unit touch-ups, common area repaints, and tenant turnover timelines that can't slip.",
              },
              {
                type: "Commercial Tenants",
                scenario: "Office refreshes, retail storefronts, and restaurant interiors. Off-hours scheduling available.",
              },
            ].map((c) => (
              <div
                key={c.type}
                className="card-audience"
                tabIndex={0}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.82rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text)",
                  }}
                >
                  {c.type}
                </span>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                  {c.scenario}
                </p>
              </div>
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
            We care for surfaces before we coat them. Every job starts
            with a written scope, hands-on prep, and ends with a
            walk-through you sign off on. One crew from estimate to
            final touch-up.
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

          {/* Three equal — numbered index */}
          {SERVICES_TEASER.slice(2, 5).map((svc, idx) => (
            <div
              key={svc.title}
              className="card-iron"
              style={{
                background: "var(--color-surface)",
                borderLeft: "3px solid transparent",
                transition: "transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent";
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  opacity: 0.15,
                }}
              >
                {String(idx + 3).padStart(2, "0")}
              </span>
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

      {/* ── SPECIALTY SPOTLIGHT: CABINET PAINTING ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
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
              Most Requested
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
              Cabinet Refinishing
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.65,
                marginBottom: "0.75rem",
              }}
            >
              A full kitchen gut-reno on Oahu runs $35k-$55k. Refinishing your
              existing cabinets gets you a new kitchen look for $3,200-$5,500.
              We spray doors off-site in our booth, reinstall on day four.
              Same boxes, new finish, fraction of the cost.
            </p>
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-accent)",
              }}
            >
              Avg savings vs. replacement: $18,000
            </p>
          </div>
          <div
            className="md:col-span-2"
            style={{
              background: "var(--color-bg)",
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
              What's Included
            </span>
            {[
              "36 doors avg per kitchen, sprayed in controlled booth",
              "Benjamin Moore Advance or Sherwin-Williams ProClassic",
              "Hardware removal, label, reinstall",
              "Hinges replaced if worn (soft-close upgrade available)",
              "Touch-up kit left on-site for future scuffs",
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
            The Elite Sequence™
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
            Four steps. One scope. Zero guesswork.
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
            { step: "01", title: "Call or Request Online", desc: "Describe the job. Quote returned within 24 hours. No forms longer than 4 fields." },
            { step: "02", title: "Walk-Through & Estimate", desc: "We measure every surface, photograph existing conditions, and hand you a written scope with line-item pricing before you commit to anything." },
            { step: "03", title: "Prep, Paint, Inspect", desc: "70% of every project is surface prep. Two coats minimum. Daily cleanup. You walk every room before we pack up." },
            { step: "04", title: "Warranty & Follow-Up", desc: "2-year workmanship warranty. Manufacturer coating warranty on file. We call at 6 months and 12 months to check adhesion." },
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
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "2px",
              minHeight: "260px",
            }}
          >
            {/* Before — smaller, slightly darker */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=70"
                alt="Kailua home exterior before repaint — faded and peeling"
                loading="lazy"
                width={400}
                height={260}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "saturate(0.6) brightness(0.85)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "0.75rem",
                  left: "0.75rem",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.58rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--color-text-muted)",
                  background: "hsl(220 45% 7% / 0.8)",
                  padding: "0.25rem 0.5rem",
                }}
              >
                Before
              </span>
            </div>
            {/* After — larger, full color */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=75"
                alt="Kailua home exterior after Elite repaint — fresh coating"
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
              <span
                style={{
                  position: "absolute",
                  bottom: "0.75rem",
                  left: "0.75rem",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.58rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--color-accent)",
                  background: "hsl(220 45% 7% / 0.8)",
                  padding: "0.25rem 0.5rem",
                }}
              >
                After
              </span>
            </div>
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
              { date: "Apr 2025", ref: "HEP-051", job: "Full exterior repaint, Kailua Beachside. Salt-side ranch, two coats Duration on lap siding. Trade winds kept dry time under 90 min.", lead: "Lead: Jason" },
              { date: "Mar 2025", ref: "HEP-049", job: "Kitchen cabinet refinish, Manoa valley cottage. 36 doors sprayed off-site, reinstalled day four.", lead: "Lead: Kai" },
              { date: "Feb 2025", ref: "HEP-047", job: "Interior walls + ceiling, Pearl City split-level near the bike path. Color consultation included.", lead: "Lead: Derek" },
              { date: "Jan 2025", ref: "HEP-044", job: "Deck strip and restain, Hawaii Kai slope lot. Penofin penetrating stain, 380 sq ft. Owner's dog supervised every coat.", lead: "Lead: Brandon" },
            ].map((entry) => (
              <div
                key={entry.ref}
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
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    color: "var(--color-text-muted)",
                    opacity: 0.5,
                    flexShrink: 0,
                    minWidth: "56px",
                  }}
                >
                  {entry.ref}
                </span>
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {entry.job}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    opacity: 0.6,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {entry.lead}
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
              The Hawaii Elite Promise™
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
              Five Things
              <br />
              <span style={{ color: "var(--color-accent)" }}>We Never Break.</span>
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
              If you want the lowest bid on Oahu, it won't come from us.
              If you want the last paint job your house needs for 7 years, keep reading.
              These are commitments we make on every job. Break one, tell us, we fix it the same day.
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
            68% Come Back.
            <br />The Rest Refer.
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
              className="testimonial-card"
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
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", alignItems: "flex-start" }}>
            <span
              className="section-label"
              style={{ display: "block" }}
            >
              The Hawaii Elite Promise™
            </span>
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                }}
              >
                2 yr
              </span>
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
                  }}
                >
                  Workmanship Warranty
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  Peeling, cracking, or adhesion failure from prep or application. We come back and fix it. Expected coating life: 5-7 years exterior, 8-10 interior.
                </span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
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
                    fontSize: "0.82rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text)",
                  }}
                >
                  Manufacturer Warranty
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  Coating performance backed by Sherwin-Williams or Benjamin Moore. Certificate on file. Lifetime touchups on prep-related callbacks.
                </span>
              </div>
            </div>
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
            Where We Paint
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1px",
              background: "var(--color-border)",
              marginBottom: "1.25rem",
            }}
            className="md:grid-cols-4"
          >
            {[
              {
                region: "Windward",
                count: 187,
                towns: "Kailua Beachside, Lanikai, Enchanted Lake, Kaneohe Bay",
              },
              {
                region: "Metro Honolulu",
                count: 164,
                towns: "Manoa, Kahala, Portlock, Hawaii Loa Ridge, Aina Haina, Waikiki, Downtown",
              },
              {
                region: "Leeward",
                count: 108,
                towns: "Pearl City, Aiea Heights, Mililani Mauka, Ewa Beach, Kapolei",
              },
              {
                region: "North Shore",
                count: 24,
                towns: "Haleiwa, Waialua, Sunset Beach (by request)",
              },
            ].map((r) => (
              <div
                key={r.region}
                className="card-audience"
                tabIndex={0}
                style={{
                  background: "var(--color-bg)",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                      color: "var(--color-accent)",
                    }}
                  >
                    {r.count}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "0.82rem",
                      letterSpacing: "0.06em",
                      color: "var(--color-text)",
                    }}
                  >
                    {r.region}
                  </span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  {r.towns}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.82rem",
            }}
          >
            Based out of 200 N Vineyard Blvd, Honolulu. We drive to you for the estimate.
          </p>
        </div>
      </section>

      {/* ── SEASONAL BOOKING STRIP ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "0.5rem" }}>
            Scheduling
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              lineHeight: 0.95,
              color: "var(--color-text)",
              marginBottom: "2rem",
            }}
          >
            When to Book
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1px",
              background: "var(--color-border)",
            }}
            className="md:grid-cols-4"
          >
            {[
              {
                season: "Winter",
                months: "Dec - Feb",
                demand: "Low",
                lead: "1-2 weeks",
                note: "Lowest demand. Fastest scheduling. Ideal for interior projects and cabinet work.",
              },
              {
                season: "Spring",
                months: "Mar - May",
                demand: "High",
                lead: "3-4 weeks",
                note: "Peak exterior season. Trade winds keep humidity manageable. Book early.",
              },
              {
                season: "Summer",
                months: "Jun - Aug",
                demand: "Moderate",
                lead: "2-3 weeks",
                note: "Strong UV accelerates dry time. Morning starts beat afternoon rain.",
              },
              {
                season: "Fall",
                months: "Sep - Nov",
                demand: "Moderate",
                lead: "2-3 weeks",
                note: "Good exterior window before winter rain. Interior projects year-round.",
              },
            ].map((s) => (
              <div
                key={s.season}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "0.95rem",
                      letterSpacing: "0.06em",
                      color: "var(--color-text)",
                    }}
                  >
                    {s.season}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "var(--color-text-muted)",
                      marginTop: "0.125rem",
                    }}
                  >
                    {s.months}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--font-accent)", fontSize: "0.58rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-accent)", marginBottom: "0.125rem" }}>
                      Demand
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "var(--color-text)", fontWeight: 600 }}>
                      {s.demand}
                    </span>
                  </div>
                  <div>
                    <span style={{ display: "block", fontFamily: "var(--font-accent)", fontSize: "0.58rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--color-accent)", marginBottom: "0.125rem" }}>
                      Lead Time
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "var(--color-text)", fontWeight: 600 }}>
                      {s.lead}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  {s.note}
                </p>
              </div>
            ))}
          </div>
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
              marginBottom: "1rem",
            }}
          >
            Free estimate. Written scope. No pressure to sign the same day.
          </p>
          <div
            style={{
              background: "hsl(220 45% 7% / 0.55)",
              border: "1px solid hsl(38 85% 55% / 0.25)",
              padding: "1rem 1.5rem",
              marginBottom: "2rem",
              maxWidth: "420px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                color: "var(--color-accent)",
                marginBottom: "0.375rem",
              }}
            >
              Your Estimator: Derek K.
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-accent)",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "hsl(40 30% 92% / 0.6)",
                marginBottom: "0.5rem",
              }}
            >
              14 years on Oahu · 483 estimates written
            </span>
            <p
              style={{
                color: "hsl(40 30% 92% / 0.75)",
                fontSize: "0.82rem",
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              "I measure every wall myself. If I wouldn't sign the scope,
              I don't hand it to you."
            </p>
          </div>
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
