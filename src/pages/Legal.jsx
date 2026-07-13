export default function PrivacyPolicy() {
  return (
    <div className="container section animate-fade-in">
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Last updated: July 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <section>
            <h3>1. Introduction</h3>
            <p>
              Sapekkho ("we", "our", or "us") respects your privacy. This Privacy Policy explains how our desktop application handles your data, particularly regarding the use of Google APIs for calendar synchronization.
            </p>
          </section>

          <section>
            <h3>2. Data We Access and How We Use It</h3>
            <p>
              When you choose to sign in with your Google account, Sapekkho requests the following permissions:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Google Account Email:</strong> Accessed solely to display your connected account status within the app interface.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Google Calendar Access:</strong> Accessed strictly to perform a one-way synchronization. The app creates a dedicated "Sapekkho" calendar and pushes your local tasks (that have reminders set) to this calendar. We do not read, delete, or modify your existing personal calendars or events.</li>
            </ul>
          </section>

          <section>
            <h3>3. Where Your Data is Stored</h3>
            <p>
              <strong>All data is stored locally on your device.</strong> Sapekkho does not have any backend servers. Your tasks, settings, and Google OAuth tokens are securely saved in your local app data directory on your computer. We do not transmit this data to our own servers or any third-party analytics services.
            </p>
          </section>

          <section>
            <h3>4. Sharing of Information</h3>
            <p>
              Because we do not collect your data, we do not sell, rent, or share your personal information with any third parties. Your data remains entirely between your local machine and Google's servers.
            </p>
          </section>

          <section>
            <h3>5. Revoking Access and Data Deletion</h3>
            <p>
              You maintain full control over your data:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>In-App:</strong> You can click the "Sign Out" or "Disconnect" buttons within Sapekkho. This will automatically contact Google to revoke your tokens and securely delete them from your local storage.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Via Google:</strong> You can visit your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account Security Settings</a> at any time to remove Sapekkho's access remotely.</li>
            </ul>
            <p>
              Since we do not store your data on our servers, there is no need to submit a data deletion request to us. Deleting the app from your computer deletes all local data.
            </p>
          </section>

          <section>
            <h3>6. Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or how Sapekkho handles your data, please contact us via our <a href="https://github.com/xomoash/sapekkho/issues" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
