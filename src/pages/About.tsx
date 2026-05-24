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
                In 2012, a crew repainted a house on Aukai Ave in Kailua. Sherwin-Williams
                SuperPaint, two coats, by the book. Fourteen months later the south-facing
                wall was chalking. The homeowner called. The crew came back. That was the
                moment: mainland coatings fail here because the specs assume a climate that
                doesn't exist on this island.
              </p>
              <p>
                Do that math. In 10 years, that's four repaints and eight coats stacked
                on your siding. The primers aren't rated for our UV load. The timelines don't
                account for humidity cycling. We built this company to fix that cycle.
              </p>
              <p>
                So we built our process around island conditions. Every exterior starts with a
                substrate assessment. We specify coatings rated for coastal salt exposure and
                UV fade resistance. On interiors, we account for the mold and mildew risk that
                comes with Hawaii bathrooms and kitchen walls year-round.
              </p>
              <p>
                The renovation side grew because clients kept asking us to handle the full
                scope. Tile after paint. Cabinets before walls. Drywall before any of it. We
                built the capability so homeowners deal with one crew instead of juggling four
                separate contractor relationships.
              </p>
              <p>
                We're based out of Vineyard Blvd in Honolulu and we've painted in most
                neighborhoods on this island. Kailua Beachside, Kahala, Portlock, Manoa,
                Pearl City, Kaneohe. Every project gets the same crew, the same process,
                and a written scope before we touch a brush.
              </p>
            </div>

            {/* Owner's note — first-person voice */}
            <div
              style={{
                marginTop: "2rem",
                borderLeft: "3px solid var(--color-accent)",
                paddingLeft: "1.25rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                }}
              >
                A note from the owner
              </span>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                I am on every job site. Planning, painting, or checking the work before
                the crew wraps for the day. As a homeowner myself, I have hired contractors
                who were careful with my home and others who left me wondering if they had
                ever held a brush before. That experience is why I run this company the way
                I do. You get my phone number. You get my crew. And if something is off,
                you call me directly and I make it right the same week.
              </p>
              <span
                style={{
                  display: "block",
                  marginTop: "0.5rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.78rem",
                  letterSpacing: "0.06em",
                  color: "var(--color-text)",
                }}
              >
                — Owner, Hawaii Elite Painting
              </span>
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
                  14
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
                { val: "1.2M+", lbl: "Sq Ft Painted" },
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
            What 14 Years
            <br />
            <span style={{ color: "var(--color-accent)" }}>Burned Into Us</span>
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

      {/* Crew Roster Strip */}
      <section
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
          padding: "var(--space-block) 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "1.5rem" }}>
            The Crew
          </span>
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
              { initials: "DK", name: "Derek K.", role: "Lead Estimator", tenure: "Since 2016", detail: "Walks every job. Writes every scope." },
              { initials: "JM", name: "Jason M.", role: "Exterior Lead", tenure: "Since 2018", detail: "Ran the Kailua Beach Road full exterior." },
              { initials: "KW", name: "Kai W.", role: "Cabinet Specialist", tenure: "Since 2019", detail: "Sprays all cabinet doors off-site." },
              { initials: "BT", name: "Brandon T.", role: "Deck & Stain Lead", tenure: "Since 2020", detail: "Penofin certified. 120+ decks refinished." },
            ].map((crew) => (
              <div
                key={crew.initials}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "var(--color-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "hsl(220 45% 7%)",
                  }}
                >
                  {crew.initials}
                </div>
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
                      marginBottom: "0.125rem",
                    }}
                  >
                    {crew.name}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--color-accent)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {crew.role} · {crew.tenure}
                  </span>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {crew.detail}
                  </span>
                </div>
              </div>
            ))}
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
              Every estimate comes through me. I walk the job, measure every wall,
              and my cell number is on the contract. Something goes sideways at 6 AM
              on a Saturday? You're calling the person who signed the quote. Our lead
              painter has been with us since 2016. The prep crew averages 6 years.
              We are unapologetically slow on prep and unapologetically fast on callbacks.
              After 483 houses on this island, we've probably already painted on your street.
            </p>
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.78rem",
                color: "var(--color-accent)",
                fontWeight: 600,
              }}
            >
              Prep first. Paint right. Every house.
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
