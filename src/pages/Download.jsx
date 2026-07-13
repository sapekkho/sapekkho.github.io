import { useEffect, useState } from 'react';
import { Download as DownloadIcon, AlertTriangle, Monitor } from 'lucide-react';

const downloadUrl = 'https://github.com/sapekkho/sapekkho/releases/download/v1.1.1/Sapekkho-Setup-1.1.1.exe';
const downloadName = 'Sapekkho-Setup-1.1.1.exe';

export default function Download() {
  const [isStarting, setIsStarting] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (!isStarting || countdown <= 0) return;

    const timer = window.setTimeout(() => {
      setCountdown((value) => value - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [isStarting, countdown]);

  useEffect(() => {
    if (!isStarting || countdown > 0) return;

    window.location.assign(downloadUrl);
  }, [isStarting, countdown]);

  const handleDownloadClick = (event) => {
    event.preventDefault();
    setCountdown(3);
    setIsStarting(true);
  };

  return (
    <div className="container section animate-fade-in">
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1>Get Sapekkho</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Start managing your tasks effectively today.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
          <img
            src="/img/logo.png"
            alt="Sapekkho Logo"
            style={{ width: '140px', height: '140px', borderRadius: '24px', objectFit: 'cover' }}
          />
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.75rem', marginBottom: 0 }}>
            Current Version: v1.1.1
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'left' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <Monitor size={20} className="text-teal" />
            System Requirements
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', color: 'var(--text-secondary)' }}>
              <strong>OS:</strong> Windows 10 or Windows 11 (64-bit)
            </li>
            <li style={{ padding: '0.5rem 0', color: 'var(--text-secondary)' }}>
              <strong>Disk Space:</strong> 80 MB
            </li>
          </ul>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          {!isStarting ? (
            <a
              href={downloadUrl}
              download={downloadName}
              onClick={handleDownloadClick}
              className="btn btn-primary"
              style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', marginBottom: '1rem' }}
            >
              <DownloadIcon size={24} />
              Download for Windows
            </a>
          ) : (
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '1rem 1.5rem',
                marginBottom: '1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--glass-border)'
              }}
            >
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {countdown > 0 ? `Starting download in ${countdown}...` : 'Starting download...'}
              </div>
              {countdown === 0 && (
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  If the download did not start,{' '}
                  <a href={downloadUrl} download={downloadName} style={{ color: 'var(--accent)', fontWeight: 600 }}>
                    click here
                  </a>
                  .
                </div>
              )}
            </div>
          )}

          <div style={{ 
            background: 'rgba(234, 179, 8, 0.1)', 
            border: '1px solid rgba(234, 179, 8, 0.2)', 
            borderRadius: 'var(--radius-sm)',
            padding: '1.5rem',
            textAlign: 'left',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <AlertTriangle color="#eab308" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#eab308', margin: '0 0 0.5rem 0' }}>Note on Google Sign In</h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  Because Sapekkho uses the Google Calendar API, Google may show an "Unverified App" warning during the sign-in process. This is expected while the app is pending verification from Google. 
                </p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
                  You can safely continue by clicking <strong>Advanced</strong>, and then <strong>Go to Sapekkho (unsafe)</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
