import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    { 
      title: 'Manual Data Logger Workflow', 
      description: 'Triggered manually inside n8n UI to quickly append and structure data rows into a target Google Sheet.',
      tech: ['n8n', 'Google Sheets', 'Manual Trigger'],
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows'
    },
    { 
      title: 'Scheduled Data Logger Workflow', 
      description: 'Automated background logging service running on a cron schedule to save periodic application metrics.',
      tech: ['n8n', 'Cron Schedule', 'Google Sheets'],
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows'
    },
    { 
      title: 'Joke API Data Fetcher', 
      description: 'Fetches random jokes from REST API, formats setup & punchline fields, and logs them into Google Sheets.',
      tech: ['n8n', 'REST API', 'JSON Mapping', 'Google Sheets'],
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows'
    },
    { 
      title: 'Weather Update & Email Dispatcher', 
      description: 'Automated hourly weather updates via OpenWeather API, dispatches email reports using Gmail, and logs data.',
      tech: ['n8n', 'OpenWeather API', 'Gmail', 'Google Sheets'],
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows'
    },
    { 
      title: 'Smart AI Document Classifier', 
      description: 'Monitors Google Drive inbox, extracts document text, classifies content using Google Gemini AI, and routes files.',
      tech: ['n8n', 'Google Gemini AI', 'Google Drive', 'LangChain'],
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Featured <span className="highlight">Projects</span></h1>
        <p>Some of my recent work in development & n8n automation workflows.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <div>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.description}</p>
            </div>
            
            <div>
              <div className="tags">
                {p.tech.map((t, i) => <span key={i} className="tag">{t}</span>)}
              </div>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Repository →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}