"use client";

import React from 'react';
import Navbar from '../components/navbar';
import BrandsSection from '../components/brandssection';
import { useLanguage } from '../components/language-context';

export default function BrandsPage() {
  const { t } = useLanguage();

  return (
    <main className="brands-page">
      <Navbar />
      
      {/* Sub-Hero Header with Parallax */}
      <div className="sub-hero" data-nav-theme="dark">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{t.brandsPage.pageTitle}</h1>
        </div>
      </div>

      <div className="content-section">
        <BrandsSection />
      </div>
      
      <style jsx>{`
        .brands-page {
          min-height: 100vh;
          background-color: #ffffff;
        }

        .sub-hero {
          height: 500px;
          width: 100%;
          position: relative;
          background-image: url('/industrial_tools_hd_bg_1777266193082.png'); /* New HD Image */
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
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
          backdrop-filter: blur(1px); /* Reduced blur for HD clarity */
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .hero-content h1 {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 64px;
          font-weight: 800;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }

        .breadcrumb {
          font-size: 16px;
          font-weight: 500;
          opacity: 0.8;
          letter-spacing: 1px;
        }

        .breadcrumb .active {
          color: #ffc107;
        }

        .content-section {
          padding: 60px 0;
        }

        @media (max-width: 768px) {
          .sub-hero {
            height: 300px;
          }
          .hero-content h1 {
            font-size: 42px;
          }
        }
      `}</style>
    </main>
  );
}

