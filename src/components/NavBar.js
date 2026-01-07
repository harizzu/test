import React, { useState } from 'react';
import './NavBar.css';

// Ideally, import these from your assets folder
import logoImg from './assets/zxmlogo.png';

// Simple SVG Icons for the Hamburger/Close buttons
const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function NavBar() {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      
      {/* LEFT SIDE: LOGO */}
      <div className="navbar-left">
        <div className="logo-box">
          <img src={logoImg} alt="Logo" className="logo-image" />
        </div>
        <div className="brand-name">
          <span className="brand-blue">zXam</span>Solution
        </div>
      </div>

      {/* MOBILE HAMBURGER BUTTON (Visible only on mobile) */}
      <div className="hamburger-btn" onClick={toggleMenu}>
        {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>

      {/* CENTER: LINKS */}
      {/* We add the 'mobile-open' class if the state is true */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        
        <li className={`nav-item ${activeNav === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
          <a href="#home">Home</a>
          <img src="https://img.icons8.com/ios/50/033660/home--v1.png" alt="home" className="nav-icon" />
        </li>

        <li className={`nav-item ${activeNav === 'services' ? 'active' : ''}`} onClick={() => handleNavClick('services')}>
          <a href="#services">Services</a>
          <img src="https://img.icons8.com/ios/50/666666/headset.png" alt="services" className="nav-icon" />
        </li>

        <li className={`nav-item ${activeNav === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>
          <a href="#about">About us</a>
          <img src="https://img.icons8.com/ios/50/666666/city.png" alt="about" className="nav-icon" />
        </li>

        <li className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
          <a href="#contact">Contact</a>
          <img src="https://img.icons8.com/ios/50/666666/user.png" alt="contact" className="nav-icon" />
        </li>

      </ul>
    </nav>
  );
}