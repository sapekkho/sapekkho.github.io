import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Download', path: '/download' },
    { name: 'Changelog', path: '/changelog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 110 }}>
          <img src="/img/logo.png" alt="Sapekkho Logo" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
          <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Sapekkho
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.95rem'
                }}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://github.com/sapekkho/sapekkho/releases/download/v1.1.1/Sapekkho-Setup-1.1.1.exe" download="Sapekkho-Setup-1.1.1.exe" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', marginLeft: '1rem' }}>
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'block', zIndex: 110 }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
          background: 'var(--bg-base)', zIndex: 100, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2rem'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.5rem',
                color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://github.com/sapekkho/sapekkho/releases/download/v1.1.1/Sapekkho-Setup-1.1.1.exe" download="Sapekkho-Setup-1.1.1.exe" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '1.25rem' }}>
            Get Started
          </a>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 769px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}} />
    </nav>
  );
}
