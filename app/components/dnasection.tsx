"use client";

"use client";

import React from 'react';
import { useLanguage } from "./language-context";

export default function DNASection() {
  const { t } = useLanguage();
  const dnaItems = t.dna.items as readonly { id: number; title: string; desc: string; image?: string }[];
  const defaultImages: Record<number, string> = {
    1: "/image/accuracy.jpg",
    2: "/image/active.jpg",
    3: "/image/continuous.jpg",
    4: "/image/integrity.jpg",
    5: "/image/motivated.jpg",
    6: "/image/reliability.jpg",
    7: "/image/sustainability.jpg",
    8: "/image/teamwork.jpg",
  };

  return (
    <section id="dna" className="dna-section" data-nav-theme="light">
      <div className="dna-container">
        <h2 className="section-title">{t.dna.title}</h2>
        
        <div className="dna-accordion">
          {dnaItems.map((item) => {
            const imageSrc = item.image ?? defaultImages[item.id];
            return (
              <div key={item.id} className="dna-card">
                <div className="dna-image-wrapper">
                  {imageSrc ? (
                    <img src={imageSrc} alt={item.title} className="dna-image" />
                  ) : (
                    <div className="image-placeholder"></div>
                  )}
                </div>
              
              <div className="dna-gradient"></div>

              {/* Collapsed State Title */}
              <div className="dna-title-vertical">
                {item.title}
              </div>

              {/* Expanded State Content */}
              <div className="dna-content-expanded">
                <div className="dna-number">0{item.id}</div>
                <h3 className="dna-title">{item.title}</h3>
                <p className="dna-desc">{item.desc}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .dna-section {
          width: 100%;
          background-color: #fafafa;
          padding: 100px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .dna-container {
          width: 100%;
          max-width: 1300px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-title {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 56px;
          font-weight: 800;
          color: #000000;
          text-align: center;
          margin-bottom: 50px;
          letter-spacing: -1px;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 5px;
          background-color: #ffc107;
          border-radius: 3px;
        }

        .dna-accordion {
          display: flex;
          width: 100%;
          height: 750px;
          gap: 16px;
          margin-top: 40px;
        }

        .dna-card {
          position: relative;
          flex: 1;
          border-radius: 28px;
          overflow: hidden;
          cursor: pointer;
          background-color: #eaeaea;
          transition: flex 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .dna-card:hover {
          flex: 10;
        }

        .dna-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .dna-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .dna-card:hover .dna-image {
          transform: scale(1.05);
        }

        .dna-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%);
          transition: all 0.6s ease;
        }

        .dna-card:hover .dna-gradient {
          background: linear-gradient(to top, rgba(255, 193, 7, 0.85) 0%, rgba(255, 193, 7, 0.3) 35%, rgba(0,0,0,0) 70%);
        }

        .dna-title-vertical {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 2px;
          white-space: nowrap;
          transition: all 0.4s ease;
          opacity: 1;
        }

        .dna-card:hover .dna-title-vertical {
          opacity: 0;
          transform: translateX(-50%) rotate(180deg) translateY(-20px);
        }

        .dna-content-expanded {
          position: absolute;
          bottom: 50px;
          left: 50px;
          right: 50px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none;
        }

        .dna-card:hover .dna-content-expanded {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.2s;
        }

        .dna-number {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #000000;
          background-color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 20px;
          border-radius: 30px;
          margin-bottom: 20px;
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
        }

        .dna-title {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 52px;
          font-weight: 800;
          color: #000000;
          margin-bottom: 16px;
          letter-spacing: -1px;
          white-space: nowrap;
        }

        .dna-desc {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 20px;
          color: #1a1a1a;
          line-height: 1.6;
          font-weight: 600;
          max-width: 500px;
        }

        /* RESPONSIVE */
        @media (max-width: 1400px) {
          .dna-accordion {
            height: 600px;
          }
          .dna-title {
            font-size: 42px;
          }
          .dna-desc {
            font-size: 18px;
          }
        }

        @media (max-width: 900px) {
          .dna-accordion {
            flex-direction: column;
            height: 900px;
          }
          .dna-title-vertical {
            writing-mode: horizontal-tb;
            transform: translate(-50%, 50%);
            bottom: 50%;
            letter-spacing: 1px;
          }
          .dna-card:hover .dna-title-vertical {
            transform: translate(-50%, 0);
          }
          .dna-card:hover {
            flex: 5;
          }
          .dna-content-expanded {
            bottom: 30px;
            left: 30px;
            right: 30px;
          }
          .dna-title {
            font-size: 32px;
            white-space: normal;
          }
        }

        @media (max-width: 600px) {
          .dna-section {
            padding: 80px 24px;
          }
          .section-title {
            font-size: 42px;
          }
          .dna-accordion {
            height: 800px;
          }
          .dna-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}

