import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';

const TeamSection = () => {

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Our Team</h2>
        </div>
        <div className="grid grid-3">
          {teamMembers.map((member) => (
            <Link to={`/team/${member.id}`} key={member.id} className="team-card-link">
              <div className="team-card">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="avatar" />
                ) : (
                  <div className="avatar-placeholder">{member.name.charAt(0)}</div>
                )}
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .team-card {
          text-align: center;
          padding: var(--spacing-md);
          transition: transform 0.3s ease;
        }

        .team-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .team-card-link:hover .team-card {
          transform: translateY(-5px);
        }
        
        .avatar {
          width: 200px;
          height: 200px;
          border-radius: 25%;
          object-fit: cover;
          margin-bottom: var(--spacing-sm);
          border: 3px solid var(--bg-secondary);
        }

        .avatar-placeholder {
          width: 200px;
          height: 200px;
          background-color: var(--bg-secondary);
          border-radius: 25%;
          margin: 0 auto var(--spacing-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
        
        .team-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        
        .role {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
