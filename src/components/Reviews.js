import React, { useState } from 'react';
import './reviews.css';

// 1. Define your 3 Reviews Data here
const reviewsData = [
  {
    id: 1,
    text: "We needed a robust cybersecurity audit, and zxamSolution delivered. We now feel completely secure against modern threats. Highly professional team.",
    author: "Nike Qeb",
    role: "CTO - FinGuard Group"
  },
  {
    id: 2,
    text: "Migrating our legacy systems to the cloud seemed impossible until we brought in this team. Zero downtime and our costs dropped by 30%.",
    author: "Hafe Zuden",
    role: "Director - RetailX Logistics"
  },
  {
    id: 3,
    text: "The data analytics dashboard they built transformed how our board makes decisions. They are true experts in digital transformation.",
    author: "Amy Mee",
    role: "CEO - TechFlow Innovations"
  }
];

export default function Reviews() {
  // 2. State to track which review is in the center (0, 1, or 2)
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Helper functions to calculate indices
  const getNextIndex = (current) => (current === reviewsData.length - 1 ? 0 : current + 1);
  const getPrevIndex = (current) => (current === 0 ? reviewsData.length - 1 : current - 1);

  // Calculate which data goes where
  const centerReview = reviewsData[activeIndex];

  // Handlers for clicking
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex(getPrevIndex(activeIndex));
  };

  const handleNext = () => {
    setActiveIndex(getNextIndex(activeIndex));
  };

  return (
    <section className="reviews-section">
      
      {/* Background Perspective Grid */}
      <div className="reviews-bg-grid"></div>

      <div className="reviews-container">
        
        {/* Header Section */}
        <div className="reviews-header">
          <div className="review-label-box">OUR REACH</div>
          <h2 className="reviews-headline">
            What <span className="blue-text">people</span> say about us!
          </h2>
          <p className="reviews-sub">
            Let’s hear people’s opinions about our company.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="carousel-wrapper">
          
          {/* LEFT CARD (Clickable to go Previous) */}
          <div className="review-card faded left-card" onClick={handlePrev}>
             {/* Optional: Show text inside faded card if you want, or leave empty */}
          </div>

          {/* CENTER ACTIVE CARD */}
          <div className="review-card active-card">
            <div className="quote-mark">“</div>
            <p className="review-text">
              {centerReview.text}
            </p>
            <div className="review-author-box">
              <p className="author-name">{centerReview.author}</p>
              <p className="author-role">{centerReview.role}</p>
            </div>
          </div>

          {/* RIGHT CARD (Clickable to go Next) */}
          <div className="review-card faded right-card" onClick={handleNext}>
          </div>

        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
            {reviewsData.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
        </div>

      </div>
    </section>
  );
}