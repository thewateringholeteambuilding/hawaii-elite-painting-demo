import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Mail, Clock, CheckCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  customerType: string;
  message: string;
}

const SERVICE_OPTIONS = [
  "Interior Painting",
  "Exterior Painting",
  "Drywall Repair",
  "Deck Refinishing",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Commercial Painting",
  "Multiple / Not Sure",
];

const SERVICE_HINTS: Record<string, string> = {
  "Interior Painting": "Helpful to mention: number of rooms, ceiling height, any wallpaper removal needed, and if furniture needs to stay in place.",
  "Exterior Painting": "Helpful to mention: home square footage, siding material (wood, stucco, concrete), and any peeling or bare wood areas.",
  "Drywall Repair": "Helpful to mention: number of areas, size of damage (small holes vs. full sections), and whether water damage is involved.",
  "Deck Refinishing": "Helpful to mention: deck square footage, wood type, current condition (graying, peeling, splintering), and if railing is included.",
  "Kitchen Remodeling": "Helpful to mention: cabinet count, whether you want new doors or paint-only, and any countertop or tile work.",
  "Bathroom Remodeling": "Helpful to mention: number of bathrooms, scope (paint only vs. tile + fixtures), and any mold or moisture issues.",
  "Commercial Painting": "Helpful to mention: building type, total square footage, any after-hours scheduling requirements, and access details.",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    customerType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Honeypot, real users leave this empty; bots fill every field they see.
    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem(
      "company_website"
    ) as HTMLInputElement | null;
    if (honeypot && honeypot.value.trim() !== "") {
      // Silently succeed for bots, they think they got through
      setSubmitted(true);
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and project description.");
      return;
    }
    // In production this would post to an API
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--color-surface-raised)",
    border: "1px solid var(--color-border)",
    borderRadius: 0,
    padding: "0.875rem 1rem",
    color: "var(--color-text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 200ms ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-accent)",
    fontSize: "0.7rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "var(--color-text-muted)",
    marginBottom: "0.5rem",
  };

  return (
    <>
      <Helmet>
        <title>Contact | Hawaii Elite Painting and Renovation</title>
        <meta
          name="description"
          content="Request a free estimate from Hawaii Elite Painting and Renovation. Interior, exterior, drywall, kitchens, decks, and commercial work on Oahu."
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
            Free Estimate
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
            Color That Feels
            <br />
            <span style={{ color: "var(--color-accent)" }}>Like Yours</span>
          </h1>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              maxWidth: "440px",
              marginTop: "1.25rem",
            }}
          >
            Tell us about the space. We'll walk it, spec the right coatings, and hand you a written scope before any work begins.
          </p>
        </div>
      </header>

      {/* Two-col layout */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="md:grid-cols-5"
      >
        {/* Contact info, 2 cols */}
        <aside
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          className="md:col-span-2"
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                color: "var(--color-text)",
                marginBottom: "0.75rem",
              }}
            >
              How to Reach Us
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
              Send us the form or reach out directly. We respond within one business day.
            </p>
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--color-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={16} color="hsl(220 45% 7%)" />
              </div>
              <div>
                <span style={{ display: "block", fontFamily: "var(--font-accent)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                  Email
                </span>
                <a
                  href="mailto:info@hawaiielitepainting.com"
                  style={{ color: "var(--color-text)", fontSize: "0.9rem" }}
                >
                  info@hawaiielitepainting.com
                </a>
              </div>
            </li>

            <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--color-surface-raised)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={16} color="var(--color-accent)" />
              </div>
              <div>
                <span style={{ display: "block", fontFamily: "var(--font-accent)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                  Office
                </span>
                <span style={{ color: "var(--color-text)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  200 N Vineyard Blvd, Ste A325-148<br />
                  Honolulu, HI 96817
                </span>
              </div>
            </li>

            <li style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--color-surface-raised)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Clock size={16} color="var(--color-accent)" />
              </div>
              <div>
                <span style={{ display: "block", fontFamily: "var(--font-accent)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                  Hours
                </span>
                <span style={{ color: "var(--color-text)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  Monday to Saturday<br />
                  7:00 am to 6:00 pm
                </span>
              </div>
            </li>
          </ul>

          {/* Service area */}
          <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "var(--color-accent)",
                marginBottom: "0.75rem",
              }}
            >
              Service Area
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.65 }}>
              Kailua Beachside to Ewa Beach, Lanikai to Mililani Mauka.
              We've painted in Kahala, Portlock, Hawaii Loa Ridge, Aina Haina,
              Manoa, Kaneohe Bay, Aiea Heights, and most neighborhoods in between.
            </p>
          </div>
        </aside>

        {/* Form, 3 cols */}
        <div className="md:col-span-3">
          {submitted ? (
            <div
              style={{
                border: "1px solid var(--color-accent)",
                background: "var(--color-surface)",
                padding: "3rem 2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
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
                }}
              >
                <CheckCircle size={28} color="hsl(220 45% 7%)" />
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "clamp(1.25rem, 2vw, 2rem)",
                  color: "var(--color-text)",
                }}
              >
                Estimate Request Sent
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: "360px" }}>
                We'll review your project details and follow up within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              noValidate
            >
              {/* Honeypot field, hidden from real users via aria-hidden + off-screen positioning. Bots fill it; we drop those submissions. */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor="company_website">Leave this field empty</label>
                <input
                  type="text"
                  id="company_website"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              {error && (
                <div
                  style={{
                    border: "1px solid hsl(0 80% 55%)",
                    background: "hsl(0 80% 55% / 0.1)",
                    padding: "0.875rem 1rem",
                    color: "hsl(0 80% 75%)",
                    fontSize: "0.875rem",
                  }}
                >
                  {error}
                </div>
              )}

              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                className="grid-cols-1 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="name" style={labelStyle}>Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Your name"
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="(808) 000-0000"
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="your@email.com"
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </div>

              <div>
                <label htmlFor="service" style={labelStyle}>Service Type</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                >
                  <option value="">Select a service...</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {form.service && SERVICE_HINTS[form.service] && (
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderLeft: "3px solid var(--color-accent)",
                    padding: "0.75rem 1rem",
                    fontSize: "0.82rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {SERVICE_HINTS[form.service]}
                </div>
              )}

              <div>
                <label htmlFor="customerType" style={labelStyle}>Have we worked together before?</label>
                <select
                  id="customerType"
                  name="customerType"
                  value={form.customerType}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                >
                  <option value="">Select...</option>
                  <option value="new">First time working with Hawaii Elite</option>
                  <option value="returning">Yes, you've painted for me before</option>
                  <option value="referral">Referred by a previous client</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Project Description *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  placeholder="Tell us about the space, approximate size, and what you're hoping to accomplish..."
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Send Estimate Request
              </button>

              <p style={{ color: "var(--color-text-muted)", fontSize: "0.78rem" }}>
                No spam. We use your contact info only to respond to this request.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
