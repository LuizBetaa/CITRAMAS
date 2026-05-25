"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LanguageSelector from "./languageselector";
import { useLanguage } from "./language-context";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(true); // Default true for Home Hero
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -90% 0px', // Detect when section is at the very top
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-nav-theme');
          setIsLightBg(theme === 'light');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('[data-nav-theme]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navTextColor = isLightBg ? "#111111" : "#ffffff";

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} className="navbar-brand">
        <div className="logo-icon">
          <Image src="/image/logo.png" alt="Logo" width={100} height={70} />
        </div>
        <span className="brand-name" style={{ color: navTextColor }}>PT. CITRAMAS ALFA SEJAHTERA</span>
      </Link>

      <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span style={{ backgroundColor: navTextColor }}></span>
        <span style={{ backgroundColor: navTextColor }}></span>
        <span style={{ backgroundColor: navTextColor }}></span>
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link href="/#about" className="nav-link" style={{ color: navTextColor }}>
            {t.nav.about}
          </Link>
        </li>
        <li>
          <Link href="/brands" className="nav-link" style={{ color: navTextColor }}>
            {t.nav.brands}
          </Link>
        </li>
        <li>
          <Link href="/clients" className="nav-link" style={{ color: navTextColor }}>
            {t.nav.clients}
          </Link>
        </li>
        <li>
          <Link href="/careers" className="nav-link" style={{ color: navTextColor }}>
            {t.nav.careers}
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link contact-link" style={{ color: navTextColor }}>
            {t.nav.contact}
          </Link>
        </li>
        <li className="navbar-language">
          <LanguageSelector />
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(16px, 2vw, 24px) clamp(24px, 4vw, 48px);
          background: transparent;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          box-sizing: border-box;
          transition: all 0.4s ease;
        }

        .navbar.scrolled {
          padding: 16px 48px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .brand-name {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(14px, 1.5vw, 20px);
          font-weight: 600;
          letter-spacing: 1px;
          transition: color 0.4s ease;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.5vw, 36px);
          list-style: none;
          margin: 0;
          padding: 0;
          z-index: 10;
        }

        :global(.nav-link) {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
          font-size: clamp(11px, 1.2vw, 13px) !important;
          font-weight: 700 !important;
          text-decoration: none !important;
          letter-spacing: 1.5px !important;
          transition: all 0.4s ease !important;
        }

        :global(.nav-link:hover) {
          opacity: 0.7;
          color: #ffc107 !important;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 6px;
          z-index: 1001;
        }

        .hamburger span {
          width: 30px;
          height: 3px;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        @media (max-width: 992px) {
          .navbar { padding: 16px 24px; }
          .brand-name { font-size: 14px; }
          .hamburger { display: flex; }
          .nav-links {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #000;
            flex-direction: column;
            justify-content: center;
            padding: 24px;
            gap: 30px;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
          }
          .nav-links.open {
            transform: translateX(0);
            opacity: 1;
            pointer-events: auto;
          }
          .nav-links .nav-link { color: #fff !important; }
        }
      `}</style>
    </nav>
  );
}

