"use client";

import React from 'react';

export default function VisiMisiSection() {
  const missions = [
    {
      title: "Jaminan Kepuasan Pelanggan",
      desc: "Kami memberikan jaminan berupa produk berkualitas. Hanya produk dengan kualitas terbaik yang tepat untuk Anda.",
      image: "/image/1.jpg" // Ganti dengan nama file foto pertama Anda di folder public
    },
    {
      title: "Pelayanan Pelanggan Kelas Dunia",
      desc: "Kami menyediakan layanan pelanggan terbaik berkelas dunia. Staff kami siap membantu menyelesaikan masalah Anda.",
      image: "/image/2.jpg" // Ganti dengan nama file foto kedua Anda di folder public
    },
    {
      title: "Pemimpin Pasar di Industrinya",
      desc: "Kami berusaha menjadi pemimpin pasar dalam industri melalui peningkatan kualitas tanpa henti di setiap bagian yang ada.",
      image: "/image/gedung.jpg" // Ganti dengan nama file foto ketiga Anda di folder public
    }
  ];

  return (
    <section className="visi-misi-section">
      {/* Visi Section */}
      <div className="visi-container">
        <h2 className="section-title">Visi Kami</h2>
        <p className="visi-statement">
          "Menjadi perusahaan kelas dunia dengan standar tertinggi dalam <span className="text-yellow">kualitas</span> dan <span className="text-yellow">pelayanan</span>."
        </p>
      </div>

      {/* Misi Section */}
      <div className="misi-container">
        <h2 className="section-title">Misi Kami</h2>
        <div className="misi-grid">
          {missions.map((mission, index) => (
            <div key={index} className="misi-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="misi-image-wrapper">
                {mission.image ? (
                  <img src={mission.image} alt={mission.title} className="misi-image" />
                ) : (
                  <div className="image-placeholder">
                     <span className="placeholder-text">Foto {index + 1}</span>
                  </div>
                )}
              </div>
              <div className="misi-content-box">
                <h3 className="misi-title">{mission.title}</h3>
                <p className="misi-desc">{mission.desc}</p>
              </div>
              <div className="card-accent-line"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .visi-misi-section {
          width: 100%;
          background: linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.75)), url('/image/tool12.jpg');
          background-size: cover;
          background-position: center top;
          background-attachment: fixed;
          padding: 100px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Common Styles */
        .section-title {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 56px;
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin-bottom: 40px;
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
          padding: 80px 60px;
          border-radius: 40px;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            inset 0 0 30px rgba(255, 255, 255, 0.05);
          text-align: center;
          margin-bottom: 80px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .visi-statement {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.5;
          margin-top: 30px;
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
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .misi-desc {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 15px;
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
