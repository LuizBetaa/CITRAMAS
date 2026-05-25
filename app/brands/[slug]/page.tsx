"use client";

import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import { brandsData } from '../../data/brandsData';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../../components/language-context';

const getLocStr = (str: any, lang: string): string => {
  if (!str) return "";
  if (typeof str === 'string') return str;
  return str[lang] || str.id || str.en || "";
};

export default function BrandDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t, language } = useLanguage();
  const brand = brandsData[slug];
  
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [isOptionsOpen, setIsOptionsOpen] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!brand) {
    return (
      <div className="not-found">
        <Navbar />
        <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
          <h1>{t.brandDetailPage.brandNotFound}</h1>
          <Link href="/brands" style={{ color: '#ffc107', fontWeight: 'bold' }}>{t.brandsPage.backToList}</Link>
        </div>
      </div>
    );
  }

  const product = brand.products[activeProductIndex];

  // Auto-slideshow effect
  React.useEffect(() => {
    if (product.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % product.images.length);
    }, 6000); // Diperlambat menjadi 6 detik per gambar

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <main className="brand-detail-page">
      <Navbar />
      
      {/* 1. Immersive Hero Section */}
      <header className="brand-hero" data-nav-theme="light">
        <div className="hero-content">
          <nav className="breadcrumb">
            <Link href="/" style={{ color: '#666' }}>{t.brandDetailPage.home}</Link> / <Link href="/brands" style={{ color: '#666' }}>{t.brandDetailPage.brands}</Link> / <span>{brand.name}</span>
          </nav>
          <img src={brand.logo} alt={brand.name} className="hero-brand-logo" />
        </div>
      </header>

      <div className="content-wrapper" data-nav-theme="light">
        <div className="asymmetric-grid">
          
          {/* Left: Visual Gallery (60%) */}
          <div className="gallery-column">
            <div className="main-display-area">
              <div className="main-image-container">
                {product.images.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={`${brand.name} product ${i}`} 
                    className={`crossfade-img ${activeImageIndex === i ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
            
            {product.images.length > 1 && (
              <div className="thumbnail-strip">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    className={`thumb-btn ${activeImageIndex === i ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(i)}
                  >
                    <img src={img} alt="thumbnail" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Technical Info (40%) */}
          <div className="info-column">
              {brand.products.length > 1 && (
                <div className="product-selector">
                  <div className="section-tag">{t.brandDetailPage.overview}</div>
                  <div className="product-tabs">
                    {brand.products.map((prod, i) => (
                      <button
                        key={i}
                        className={`product-tab ${activeProductIndex === i ? 'active' : ''}`}
                        onClick={() => {
                          setActiveProductIndex(i);
                          setActiveImageIndex(0);
                        }}
                      >
                        {prod.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            
              <section className="tech-specs">
              <div className="section-tag">{t.brandDetailPage.overview}</div>
              <h2 className="spec-title">{t.brandDetailPage.productDescriptionTitle}</h2>
              <p className="spec-description">{getLocStr(product.description, language.code)}</p>
            </section>

            {product.plans && product.plans.length > 0 && (
              <section className="hud-accordion">
                <div 
                  className="hud-header" 
                  onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                >
                  <div className="hud-title-wrap">
                    <span className="hud-dot"></span>
                    <span className="hud-title">{t.brandDetailPage.technicalSelections}</span>
                  </div>
                  <span className={`hud-arrow ${isOptionsOpen ? 'up' : 'down'}`}></span>
                </div>
                
                <div className={`hud-body ${isOptionsOpen ? 'open' : ''}`}>
                  {product.plans.map((plan, i) => (
                    <div key={i} className="hud-item">
                      <div className="hud-item-header">
                        <h4 className="hud-item-name">{getLocStr(plan.name, language.code)}</h4>
                      </div>
                      <p className="hud-item-details">{getLocStr(plan.details, language.code)}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="action-area">
              <Link href="/contact" className="elegant-back-btn">
                <span className="btn-text">{t.nav.contact}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .brand-detail-page {
          min-height: 100vh;
          background-color: #ffffff;
          color: #111;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Hero Styling */
        .brand-hero {
          background-color: #ffffff;
          padding: 140px 20px 80px; /* Top padding for navbar, bottom padding for overlap */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
          border-bottom: 1px solid #f1f1f1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .breadcrumb {
          font-size: 11px;
          color: #888;
          letter-spacing: 2px;
          margin-bottom: 25px;
          text-transform: uppercase;
        }

        .breadcrumb a, 
        .breadcrumb a:visited,
        .breadcrumb a:active {
          color: #888 !important;
          text-decoration: none;
          transition: color 0.3s;
        }

        .breadcrumb a:hover { 
          color: #ffc107 !important; 
        }

        .breadcrumb span { color: #111; font-weight: 800; }

        .hero-brand-logo {
          max-height: 160px;
          width: auto;
          margin: 0 auto;
          display: block;
        }

        /* Layout */
        .content-wrapper {
          max-width: 1300px;
          margin: -60px auto 0;
          padding: 0 40px 100px;
          position: relative;
          z-index: 10;
        }

        .asymmetric-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: start;
        }

        /* Gallery Column */
        .gallery-column {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .main-display-area {
          position: relative;
          width: 100%;
        }

        .brand-logo-badge {
          position: absolute;
          top: -10px;
          left: 0;
          z-index: 5;
          height: 120px;
          display: flex;
          align-items: center;
          background: transparent; /* Hilangkan box putih */
        }

        .brand-logo-badge img {
          max-height: 100%;
          width: auto;
        }

        .main-image-container {
          width: 100%;
          background: #fdfdfd;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          position: relative; /* Container as reference */
        }

        .crossfade-img {
          position: absolute;
          max-width: 90%;
          height: auto;
          opacity: 0;
          transition: opacity 2s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .crossfade-img.active {
          opacity: 1;
          pointer-events: auto;
          position: relative; /* Maintain container height if needed, or use a placeholder */
        }

        .thumbnail-strip {
          display: flex;
          gap: 15px;
          margin-top: 30px;
          justify-content: center;
        }

        .thumb-btn {
          width: 80px;
          height: 80px;
          padding: 10px;
          background: #f8f9fa;
          border: 2px solid transparent;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .thumb-btn.active {
          border-color: #ffc107;
          background: #fff;
        }

        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Info Column */
        .info-column {
          padding-top: 80px;
        }

        .section-tag {
          font-size: 12px;
          font-weight: 700;
          color: #ffc107;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .spec-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 25px;
          color: #000;
        }

        .spec-description {
          font-size: 18px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 50px;
          text-align: justify;
        }

        /* HUD Accordion */
        .hud-accordion {
          border: 1px solid #eee;
          border-radius: 4px;
          overflow: hidden;
          background: #fafafa;
        }

        .hud-header {
          padding: 15px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: #f4f5f7;
          transition: all 0.3s;
          border-bottom: none;
        }

        .hud-header:hover { background: #e9ecef; }

        .hud-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hud-dot {
          display: none;
        }

        .hud-title {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #111;
        }

        .hud-arrow {
          width: 8px;
          height: 8px;
          border-right: 2px solid #111;
          border-bottom: 2px solid #111;
          transform: rotate(45deg);
          transition: all 0.4s;
        }

        .hud-arrow.up { transform: rotate(-135deg); }

        .hud-body {
          max-height: 0;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          background: #ffffff;
        }

        .hud-body.open { 
          max-height: 350px; 
          padding-bottom: 10px; 
          overflow-y: auto;
        }

        /* Custom Scrollbar for the plans list */
        .hud-body::-webkit-scrollbar {
          width: 6px;
        }
        .hud-body::-webkit-scrollbar-track {
          background: #f8f9fa;
        }
        .hud-body::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .hud-body::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .hud-item {
          padding: 20px 24px 10px;
          border-bottom: none;
        }

        .hud-item:last-child { border-bottom: none; }

        .hud-item-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 8px;
        }

        .hud-item-name {
          font-size: 15px;
          font-weight: 800;
          margin: 0;
          color: #556b82;
        }

        .hud-item-details {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          padding-left: 0;
          white-space: pre-line;
        }

        .action-area { margin-top: 50px; }

          .product-selector {
            margin-bottom: 40px;
          }

          .product-tabs {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 15px;
          }

          .product-tab {
            padding: 14px 20px;
            background: #f5f5f5;
            border: 2px solid transparent;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.5px;
            color: #666;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
          }

          .product-tab:hover {
            background: #f0f0f0;
            color: #000;
          }

          .product-tab.active {
            background: #ffc107;
            color: #000;
            border-color: #ffc107;
            font-weight: 800;
          }

        :global(.elegant-back-btn) {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          text-decoration: none;
          color: #000;
          background: #ffc107;
          padding: 18px 30px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          transition: all 0.4s;
          border: 1px solid #ffc107;
          border-radius: 50px; /* Capsule shape */
        }

        :global(.elegant-back-btn:hover) { 
          background: #000;
          color: #ffc107;
          border-color: #000;
        }

        .fade-in { animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }

        @media (max-width: 1100px) {
          .asymmetric-grid { grid-template-columns: 1fr; }
          .gallery-column { padding: 20px; }
          .info-column { padding-top: 40px; }
          .content-wrapper { padding: 0 20px 60px; }
          .brand-logo-badge { left: 0; top: -30px; }
        }
      `}</style>
    </main>
  );
}
