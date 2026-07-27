import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    { title: 'Google Sheets to JSON Workflow', tech: ['n8n', 'JavaScript', 'APIs'] },
    { title: 'React Portfolio App', tech: ['React.js', 'Vite', 'CSS3'] },
    { title: 'Automated Form Backend', tech: ['HTML/CSS', 'Webhooks', 'n8n'] }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Featured <span className="highlight">Projects</span></h1>
        <p>Some of my recent work in development & automation.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <h3>{p.title}</h3>
            <div className="tags">
              {p.tech.map((t, i) => <span key={i} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}