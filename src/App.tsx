import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/contact") return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "0.75rem 1.25rem",
        display: "flex",
        justifyContent: "center",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
      className="md:hidden"
    >
      <Link
        to="/contact"
        className="btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Free Estimate <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function AppLayout() {
  const location = useLocation();
  const hideNav = ["/legal", "/privacy"].includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!hideNav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNav && <Footer />}
      {!hideNav && <StickyMobileCTA />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
