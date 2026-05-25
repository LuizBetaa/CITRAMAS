"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import { useLanguage } from "../components/language-context";

export default function ContactPage() {
  const { t } = useLanguage();

  const locations = [
    {
      title: t.contact.headOffice,
      address: "Jl. Pinangsia Timur No. 4BB, Jakarta, 11110",
      tel: "(021) 6251611",
      fax: "(021) 6243546"
    },
    {
      title: t.contact.branch,
      address: "Glodok Jaya Lt. Dasar Blok D 57\nJl. Hayam Wuruk No. 100, Jakarta, 11180",
      tel: "(021) 6012680",
      fax: "(021) 6399671"
    },
    {
      title: t.contact.workshop,
      address: "Kawasan Industri Jababeka I\nJl. Jababeka VII Blok K/3A Cikarang - Bekasi",
      tel: "(021) 89834064",
      fax: "(021) 89834065"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || t.contact.errorMsg);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(t.contact.errorMsg);
    }
  };

  return (
    <main className="contact-page" data-nav-theme="light">
      <div className="contact-bg-wrapper" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
        <Image 
          src="/image/gedung.jpg" 
          alt="Citramas Office Building" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
          priority
        />
        <div className="contact-bg-overlay"></div>
      </div>
      <Navbar />
      
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h1 className="main-title">{t.contact.title}</h1>
            <p className="main-subtitle">{t.contact.subtitle}</p>
          </div>

          <div className="bento-grid">
            
            {/* Bento Box 1: Digital Contact (Tall, Dark) */}
            <div className="bento-box box-dark bento-main">
              <div className="box-content-flex">
                <div>
                  <h2 className="bento-heading">{t.contact.getInTouch}</h2>
                  <p className="bento-desc">
                    {t.contact.getInTouchDesc}
                  </p>
                </div>
                
                <div className="digital-links">
                  <div className="link-item">
                    <span className="link-label">{t.contact.email}</span>
                    <a href="mailto:salesadmin@citramasteknik.com" className="link-text">
                      salesadmin@citramasteknik.com
                    </a>
                  </div>
                  <div className="link-item mt-4">
                    <span className="link-label">{t.contact.website}</span>
                    <a href="https://www.citramasalfasejahtera.com" target="_blank" rel="noopener noreferrer" className="link-text">
                      www.citramasalfasejahtera.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="accent-circle"></div>
            </div>

            {/* Bento Box 2: Head Office (Wide) */}
            <div className="bento-box box-light bento-wide">
              <div className="bento-header">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3 className="location-title">{locations[0].title}</h3>
              </div>
              <div className="location-body">
                <p className="address-text">{locations[0].address}</p>
                <div className="contact-details">
                  <div className="detail-pill"><strong>{t.contact.tel}:</strong> {locations[0].tel}</div>
                  <div className="detail-pill"><strong>{t.contact.fax}:</strong> {locations[0].fax}</div>
                </div>
              </div>
            </div>

            {/* Bento Box 3: Branch (Standard) */}
            <div className="bento-box box-light bento-standard">
              <div className="bento-header">
                <h3 className="location-title">{locations[1].title}</h3>
              </div>
              <div className="location-body">
                <p className="address-text">
                  {locations[1].address.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
                <div className="contact-details-col">
                  <div className="detail-line"><span>{t.contact.tel}</span> {locations[1].tel}</div>
                  <div className="detail-line"><span>{t.contact.fax}</span> {locations[1].fax}</div>
                </div>
              </div>
            </div>

            {/* Bento Box 4: Workshop (Standard) */}
            <div className="bento-box box-light bento-standard">
              <div className="bento-header">
                <h3 className="location-title">{locations[2].title}</h3>
              </div>
              <div className="location-body">
                <p className="address-text">
                  {locations[2].address.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
                <div className="contact-details-col">
                  <div className="detail-line"><span>{t.contact.tel}</span> {locations[2].tel}</div>
                  <div className="detail-line"><span>{t.contact.fax}</span> {locations[2].fax}</div>
                </div>
              </div>
            </div>

            {/* Bento Box 5: Contact Form (Full Width) */}
            <div className="bento-box box-light bento-full">
              <div className="bento-header mb-6">
                <div className="icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="location-title">{t.contact.sendMessage}</h3>
              </div>

              {status === "success" && (
                <div className="alert-success">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>{t.contact.successMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="alert-error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t.contact.formName}</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.contact.formNamePlaceholder} 
                      required 
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t.contact.formEmail}</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.contact.formEmailPlaceholder} 
                      required 
                      disabled={status === "loading"}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t.contact.formSubject}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t.contact.formSubjectPlaceholder} 
                    required 
                    disabled={status === "loading"}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t.contact.formMessage}</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.formMessagePlaceholder} 
                    required
                    disabled={status === "loading"}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`submit-btn ${status === "loading" ? "loading" : ""}`}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? t.contact.btnSending : t.contact.btnSend}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: #fafafa;
          color: #111111;
          min-height: 100vh;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .contact-bg-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .contact-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(245, 245, 245, 0.5);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          z-index: 1;
        }

        .contact-section {
          position: relative;
          z-index: 2;
          padding-top: 160px;
          padding-bottom: 120px;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .main-title {
          font-size: 56px;
          font-weight: 700;
          letter-spacing: -1px;
          margin: 0 0 15px 0;
          color: #1a1a1a;
        }

        .text-accent {
          color: #ffc107;
        }

        .main-subtitle {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Bento Grid */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto auto;
          gap: 24px;
        }

        .bento-box {
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .bento-box:hover {
          transform: translateY(-5px);
        }

        /* Specific Grid Placements */
        .bento-main {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
        }

        .bento-wide {
          grid-column: 2 / 4;
          grid-row: 1 / 2;
        }

        .bento-standard {
          /* Auto placement for remaining slots */
        }

        .bento-full {
          grid-column: 1 / 4;
        }

        .mb-6 {
          margin-bottom: 24px !important;
        }

        /* Box Styles */
        .box-dark {
          background: rgba(17, 17, 17, 0.7);
          color: #ffffff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .box-light {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .box-light:hover {
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          border-color: rgba(255, 193, 7, 0.5);
          background: rgba(255, 255, 255, 0.75);
        }

        /* Content inside Main Box */
        .box-content-flex {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          z-index: 2;
          position: relative;
        }

        .bento-heading {
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 15px 0;
          line-height: 1.2;
        }

        .bento-desc {
          color: #a0a0a0;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .digital-links {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .link-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .link-label {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #ffc107;
          font-weight: 700;
        }

        .link-text {
          font-size: 20px;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
          word-break: break-all;
        }

        .link-text:hover {
          color: #ffc107;
        }

        .accent-circle {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,193,7,0.15) 0%, rgba(255,193,7,0) 70%);
          border-radius: 50%;
          z-index: 1;
        }

        /* Content inside Light Boxes */
        .bento-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: #fff9e6;
          color: #ffc107;
          border-radius: 12px;
        }

        .location-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .address-text {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 30px;
        }

        .contact-details {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .detail-pill {
          background: #f4f5f7;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 14px;
          color: #333;
        }

        .contact-details-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px dashed #eaeaea;
          font-size: 15px;
          color: #111;
          font-weight: 500;
        }

        .detail-line:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .detail-line span {
          color: #888;
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
        }

        /* Contact Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 16px 20px;
          background: #f9f9f9;
          border: 1px solid #eaeaea;
          border-radius: 12px;
          font-family: inherit;
          font-size: 15px;
          color: #111;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-group input::placeholder, .form-group textarea::placeholder {
          color: #999;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: #ffc107;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(255, 193, 7, 0.15);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          align-self: flex-start;
          background: #111;
          color: #fff;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          padding: 16px 40px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .submit-btn:hover:not(:disabled) {
          background: #ffc107;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 193, 7, 0.2);
        }

        .submit-btn:disabled {
          background: #e0e0e0;
          color: #888;
          cursor: not-allowed;
          box-shadow: none;
        }

        .alert-success, .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 24px;
          font-size: 14px;
          font-weight: 500;
        }

        .alert-success {
          background: rgba(46, 213, 115, 0.1);
          color: #2ed573;
          border: 1px solid rgba(46, 213, 115, 0.2);
        }

        .alert-error {
          background: rgba(255, 71, 87, 0.1);
          color: #ff4757;
          border: 1px solid rgba(255, 71, 87, 0.2);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-main {
            grid-column: 1 / 3;
            grid-row: auto;
          }
          .bento-wide {
            grid-column: 1 / 3;
          }
          .bento-full {
            grid-column: 1 / 3;
          }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-main, .bento-wide, .bento-standard, .bento-full {
            grid-column: 1 / -1;
          }
          .main-title {
            font-size: 40px;
          }
          .bento-heading {
            font-size: 32px;
          }
          .bento-box {
            padding: 30px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}

