
import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: '📁',
      title: 'Upload License',
      description: 'Securely upload your unused software license details through our easy-to-use portal.'
    },
    {
      id: 2,
      icon: '💰',
      title: 'Get Valuation',
      description: 'Our system provides an instant market-based valuation for your software licenses.'
    },
    {
      id: 3,
      icon: '🎉',
      title: 'Get Paid',
      description: 'Accept our competitive offer and receive payment within 48 hours of verification.'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Our simple 3-step process makes selling unused software licenses quick and hassle-free</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step) => (
            <div className="step" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
