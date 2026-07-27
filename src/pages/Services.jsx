import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    { title: 'Frontend Development', desc: 'Building responsive SPA applications in React.js.' },
    { title: 'n8n Automation', desc: 'Custom automated workflows for backend data processing.' },
    { title: 'API & JSON Integration', desc: 'Connecting web forms to webhook endpoints seamlessly.' },
    { title: 'Responsive Design', desc: 'Ensuring flawless UI across mobile, tablet, and desktop.' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My <span className="highlight">Services</span></h1>
        <p>High quality web development and automation solutions.</p>
      </div>

      <div className="services-grid">
        {services.map((s, idx) => (
          <div key={idx} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}