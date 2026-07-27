import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'HTML5 & CSS3', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'n8n Automation', category: 'Workflow' },
    { name: 'Git & GitHub', category: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <div className="home-container">
      <section className="hero-section">
        <span className="badge">Welcome to my Portfolio</span>
        <h1>Hi, I'm a <span className="highlight">Full-Stack & Automation</span> Developer</h1>
        <p>I build modern web applications and automated workflows using React, JavaScript, and n8n.</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>
      </section>

      <section className="skills-section">
        <h2>Technical Expertise</h2>
        <div className="filter-buttons">
          {['All', 'Frontend', 'Backend', 'Workflow', 'Tools'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <h3>{skill.name}</h3>
              <span className="skill-badge">{skill.category}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}