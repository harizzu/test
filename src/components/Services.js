import React from 'react';
import './services.css';

import iconShield from "./assets/shield.png";


const iconCloud = 'https://img.icons8.com/ios/100/003366/cloud.png';
const iconChart = 'https://img.icons8.com/ios/100/003366/graph.png';
const iconHandshake = 'https://img.icons8.com/ios/100/003366/handshake.png';

export default function Services() {
  return (
    <section id="services" className="services-section">
      
      {/* Background Elements */}
      <div className="services-bg-grid"></div>
      
      {/* Left Side Big Circle */}
      <div className="service-circle-container">
        <div className="service-outer-ring"></div>
        <div className="service-inner-circle"></div>
      </div>

      <div className="services-container">
        
        {/* Header Section */}
        <div className="services-header">
          <div className="service-label-box">
            OUR SERVICES
          </div>
          <h2 className="services-headline">
            We extend our <span className="blue-text">services</span> <br />
            to the <span className="script-text">wide</span> variety.
          </h2>
          {/* The decorative line under the header */}
          <div className="header-line"></div>
        </div>

        {/* Services Grid */}
        <div className="cards-grid">
          
          {/* Card 1 */}
          <div className="service-card">
            <div className="card-icon">
              <img src={iconCloud} alt="Cloud" />
            </div>
            <h3>Cloud Migration</h3>
            <p>Seamless transition to AWS and Azure infrastructures for maximum scalability.</p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="card-icon">
              <img src={iconShield} alt="Security" />
            </div>
            <h3>Cybersecurity</h3>
            <p>Proactive threat detection and vulnerability assessments to secure your digital assets.</p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="card-icon">
              <img src={iconChart} alt="Data" />
            </div>
            <h3>Data Analytics</h3>
            <p>Transforming raw data into actionable insights with PowerBI and custom dashboards.</p>
          </div>

          {/* Card 4 (Centered Bottom) */}
          <div className="service-card bottom-card">
            <div className="card-icon">
              <img src={iconHandshake} alt="Strategy" />
            </div>
            <h3>Digital Strategy</h3>
            <p>Long-term IT roadmaps to align technology investments with business goals.</p>
          </div>

        </div>

        {/* Decorative bottom line on the right */}
        <div className="bottom-deco-line"></div>

      </div>
    </section>
  );
}