export default function About() {
  return (
    <div className="container section animate-fade-in">
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Sapekkho</h1>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>What is Sapekkho?</h3>
          <p>
            Sapekkho is a minimalist, natively-designed daily task manager for Windows. It was built with a simple goal in mind: to help you plan, organize, and stay on top of your day without the clutter and complexity of enterprise project management tools.
          </p>

          <h3 style={{ marginTop: '2rem' }}>How It Works</h3>
          <p>
            You can create tasks, assign them priorities (with a fun, localized twist), and set reminders. What sets Sapekkho apart is its optional **Google Calendar sync**. 
          </p>
          <p>
            By securely connecting your Google account, Sapekkho can perform a one-way sync, pushing tasks with reminders directly to a dedicated "Sapekkho" calendar. This means you will receive native notifications on your phone, smartwatch, or any other synced device exactly when your task is due.
          </p>

          <h3 style={{ marginTop: '2rem' }}>Active Development</h3>
          <p>
            Sapekkho is an actively developed open-source project. We are constantly listening to feedback, adding features, and refining the experience. 
          </p>
          <p>
            If you want to contribute, check out our source code, or report an issue, please visit our <a href="https://github.com/xomoash/sapekkho" target="_blank" rel="noopener noreferrer">GitHub Repository</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
