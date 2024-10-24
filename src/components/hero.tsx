import React from 'react';
import './hero.css'; 


const hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Smart Grocery Management Made Easy</h1>
        <p className="subtitle">Automate your kitchen. Save time. Reduce waste.</p>
        <button className="cta-button" onClick={() => alert('Redirecting to Sign-up/Demo')}>
          Get Started
        </button>
      </div>
      
      <div className="hero-image">
        <img src="#" alt="MYLE Dashboard" />
      </div>
    </section>
  );
};

export default hero;
