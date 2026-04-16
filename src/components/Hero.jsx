import React from 'react';
import heroBg from '../assets/hero_bg_v7.png';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">

          <h1 className="hero-title">
            Driven Quantum Matter <br />
            <span className="highlight">Emergent dynamics & beyond</span>
          </h1>
          <p className="hero-subtitle">
            Welcome to the Laboratory for Ultrafast Coherent Dynamics in solids (LUCID)!
            <br /> At SKKU, we develop novel spectroscopy techniques to <br /> <span className="inline-highlight">identify</span> and <span className="inline-highlight">control</span> quantum materials <span className="inline-highlight">dynamically</span>.</p>
          <div className="hero-actions">
            <a href="#research" className="btn btn-outline">View Research</a>
            <a href="#team" className="btn btn-outline">Meet our Team</a>
            <a href="#contact" className="btn">Get in Touch</a>
          </div>
        </div>
      </div>
      <style>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 0;
          background-image: url(${heroBg});
          background-color: #ffffff;
          background-size: auto 100%;
          background-position: right center;
          background-repeat: no-repeat;
        }
        
        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: var(--spacing-md);
          max-width: 1400px;
        }
        
        .highlight {
          color: var(--text-secondary);
          font-weight: 300;
        }

        .inline-highlight {
          color: var(--accent-color);
          font-weight: 600;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          max-width: 1000px;
          margin-bottom: var(--spacing-lg);
          font-weight: 300;
        }
        
        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
            max-width: 100%;
          }
          
          .hero {
            background-position: right center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
