import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Get in <span className="highlight">Touch</span></h1>
        <p>Feel free to reach out for collaborations.</p>
      </div>

      <div className="contact-box">
        {sent ? (
          <div className="sent-msg">Message sent successfully! 🎉</div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              rows="5"
              placeholder="Message"
              required
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}