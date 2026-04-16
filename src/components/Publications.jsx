import React from 'react';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Ultrafast dynamics of coherent phonons in topological insulators",
      authors: "H. Kim, J. Doe, A. Smith",
      journal: "Physical Review Letters",
      year: "2024",
      link: "#"
    },
    {
      id: 2,
      title: "Liquid-like spin dynamics in a hybrid Heisenberg-Ising antiferromagnet",
      authors: <>Jin-Kwang Kim<sup>*</sup>, Hoon Kim<sup>*</sup>, Junyoung Kwon<sup>*</sup>, Hyun-Woo J. Kim, Kwangrae Kim, Seung-Hyeok Ha, Jaehwon Kim, Hyun-Sung Kim, Jimin Kim, Gahee Noh, Gi-Yeop Kim, Si-Young Choi, Jaeku Park, INtae Eom, Dogeun Jang, Sae Hwan Chun, Ayman SAid, XianRong Huang, Jungho Kim, and B. J. Kim<sup>†</sup></>,
      journal: "Nature Communications",
      year: "2025",
      link: "https://www.nature.com/articles/s41467-025-56635-x"
    },
    {
      id: 3,
      title: "Quantum spin nematic phase in a square-lattice iridates",
      authors: <>Hoon Kim<sup>*</sup>, Jin-Kwang Kim<sup>*</sup>, Junyoung Kwon, Jimin Kim, Hyun-Woo J. Kim, Seunghyeok Ha, Kwangrae Kim, Wonjun Lee, Jonghwan Kim, Gil Young Cho, Hyeokjun Heo, Joonho Jang, C. J. Sahle, A. Longo, J. Strempfer, G. Fabbris, Y. Choi, D. Haskel, Jungho Kim, J.-W. Kim, and B. J. Kim<sup>†</sup></>,
      journal: "Nature",
      year: "2024",
      link: "https://www.nature.com/articles/s41586-023-06829-4"
    },
    {
      id: 4,
      title: <>Direct observation of excitonic instability in Ta<sub>2</sub>NiSe<sub>5</sub></>,
      authors: <>Kwangrae Kim<sup>*</sup>, Hoon Kim<sup>*</sup>, Jonghwan Kim, Changil Kwon, Jun Sung Kim, and B. J. Kim<sup>†</sup></>,
      journal: "Nature Communications",
      year: "2021",
      link: "https://www.nature.com/articles/s41467-021-22133-z"
    }
  ];

  return (
    <section id="publications" className="section bg-secondary">
      <div className="container">
        <div className="section-header">
          <h2>Selected Publications</h2>
          <p>Full publication list <a href="https://scholar.google.com/citations?user=pHRGYcEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: 'var(--accent-color)', textDecoration: 'underline' }}>here</a>.</p>
        </div>

        <div className="publications-list">
          {publications.map(pub => (
            <div key={pub.id} className="publication-item">
              <div className="pub-year">{pub.year}</div>
              <div className="pub-content">
                <h3 className="pub-title"><a href={pub.link}>{pub.title}</a></h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">{pub.journal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .publications-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          max-width: 900px;
        }
        
        .publication-item {
          display: flex;
          gap: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }
        
        .publication-item:last-child {
          border-bottom: none;
        }
        
        .pub-year {
          font-weight: 700;
          color: var(--text-secondary);
          min-width: 60px;
        }
        
        .pub-title {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }
        
        .pub-title a:hover {
          text-decoration: underline;
          color: var(--accent-hover);
        }
        
        .pub-authors {
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }
        
        .pub-journal {
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .publication-item {
            flex-direction: column;
            gap: var(--spacing-xs);
          }
        }
      `}</style>
    </section>
  );
};

export default Publications;
