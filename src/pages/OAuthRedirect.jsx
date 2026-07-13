import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function OAuthRedirect() {
  const [error, setError] = useState(false);

  useEffect(() => {
    // Attempt to auto-close the window after 3 seconds
    const timer = setTimeout(() => {
      try {
        window.close();
        // If it didn't close (often blocked if not opened by window.open), show fallback message
        setTimeout(() => setError(true), 500);
      } catch (err) {
        setError(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--bg-base)',
      padding: '1rem'
    }}>
      <div className="glass-card animate-fade-in" style={{ textAlign: 'center', maxWidth: '400px', width: '100%', padding: '3rem 2rem' }}>
        <CheckCircle size={64} className="text-teal" style={{ margin: '0 auto 1.5rem' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Sign In Successful
        </h1>
        
        {!error ? (
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Returning you to Sapekkho...
          </p>
        ) : (
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            You can now safely close this window and return to the Sapekkho app.
          </p>
        )}
      </div>
    </div>
  );
}
