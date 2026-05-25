"use client";

import { useLanguage } from "./language-context";

export default function AboutSection() {
  const { t } = useLanguage();
  const divisions = t.about.divisions;

  return (
    <section id="about" className="about-section" data-nav-theme="dark">
      <div className="bento-container animate-fade-in">
        
        {/* Main About Us Block */}
        <div className="bento-card bento-about">
          <h2 className="bento-main-title">{t.about.title}</h2>
          <h3 className="bento-subtitle">{t.about.subtitle}</h3>
          <p className="bento-text">{t.about.text}</p>
          <div className="watermark"></div>
        </div>

        {/* Division Blocks */}
        {divisions.map((item, index) => (
          <div key={index} className="bento-card bento-division" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
            <span className="division-name">{item}</span>
            <div className="capability-line-container">
              <div className="capability-line-fill" style={{ animationDelay: `${index * 0.15 + 0.8}s` }}></div>
            </div>
          </div>
        ))}

      </div>

      <style jsx>{`
        .about-section {
          padding: clamp(80px, 10vh, 120px) clamp(24px, 4vw, 48px);
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .bento-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto auto auto;
          gap: 24px;
          width: 100%;
          max-width: 1400px;
          position: relative;
          z-index: 1;
        }

        .animate-fade-in {
          animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .bento-card {
          padding: clamp(24px, 3.5vw, 48px);
          border-radius: clamp(24px, 3vw, 40px);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bento-about {
          background: rgba(255, 193, 7, 0.15);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          grid-column: span 2;
          grid-row: span 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.4),
            inset 0 0 20px rgba(255, 193, 7, 0.1);
          border: 1px solid rgba(255, 193, 7, 0.3);
          z-index: 1;
        }

        .bento-about:hover {
          transform: scale(1.01) translateY(-5px);
          background: rgba(255, 193, 7, 0.2);
          border-color: rgba(255, 193, 7, 0.6);
          box-shadow: 0 30px 60px rgba(255, 193, 7, 0.3);
        }

        .bento-main-title {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 800;
          color: #ffc107;
          margin-bottom: clamp(16px, 2vw, 24px);
          letter-spacing: -1px;
          position: relative;
          z-index: 2;
          text-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
        }

        .bento-subtitle {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: clamp(20px, 2.5vw, 30px);
          position: relative;
          z-index: 2;
          line-height: 1.3;
        }

        .bento-text {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(14px, 1.2vw, 17px);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          position: relative;
          z-index: 2;
        }

        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 500px;
          height: 500px;
          background-image: url('/image/logo.png');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          margin-top: -250px;
          margin-left: -250px;
          opacity: 0.08;
          z-index: 0;
          filter: brightness(0) invert(1);
          pointer-events: none;
          animation: elegantDrift 18s ease-in-out infinite alternate;
        }

        .bento-division {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.3),
            inset 0 0 15px rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          cursor: pointer;
        }

        .bento-division:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .division-name {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
          letter-spacing: -0.5px;
          transition: all 0.3s ease;
        }

        .bento-division:hover .division-name {
          color: #ffc107;
          transform: translateX(5px);
        }

        .capability-line-container {
          width: 100%;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          margin-top: 20px;
        }

        .capability-line-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: #ffc107;
          border-radius: 2px;
          animation: fillLine 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
        }

        .bento-division:hover .capability-line-fill {
          background-color: #ffffff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }

        @keyframes fillLine {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes elegantDrift {
          0% { transform: scale(1) translate(0px, 0px); opacity: 0.05; }
          33% { transform: scale(1.05) translate(-10px, -15px); opacity: 0.08; }
          66% { transform: scale(0.95) translate(15px, 10px); opacity: 0.1; }
          100% { transform: scale(1) translate(0px, 0px); opacity: 0.05; }
        }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1200px) {
          .bento-card {
            padding: 36px;
            border-radius: 32px;
          }
          .bento-main-title {
            font-size: 48px;
          }
          .bento-subtitle {
            font-size: 22px;
          }
          .division-name {
            font-size: 18px;
          }
        }

        @media (max-width: 992px) {
          .about-section {
            padding: 80px 24px;
          }
          .bento-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .bento-about {
            grid-column: span 2;
            grid-row: span 1;
            padding: 50px 40px;
          }
        }

        @media (max-width: 640px) {
          .bento-container {
            grid-template-columns: 1fr;
          }
          .bento-about {
            grid-column: span 1;
            padding: 40px 24px;
            border-radius: 28px;
          }
          .bento-main-title {
            font-size: 38px;
            margin-bottom: 20px;
          }
          .bento-subtitle {
            font-size: 20px;
          }
          .bento-text {
            font-size: 15px;
          }
          .bento-card {
            padding: 32px 24px;
            border-radius: 28px;
          }
          .division-name {
            font-size: 18px;
          }
          .watermark {
            width: 300px;
            height: 300px;
            margin-top: -150px;
            margin-left: -150px;
          }
        }
      `}</style>
    </section>
  );
}

