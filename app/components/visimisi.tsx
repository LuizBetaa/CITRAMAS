"use client";

import React from 'react';
import { useLanguage } from "./language-context";

export default function VisiMisiSection() {
  const { t } = useLanguage();
  const missions = t.visi.missions as ReadonlyArray<{ title: string; desc: string; image?: string }>;
  const defaultImages: Record<number, string> = {
    1: "/image/1.jpg",
    2: "/image/2.jpg",
    3: "/image/gedung.jpg",
  };

  return (
    <section id="visi-misi" className="visi-misi-section" data-nav-theme="dark">
      {/* Visi Section */}
      <div className="visi-container">
        <h2 className="section-title">{t.visi.title}</h2>
        <p className="visi-statement">{t.visi.statement}</p>
      </div>

      {/* Misi Section */}
      <div className="misi-container">
        <h2 className="section-title">{t.visi.missionTitle}</h2>
        <div className="misi-grid">
          {missions.map((mission, index) => {
            const imageSrc = mission.image ?? defaultImages[index + 1];
            return (
              <div key={index} className="misi-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="misi-image-wrapper">
                  <img src={imageSrc} alt={mission.title} className="misi-image" />
                </div>
                <div className="misi-content-box">
                  <h3 className="misi-title">{mission.title}</h3>
                  <p className="misi-desc">{mission.desc}</p>
                </div>
                <div className="card-accent-line"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .visi-misi-section {
          width: 100%;
          background: linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.75)), url('/image/tool12.jpg');
          background-size: cover;
          background-position: center top;
          background-attachment: fixed;
          padding: clamp(60px, 8vh, 100px) clamp(24px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Common Styles */
        .section-title {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin-bottom: clamp(24px, 3vw, 40px);
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

        /* Visi Styles */
        .visi-container {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          width: 100%;
          max-width: 1100px;
          padding: clamp(40px, 5vw, 80px) clamp(30px, 4vw, 60px);
          border-radius: clamp(24px, 3vw, 40px);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            inset 0 0 30px rgba(255, 255, 255, 0.05);
          text-align: center;
          margin-bottom: clamp(40px, 5vw, 80px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .visi-statement {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.5;
          margin-top: clamp(20px, 2.5vw, 30px);
        }

        .text-yellow {
          color: #ffc107;
          text-shadow: 0 0 15px rgba(255, 193, 7, 0.4);
        }

        /* Misi Styles */
        .misi-container {
          width: 100%;
          max-width: 1050px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .misi-container .section-title {
          color: #ffffff;
        }

        .misi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          width: 100%;
          margin-top: 50px;
        }

        .misi-card {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 24px;
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .misi-card:hover {
          transform: translateY(-12px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 193, 7, 0.5);
        }

        .misi-image-wrapper {
          width: 100%;
          height: 200px;
          background-color: rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-text {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          opacity: 0.6;
        }

        .misi-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
          opacity: 0.9;
        }

        .misi-card:hover .misi-image {
          transform: scale(1.08);
          opacity: 1;
        }

        .misi-content-box {
          padding: 30px 24px;
          flex: 1;
        }

        .misi-title {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .misi-desc {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(13px, 1.1vw, 15px);
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-weight: 500;
        }

        .card-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 5px;
          background-color: #ffc107;
          transition: width 0.4s ease;
        }

        .misi-card:hover .card-accent-line {
          width: 100%;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .visi-statement {
            font-size: 28px;
          }
          .misi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .misi-image-wrapper {
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .visi-misi-section {
            padding: 80px 24px;
          }
          .section-title {
            font-size: 42px;
          }
          .visi-container {
            padding: 50px 30px;
            border-radius: 24px;
          }
          .visi-statement {
            font-size: 24px;
          }
          .misi-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 36px;
          }
          .visi-statement {
            font-size: 20px;
          }
          .misi-content-box {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
}

