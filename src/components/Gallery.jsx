import React, { useRef, useState } from 'react';
// Example: import laserSetupImg from '../assets/gallery/laser_setup.jpg';
import lees2025Img from '../assets/gallery/25-06-24.jpg';
import natureConfImg from '../assets/gallery/25-04-01.png';

const Gallery = () => {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const photos = [
    {
      id: 1,
      title: "LEES 2025",
      src: lees2025Img,
      description: "Busan, Korea, 2025-06-24"
    },
    {
      id: 2,
      title: "Nature Conference",
      src: natureConfImg,
      description: "Yale University, 2025-04-01"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400; // Adjust scroll amount as needed
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Glimpses of our lab life and research activities.</p>
        </div>

        <div className="gallery-wrapper">
          <button
            className="nav-btn prev-btn"
            onClick={() => scroll('left')}
            aria-label="Previous photo"
          >
            &#8592;
          </button>

          <div className="gallery-container" ref={scrollRef}>
            {photos.map(photo => (
              <div
                key={photo.id}
                className="gallery-item"
                onClick={() => openLightbox(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openLightbox(photo);
                  }
                }}
              >
                <div className="image-wrapper">
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                </div>
                <div className="item-info">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="nav-btn next-btn"
            onClick={() => scroll('right')}
            aria-label="Next photo"
          >
            &#8594;
          </button>
        </div>

        {/* Lightbox Overlay */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .gallery-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .gallery-container {
          display: flex;
          gap: var(--spacing-md);
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-bottom: var(--spacing-md);
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE 10+ */
        }

        .gallery-container::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .gallery-item {
          min-width: 250px;
          flex: 0 0 auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s ease;
          cursor: pointer;
        }

        .gallery-item:hover {
          transform: translateY(-4px);
        }

        .image-wrapper {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .image-wrapper img {
          transform: scale(1.05);
        }

        .item-info {
          padding: var(--spacing-sm);
        }

        .item-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .item-info p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .nav-btn {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          z-index: 2;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .gallery-item {
            min-width: 260px;
          }
          
          .nav-btn {
            display: none; /* Hide buttons on mobile where touch scroll is natural */
          }
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          padding: 2rem;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .lightbox-caption {
          color: white;
          text-align: center;
          margin-top: 1rem;
          background: rgba(0, 0, 0, 0.7);
          padding: 1rem 2rem;
          border-radius: 8px;
        }

        .lightbox-caption h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.5rem;
        }

        .lightbox-caption p {
          margin: 0;
          color: #ccc;
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
          padding: 0.5rem;
          line-height: 1;
          transition: color 0.2s ease;
        }

        .lightbox-close:hover {
          color: var(--accent-color);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
