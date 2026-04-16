import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/researchProjects';

const ResearchHighlightDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="section container" style={{ marginTop: '100px', textAlign: 'center' }}>
                <h2>Project not found</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Home</Link>
            </div>
        );
    }

    return (
        <section className="section container" style={{ marginTop: '80px' }}>
            <Link to="/#research" className="back-link" style={{ display: 'inline-block', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                &larr; Back to Research
            </Link>

            <div className="project-detail">
                <div className="section-header">
                    <div className="card-meta" style={{ marginBottom: '10px', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                        {project.year}
                    </div>
                    <h1>{project.title}</h1>
                </div>

                <div className="project-content" style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                </div>
            </div>

            <style>{`
        .project-content ul {
          margin-left: 20px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .project-content li {
          margin-bottom: 8px;
          list-style-type: disc;
        }
        .project-content p {
          margin-bottom: 16px;
        }
      `}</style>
        </section>
    );
};

export default ResearchHighlightDetail;
