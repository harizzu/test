import React from 'react';
import './footer.css';

// Placeholder icons for Social Media. 
// Replace these 'src' strings with your actual SVG/PNG imports from your project assets.
const iconLinkedin = 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png';
const iconInstagram = 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png';
const iconFacebook = 'https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png';

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      
      {/* Top Blue Line */}
      <div className="footer-top-divider"></div>

      <div className="footer-content">
        
        {/* --- Column 1: Brand & Info --- */}
        <div className="footer-brand-col">
          <h2 className="footer-logo">
            <span className="brand-blue">zXam</span>Solution
          </h2>
          <p className="footer-tagline">Where it begins...</p>

          <div className="footer-info-block">
            <h4 className="info-title">Address:</h4>
            <p>66, Bishop Street, 10200,</p>
            <p>Georgetown, Pulau Pinang</p>
          </div>

          <div className="footer-info-block">
            <h4 className="info-title">Contact Details:</h4>
            <p>04-262 4070</p>
            <p>04-226 2039</p>
            <p className="email-link">zxamsolution@support.com</p>
          </div>
        </div>

        {/* --- Column 2: Services --- */}
        <div className="footer-link-col">
          <h3 className="col-header">Services</h3>
          <ul>
            <li>Cloud Migration</li>
            <li>Cybersecurity</li>
            <li>Data analytics</li>
            <li>Digital strategy</li>
          </ul>
        </div>

        {/* --- Column 3: Product --- */}
        <div className="footer-link-col">
          <h3 className="col-header">Product</h3>
          <ul>
            <li>Cloud Transformation</li>
            <li>Cybersecurity Shield</li>
            <li>Business Intelligence Dashboards</li>
            <li>Enterprise Strategy Roadmap</li>
          </ul>
        </div>

        {/* --- Column 4: Legal --- */}
        <div className="footer-link-col">
          <h3 className="col-header">legal</h3>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
          </ul>
        </div>

        {/* --- Social Icons (Floating Bottom Right) --- */}
        <div className="social-icons-container">
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-circle"
            aria-label="Visit our LinkedIn"
          >
            <img src={iconLinkedin} alt="LinkedIn" />
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-circle"
            aria-label="Visit our Instagram"
          >
            <img src={iconInstagram} alt="Instagram" />
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-circle"
            aria-label="Visit our Facebook"
          >
            <img src={iconFacebook} alt="Facebook" />
          </a>

        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <p>© 2025, zXamSolution.inc</p>
      </div>

    </footer>
  );
}