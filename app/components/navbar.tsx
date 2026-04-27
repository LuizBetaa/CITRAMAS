"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "ABOUT US", href: "/about" },
  { label: "BRANDS", href: "/brands" },
  { label: "CLIENTS", href: "/clients" },
  { label: "CAREERS", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <div className="logo-icon">
          <Image src="/image/logo.png" alt="Logo" width={100} height={70} />
        </div>
        <span className="brand-name">PT. CITRAMAS ALFA SEJAHTERA</span>
      </div>

      <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact" className="nav-link contact-link">
            CONTACT US
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 48px;
          background: transparent;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          box-sizing: border-box;
          transition: background 0.4s ease, padding 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease;
        }

        .navbar.scrolled {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 12px 48px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-name {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 20px;
          font-weight: 300;
          color: #000000;
          letter-spacing: 1px;
          transition: color 0.4s ease;
        }

        .navbar.scrolled .brand-name {
          color: #ffffff;
          font-weight: 400;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        :global(.nav-link) {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          color: #1a1a1a !important;
          text-decoration: none !important;
          letter-spacing: 1px !important;
          transition: color 0.4s ease, opacity 0.2s ease !important;
        }

        .navbar.scrolled :global(.nav-link) {
          color: #ffffff !important;
        }

        :global(.nav-link:hover) {
          color: #ffc107 !important;
        }

        :global(.contact-link) {
          color: #1a1a1a !important;
          font-weight: 700 !important;
        }

        .navbar.scrolled :global(.contact-link) {
          color: #ffffff !important;
        }

        :global(.contact-link:hover) {
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
          background-color: #000;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .navbar.scrolled .hamburger span {
          background-color: #fff;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        @media (max-width: 992px) {
          .navbar {
            padding: 12px 24px;
          }
          .navbar.scrolled {
            padding: 12px 24px;
          }
          .brand-name {
            font-size: 16px;
          }
          .logo-icon img {
            width: 80px;
            height: auto;
          }
          .hamburger {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 24px;
            gap: 20px;
            transform: translateY(-150%);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
    </nav>
  );
}
