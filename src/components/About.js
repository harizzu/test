import React from 'react';
import './about.css';

import characterImg from "./assets/peopleGlasses.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      
      {/* Background Perspective Grid */}
      <div className="about-bg-grid"></div>

      {/* Top Right Decorative Circles */}
      <div className="deco-circle-group">
        <div className="deco-circle outer"></div>
        <div className="deco-circle inner"></div>
      </div>

      <div className="about-container">
        
        {/* --- Header Section --- */}
        <div className="about-header">
          <div className="company-label">Company</div>
          <h1 className="about-title">
            <span className="script-text">Who</span> We Are?
          </h1>
          
          {/* Main Description Box */}
          <div className="description-box">
            <p>
              <strong>zxamSolution</strong> is a premier IT consultancy firm dedicated to bridging the gap between complex technology and business success. We don't just fix IT problems; we design digital ecosystems that allow enterprises to scale, innovate, and secure their future. With a focus on Cloud Architecture, Cybersecurity, and Data Strategy, we are the partners behind the region's most successful digital transformations.
            </p>
          </div>
        </div>

        {/* --- Mission & Vision Section --- */}
        <div className="mission-vision-grid">
          
          {/* Mission Column */}
          <div className="mv-col">
            <h2 className="mv-title">
              Our <span className="script-text">Mission</span>
            </h2>
            <div className="mv-card">
              <p>
                To empower businesses by providing secure, scalable, and innovative technology infrastructure that drives operational excellence and sustainable growth.
              </p>
            </div>
          </div>

          {/* Vision Column */}
          <div className="mv-col">
            <h2 className="mv-title">
              Our <span className="script-text">Vision</span>
            </h2>
            <div className="mv-card">
              <p>
                To be the recognized leader in enterprise digital transformation across Southeast Asia by 2030, setting the industry standard for cybersecurity and cloud innovation.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Left Character Image */}
      <div className="character-container">
        {/* Replace src with your actual cut-out image from Figma */}
        <img src={characterImg} alt="Team Character" className="character-img" />
      </div>

    </section>
  );
}