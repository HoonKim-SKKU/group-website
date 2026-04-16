import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <h2>Get in Touch</h2>
                    <p>We are always looking for motivated students, post-docs, and collaborators.</p>
                </div>

                <div className="contact-content grid grid-2">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="info-item">
                            <h4>Email</h4>
                            <p><a href="mailto:hoon.kim@skku.edu">hoon.kim@skku.edu</a></p>
                        </div>
                        <div className="info-item">
                            <h4>Address</h4>
                            <p>
                                Sungkyunkwan University (SKKU)<br />
                                Natural Sciences Campus<br />
                                2066 Seobu-ro, Jangan-gu<br />
                                Suwon-si, Gyeonggi-do, Republic of Korea
                            </p>
                        </div>
                        <div className="info-item">
                            <h4>Lab Location</h4>
                            <p>Science Building 1, Room 31152</p>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            title="SKKU Samsung Library Location"
                            src="https://maps.google.com/maps?q=Sungkyunkwan%20University%20Samsung%20Library&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '300px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <style>{`
        .info-item {
          margin-bottom: var(--spacing-md);
        }
        
        .info-item h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        
        .info-item a {
          text-decoration: underline;
        }
        
        .map-placeholder {
          width: 100%;
          height: 100%;
          min-height: 300px;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }
      `}</style>
        </section>
    );
};

export default Contact;
