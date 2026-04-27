import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Wrench, Users, Shield } from "lucide-react";

const VALUES = [
  {
    icon: Wrench,
    title: "Prep First, Always",
    desc: "70% of every project is preparation. We sand, patch, prime, and caulk before a single coat goes on. It takes longer. It's why the finish lasts.",
    stat: "70/30",
    statLabel: "Prep-to-Paint Ratio",
  },
  {
    icon: Users,
    title: "One Crew. Your Job.",
    desc: "We don't hand your project off to a sub after the quote. The crew you meet on day one is the crew that finishes the job.",
  },
  {
    icon: Shield,
    title: "Licensed and Insured",
    desc: "Hawaii contractors license, full liability coverage, and workers comp on every employee. Current certificates available on request.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Hawaii Elite Painting and Renovation</title>
        <meta
          name="description"
          content="Hawaii Elite Painting and Renovation is a licensed painting and renovation contractor based in Honolulu. Learn about our crew, our process, and how we work."
        />
      </Helmet>

      {/* Page header */}
      <header
        style={{
          paddingTop: "calc(64px + 5rem)",
          paddingBottom: "4rem",
          borderBottom: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          padding: "calc(64px + 4rem) 1.5rem 4rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1rem" }}>
            About Us
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
            Painters Who
            <br />
            <span style={{ color: "var(--color-accent)" }}>Know Oahu</span>
          </h1>
        </div>
      </header>

      {/* Story section */}
      <section
        style={{
          padding: "var(--space-section) 1.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="md:grid-cols-2"
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "var(--text-h2)",
                lineHeight: 0.92,
                color: "var(--color-text)",
                marginBottom: "1.75rem",
              }}
            >
              Built in Hawaii
              <br />
              <span style={{ color: "var(--color-accent)" }}>For Hawaii</span>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                color: "var(--color-text-muted)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              <p>
                Hawaii Elite Painting and Renovation started with a straightforward observation:
                Oahu homes need coatings that actually hold up to island conditions. The
                mainland paints, primers, and timelines contractors import from the continent
                don't account for the UV load, the salt air, or the year-round humidity
                cycles that drive moisture into every surface.
              </p>
              <p>
                We built our process around those realities. Every exterior project starts with
                a substrate assessment. We specify coatings rated for coastal exposure and UV
                fade resistance. On interiors, we account for the mold and mildew risk that
                comes standard in Hawaii bathrooms and kitchen walls.
              </p>
              <p>
                Our renovation work grew out of the painting side because clients kept asking
                us to coordinate the full project. Tile after paint. Cabinets before walls.
                Drywall before any of it. We built the capability to handle the whole scope
                so homeowners don't have to manage four separate contractor relationships.
              </p>
              <p>
                We're based in Honolulu and work across Oahu: Kailua, Pearl City,
                Kaneohe. Every project gets the same crew, the same process, and the same
                written scope before work begins.
              </p>
            </div>
          </div>

          {/* Photo + stat aside */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Renovation crew working on a Honolulu home interior"
                loading="lazy"
                width={800}
                height={500}
                style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "-6px",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  padding: "1rem 1.25rem",
                  boxShadow: "6px 6px 0 0 var(--color-accent)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "2rem",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                  }}
                >
                  12+
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  Years on Oahu
                </span>
              </div>
            </div>

            {/* 3 quick stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "var(--color-border)",
              }}
            >
              {[
                { val: "483", lbl: "Projects" },
                { val: "Oahu", lbl: "Only. No Splits." },
                { val: "100%", lbl: "Licensed Work" },
              ].map((s) => (
                <div
                  key={s.lbl}
                  className="stat-block"
                  style={{ background: "var(--color-surface)", padding: "1.25rem 1rem" }}
                >
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "var(--color-text)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {s.val}
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-accent)",
                    }}
                  >
                    {s.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values / how we work */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "var(--space-section) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "var(--text-h2)",
              lineHeight: 0.92,
              color: "var(--color-text)",
              marginBottom: "3rem",
            }}
          >
            What 12 Years
            <br />
            <span style={{ color: "var(--color-accent)" }}>Teaches You</span>
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
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  style={{
                    background: "var(--color-bg)",
                    padding: "2rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "var(--color-accent-subtle, hsla(38, 85%, 55%, 0.12))",
                        border: "1px solid var(--color-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} color="var(--color-accent)" />
                    </div>
                    {"stat" in v && v.stat && (
                      <div style={{ textAlign: "right" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "1.5rem",
                            color: "var(--color-accent)",
                            lineHeight: 1,
                            display: "block",
                          }}
                        >
                          {v.stat}
                        </span>
                        <span
                          style={{
                            fontSize: "0.6rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.14em",
                            color: "var(--color-text-muted)",
                            fontFamily: "var(--font-accent)",
                          }}
                        >
                          {(v as { statLabel: string }).statLabel}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                      color: "var(--color-text)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owner Note */}
      <section
        style={{
          padding: "var(--space-block) 1.5rem",
          background: "var(--color-bg)",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            display: "flex",
            gap: "1.5rem",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "var(--color-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "hsl(220 45% 7%)",
            }}
          >
            HE
          </div>
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                color: "var(--color-text)",
                marginBottom: "0.5rem",
              }}
            >
              A Note from the Owner
            </span>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "0.75rem",
              }}
            >
              Every estimate comes through me. I walk the job, write the scope, and
              my cell number is on the contract. If something goes wrong at 6 AM on a
              Saturday, you're calling the person who signed the quote. That's how a
              14-year company stays a 4.8-star company.
            </p>
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.78rem",
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              Owner-operated since day one.
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "var(--space-section) 1.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
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
          See the Work
          <br />
          <span style={{ color: "var(--color-accent)" }}>Before You Decide</span>
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
          Browse completed projects in our gallery, then request a free estimate for your home.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link to="/gallery" className="btn-primary">
            View Gallery <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="btn-outline">
            Get Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
