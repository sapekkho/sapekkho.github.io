import { Send, GitBranch } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';

export default function Contact() {
  return (
    <div className="container section animate-fade-in">
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1>Contact Me</h1>
          <p style={{ fontSize: '1.1rem' }}>
            Send me a message or reach out through GitHub.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
          <form action="https://gloomy-edifice-768.forms.space/form-rw5a4d" method="POST">
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
              <input type="text" name="name" required className="input-field" placeholder="Your Name" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
              <input type="email" name="email" required className="input-field" placeholder="your@email.com" />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
              <textarea name="message" required className="input-field" placeholder="How can I help you?"></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

        <div className="glass-card" style={{ textAlign: 'center', padding: '1.5rem 2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Prefer GitHub?</h3>
          <p style={{ marginBottom: '1rem' }}>
            You can also open an issue or view the project on GitHub.
          </p>
          <a
            href="https://github.com/sapekkho/sapekkho/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={18} />
            Open an Issue
          </a>
        </div>
      </div>
    </div>
  );
}
