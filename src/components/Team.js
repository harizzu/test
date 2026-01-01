import React from 'react';
import './team.css';

import imgMember1 from "./assets/irham.png";
import imgMember2 from "./assets/hamimi.png";
import imgMember3 from "./assets/naqqib.png";
import imgMember4 from "./assets/hafiz.png";

export default function Team() {
  return (
    <section id="team" className="team-section">
      
      {/* Background Perspective Grid */}
      <div className="team-bg-grid"></div>

      {/* Decorations */}
      <div className="team-deco-circle top-left">
        <div className="blue-ring"></div>
        <div className="blue-fill"></div>
      </div>
      
      <div className="team-deco-circle bottom-left">
        <div className="blue-ring"></div>
        <div className="blue-fill"></div>
      </div>

      <div className="team-container">
        
        {/* --- Header Section --- */}
        <div className="team-header">
          <div className="team-label">Our Team</div>
          <h1 className="team-title">
            Meet The <span className="script-text">Experts</span>
          </h1>
          <p className="team-description">
            Our team comprises industry-certified professionals with decades of combined experience in cloud architecture, cybersecurity, and digital strategy. We are dedicated to guiding your business through every step of its digital transformation.
          </p>
        </div>

        {/* --- ROW 1: Leaders --- */}
        <div className="team-row">
          
          {/* Member 1: Muhammad Irham */}
          <div className="expert-card">
            <div className="image-frame">
              <img src={imgMember1} alt="Muhammad Irham bin Zainal" />
            </div>
            <div className="text-frame">
              <h3 className="expert-role">Managing Director & Principal Consultant</h3>
              <p className="expert-bio">
                With over 10 years of experience in IT strategy, <strong>Muhammad Irham bin Zainal</strong> leads the firm’s vision, helping Fortune 500 clients align their complex technology infrastructure with long-term business goals.
              </p>
            </div>
          </div>

          <div className="vertical-divider"></div>

          {/* Member 2: Hamimi Syakir */}
          <div className="expert-card">
            <div className="image-frame">
              <img src={imgMember2} alt="Hamimi Syakir bin Amir" />
            </div>
            <div className="text-frame">
              <h3 className="expert-role">Senior Cloud Architect</h3>
              <p className="expert-bio">
                A certified AWS and Azure solutions expert. <strong>Hamimi Syakir bin Amir</strong> specializes in designing scalable cloud environments and migrating legacy systems with zero downtime for enterprise clients.
              </p>
            </div>
          </div>
        </div>

        {/* --- ROW 2: Specialists --- */}
        <div className="team-row spacer-top">
          
          {/* Member 3: Muhammad Naqqib */}
          <div className="expert-card">
            <div className="image-frame">
              <img src={imgMember3} alt="Muhammad Naqqib Bin Radzuan" />
            </div>
            <div className="text-frame">
              <h3 className="expert-role">Lead Cybersecurity Analyst</h3>
              <p className="expert-bio">
                Dedicated to protecting digital assets, <strong>Muhammad Naqqib Bin Radzuan</strong> oversees comprehensive vulnerability assessments and implements military-grade security protocols to ensure ISO 27001 compliance.
              </p>
            </div>
          </div>

          <div className="vertical-divider"></div>

          {/* Member 4: Muhammad Hafizuddin */}
          <div className="expert-card">
            <div className="image-frame">
              <img src={imgMember4} alt="Muhammad Hafizuddin" />
            </div>
            <div className="text-frame">
              <h3 className="expert-role">Head of Data & Business Intelligence</h3>
              <p className="expert-bio">
                An expert in transforming raw corporate data into actionable insights. <strong>Muhammad Hafizuddin bin Muhamad Husni</strong> builds custom dashboard solutions that help C-level executives make smarter, data-driven decisions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}