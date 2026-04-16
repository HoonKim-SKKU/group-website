import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>LUCID @ SKKU</h3>
            <p>Laboratory for Ultrafast Coherent Dynamics in Solids</p>
          </div>
          <div className="footer-right">
            <p>&copy; {new Date().getFullYear()} LUCID @ SKKU. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style>{`
        .footer {
          background-color: var(--bg-secondary);
          padding: var(--spacing-xl) 0;
          margin-top: var(--spacing-xl);
          border-top: 1px solid var(--border-color);
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .footer-left h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .footer-right {
          text-align: right;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: var(--spacing-md);
          }
          
          .footer-right {
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
