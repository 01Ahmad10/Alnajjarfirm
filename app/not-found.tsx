import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Alnajjar Firm",
};

export default function NotFound() {
  return (
    <div className="page-content">
      <section className="hero" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(4rem, 15vw, 9rem)", margin: "0 0 0.5rem", color: "var(--accent)", fontWeight: 800 }}>
          404
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "clamp(1rem, 2vw, 1.3rem)", marginBottom: "2rem" }}>
          This page doesn&apos;t exist or was moved
        </p>
        <Link className="neuros-button" href="/">
          <span className="button-inner">Go back home</span>
        </Link>
      </section>
    </div>
  );
}
