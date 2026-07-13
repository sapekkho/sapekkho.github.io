import { changelogData } from '../data/changelog-data';
import { Sparkles, AlertTriangle } from 'lucide-react';

export default function Changelog() {
  return (
    <div className="container section animate-fade-in">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1>Changelog</h1>
          <p style={{ fontSize: '1.1rem' }}>See what's new and what's been fixed in Sapekkho.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {changelogData.map((release, index) => (
            <div key={release.version} className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-primary)' }}>
                  v{release.version}
                </h2>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{release.date}</span>
              </div>

              {release.notes && (
                <div style={{ 
                  background: 'rgba(234, 179, 8, 0.1)', 
                  border: '1px solid rgba(234, 179, 8, 0.2)', 
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  marginBottom: '2rem'
                }}>
                  <AlertTriangle color="#eab308" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    {release.notes}
                  </p>
                </div>
              )}

              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                  <Sparkles size={20} className="text-teal" />
                  New Features & Updates
                </h3>
                
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {release.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>{feature.title}</strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{feature.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
