
import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({});
  
  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      tempErrors.company = 'Company name is required';
      isValid = false;
    }
    
    if (!formData.licenseType) {
      tempErrors.licenseType = 'Please select a license type';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the data to your backend here
      console.log('Form submitted:', formData);
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get Started Today</h2>
          <p>Fill out the form below to get a free valuation for your unused software licenses</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-title">Ready to convert your unused licenses to cash?</h3>
            <p className="contact-description">
              Our team of experts is ready to help you maximize the value of your unused software licenses. 
              Fill out the form and we'll get back to you within 24 hours with a free valuation.
            </p>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">info@softsell.com</div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">+1 (555) 123-4567</div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🏢</div>
              <div className="contact-text">123 Tech Park, San Francisco, CA 94105</div>
            </div>
          </div>
          
          <div className="contact-form">
            {isSubmitted ? (
              <div className="form-success">
                <h3 style={{ color: 'var(--success)' }}>Thank you for your submission!</h3>
                <p>We'll get back to you with a valuation within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'error' : ''}`}
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'error' : ''}`}
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={`form-control ${errors.company ? 'error' : ''}`}
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {errors.company && <div className="error-message">{errors.company}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="licenseType" className="form-label">License Type</label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    className={`form-control ${errors.licenseType ? 'error' : ''}`}
                    value={formData.licenseType}
                    onChange={handleChange}
                  >
                    <option value="">Select license type</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="saas">SaaS Subscriptions</option>
                    <option value="desktop">Desktop Applications</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.licenseType && <div className="error-message">{errors.licenseType}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-control ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us about the software licenses you'd like to sell"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message}</div>}
                </div>
                
                <button type="submit" className="btn btn-primary form-submit" style={{
                    backgroundColor: '#1877f2',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    marginRight: '1rem'
                }}>
                  Get Free Valuation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
