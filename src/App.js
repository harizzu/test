// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <About />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;