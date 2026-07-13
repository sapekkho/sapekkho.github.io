import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, RefreshCw, LayoutTemplate, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const features = [
    {
      title: 'Beautifully Organized',
      description: 'Your tasks and settings are neatly arranged in a clean, easy-to-use design so you can focus on what matters.',
      icon: <LayoutTemplate size={32} />
    },
    {
      title: 'Google Calendar Sync',
      description: 'Send your tasks directly to Google Calendar so you get reminders on your phone and smartwatch automatically.',
      icon: <RefreshCw size={32} />
    },
    {
      title: 'Secure & Local',
      description: 'Your Google account details stay safe on your own computer, not on any servers. You can easily sign out at any time.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Always Up to Date',
      description: 'The app updates itself automatically, so you always have the newest features and improvements without any hassle.',
      icon: <CheckCircle size={32} />
    }
  ];

  const screenshots = [
    { src: '/img/1.png', alt: 'Sapekkho Task List' },
    { src: '/img/2.png', alt: 'Calendar View' },
    { src: '/img/3.png', alt: 'New Task Dialog' },
    { src: '/img/4.png', alt: 'Bengali Priority Options' },
  ];

  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const activeShot = screenshots[activeScreenshot];

  const goToPrevious = () => {
    setActiveScreenshot((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const goToNext = () => {
    setActiveScreenshot((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      {/* Background blobs for depth */}
      <div className="bg-blob bg-blob-1 animate-float"></div>
      <div className="bg-blob bg-blob-2 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            
            <div className="animate-fade-in" style={{ marginBottom: '1.5rem' }}>
              <span className="badge">
                <img src="/img/logo.png" alt="logo" style={{ width: '16px', height: '16px', borderRadius: '4px' }} />
                Sapekkho v1.1.1 is out now
              </span>
            </div>
            
            <h1 className="animate-fade-in delay-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Your Daily Tasks, <br/>
              <span className="text-gradient">Synced Perfectly.</span>
            </h1>
            
            <p className="animate-fade-in delay-200" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
              A lightweight Windows task manager built to help you plan, organize, and stay on top of your day with effortless Google Calendar integration.
            </p>
            
            <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/download" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Download for Windows
              </Link>
              <a href="https://github.com/xomoash/sapekkho" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                View Source on GitHub
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '4rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          
          <div className="glass-card animate-fade-in delay-400" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <h3 style={{ marginBottom: '0.35rem', fontSize: '1.4rem' }}>Explore the Experience</h3>
              <p style={{ marginBottom: 0, color: 'var(--text-muted)' }}>Swipe through a few highlights from the app interface.</p>
            </div>

            <div style={{ position: 'relative', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.35)', border: '1px solid var(--glass-border-light)', background: 'rgba(10,14,26,0.7)' }}>
              <img 
                src={activeShot.src} 
                alt={activeShot.alt} 
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.3s ease' }} 
              />

              <button 
                onClick={goToPrevious}
                style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', borderRadius: '999px', width: '46px', height: '46px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.2s ease' }}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>

              <button 
                onClick={goToNext}
                style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', borderRadius: '999px', width: '46px', height: '46px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', transition: 'all 0.2s ease' }}
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', maxWidth: '900px', margin: '0 auto', overflowX: 'auto', padding: '0.35rem 0.2rem 0.2rem' }}>
              {screenshots.map((shot, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenshot(idx)}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    padding: 0,
                    cursor: 'pointer',
                    opacity: activeScreenshot === idx ? 1 : 0.55,
                    transform: activeScreenshot === idx ? 'translateY(-2px) scale(1.03)' : 'scale(1)',
                    transition: 'all 0.25s ease',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: activeScreenshot === idx ? '2px solid var(--accent)' : '2px solid transparent',
                    width: '120px',
                    flexShrink: 0,
                    boxShadow: activeScreenshot === idx ? '0 8px 20px rgba(0,0,0,0.25)' : 'none'
                  }}
                  aria-label={`View ${shot.alt}`}
                >
                  <img src={shot.src} alt={`Thumbnail ${idx + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }} />
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div className="bg-blob bg-blob-3 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Why Choose Sapekkho?</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Designed with simplicity and power in mind, bringing native calendar syncing directly to your desktop.
            </p>
          </div>
          
          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ margin: 0 }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="section" style={{ paddingBottom: '8rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-elevated)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to get organized?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Join others who are staying on top of their day with Sapekkho.
            </p>
            <Link to="/download" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Download Sapekkho Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
