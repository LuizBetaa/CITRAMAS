"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./language-context";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero" data-nav-theme="light">
      <div className="hero-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/image/building.jpg"
          className="hero-video"
        >
          <source src="https://cdn.coverr.co/videos/coverr-industrial-factory-5241/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Left: Premium main image with glassmorphism badge and glowing orb */}
      <div className="hero-images">
        <div className="glow-orb"></div>
        <div className="img-card-main">
          <img
            src="/image/2orng.jpg"
            alt="Engineers at work"
            className="slow-zoom"
          />
          <div className="image-overlay"></div>
        </div>

        {/* Floating Badge */}
        <div className="floating-badge">
          <div className="badge-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="badge-text">
            <span className="badge-title">Expert Team</span>
            <span className="badge-subtitle">10+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Right: text content with stagger animation */}
      <div className="hero-content">
        <h1 className="hero-title animate-1">
          <span className="text-black">PT. Citramas </span>
          <span className="text-gold">Alfa Sejahtera</span>
        </h1>

        <p className="hero-desc animate-2">
          {t.hero.desc}
        </p>

        <div className="animate-3">
          <Link href="/contact#contact" className="cta-button">
            {t.hero.cta}
          </Link>
        </div>
      </div>

      {/* Right Side Decoration - Simple & Minimalist */}
      <div className="hero-side-deco">
        <div className="deco-line"></div>
        <div className="deco-label">{t.hero.since1990}</div>
        <div className="deco-dot"></div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 100vh;
          padding: clamp(100px, 12vh, 140px) clamp(24px, 4vw, 48px) 60px clamp(24px, 4vw, 48px);
          overflow: hidden;
          background: #f7f7f7;
          gap: clamp(40px, 6vw, 80px);
        }

        /* Faded video background */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.15;
          z-index: 0;
        }

        /* Image stack */
        .hero-images {
          position: relative;
          flex-shrink: 0;
          width: clamp(340px, 35vw, 480px);
          height: clamp(380px, 40vw, 520px);
          z-index: 1;
        }

        .img-card-main {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 40px 160px 40px 160px;
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);
          transform: translateY(0);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          z-index: 1;
        }

        .hero-images:hover .img-card-main {
          transform: translateY(-8px);
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.25);
        }

        .slow-zoom {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          animation: slowZoom 15s ease-in-out infinite alternate;
          transition: transform 0.8s ease;
        }

        .hero-images:hover .slow-zoom {
          transform: scale(1.08) !important;
        }

        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        .glow-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(220px, 25vw, 320px);
          height: clamp(220px, 25vw, 320px);
          background: #ffc107;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          transform: translate(-50%, -50%);
          animation: floatOrb 8s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes floatOrb {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-40%, -60%) scale(1.3); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1); }
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%);
          z-index: 1;
        }

        .floating-badge {
          position: absolute;
          bottom: 50px;
          left: -40px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 18px 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          z-index: 2;
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .badge-icon {
          width: 48px;
          height: 48px;
          background: #1a1a1a;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-text {
          display: flex;
          flex-direction: column;
        }

        .badge-title {
          font-family: 'Segoe UI', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2px;
        }

        .badge-subtitle {
          font-family: 'Segoe UI', sans-serif;
          font-size: 13px;
          color: #666;
          font-weight: 500;
        }

        /* Text content */
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px; /* Much wider to allow 2-line layout */
        }

        .hero-title {
          font-family: 'Segoe UI', sans-serif;
          font-size: clamp(40px, 4.5vw, 64px);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .text-black {
          color: #1a1a1a;
        }

        .text-gold {
          color: #ffc107;
        }

        .hero-desc {
          font-family: 'Segoe UI', sans-serif;
          font-size: clamp(16px, 1.2vw, 18px);
          color: #555555;
          line-height: 1.7;
          margin: 0 0 32px;
          max-width: 850px;
        }

        :global(.cta-button) {
          display: inline-block !important;
          background: #000000 !important;
          color: #ffc107 !important;
          font-family: 'Segoe UI', sans-serif !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          padding: 14px 32px !important;
          border-radius: 50px !important;
          text-decoration: none !important;
          transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
        }

        :global(.cta-button:hover) {
          background: #333333 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15) !important;
        }

        /* Entrance Animations */
        .animate-1 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-2 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.15s; opacity: 0; }
        .animate-3 { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s; opacity: 0; }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .hero {
            padding: 140px 24px 60px;
          }
          .hero-container {
            flex-direction: column;
            gap: 60px;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
          }
          .hero-title {
            font-size: 52px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 42px;
          }
          .hero-images {
            width: 100%;
            max-width: 480px;
            height: 400px;
          }
          .glow-orb {
            width: 250px;
            height: 250px;
          }
          .floating-badge {
            left: 50%;
            transform: translateX(-50%);
            bottom: -20px;
            width: max-content;
            animation: floatMobile 5s ease-in-out infinite;
          }
        }

        @keyframes floatMobile {
          0% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, -10px); }
          100% { transform: translate(-50%, 0px); }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 36px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .hero-images {
            height: 320px;
          }
        }

        /* Side Decoration Styles */
        .hero-side-deco {
          position: absolute;
          right: 50px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          z-index: 1;
          animation: fadeInRight 1s ease-out 0.5s forwards, floatDeco 6s ease-in-out infinite;
          opacity: 0;
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateY(-50%) translateX(20px); }
          to { opacity: 0.6; transform: translateY(-50%) translateX(0); }
        }

        @keyframes floatDeco {
          0% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-55%) translateX(0); }
          100% { transform: translateY(-50%) translateX(0); }
        }

        .deco-line {
          width: 1px;
          height: 100px;
          background: linear-gradient(to bottom, transparent, #ffc107, transparent);
        }

        .deco-label {
          font-family: 'Segoe UI', sans-serif;
          font-size: 16px; /* Increased size */
          font-weight: 800;
          color: #1a1a1a;
          writing-mode: vertical-rl;
          letter-spacing: 8px; /* Increased spacing for premium feel */
          text-transform: uppercase;
          opacity: 0.8;
        }

        .deco-dot {
          width: 8px;
          height: 8px;
          background: #ffc107;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(255, 193, 7, 0.5);
          animation: pulseDot 3s ease-in-out infinite;
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

