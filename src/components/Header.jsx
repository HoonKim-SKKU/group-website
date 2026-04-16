import { useLocation } from 'react-router-dom';
import logoSymbol from '../assets/logo_symbol.png';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getLink = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logoSymbol} alt="LUCID Symbol" style={{ height: '75px' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: '300', letterSpacing: '-0.02em' }}>LUCID</span>
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href={getLink('#research')}>Research</a></li>
            <li><a href={getLink('#team')}>Team</a></li>
            <li><a href={getLink('#publications')}>Publications</a></li>
            <li><a href={getLink('#gallery')}>Gallery</a></li>
            <li><a href={getLink('#contact')} className="btn btn-sm">Contact</a></li>
          </ul>
        </nav>
      </div>
      <style>{`
        .header {
          height: var(--header-height);
          position: sticky;
          top: 0;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .logo a {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-list a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        
        .nav-list a:hover {
          color: var(--text-primary);
        }
        
        .btn-sm {
          padding: 8px 16px;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .nav {
            display: none; /* Mobile menu to be implemented if needed */
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
