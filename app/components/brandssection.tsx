"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from './language-context';

const categoryLabelMap = {
  ALL: "ALL",
  ELECTRONICS: "ELECTRONICS & OFFICE AUTOMATION",
  INDUSTRY: "INDUSTRY & TECHNICAL",
  INDUSTRIAL: "INDUSTRIAL AUTOMATION",
} as const;

const categoryKeys = ["ALL", "ELECTRONICS", "INDUSTRY", "INDUSTRIAL"] as const;

const brands = [
  { name: "LG-Ericsson", image: "/image/brand/LG-Ericsson.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "lg-ericsson", aliases: ["LG-エリクソン", "LG-에릭슨", "LG-爱立信", "إل جي-إريكسون"] },
  { name: "Nitto", image: "/image/brand/Nitto.png", category: "INDUSTRY & TECHNICAL", slug: "nitto", aliases: ["日東", "ニットー", "닛토", "日东", "نيتو"] },
  { name: "Amano", image: "/image/brand/amano.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "amano", aliases: ["アマノ", "아마노", "天野", "أمانو"] },
  { name: "Brother", image: "/image/brand/brother.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "brother", aliases: ["ブラザー", "브라더", "兄弟", "براذر"] },
  { name: "CAS", image: "/image/brand/cas.png", category: "INDUSTRIAL AUTOMATION", slug: "cas", aliases: ["카스", "凯士", "كاس"] },
  { name: "Commax", image: "/image/brand/commax.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "commax", aliases: ["コマックス", "코맥스", "柯麦斯", "كوماكس"] },
  { name: "CP Plus", image: "/image/brand/cp-plus.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "cp-plus", aliases: ["CPプラス", "CP 플러스", "سي بي بلس"] },
  { name: "Dobot", image: "/image/brand/dobot-1.png", category: "INDUSTRIAL AUTOMATION", slug: "dobot", aliases: ["ドボット", "두봇", "越疆", "دوبوت"] },
  { name: "KS Tools", image: "/image/brand/ks-tools.png", category: "INDUSTRY & TECHNICAL", slug: "ks-tools", aliases: ["KSツールズ", "KS 툴스", "KS工具", "كيه إس تولز"] },
  { name: "M7", image: "/image/brand/m7.png", category: "INDUSTRY & TECHNICAL", slug: "m7", aliases: ["エムセブン", "엠세븐", "迈泊", "إم 7"] },
  { name: "Northman", image: "/image/brand/northman2.png", category: "INDUSTRY & TECHNICAL", slug: "northman", aliases: ["ノースマン", "노스맨", "诺斯曼", "نورثمان"] },
  { name: "Panasonic", image: "/image/brand/panasonic.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "panasonic", aliases: ["パナソニック", "파나소닉", "松下", "باناسونيك"] },
  { name: "Plantronics", image: "/image/brand/plantronics.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "plantronics", aliases: ["プラントロニクス", "플랜트로닉스", "缤特力", "بلانترونيكس"] },
  { name: "Polycom", image: "/image/brand/polycom.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "polycom", aliases: ["ポリコム", "폴리콤", "宝利通", "بوليكوم"] },
  { name: "Sahitel", image: "/image/brand/sahitel.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "sahitel", aliases: ["サヒテル", "사히텔", "萨希特尔", "ساهيتيل"] },
  { name: "Samsung", image: "/image/brand/samsung.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "samsung", aliases: ["サムスン", "삼성", "三星", "سامسونج"] },
  { name: "SMC", image: "/image/brand/smc.png", category: "INDUSTRIAL AUTOMATION", slug: "smc", aliases: ["에스엠씨", "إس إم سي"] },
  { name: "Tecsis", image: "/image/brand/tecsis.png", category: "INDUSTRY & TECHNICAL", slug: "tecsis", aliases: ["テクシス", "텍시스", "泰克斯", "تيكسيس"] },
  { name: "Vickers", image: "/image/brand/vickers.png", category: "INDUSTRY & TECHNICAL", slug: "vickers", aliases: ["ビッカース", "비커스", "威格士", "فيكرز"] },
  { name: "Winters", image: "/image/brand/winters-2.png", category: "INDUSTRY & TECHNICAL", slug: "winters", aliases: ["ウィンターズ", "윈터스", "温特斯", "وينترز"] },
  { name: "Wonwoo", image: "/image/brand/wonwoo.png", category: "ELECTRONICS & OFFICE AUTOMATION", slug: "wonwoo", aliases: ["ウォンウー", "원우", "元宇", "وونو"] },
  { name: "Yuken", image: "/image/brand/yuken.png", category: "INDUSTRY & TECHNICAL", slug: "yuken", aliases: ["ユーケン", "油研", "유켄", "يوكين"] },
];

export default function BrandsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryLabelMap>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredBrands, setFilteredBrands] = useState(brands);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // We create a triple-buffered list for smooth infinite looping
  const displayBrands = [...filteredBrands, ...filteredBrands, ...filteredBrands];
  const offset = filteredBrands.length;

  useEffect(() => {
    setIsSwitching(true);
    setTimeout(() => {
      let newBrands = activeCategory === "ALL"
        ? brands
        : brands.filter(brand => brand.category === categoryLabelMap[activeCategory]);
      
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        newBrands = newBrands.filter(brand => 
          brand.name.toLowerCase().includes(query) || 
          (brand.aliases && brand.aliases.some(alias => alias.toLowerCase().includes(query)))
        );
      }
      
      setFilteredBrands(newBrands);
      setActiveIndex(newBrands.length); // Start at the first item of the middle set
      setIsSwitching(false);
    }, 400);
  }, [activeCategory, searchQuery]);

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  // Silently jump back to middle set when reaching boundaries
  useEffect(() => {
    if (activeIndex < offset) {
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.transition = 'none';
        setActiveIndex(activeIndex + offset);
        setTimeout(() => {
          if (containerRef.current) containerRef.current.style.transition = '';
        }, 50);
      }, 800); // Match transition duration
    } else if (activeIndex >= offset * 2) {
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.transition = 'none';
        setActiveIndex(activeIndex - offset);
        setTimeout(() => {
          if (containerRef.current) containerRef.current.style.transition = '';
        }, 50);
      }, 800);
    }
  }, [activeIndex, offset]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="brands-section">
      {/* Interactive Tech Grid */}
      <div className="tech-grid"></div>

      {/* Dynamic Glow Background */}
      <div className="glow-orb" style={{ 
        transform: `translate(calc(-50% + ${(activeIndex % filteredBrands.length) * 20}px), -50%)` 
      }}></div>

      {/* Side Decoration Labels */}
      <div className="side-label-left">{t.brandsPage.partnerLabel}</div>
      <div className="side-label-right">{t.brandsPage.worldLabel}</div>

      <div className="brands-container">
        
        {/* Search and Category Filters */}
        <div className="controls-container">
          <div className="filter-container">
          {categoryKeys.map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {t.brandsPage.categories[cat.toLowerCase() as keyof typeof t.brandsPage.categories]}
            </button>
          ))}
          </div>

          <div className="search-container">
            <input 
              type="text" 
              className="brand-search-input" 
              placeholder="Search brand..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            />
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            
            {/* Search Suggestions Dropdown */}
            {isSearchFocused && searchQuery.trim() !== "" && (
              <div className="search-suggestions">
                {brands
                  .filter(b => {
                    const query = searchQuery.toLowerCase();
                    return b.name.toLowerCase().includes(query) || 
                           (b.aliases && b.aliases.some(alias => alias.toLowerCase().includes(query)));
                  })
                  .map((b) => (
                    <div 
                      key={b.slug} 
                      className="suggestion-item"
                      onClick={() => {
                        setSearchQuery(b.name);
                        setIsSearchFocused(false);
                      }}
                    >
                      <img src={b.image} alt={b.name} className="suggestion-img" />
                      <span>{b.name}</span>
                    </div>
                  ))}
                {brands.filter(b => {
                    const query = searchQuery.toLowerCase();
                    return b.name.toLowerCase().includes(query) || 
                           (b.aliases && b.aliases.some(alias => alias.toLowerCase().includes(query)));
                  }).length === 0 && (
                  <div className="suggestion-item no-result">No brands found</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Perspective Slider */}
        <div className="perspective-slider">
          {filteredBrands.length > 0 ? (
            <div className={`slider-track ${isSwitching ? 'switching' : ''}`} ref={containerRef} style={{ 
              transform: `translateX(calc(50% - ${activeIndex * 400 + 200}px))` 
            }}>
              {displayBrands.map((brand, index) => {
                const diff = index - activeIndex;
                const isActive = index === activeIndex;
                
                return (
                  <div 
                    key={`${brand.slug}-${index}`}
                    className={`perspective-card ${isActive ? 'active' : ''}`}
                    onClick={() => isActive ? window.location.href = `/brands/${brand.slug}` : handleCardClick(index)}
                    style={{
                      transform: `
                        scale(${isActive ? 1.2 : 0.85 - Math.abs(diff) * 0.05})
                        translateZ(${isActive ? '100px' : '-100px'})
                        rotateY(${diff * -15}deg)
                      `,
                      opacity: isActive ? 1 : 0.85 - Math.abs(diff) * 0.1,
                      filter: isActive ? 'none' : `blur(${Math.abs(diff) * 1}px)`,
                      zIndex: 100 - Math.abs(diff),
                      cursor: isActive ? 'pointer' : 'default'
                    }}
                  >
                    <div className="glass-card-inner">
                      <div className="brand-logo-container">
                        <img src={brand.image} alt={brand.name} className="brand-logo-img" />
                      </div>
                      {isActive && (
                        <div className="brand-info-overlay">
                          <h3 className="brand-name-text">{brand.name}</h3>
                          <Link href={`/brands/${brand.slug}`} className="view-detail-btn">
                            {t.brandsPage.viewDetails}
                          </Link>
                        </div>
                      )}
                      {/* Interactive Reflection */}
                      <div className="card-reflection"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-brands">{t.brandsPage.noBrands}</div>
          )}

          {/* Navigation Arrows */}
          <button className="nav-arrow prev" onClick={handlePrev}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="nav-arrow next" onClick={handleNext}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Indicator dots */}
        <div className="indicator-dots">
          {filteredBrands.map((_, i) => (
            <div 
              key={i} 
              className={`dot ${i === (activeIndex % filteredBrands.length) ? 'active' : ''}`}
              onClick={() => setActiveIndex(i + offset)}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .brands-section {
          width: 100%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 100px 0;
          overflow: hidden;
          perspective: 1500px;
          position: relative;
        }

        .tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 193, 7, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 193, 7, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 1;
          pointer-events: none;
        }

        .glow-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
          pointer-events: none;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .side-label-left, .side-label-right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-family: 'Segoe UI', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 10px;
          color: rgba(255, 193, 7, 0.15);
          white-space: nowrap;
          z-index: 1;
          pointer-events: none;
        }

        .side-label-left { left: 40px; transform-origin: left center; }
        .side-label-right { right: 40px; transform-origin: right center; }

        .brands-container {
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .controls-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          margin-bottom: 60px;
          padding: 0 24px;
        }

        .search-container {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .brand-search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 14px 20px 14px 48px;
          border-radius: 30px;
          font-family: 'Segoe UI', sans-serif;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .brand-search-input:focus {
          border-color: #ffc107;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 15px rgba(255, 193, 7, 0.2);
        }

        .brand-search-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
          transition: color 0.3s ease;
        }

        .brand-search-input:focus + .search-icon {
          color: #ffc107;
        }

        .search-suggestions {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          margin-top: 8px;
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 100;
          max-height: 300px;
          overflow-y: auto;
        }

        .suggestion-item {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          cursor: pointer;
          color: #ffffff;
          font-family: 'Segoe UI', sans-serif;
          font-size: 15px;
          transition: background 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .suggestion-item:last-child {
          border-bottom: none;
        }

        .suggestion-item:hover {
          background: rgba(255, 193, 7, 0.15);
          color: #ffc107;
        }

        .suggestion-item.no-result {
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
          cursor: default;
        }

        .suggestion-item.no-result:hover {
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
        }

        .suggestion-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          margin-right: 15px;
          background: #fff;
          border-radius: 6px;
          padding: 4px;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .filter-btn {
          background: none;
          border: 1px solid rgba(255, 193, 7, 0.3);
          font-family: 'Segoe UI', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: #ffc107;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.7;
          padding: 10px 20px;
          border-radius: 30px;
        }

        .filter-btn:hover {
          opacity: 1;
          color: #ffc107; /* Yellow on hover */
        }

        .filter-btn.active {
          opacity: 1;
          color: #000;
          background: #ffc107;
          box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
        }

        .perspective-slider {
          height: 600px;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-track {
          display: flex;
          align-items: center;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
        }

        .slider-track.switching {
          opacity: 0;
          transform: translateX(calc(50% - ${activeIndex * 400 + 200}px)) scale(0.9) !important;
        }

        .perspective-card {
          width: 400px;
          height: 400px;
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glass-card-inner {
          width: 320px;
          height: 320px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        .card-reflection {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 45%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.4) 55%,
            transparent 100%
          );
          transform: rotate(25deg);
          transition: all 0.5s ease;
          pointer-events: none;
          opacity: 0;
        }

        .perspective-card:hover .card-reflection {
          top: -50%;
          left: -50%;
          opacity: 1;
        }

        .perspective-card.active .glass-card-inner {
          background: #ffffff;
          border-color: #ffc107;
          box-shadow: 0 40px 80px rgba(255, 193, 7, 0.25);
        }

        .brand-logo-container {
          width: 100%;
          height: 80%; /* Increased for better balance */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease;
          background: transparent;
          padding-bottom: 40px; /* Space for floating text */
        }

        .perspective-card.active .brand-logo-container {
          transform: scale(1.1);
        }

        .brand-logo-img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }

        .brand-info-overlay {
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          opacity: 0;
          animation: fadeIn 0.5s forwards 0.3s;
          z-index: 2;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .brand-name-text {
          font-family: 'Segoe UI', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #ffc107;
          margin-bottom: 8px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .view-detail-btn {
          padding: 8px 20px;
          background: rgba(0, 0, 0, 0.8);
          color: #ffc107;
          border-radius: 50px;
          font-weight: 800;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .view-detail-btn:hover {
          transform: scale(1.05);
          background: #ffc107;
          color: #000;
        }

        .nav-arrow {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          transition: none;
        }

        .nav-arrow:hover {
          opacity: 0;
          cursor: pointer;
        }

        .prev { left: 0; }
        .next { right: 0; }

        .indicator-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #ffc107;
          width: 32px;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
        }

        .no-brands {
          color: #ffc107;
          font-family: 'Segoe UI', sans-serif;
          font-size: 20px;
          font-weight: 700;
          text-align: center;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .perspective-card { width: 300px; }
          .slider-track { 
            transform: translateX(calc(50% - ${activeIndex * 300 + 150}px)) !important; 
          }
          .glass-card-inner { width: 260px; height: 260px; }
        }

        @media (max-width: 768px) {
          .nav-arrow { width: 20%; height: 100%; }
          .prev { left: 0; }
          .next { right: 0; }
          .perspective-card { width: 250px; }
          .slider-track { 
            transform: translateX(calc(50% - ${activeIndex * 250 + 125}px)) !important; 
          }
          .filter-container { margin-bottom: 40px; }
          .perspective-slider { height: 500px; }
        }
      `}</style>
    </section>
  );
}

