"use client";

import React from 'react';
import Navbar from '../components/navbar';
import ClientsGrid from '../components/clientsgrid';
import { useLanguage } from '../components/language-context';

export default function ClientsPage() {
  const { t } = useLanguage();

  return (
    <main className="clients-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="clients-hero" data-nav-theme="dark">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{t.clients.title}</h1>
          <div className="hero-divider"></div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="intro-section" data-nav-theme="light">
        <div className="container">
          <p className="intro-text">
            {t.clients.subtitle}
          </p>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="grid-section" data-nav-theme="light">
        <ClientsGrid />
      </section>

      <style jsx>{`
        .clients-page {
          min-height: 100vh;
          background-color: #ffffff;
        }

        .clients-hero {
          height: 500px;
          width: 100%;
          position: relative;
          background-image: url('/clients_hero_bg_1777536322725.png'); /* The high-end image we generated */
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%);
          backdrop-filter: blur(2px);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .hero-content h1 {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 72px;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -2px;
          text-transform: capitalize;
        }

        .hero-divider {
          width: 80px;
          height: 4px;
          background: #ffc107;
          margin: 0 auto;
          border-radius: 2px;
        }

        .intro-section {
          padding: 80px 24px 20px;
          background: #ffffff;
          text-align: center;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        .intro-text {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 20px;
          color: #444;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .grid-section {
          padding-bottom: 100px;
          background: #ffffff;
        }

        @media (max-width: 768px) {
          .clients-hero {
            height: 350px;
          }
          .hero-content h1 {
            font-size: 48px;
          }
          .intro-text {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}

