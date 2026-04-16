import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/researchProjects';

const ResearchHighlights = () => {
  return (
    <section id="research" className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2>Research Highlights</h2>
          <p>Selected projects and ongoing investigations.</p>
        </div>

        <div className="grid grid-3">
          {projects.map(project => (
            <div key={project.id} className="card">
              <div className="card-meta">{project.year}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/research/${project.id}`} className="card-link">Read more &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        
        .section-header {
          margin-bottom: var(--spacing-lg);
        }
        
        .card {
          background-color: var(--bg-primary);
          padding: var(--spacing-md);
          border: 1px solid var(--border-color);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-color: var(--text-primary);
        }
        
        .card-meta {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xs);
          font-family: monospace;
        }
        
        .card h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-sm);
        }
        
        .card p {
          flex: 1;
          margin-bottom: var(--spacing-md);
        }
        
        .card-link {
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          color: inherit;
        }
        .card-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default ResearchHighlights;
