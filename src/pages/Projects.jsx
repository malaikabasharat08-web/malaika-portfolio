import React from 'react';
import './Projects.css';

export default function Projects() {
  const n8nWorkflows = [
    { 
      category: 'N8N + MANUAL TRIGGER',
      title: 'Manual Data Logger Workflow', 
      description: 'Appends custom data rows into a target Google Sheet on manual execution.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/01-manual%20trigger%20to%20save%20data%20in%20sheet',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/01-manual%20trigger%20to%20save%20data%20in%20sheet'
    },
    { 
      category: 'N8N + CRON AUTOMATION',
      title: 'Schedule Trigger Workflow', 
      description: 'Time-based automated triggers executing scheduled jobs without manual input.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/02-schedule%20trigger',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/02-schedule%20trigger'
    },
    { 
      category: 'N8N + API INTEGRATION',
      title: 'Joke API Workflow', 
      description: 'Automated workflow fetching external joke APIs and processing data payloads.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/03-joke%20api%20sheet',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/03-joke%20api%20sheet'
    },
    { 
      category: 'N8N + EMAIL & WEATHER',
      title: 'Weather & Email Dispatcher', 
      description: 'Fetches weather updates via OpenWeather API and dispatches email reports.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/04-weather%20update',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/04-weather%20update'
    },
    { 
      category: 'N8N + AI & DRIVE',
      title: 'Smart Document Classifier', 
      description: 'Monitors Google Drive, classifies documents using Gemini AI, and routes files automatically.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/05-smart%20document%20classifier',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/05-smart%20document%20classifier'
    },
    { 
      category: 'N8N + BUFFER + FACEBOOK',
      title: 'Simple Facebook Post Workflow', 
      description: 'Automated workflow that creates and publishes posts to Facebook using Buffer GraphQL API via HTTP requests.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/05-simple%20facebook%20post',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/05-simple%20facebook%20post'
    },
    { 
      category: 'N8N + API + GOOGLE SHEETS',
      title: 'Exchange Rate Tracker (USD to PKR)', 
      description: 'Fetches live currency rates from ExchangeRate API, filters dynamic conditions, and appends PKR rates to Google Sheets.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/06-exchange%20rate',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/06-exchange%20rate'
    },
    { 
      category: 'N8N + AI (GROQ) + AUTOMATION',
      title: 'Daily AI Facebook Auto Post', 
      description: 'Scheduled daily workflow using Groq Llama 3.3 AI to generate engaging posts, publish via Buffer, and log status to Google Sheets.',
      github: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/07-daily%20facebook%20auto%20post',
      demo: 'https://github.com/malaikabasharat08-web/n8n-automation-workflows/tree/main/07-daily%20facebook%20auto%20post'
    }
  ];

  return (
    <div className="projects-page-wrapper">
      <div className="page-container">
        <h1 className="main-title">My n8n Automation Workflows</h1>

        <div className="projects-grid">
          {n8nWorkflows.map((workflow, idx) => (
            <div key={idx} className="project-card">
              <div className="card-content">
                <span className="card-category">{workflow.category}</span>
                <h3 className="card-title">{workflow.title}</h3>
                <p className="card-description">{workflow.description}</p>
              </div>
              
              <div className="card-footer">
                <a 
                  href={workflow.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  GitHub Repo <span className="github-icon">🌺</span>
                </a>
                
                <a 
                  href={workflow.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-live-demo"
                >
                  Live Demo 🌐
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}