import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { teamMembers } from '../data/teamMembers';

const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-container">
      <div className="container">
        <Link to="/#team" className="back-link">← Back to Team</Link>

        <div className="member-detail-grid">
          <div className="member-image-column">
            {member.image ? (
              <img src={member.image} alt={member.name} className="detail-avatar" />
            ) : (
              <div className="detail-avatar-placeholder">{member.name.charAt(0)}</div>
            )}
          </div>

          <div className="member-info-column">
            <h1>{member.name}</h1>
            <h2 className="member-role">{member.role}</h2>

            <div className="member-bio">
              <h3>Biography</h3>
              <p>{member.bio}</p>
            </div>

            {member.email && (
              <div className="member-contact">
                <h3>Contact</h3>
                <p><a href={`mailto:${member.email}`}>{member.email}</a></p>
              </div>
            )}

            {member.researchInterests && member.researchInterests.length > 0 && (
              <div className="member-interests">
                <h3>Research Interests</h3>
                <ul>
                  {member.researchInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .page-container {
          padding: 120px 0 var(--spacing-xl);
          min-height: 80vh;
        }

        .back-link {
          display: inline-block;
          margin-bottom: var(--spacing-lg);
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: var(--primary-color);
        }

        .member-detail-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: var(--spacing-xl);
          align-items: start;
        }

        .detail-avatar {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
          border: 3px solid var(--bg-secondary);
          box-shadow: var(--shadow-lg);
        }

        .detail-avatar-placeholder {
          width: 100%;
          aspect-ratio: 1;
          background-color: var(--bg-secondary);
          border-radius: var(--border-radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          font-weight: bold;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .member-role {
          color: var(--primary-color);
          font-size: 1.5rem;
          margin-bottom: var(--spacing-lg);
          font-weight: 500;
        }

        .member-bio, .member-contact, .member-interests {
          margin-bottom: var(--spacing-lg);
        }

        .member-bio h3, .member-contact h3, .member-interests h3 {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-sm);
          color: var(--text-primary);
        }

        .member-interests ul {
          list-style-type: disc;
          padding-left: 1.5rem;
        }

        .member-interests li {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .member-detail-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .detail-avatar, .detail-avatar-placeholder {
            max-width: 300px;
            margin: 0 auto;
          }
          
          .member-image-column {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamMemberDetail;
