"use client";

import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import DNASection from "../components/dnasection";
import { useLanguage } from "../components/language-context";

export default function CareersPage() {
  const { t } = useLanguage();

  const jobs = [
    {
      category: t.careers.sales,
      roles: [
        {
          title: t.careers.salesEngineerTitle,
          description: t.careers.salesEngineerDesc,
          link: "#"
        },
        {
          title: t.careers.productSpecialistTitle,
          description: t.careers.productSpecialistDesc,
          link: "#"
        }
      ]
    }
  ];

  const values = [
    {
      title: t.careers.valuesTitle1,
      desc: t.careers.valuesDesc1,
      image: "/image/careers1.jpg"
    },
    {
      title: t.careers.valuesTitle2,
      desc: t.careers.valuesDesc2,
      image: "/image/careers2.jpg"
    }
  ];

  return (
    <main className="careers-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" data-nav-theme="dark" style={{ position: 'relative', width: '100%', height: '55vh', overflow: 'hidden' }}>
        <Image 
          src="/image/career_hero.png" 
          alt="Careers Hero" 
          fill
          priority
          className="hero-image"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{t.careers.title}</h1>
          <div className="hero-divider"></div>
        </div>
      </section>

      {/* Culture Section - Centered Corporate Quote */}
      <section className="culture-section" data-nav-theme="light">
        <div className="container">
          <div className="culture-content">
            <h2 className="culture-heading">{t.careers.cultureHeading}</h2>
            <div className="culture-divider"></div>
            <div className="culture-body">
              <p>{t.careers.cultureBody1}</p>
              <p>{t.careers.cultureBody2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Structured Image Panels */}
      <section className="values-section" data-nav-theme="light">
        <div className="container">
          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="corporate-panel">
                <div className="panel-image-wrapper" style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
                  <Image 
                    src={val.image} 
                    alt={val.title}
                    fill
                    className="panel-image"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="panel-content">
                  <h3 className="panel-title">{val.title}</h3>
                  <p className="panel-desc">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section - Corporate Grid Cards */}
      <section className="jobs-section" data-nav-theme="light">
        <div className="container">
          <div className="jobs-header">
            <h2 className="section-title">{t.careers.jobsTitle}</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="jobs-list">
            {jobs.map((category, idx) => (
              <div key={idx} className="job-category-group">
                <div className="category-label">{category.category}</div>
                <div className="roles-grid">
                  {category.roles.map((role, rIdx) => (
                    <div key={rIdx} className="job-card">
                      <div className="job-card-top">
                        <div className="job-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <h4 className="job-title">{role.title}</h4>
                        <p className="job-description">{role.description}</p>
                      </div>
                      <div className="job-card-bottom">
                        <Link href={role.link} className="apply-btn">
                          {t.careers.readMore}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* DNA Section */}
      <DNASection />

      <style jsx>{`
        .careers-page {
          background: #ffffff;
          color: #333333;
          overflow-x: hidden;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero-section {
          height: 55vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }

        .hero-image {
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0;
          text-transform: uppercase;
        }

        .hero-divider {
          width: 80px;
          height: 3px;
          background: #ffc107;
          margin-top: 20px;
        }

        /* Culture Section (Centered Corporate) */
        .culture-section {
          padding: 120px 0 60px;
          background: #ffffff;
        }

        .culture-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .culture-heading {
          font-size: 36px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 30px;
        }

        .culture-divider {
          width: 1px;
          height: 60px;
          background: #ffc107;
          margin: 0 auto 30px;
        }

        .culture-body {
          font-size: 20px;
          line-height: 1.8;
          color: #555555;
        }

        .culture-body p {
          margin-bottom: 15px;
        }

        /* Values Section (Structured Panels) */
        .values-section {
          padding-bottom: 120px;
          background: #ffffff;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .corporate-panel {
          background: #f8f9fa;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .corporate-panel:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }

        .panel-image-wrapper {
          position: relative;
          width: 100%;
          height: 320px;
          border-bottom: 1px solid #eaeaea;
        }

        .panel-content {
          padding: 40px;
        }

        .panel-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .panel-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #555555;
        }

        .jobs-section {
          padding: 120px 0;
          background: #f8fafc;
          position: relative;
        }

        .jobs-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .job-category-group {
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .category-label {
          display: inline-block;
          font-size: 14px;
          font-weight: 800;
          color: #000;
          background: #ffc107;
          padding: 10px 24px;
          border-radius: 50px;
          margin-bottom: 50px;
          letter-spacing: 2px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
        }

        .roles-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          width: 100%;
        }

        .job-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px;
          width: 100%;
          max-width: 380px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(0,0,0,0.02);
          position: relative;
          overflow: hidden;
        }

        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #ffc107, #ff9800);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .job-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: rgba(255, 193, 7, 0.3);
        }

        .job-card:hover::before {
          opacity: 1;
        }

        .job-card-top {
          margin-bottom: 30px;
        }

        .job-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        
        .job-icon svg {
          width: 24px;
          height: 24px;
        }

        .job-title {
          font-size: 22px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .job-description {
          font-size: 15px;
          line-height: 1.7;
          color: #64748b;
        }

        .job-card-bottom {
          border-top: 1px solid #f1f5f9;
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        :global(.apply-btn) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 800;
          color: #1e293b;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        :global(.apply-btn) svg {
          width: 14px;
          height: 14px;
          color: #ffc107;
          transition: transform 0.3s ease;
        }

        :global(.apply-btn:hover) {
          color: #ffc107;
        }

        :global(.apply-btn:hover) svg {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .values-grid { grid-template-columns: 1fr; }
          .roles-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 40px; }
          .culture-heading { font-size: 28px; }
          .culture-body { font-size: 18px; }
          .roles-grid { grid-template-columns: 1fr; }
          .panel-image-wrapper { height: 250px; }
        }
      `}</style>
    </main>
  );
}

