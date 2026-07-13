import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, RefreshCw, LayoutTemplate } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const features = [
    {
      title: 'Beautifully Organized',
      description: 'Settings and task lists are logically organized into clean, professional glassmorphism cards for a seamless experience.',
      icon: <LayoutTemplate size={32} />
    },
    {
      title: 'Google Calendar Sync',
      description: 'One-way sync your tasks to a dedicated calendar to receive native notifications on your phone or smartwatch.',
      icon: <RefreshCw size={32} />
    },
    {
      title: 'Secure & Local',
      description: 'Your Google tokens are stored securely on your local device. Sign out anytime to easily revoke access.',
      icon: <ShieldCheck size={32} />
    },
    {
      title: 'Always Up to Date',
      description: 'Built-in auto-updater and manual check buttons ensure you are always running the latest version effortlessly.',
      icon: <CheckCircle size={32} />
    }
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    // Auto-scroll the carousel slowly if wanted, or just let user scroll
    const el = carouselRef.current;
    if (!el) return;
    
    let scrollInterval;
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
          el.scrollLeft = 0;
        } else {
          el.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 4000);
    };
    
    startScroll();
    
    return () => clearInterval(scrollInterval);
  }, []);

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
            <div className="screenshot-showcase" style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              <img src="/img/1.png" alt="Sapekkho Task List" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            
            {/* Horizontal Scroll Carousel for remaining screenshots */}
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)', textAlign: 'center' }}>More Views</h4>
            <div className="screenshot-carousel" ref={carouselRef}>
              <div className="screenshot-carousel-item">
                <img src="/img/2.png" alt="Calendar View" />
              </div>
              <div className="screenshot-carousel-item">
                <img src="/img/3.png" alt="New Task Dialog" />
              </div>
              <div className="screenshot-carousel-item">
                <img src="/img/4.png" alt="Bengali Priority Options" />
              </div>
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
