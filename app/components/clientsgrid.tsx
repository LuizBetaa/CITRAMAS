"use client";

import React from 'react';
import { clientsData } from '../data/clientsData';

export default function ClientsGrid() {
  const COLS = 4;

  // Exact vertical centers of each row in the 1891px tall sprite sheet
  // This compensates for the uneven spacing in the raw image
  const rowCenters = [
    47, 145.5, 236, 327, 423.5, 515.5, 619.5, 715, 815.5, 909.5, 
    1005.5, 1097, 1190, 1278, 1367.5, 1452, 1534, 1615, 1695, 1778, 1856.5
  ];

  return (
    <div className="clients-gallery-container">
      <div className="clients-grid">
        {clientsData.map((client, originalIndex) => {
          const col = originalIndex % COLS;
          const row = Math.floor(originalIndex / COLS);
          
          // Use exact row center to position it perfectly in the middle of the box
          // (0.5 - center * 21 / 1891) * 100
          const topOffset = (0.5 - (rowCenters[row] * 21) / 1891) * 100;

          return (
            <div key={originalIndex} className="client-logo-box">
              <div className="logo-sprite-container">
                <div className="logo-sprite-wrapper">
                  <img 
                    src="/image/client/FULL%20LOGO.png" 
                    alt={client.name}
                    className="logo-sprite-img"
                    style={{
                      left: `-${col * 100}%`,
                      top: `${topOffset}%`
                    }}
                  />
                </div>
              </div>
              <div className="tooltip-bubble">{client.name}</div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .clients-gallery-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 30px 20px;
          justify-content: center;
        }

        .client-logo-box {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .client-logo-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .logo-sprite-container {
          width: 100%;
          aspect-ratio: 208 / 90;
          position: relative;
          overflow: hidden;
        }

        .logo-sprite-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.4s ease;
        }

        .client-logo-box:hover .logo-sprite-wrapper {
          transform: scale(1.05);
        }

        .logo-sprite-img {
          position: absolute;
          width: 400%;
          height: 2100%;
          max-width: none !important;
          max-height: none !important;
          filter: grayscale(0%) opacity(0.85);
          transition: filter 0.4s ease, opacity 0.4s ease;
          pointer-events: none;
        }

        .client-logo-box:hover .logo-sprite-img {
          filter: grayscale(0%) opacity(1);
        }

        .tooltip-bubble {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: #1e293b;
          color: white;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .tooltip-bubble::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background-color: #1e293b;
        }

        .client-logo-box:hover .tooltip-bubble {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-42px);
        }

        @media (max-width: 768px) {
          .clients-gallery-container {
            padding: 20px 15px;
          }
          .clients-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 25px 15px;
          }
          .client-logo-box {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}
