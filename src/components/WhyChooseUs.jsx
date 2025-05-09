
import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: '🔒',
      title: 'Secure Transactions',
      description: 'Our platform uses bank-level encryption to ensure your license data and financial transactions are always secure.'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Fast Payouts',
      description: 'Receive payment within 48 hours of license verification, among the fastest in the industry.'
    },
    {
      id: 3,
      icon: '💹',
      title: 'Competitive Prices',
      description: 'Our marketplace algorithm ensures you get the best possible value for your unused software licenses.'
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Compliance Guaranteed',
      description: 'We handle all legal aspects of license transfers to ensure full compliance with vendor requirements.'
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose SoftSell</h2>
          <p>We're the trusted partner for businesses looking to maximize value from unused software licenses</p>
        </div>
        
        <div className="features-container">
          {features.map((feature) => (
            <div className="feature" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
