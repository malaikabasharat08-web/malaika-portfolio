import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About <span className="highlight">Me</span></h1>
        <p>Passionate Full-Stack Developer & Workflow Specialist.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h2>Who I Am</h2>
          <p>I specialize in building interactive web apps and connecting complex APIs with automated backends.</p>
          <div className="stats-row">
            <div className="stat"><h3>15+</h3><p>Projects</p></div>
            <div className="stat"><h3>100%</h3><p>Commitment</p></div>
          </div>
        </div>

        <div className="about-card">
          <h2>Experience</h2>
          <div className="timeline-item">
            <h4>React & Frontend Development</h4>
            <p>Building responsive web solutions with clean code structure.</p>
          </div>
          <div className="timeline-item">
            <h4>n8n & Workflow Automation</h4>
            <p>Extracting, processing, and integrating JSON datasets automatically.</p>
          </div>
        </div>
      </div>
    </div>
  );
}