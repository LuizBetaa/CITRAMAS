"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "./language-context";

export default function LanguageSelector() {
  const { language, setLanguage, allLanguages } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="language-dropdown" ref={menuRef}>
      <button
        type="button"
        className="language-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="language-icon">{language.flag}</span>
        <span className="language-text">{language.label}</span>
        <span className={`language-arrow ${menuOpen ? "open" : ""}`}>▾</span>
      </button>
      <ul className={`language-options ${menuOpen ? "open" : ""}`}>
        {allLanguages.map((lang) => (
          <li key={lang.code}>
            <button
              type="button"
              className={`language-option ${language.code === lang.code ? "selected" : ""}`}
              onClick={() => {
                setLanguage(lang);
                setMenuOpen(false);
              }}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-label">{lang.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .language-dropdown {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .language-toggle {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: rgba(255, 255, 255, 0.92);
          color: #111827;
          font-weight: 700;
          cursor: pointer;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .language-toggle:hover {
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
        }

        .language-icon {
          font-size: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .language-arrow {
          display: inline-flex;
          transition: transform 0.2s ease;
        }

        .language-arrow.open {
          transform: rotate(180deg);
        }

        .language-options {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: 220px;
          margin: 0;
          padding: 10px 0;
          list-style: none;
          border-radius: 20px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.12);
          box-shadow: 0 18px 50px rgba(15, 23, 42, 0.12);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          z-index: 50;
        }

        .language-options.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .language-option {
          width: 100%;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: none;
          background: transparent;
          color: #111827;
          text-align: left;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.15s ease;
        }

        .language-option:hover,
        .language-option.selected {
          background: rgba(59, 130, 246, 0.08);
        }

        .language-flag {
          min-width: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .language-label {
          flex: 1;
          color: #111827;
        }

        @media (max-width: 992px) {
          .language-options {
            right: auto;
            left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
