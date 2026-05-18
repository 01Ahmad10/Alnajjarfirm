"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "Faq" },
  { href: "/contacts", label: "Contact us" },
  {
    href: "https://calendly.com/rami-w-alnajjar/alnajjar-firm-introductory-meeting",
    label: "Book Now",
    external: true,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Alnajjar Firm Home">
          <Image
            className="brand-logo"
            src="/logo.webp"
            alt="Alnajjar Firm"
            width={200}
            height={48}
            priority
          />
        </Link>

        <nav id="nav" className={`nav${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="header-right">
          <div className="header-social">
            <a href="https://www.facebook.com/alnajjarfirm" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M14 8h2V5h-2c-2.8 0-4 1.7-4 4v2H8v3h2v5h3v-5h2.3l.7-3H13V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/alnajjarfirm" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Zm9.25 1.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@alnajjarfirm" target="_blank" rel="noreferrer" aria-label="Tiktok" title="Tiktok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M14.8 3h2.82A4.47 4.47 0 0 0 21 6.23v2.9a7.35 7.35 0 0 1-3.35-.8v6.04a6.35 6.35 0 1 1-6.35-6.34c.28 0 .55.02.82.06v2.83a3.53 3.53 0 1 0 2.68 3.45V3Z" />
              </svg>
            </a>
          </div>
          <button
            id="menuBtn"
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
