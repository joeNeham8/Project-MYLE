import React from 'react';
import './features.css';

const feature: React.FC = () => {
  return (
    <section id="features-h">
      <h2>Feature Highlights</h2>
      <div className="feature-item">
        <h3>Inventory Management</h3>
        <p>Track what's in stock and never overbuy.</p>
      </div>
      <div className="feature-item">
        <h3>Expiration Alerts</h3>
        <p>Prevent food waste by staying notified.</p>
      </div>
      <div className="feature-item">
        <h3>Recipe Suggestions</h3>
        <p>Make meals from ingredients you already have.</p>
      </div>
    </section>
  );
};

export default feature;
