export const changelogData = [
  {
    version: "1.1.1",
    date: "July 2026",
    notes: "Note on Google Sign In: Since Sapekkho uses the Google Calendar API, Google may show an unverified app warning during sign in. This is expected. Users can continue by clicking Advanced then Go to Sapekkho (unsafe).",
    features: [
      { 
        title: "Redesigned Settings Layout", 
        description: "Settings are now organized into clean categorized cards for easier navigation." 
      },
      { 
        title: "Titlebar Profile Menu", 
        description: "Added a new profile badge next to the window controls. Users can check connection status, sign in, or sign out from any screen." 
      },
      { 
        title: "Manual Update Checker", 
        description: "Added a dedicated Check for Updates button in the About section." 
      },
      { 
        title: "Sync Unsynced Tasks", 
        description: "Added a feature in Integrations settings to manually push unsynced local tasks to Google Calendar." 
      },
      { 
        title: "Asynchronous Disconnect", 
        description: "Signing out now includes a confirmation prompt and loading state while securely revoking Google tokens." 
      },
      { 
        title: "Help and Documentation", 
        description: "Added a What is New and Help dialog explaining privacy, sign in mechanics, and how calendar sync works." 
      }
    ]
  },
  {
    version: "1.0.0",
    date: "July 2026",
    notes: "Initial release of Sapekkho.",
    features: [
      {
        title: "Initial Release",
        description: "The first public release of Sapekkho."
      }
    ]
  }
];
