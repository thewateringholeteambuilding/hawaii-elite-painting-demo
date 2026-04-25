import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Hawaii Elite Painting and Renovation</title>
      </Helmet>
      <div
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem 1.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "8rem",
            color: "var(--color-accent)",
            lineHeight: 1,
            display: "block",
            marginBottom: "1rem",
          }}
        >
          404
        </span>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            color: "var(--color-text)",
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.95rem",
            maxWidth: "380px",
            lineHeight: 1.65,
            marginBottom: "2rem",
          }}
        >
          The page you're looking for doesn't exist. Head back to the home page.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </>
  );
}
