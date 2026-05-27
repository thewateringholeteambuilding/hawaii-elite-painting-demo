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
    hook: "Nobody sees the prep. Everyone sees the finish.",
    desc: "Walls, ceilings, trim, and cabinetry. Specialty finishes available: limewash, Venetian plaster, roman clay.",
    idealFor: "Homeowners refreshing rooms, preparing for sale, or moving in.",
    startingAt: "From $1,800",
    ratePer: "$2.80–$4.50/sq ft · based on 175 sq ft avg room",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=75",
    alt: "Interior painting in progress",
  },
  {
    title: "Exterior Painting",
    hook: "Salt air punishes every surface it touches.",
    desc: "Weather-rated coatings built for Hawaii's sun, salt air, and heavy rain.",
    idealFor: "Homeowners with fading, peeling, or chalking exterior coatings.",
    startingAt: "From $4,500",
    ratePer: "$3.50–$6.00/sq ft · varies by siding type and sun exposure",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75",
    alt: "Exterior house painting",
  },
  {
    title: "Drywall Repair",
    hook: "The wall underneath determines the wall you see.",
    desc: "Patch, skim, sand, prime. Invisible repairs before we roll a single drop of paint.",
    idealFor: "Homes with water damage, cracks, or holes before a repaint.",
    startingAt: "From $400",
    ratePer: "$8–$15/sq ft of damaged area · most patches under $600",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=75",
    alt: "Drywall repair and finishing",
  },
  {
    title: "Deck Refinishing",
    hook: "Mainland stains last 18 months here. Ours last longer.",
    desc: "Strip, sand, stain, seal. Decks that take the sun beating without cracking or peeling.",
    idealFor: "Homeowners with graying, splintering, or peeling deck surfaces.",
    startingAt: "From $1,200",
    ratePer: "$4–$7/sq ft · strip + sand + 2 coats · 200 sq ft avg deck",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75",
    alt: "Deck refinishing and staining",
  },
  {
    title: "Kitchen Remodeling",
    hook: "A new kitchen look without the $40k gut job.",
    desc: "Cabinet painting, new hardware, tile work, countertop coordination. Full kitchen refresh without a full demo.",
    idealFor: "Homeowners who want a new kitchen look without $40k+ gut renovation.",
    startingAt: "From $3,200",
    ratePer: "$120–$180/cabinet door · avg kitchen 20–30 doors",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=75",
    alt: "Kitchen cabinet painting and remodeling",
  },
  {
    title: "Bathroom Remodeling",
    hook: "Humidity, mildew, grout. We handle all three.",
    desc: "Tile, paint, fixtures, and finish work. We coordinate trades so you get one crew, one timeline.",
    idealFor: "Homeowners updating tile, vanities, or dealing with mildew-prone surfaces.",
    startingAt: "From $2,800",
    ratePer: "$45–$65/sq ft · tile + paint + fixtures · avg bath 40–60 sq ft",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=75",
    alt: "Bathroom renovation and tile work",
  },
];

const TESTIMONIALS = [
  {
    headline: "Came home to a new house",
    quote: "They painted our entire exterior while we were in Seattle for two weeks. Jason texted us a photo every evening so we could see the progress. Came home to a house that looked ",
    emphasisWord: "brand new",
    quoteAfter: ". Neighbors thought we moved.",
    name: "Marcus T.",
    role: "Homeowner | Kailua Beachside",
    source: "via Google Reviews",
    detail: "Exterior repaint · Crew: Jason & Mike · November 2024",
    followUp: "They called us at 6 months to check if the south-facing wall was holding. It was.",
    stars: 5,
  },
  {
    headline: "Line-item. No guessing.",
    quote: "Derek measured every wall before he quoted. ",
    emphasisWord: "Line-item",
    quoteAfter: " pricing, no guessing. He even flagged a water stain behind the dresser we hadn't noticed.",
    name: "Lynn H.",
    role: "Homeowner | Manoa Valley",
    source: "via Yelp",
    detail: "Interior + drywall repair · Foreman: Derek · February 2025",
    followUp: "House sold in 9 days. Agent said the paint job was the first thing buyers mentioned.",
    stars: 5,
  },
  {
    headline: "Saved us $18k",
    quote: "The kitchen cabinet painting saved us $18k over replacement. Kai brought three sample doors home from the spray booth so we could compare the sheen in our own kitchen light before they did the full set. We went with the satin. ",
    emphasisWord: "Perfect call",
    quoteAfter: ".",
    name: "Ray & Suki F.",
    role: "Vacation Rental Owners | Pearl City",
    source: "via Nextdoor referral",
    detail: "Cabinet refinishing · Crew: Kai & Brandon · March 2025",
    followUp: "Guests started commenting on the kitchen in reviews within two weeks of relisting.",
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
    a: "Interior rooms run $2.80–$4.50/sq ft (roughly $490–$790 per room, assuming 175 sq ft walls). A 3-bedroom full interior: $5,500–$8,000. Exterior single-story: $4,500–$6,500 ($3.50–$6.00/sq ft depending on siding). Two-story with wood trim: $7,000–$9,000+. Cabinet refinishing: $3,200–$5,500 per kitchen ($120–$180 per door, average kitchen has 20–30 doors). These are 2026 Oahu rates. Surface condition, access, and coating choice shift the number. Walk-through required for a real quote.",
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
                  borderLeft: isOpen ? "3px solid var(--color-accent)" : "3px solid transparent",
                  paddingLeft: isOpen ? "0.75rem" : "0.75rem",
                  transition: "border-color 200ms ease",
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

const ESTIMATE_PROJECTS = [
  { label: "Interior (per room)", baseLow: 490, baseHigh: 790, unit: "room" },
  { label: "Exterior (whole house)", baseLow: 4500, baseHigh: 9000, unit: "project" },
  { label: "Kitchen cabinets", baseLow: 3200, baseHigh: 5500, unit: "project" },
  { label: "Deck refinishing", baseLow: 1200, baseHigh: 2800, unit: "project" },
  { label: "Drywall repair", baseLow: 400, baseHigh: 1200, unit: "project" },
  { label: "Bathroom remodel", baseLow: 2800, baseHigh: 6500, unit: "project" },
];

const CONDITION_MULT: Record<string, number> = {
  good: 0.85,
  average: 1.0,
  rough: 1.25,
};

function QuickEstimateCalculator() {
  const [projectIdx, setProjectIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [condition, setCondition] = useState("average");

  const project = ESTIMATE_PROJECTS[projectIdx];
  const mult = CONDITION_MULT[condition];
  const low = Math.round(project.baseLow * quantity * mult);
  const high = Math.round(project.baseHigh * quantity * mult);

  return (
    <section
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "var(--space-block) 1.5rem",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>
          Quick Estimate
        </span>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
            lineHeight: 0.95,
            color: "var(--color-text)",
            marginBottom: "0.5rem",
          }}
        >
          What Will It <span style={{ color: "var(--color-accent)" }}>Cost?</span>
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            marginBottom: "2rem",
            maxWidth: "480px",
          }}
        >
          Ballpark range based on 2026 Oahu market rates. Your actual quote depends on
          surface condition, access, and coating spec. Walk-through required for a real number.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
          className="md:grid-cols-3"
        >
          {/* Project type */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            <label
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.62rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-accent)",
              }}
            >
              Project Type
            </label>
            <select
              value={projectIdx}
              onChange={(e) => {
                setProjectIdx(Number(e.target.value));
                setQuantity(1);
              }}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                padding: "0.625rem 0.875rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                appearance: "auto",
              }}
            >
              {ESTIMATE_PROJECTS.map((p, i) => (
                <option key={i} value={i}>{p.label}</option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            <label
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.62rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-accent)",
              }}
            >
              {project.unit === "room" ? "Number of Rooms" : "Projects"}
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                padding: "0.625rem 0.875rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                appearance: "auto",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Condition */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            <label
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.62rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-accent)",
              }}
            >
              Surface Condition
            </label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                padding: "0.625rem 0.875rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                appearance: "auto",
              }}
            >
              <option value="good">Good (minor touch-up)</option>
              <option value="average">Average (standard prep)</option>
              <option value="rough">Rough (heavy prep/repair)</option>
            </select>
          </div>
        </div>

        {/* Result */}
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1.25rem",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.62rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-accent)",
            }}
          >
            Estimated Range
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "var(--color-text)",
                lineHeight: 1,
              }}
            >
              ${low.toLocaleString()} – ${high.toLocaleString()}
            </span>
          </div>
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.5,
            }}
          >
            Based on {quantity} {project.unit}{quantity > 1 ? "s" : ""}, {condition} condition.
            Actual quote requires a walk-through. Call for a 24-hour written estimate.
          </span>
          <span
            style={{
              fontSize: "0.62rem",
              fontFamily: "var(--font-accent)",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-text-muted)",
              opacity: 0.5,
            }}
          >
            Rates verified May 2026 · Oahu market
          </span>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
          >
            Get Real Quote <ArrowRight size={14} />
          </Link>
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
            Est. 2012 · Honolulu, Oahu · Prep-First Painting™
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
            24-hour quotes · (808) 555-0192 · Start in 5 business days
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
            Same crew every day. 7:30 arrival. They prep every
            surface before a roller touches the wall, and they clean
            the jobsite before they leave. No wondering where
            the crew went. No line items you didn't approve.
            Paint on the wall, scope in your hand, jobsite swept.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link to="/contact" className="btn-primary">
              Book Your Walk-Through
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
              marginBottom: "2rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >
            <Mail size={14} />
            Send a message
          </Link>

          {/* Warranty trust badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                border: "2px solid var(--color-accent)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                }}
              >
                2yr
              </span>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                }}
              >
                Workmanship Warranty
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.4,
                }}
              >
                Peeling, cracking, adhesion. We come back.
              </span>
            </div>
          </div>
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

          {/* Floating trust badge — linked to Google Maps listing */}
          <a
            href="https://maps.google.com/?cid=12364976460210408014"
            target="_blank"
            rel="noopener noreferrer"
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
              textDecoration: "none",
              transition: "transform 150ms ease, box-shadow 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "6px 8px 0 0 var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "6px 6px 0 0 var(--color-accent)";
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
              47 reviews · Verify on Google →
            </span>
          </a>
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
            { label: "Google 4.8 ★ · 47 Reviews", category: "rating" },
            { label: "Yelp 4.6 ★ · 43 Reviews", category: "rating" },
            { label: "Nextdoor · Recommended by 28 Neighbors", category: "rating" },
            { label: "Best of Houzz 2023, 2024, 2025", category: "award" },
            { label: "2024 PCA Image Award · Residential Exterior", category: "award" },
            { label: "Licensed Hawaii Contractor · CT-35891 — on file", category: "trade" },
            { label: "GL + Workers Comp — on file with every estimate", category: "trade" },
            { label: "EPA Lead-Safe Certified · NAT-F217946-1 — verifiable", category: "trade" },
            { label: "Background Checked Crew — cleared before first job", category: "trust" },
            { label: "Written Warranties — copy included with every scope", category: "trust" },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                border: badge.category === "award"
                  ? "1px solid var(--color-accent)"
                  : "1px solid var(--color-border)",
                padding: "0.625rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: badge.category === "rating"
                  ? "var(--color-surface)"
                  : "transparent",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: badge.category === "award"
                    ? "var(--color-accent)"
                    : badge.category === "rating"
                      ? "hsl(38 85% 55%)"
                      : "var(--color-accent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.68rem",
                  fontWeight: badge.category === "award" ? 700 : 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: badge.category === "award"
                    ? "var(--color-accent)"
                    : "var(--color-text-muted)",
                }}
              >
                {badge.label}
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

      {/* ── LUXURY COVERAGE STRIP ── */}
      <section
        style={{
          background: "var(--color-surface)",
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
            flexWrap: "wrap",
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
            Insurance
          </span>
          <span
            style={{
              width: "1px",
              height: "16px",
              background: "var(--color-border)",
            }}
          />
          <span
            style={{
              fontSize: "0.82rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.4,
            }}
          >
            General Liability · Workers Comp · Luxury Property Rider up to $5M.
            Your $2M Portlock home or $800k Kailua bungalow is fully covered
            while we work.
          </span>
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
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
              their first job. You get the same faces on day one and day five.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "var(--color-border)",
            }}
            className="md:grid-cols-4"
          >
            {[
              { initials: "JK", name: "Jason K.", years: 8, specialty: "Exteriors & salt-air coatings" },
              { initials: "DK", name: "Derek K.", years: 14, specialty: "Interiors & color consulting" },
              { initials: "KM", name: "Kai M.", years: 6, specialty: "Cabinet refinishing & spray work" },
              { initials: "BT", name: "Brandon T.", years: 4, specialty: "Deck staining & wood restoration" },
            ].map((crew) => (
              <div
                key={crew.initials}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.25rem",
                  display: "flex",
                  gap: "0.875rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "2px solid var(--color-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      color: "var(--color-accent)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {crew.initials}
                  </span>
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
                    {crew.name}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.68rem",
                      color: "var(--color-accent)",
                      fontWeight: 600,
                      marginTop: "0.125rem",
                    }}
                  >
                    {crew.years} years
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.72rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.4,
                      marginTop: "0.125rem",
                    }}
                  >
                    {crew.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "0.5rem" }}>
            In the Community
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              lineHeight: 0.95,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
            }}
          >
            Paint It <span style={{ color: "var(--color-accent)" }}>Forward</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1px",
              background: "var(--color-border)",
            }}
            className="md:grid-cols-2"
          >
            {[
              {
                org: "Habitat for Humanity Honolulu",
                detail: "3 home repaints in 2024, 2 scheduled for fall 2025",
                hours: "240+ volunteer hours",
              },
              {
                org: "Kailua Elementary Annual Paint Day",
                detail: "4th year running. Mrs. Tanaka's classroom voted best color, 2024.",
                hours: "4 classrooms per year",
              },
              {
                org: "PaintCare Hawaii Partnership",
                detail: "147 gallons recycled through Kapolei drop-off since 2021.",
                hours: "Zero waste to landfill",
              },
              {
                org: "2025 PCA Aloha Chapter Volunteer Project",
                detail: "Windward Community Center exterior. Full crew, donated materials.",
                hours: "Weekend build",
              },
            ].map((c) => (
              <div
                key={c.org}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text)",
                  }}
                >
                  {c.org}
                </span>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                  {c.detail}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--color-accent)",
                    marginTop: "0.25rem",
                  }}
                >
                  {c.hours}
                </span>
              </div>
            ))}
          </div>
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
                namedClient: "Recent: Portlock residence, 3,200 sq ft exterior",
              },
              {
                type: "Vacation Rental Owners",
                scenario: "Quick turnaround between bookings. Neutrals that photograph well and coatings that handle guest traffic.",
                namedClient: "Recent: Ko Olina Beach Villas unit refresh (×4)",
                callout: "Repainted 4 units in 11 days between booking windows. Zero guest overlap.",
              },
              {
                type: "Property Managers",
                scenario: "Multi-unit touch-ups, common area repaints, and tenant turnover timelines that can't slip.",
                namedClient: "Recent: Hawaiiana Management, 12-unit common area",
              },
              {
                type: "Commercial Tenants",
                scenario: "Office refreshes, retail storefronts, and restaurant interiors. Off-hours scheduling available.",
                namedClient: "Recent: Kailua Town Center retail suite",
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
                <span
                  style={{
                    display: "block",
                    marginTop: "0.5rem",
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.62rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-accent)",
                    opacity: 0.8,
                  }}
                >
                  {c.namedClient}
                </span>
                {"callout" in c && c.callout && (
                  <span
                    style={{
                      display: "block",
                      marginTop: "0.375rem",
                      fontSize: "0.72rem",
                      fontStyle: "italic",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.45,
                      opacity: 0.7,
                    }}
                  >
                    {c.callout}
                  </span>
                )}
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
            Prep. Prime.{" "}
            <span style={{ color: "var(--color-accent)" }}>Paint.</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "520px",
              lineHeight: 1.65,
              fontSize: "0.95rem",
              marginBottom: "0.75rem",
            }}
          >
            We care for surfaces before we coat them. Every job starts
            with a written scope, hands-on prep, and ends with a
            walk-through you sign off on. One crew from estimate to
            final touch-up.
          </p>
          <span
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.72rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-text-muted)",
              opacity: 0.6,
            }}
          >
            The Prep-First Painting™ method. Six services, one crew.
          </span>
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
                  marginBottom: "0.375rem",
                }}
              >
                {SERVICES_TEASER[0].title}
              </h3>
              <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "hsl(40 30% 92%)", marginBottom: "0.375rem", fontStyle: "italic" }}>
                {SERVICES_TEASER[0].hook}
              </span>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.5rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                    {SERVICES_TEASER[0].startingAt}
                  </span>
                  <span style={{ fontSize: "0.68rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(40 30% 92% / 0.5)" }}>
                    Ideal for: {SERVICES_TEASER[0].idealFor}
                  </span>
                </div>
                <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-body)", letterSpacing: "0.02em", color: "hsl(40 30% 92% / 0.4)", fontStyle: "italic" }}>
                  {SERVICES_TEASER[0].ratePer}
                </span>
              </div>
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
                  marginBottom: "0.25rem",
                }}
              >
                {SERVICES_TEASER[1].title}
              </h3>
              <span style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "hsl(40 30% 92%)", marginBottom: "0.375rem", fontStyle: "italic" }}>
                {SERVICES_TEASER[1].hook}
              </span>
              <p style={{ color: "hsl(40 30% 92% / 0.75)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                {SERVICES_TEASER[1].desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.375rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.68rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                    {SERVICES_TEASER[1].startingAt}
                  </span>
                  <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(40 30% 92% / 0.5)" }}>
                    Ideal for: {SERVICES_TEASER[1].idealFor}
                  </span>
                </div>
                <span style={{ fontSize: "0.58rem", fontFamily: "var(--font-body)", letterSpacing: "0.02em", color: "hsl(40 30% 92% / 0.4)", fontStyle: "italic" }}>
                  {SERVICES_TEASER[1].ratePer}
                </span>
              </div>
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
                  marginBottom: "0.25rem",
                  letterSpacing: "0.05em",
                }}
              >
                {svc.title}
              </h3>
              <span style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.375rem", fontStyle: "italic" }}>
                {svc.hook}
              </span>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                {svc.desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                    {svc.startingAt}
                  </span>
                  <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-text-muted)", opacity: 0.7 }}>
                    Ideal for: {svc.idealFor}
                  </span>
                </div>
                <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-body)", letterSpacing: "0.02em", color: "var(--color-text-muted)", opacity: 0.5, fontStyle: "italic" }}>
                  {svc.ratePer}
                </span>
              </div>
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
                  marginBottom: "0.25rem",
                  letterSpacing: "0.05em",
                }}
              >
                {SERVICES_TEASER[5].title}
              </h3>
              <span style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.375rem", fontStyle: "italic" }}>
                {SERVICES_TEASER[5].hook}
              </span>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "500px" }}>
                {SERVICES_TEASER[5].desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.375rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>
                    {SERVICES_TEASER[5].startingAt}
                  </span>
                  <span style={{ fontSize: "0.62rem", fontFamily: "var(--font-accent)", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-text-muted)", opacity: 0.7 }}>
                    Ideal for: {SERVICES_TEASER[5].idealFor}
                  </span>
                </div>
                <span style={{ fontSize: "0.6rem", fontFamily: "var(--font-body)", letterSpacing: "0.02em", color: "var(--color-text-muted)", opacity: 0.5, fontStyle: "italic" }}>
                  {SERVICES_TEASER[5].ratePer}
                </span>
              </div>
            </div>
            <Link to="/services" className="btn-outline" style={{ flexShrink: 0 }}>
              All Services <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK ESTIMATE CALCULATOR ── */}
      <QuickEstimateCalculator />

      {/* ── HOW WE PRICE ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "2rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
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
              How We Price
            </span>
            <span style={{ width: "1px", height: "14px", background: "var(--color-border)" }} />
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
              The Math Behind Every Quote
            </span>
          </div>
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
                step: "01",
                label: "Measure",
                detail: "We measure every surface in square feet. Walls, ceilings, trim, doors counted separately. No lump sums.",
              },
              {
                step: "02",
                label: "Rate × Condition",
                detail: "Base rate per sq ft ($2.80–$6.00 depending on surface type) multiplied by condition factor. Heavy prep costs more than a clean recoat.",
              },
              {
                step: "03",
                label: "Materials Spec",
                detail: "Coating manufacturer and product line priced at cost plus 15%. You see the brand, the product code, and the gallon count.",
              },
              {
                step: "04",
                label: "Timeline",
                detail: "Quote includes start date, calendar day count, and crew size. Summer books 3–4 weeks out. Winter: 1–2 weeks.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: "var(--color-bg)",
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
                    fontSize: "1.25rem",
                    color: "var(--color-accent)",
                    opacity: 0.25,
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text)",
                  }}
                >
                  {item.label}
                </span>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
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
            {/* Before — smaller, slightly darker, reveals color on hover */}
            <div
              style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.filter = "saturate(1) brightness(1)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.filter = "saturate(0.6) brightness(0.85)";
              }}
            >
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
                  transition: "filter 400ms ease",
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
              Recent Project · Completed March 2025
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
            <span
              style={{
                display: "inline-block",
                marginTop: "0.75rem",
                fontFamily: "var(--font-accent)",
                fontSize: "0.62rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
                padding: "0.375rem 0.75rem",
              }}
            >
              Current lead time: 2–3 weeks · booking into July 2026
            </span>
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

      {/* ── COLOR VISUALIZER CALLOUT ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                display: "flex",
                gap: "3px",
              }}
            >
              {["hsl(38 85% 55%)", "hsl(220 45% 35%)", "hsl(160 30% 40%)", "hsl(15 60% 50%)"].map(
                (c) => (
                  <div
                    key={c}
                    style={{
                      width: "12px",
                      height: "24px",
                      background: c,
                    }}
                  />
                )
              )}
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  letterSpacing: "0.04em",
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                }}
              >
                Not sure on the color?
              </span>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.4,
                }}
              >
                We spec Benjamin Moore Regal for interiors and Sherwin-Williams
                Duration for exteriors. Try the Benjamin Moore Color Visualizer
                before your estimate.
              </span>
            </div>
          </div>
          <a
            href="https://www.benjaminmoore.com/color-selection-tools"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}
          >
            Explore Colors →
          </a>
        </div>
      </section>

      {/* ── THE PREP-FIRST PROCESS ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "0.5rem" }}>
            How Every Job Runs
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
            The Prep-First{" "}
            <span style={{ color: "var(--color-accent)" }}>Process</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0",
            }}
            className="md:grid-cols-4"
          >
            {[
              {
                step: "01",
                title: "Walk-Through & Scope",
                detail:
                  "We measure every wall, photograph every surface, and write a line-item scope you sign before we open a can.",
                timeline: "Day 0",
              },
              {
                step: "02",
                title: "Prep & Protect",
                detail:
                  "Furniture moved. Floors masked. Holes patched, caulk laid, surfaces sanded. 70% of the job happens before paint touches a wall.",
                timeline: "Day 1",
              },
              {
                step: "03",
                title: "Paint & Inspect",
                detail:
                  "Two coats minimum on every surface. Foreman inspects each room against the scope before calling it done.",
                timeline: "Days 2-3",
              },
              {
                step: "04",
                title: "Walk-Through & Warranty",
                detail:
                  "Final walk-through with you. Touch-ups on the spot. Warranty card on file. We call at 6 and 12 months.",
                timeline: "Final day",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                style={{
                  padding: "1.5rem",
                  borderRight:
                    i < 3 ? "1px solid var(--color-border)" : "none",
                  borderBottom: "1px solid var(--color-border)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "2rem",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    opacity: 0.3,
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                  }}
                >
                  {s.step}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "var(--color-accent)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.timeline}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.82rem",
                    letterSpacing: "0.04em",
                    color: "var(--color-text)",
                    lineHeight: 1.2,
                    marginBottom: "0.625rem",
                  }}
                >
                  {s.title}
                </span>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {s.detail}
                </p>
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

      {/* ── WHERE WE PAINT ON OAHU ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "2rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                letterSpacing: "0.04em",
                color: "var(--color-text)",
                lineHeight: 1.1,
              }}
            >
              Where We Paint on{" "}
              <span style={{ color: "var(--color-accent)" }}>Oahu</span>
            </h2>
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
              Serving the full island since 2012
            </span>
          </div>
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
                region: "Metro Honolulu",
                projects: 187,
                areas: ["Downtown", "Makiki", "Manoa", "Kaimuki", "Kahala", "Aina Haina", "Portlock", "Hawaii Loa Ridge"],
              },
              {
                region: "Windward Side",
                projects: 134,
                areas: ["Kailua Beachside", "Lanikai", "Enchanted Lake", "Kaneohe Bay", "Ahuimanu", "Heeia"],
              },
              {
                region: "Central & Leeward",
                projects: 112,
                areas: ["Pearl City", "Aiea Heights", "Mililani", "Mililani Mauka", "Kapolei", "Ewa Beach", "Ko Olina"],
              },
              {
                region: "North Shore & Windward",
                projects: 50,
                areas: ["Haleiwa", "Waialua", "Sunset Beach", "Laie", "Hauula", "Punaluu"],
              },
            ].map((zone) => (
              <div
                key={zone.region}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.25rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      letterSpacing: "0.06em",
                      color: "var(--color-text)",
                      lineHeight: 1.2,
                    }}
                  >
                    {zone.region}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {zone.projects} jobs
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {zone.areas.map((a) => (
                    <span
                      key={a}
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.4,
                      }}
                    >
                      {a}{zone.areas.indexOf(a) < zone.areas.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "var(--space-section) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>
            The Difference
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
            Before <span style={{ color: "var(--color-accent)" }}>&amp; After</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:grid-cols-2"
          >
            {[
              {
                label: "Kailua Beachside Exterior",
                detail: "Sherwin-Williams Duration, 2 coats over full sand + prime. South-facing wall had chalking and UV peel from 6 years of direct exposure.",
                before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=75",
                after: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=75",
              },
              {
                label: "Pearl City Cabinet Refinishing",
                detail: "Factory-satin spray finish on 26 doors. Owners saved $18k over full cabinet replacement. Completed in 5 working days.",
                before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=75",
                after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&q=75",
              },
            ].map((project) => (
              <div key={project.label}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{ position: "relative", cursor: "pointer" }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector("img");
                      if (img) img.style.filter = "saturate(1) brightness(1)";
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector("img");
                      if (img) img.style.filter = "saturate(0.5) brightness(0.88)";
                    }}
                  >
                    <img
                      src={project.before}
                      alt={`Before: ${project.label}`}
                      loading="lazy"
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "200px", objectFit: "cover", display: "block", filter: "saturate(0.5) brightness(0.88)", transition: "filter 400ms ease" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "0.5rem",
                        left: "0.5rem",
                        background: "hsl(220 45% 7% / 0.8)",
                        padding: "0.25rem 0.625rem",
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Before
                    </span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <img
                      src={project.after}
                      alt={`After: ${project.label}`}
                      loading="lazy"
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "0.5rem",
                        left: "0.5rem",
                        background: "hsl(38 85% 55%)",
                        padding: "0.25rem 0.625rem",
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "hsl(220 45% 7%)",
                      }}
                    >
                      After
                    </span>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {project.label}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    maxWidth: "420px",
                  }}
                >
                  {project.detail}
                </p>
              </div>
            ))}
          </div>
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

          {/* Google badge — linked to verify */}
          <a
            href="https://maps.google.com/?cid=12364976460210408014"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              border: "1px solid var(--color-border)",
              padding: "0.75rem 1.25rem",
              background: "var(--color-surface)",
              textDecoration: "none",
              transition: "border-color 150ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; }}
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
              4.8 · 47 Google reviews · Verify →
            </span>
          </a>
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
              className={`testimonial-card${i === 0 ? " md:col-span-3" : ""}`}
              style={{
                background: i === 0 ? "var(--color-surface-raised, var(--color-surface))" : "var(--color-surface)",
                padding: i === 0 ? "2.5rem 2rem" : "2rem",
                display: i === 0 ? "grid" : "flex",
                ...(i === 0 ? { gridTemplateColumns: "1fr", gap: "1rem" } : {}),
                ...(i !== 0 ? { flexDirection: "column" as const, gap: "1rem" } : {}),
                borderTop: "3px solid transparent",
                transition: "border-color 200ms ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = "var(--color-accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = "transparent"; }}
            >
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={12} fill="hsl(38 85% 55%)" color="hsl(38 85% 55%)" />
                ))}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  letterSpacing: "0.06em",
                  color: "var(--color-accent)",
                  lineHeight: 1.2,
                }}
              >
                {t.headline}
              </span>
              <blockquote
                style={{
                  color: "var(--color-text)",
                  fontSize: i === 0 ? "1.1rem" : "0.925rem",
                  lineHeight: i === 0 ? 1.7 : 1.6,
                  fontStyle: "italic",
                  flex: 1,
                  maxWidth: i === 0 ? "640px" : undefined,
                }}
              >
                "{t.quote}<strong style={{ fontStyle: "italic", color: "var(--color-accent)", fontWeight: 700 }}>{t.emphasisWord}</strong>{t.quoteAfter}"
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
                <span style={{ display: "block", fontSize: "0.68rem", color: "var(--color-text-muted)", marginTop: "0.125rem" }}>
                  {t.role}{t.source ? ` · ${t.source}` : ""}
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: "0.25rem", display: "block" }}>
                  {t.detail}
                </span>
                {t.followUp && (
                  <span
                    style={{
                      display: "block",
                      marginTop: "0.5rem",
                      fontSize: "0.75rem",
                      fontStyle: "italic",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.5,
                      borderLeft: "2px solid var(--color-accent)",
                      paddingLeft: "0.625rem",
                      opacity: 0.75,
                    }}
                  >
                    {t.followUp}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY HOMEOWNERS SWITCH ── */}
      <section
        style={{
          background: "var(--color-surface-raised)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "2.5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "0.5rem" }}>
            Why Homeowners Switch
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
              letterSpacing: "0.06em",
              color: "var(--color-text)",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            Three things we hear{" "}
            <span style={{ color: "var(--color-accent)" }}>every week</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1px",
              background: "var(--color-border)",
            }}
            className="md:grid-cols-3"
          >
            {[
              {
                trigger: "Previous painter skipped prep",
                detail: "Paint peeled within 18 months. No written scope meant no warranty claim. 62% of our estimates are second opinions after a bad experience.",
              },
              {
                trigger: "Got a lump-sum quote with no breakdown",
                detail: "One number, no line items, no product names. When the bill changed, there was nothing on paper to reference. We hand you the math before we pick up a brush.",
              },
              {
                trigger: "Crew changed every visit",
                detail: "Different faces on Monday and Thursday. Nobody owned the job. Our crews average 6 years together. You see the same team from tape to touch-up.",
              },
            ].map((item) => (
              <div
                key={item.trigger}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
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
                    lineHeight: 1.2,
                  }}
                >
                  "{item.trigger}"
                </span>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── PAINTING TIPS (expertise proof) ── */}
      <section
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>
            From the Crew
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
              letterSpacing: "0.06em",
              color: "var(--color-text)",
              marginBottom: "2rem",
              lineHeight: 1.1,
            }}
          >
            Hawaii Painting <span style={{ color: "var(--color-accent)" }}>Tips</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1px",
              background: "var(--color-border)",
            }}
            className="md:grid-cols-3"
          >
            {[
              {
                title: "Why Your Exterior Yellows After 18 Months",
                body: "UV cycling on south-facing walls breaks down titanium dioxide in white and off-white paints. The fix is a UV-stabilized topcoat rated for tropical exposure, not just more coats of the same product. We specify Duration or Emerald for every sun-hit wall.",
              },
              {
                title: "The Brush Stroke Problem on Cabinets",
                body: "Brush marks on cabinets come from two things: wrong applicator and wrong dry time. Hawaii humidity slows flash-off, so water-based cabinet paint skins over before it levels. We spray in a controlled booth, 65% humidity max, and back-roll only the edges.",
              },
              {
                title: "When to Skip the Power Wash",
                body: "Power washing old wood siding can force water behind the boards and cause more damage than the dirt it removes. On homes built before 1990 with original lap siding, we hand-scrub with a mildewcide solution and let it dry 48 hours before primer.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.75rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.82rem",
                    letterSpacing: "0.04em",
                    color: "var(--color-accent)",
                    lineHeight: 1.3,
                  }}
                >
                  {tip.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Free walk-through. Written scope. No pressure to sign the same day.
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
              Book Your Walk-Through <ArrowRight size={14} />
            </Link>
            <Link to="/gallery" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "hsl(40 30% 92%)" }}>
              See Gallery
            </Link>
          </div>
          <a
            href="tel:+18085550192"
            style={{
              display: "inline-block",
              marginTop: "1.25rem",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              letterSpacing: "0.06em",
              color: "var(--color-accent)",
              textDecoration: "none",
              transition: "opacity 200ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            (808) 555-0192
          </a>
        </div>
      </section>
    </>
  );
}
