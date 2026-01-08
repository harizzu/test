import React from 'react';
import './hero.css';
import imgArrow from './assets/arrowgrowth.png';
import videoIntro from './assets/CAT201 SLIDE INTRODUCTION (Video).mp4';
import imgGoogle from './assets/google.png';
import imgDell from './assets/dell.png';
import imgMicrosoft from './assets/microsoft.png'; 

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      
      {/* CSS-Only Background Grid */}
      <div className="hero-bg-grid"></div>

      <div className="hero-container">
        
        {/* LEFT SIDE CONTENT */}
        <div className="hero-content">
          
          {/* Badge */}
          <div className="growth-badge">
            <span className="growth-text">High Growth</span>
            <img src={imgArrow} alt="arrow" className="growth-icon" />
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Seamless <span className="script-text">Solutions</span> for <br />
            your IT <span className="blue-text">Needs.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Don’t Worry, We Won’t CTRL+ALT+DEL Your Problems!
          </p>

          {/* Button */}
          <button className="btn-hero-services"><a href="#services">Services</a></button>

          {/* Partners */}
          <div className="hero-partners">
            <div className="partners-label">
              <span>Our Partners</span>
              <div className="partners-line"></div>
            </div>
            <div className="partners-logos">
              <img src={imgMicrosoft} alt="Microsoft" className="partner-logo ms-logo" />
              <img src={imgDell} alt="Dell" className="partner-logo dell-logo" />
              <img src={imgGoogle} alt="Google" className="partner-logo google-logo" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE VISUALS */}
        <div className="hero-visuals">
          <div className="big-circle-container">
             <div className="outer-faded-ring"></div>
             <div className="inner-solid-circle">
               <video src={videoIntro} alt="CAT201 Introduction Video" className="zxam-logo" autoPlay loop muted controls style={{ borderRadius: '12px' }} />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}