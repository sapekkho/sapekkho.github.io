import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(15, 23, 42, 0.5)',
      padding: '4rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <img src="/img/logo.png" alt="Sapekkho Logo" style={{ width: '28px', height: '28px', borderRadius: '6px' }} />
              <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Sapekkho
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              A daily task manager for Windows built to help you plan, organize, and stay on top of your day with seamless Google Calendar sync.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)' }}>About</Link></li>
              <li><Link to="/download" style={{ color: 'var(--text-secondary)' }}>Download</Link></li>
              <li><Link to="/changelog" style={{ color: 'var(--text-secondary)' }}>Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Support & Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact Us</Link></li>
              <li><Link to="/privacy" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link></li>
              <li>
                <a href="https://github.com/xomoash/sapekkho/issues" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid var(--glass-border)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Sapekkho Team. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/xomoash/sapekkho" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
              <GithubIcon size={20} />
            </a>
            <Link to="/contact" style={{ color: 'var(--text-muted)' }}>
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
