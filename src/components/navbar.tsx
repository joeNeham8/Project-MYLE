import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#home">MYLE</a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li>
          <a href="#features">Features</a>
          <ul className="dropdown-content">
            <li><a href="#inventory">Inventory Management</a></li>
            <li><a href="#expiration">Expiration Tracking</a></li>
            <li><a href="#recipes">Recipe Suggestions</a></li>
            <li><a href="#shopping-lists">Automated Shopping Lists</a></li>
          </ul>
        </li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#blockchain-rewards">Blockchain & Rewards</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
      <div className="nav-buttons">
        <a href="#signup" className="btn-signup">Sign Up</a>
        <a href="#login" className="btn-login">Log In</a>
      </div>
    </nav>
  );
};

export default Navbar;
