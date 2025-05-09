
import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was remarkably smooth, and the valuation exceeded our expectations. I highly recommend their service to any IT director looking to optimize software costs.",
      name: "Michael Chen",
      position: "CTO",
      company: "Datastream Solutions",
      avatar: "https://placehold.co/100x100/e2e8f0/64748b?text=MC"
    },
    {
      id: 2,
      content: "As a growing startup, we often end up with excess licenses after team changes. SoftSell has become our go-to solution for recovering costs. Their platform is intuitive, secure, and their team is incredibly responsive. The valuation and payment process exceeded our expectations.",
      name: "Sarah Johnson",
      position: "VP of Operations",
      company: "NexTech Innovators",
      avatar: "https://placehold.co/100x100/e2e8f0/64748b?text=SJ"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Customer Testimonials</h2>
          <p>Don't just take our word for it - hear from businesses that have successfully sold licenses through SoftSell</p>
        </div>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.id}>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
