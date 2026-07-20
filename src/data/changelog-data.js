export const changelogData = [
  {
    version: "1.1.3",
    date: "July 2026",
    notes: "Patch update: Replaced the native update dialog with a beautiful custom-styled React modal. Enhances the UI consistency during app updates.",
    features: []
  },
  {
    version: "1.1.2",
    date: "July 2026",
    notes: "A significant update bringing improvements to the task reminder experience, a sleeker UI for dark mode, and several important bug fixes under the hood.",
    features: [
      {
        title: "Multiple Reminders Made Easy",
        description: "Redesigned reminder interface. Quickly add multiple reminder times by clicking the new inline text or pressing Enter directly from the time input field."
      },
      {
        title: "Smart Enter Key Handling",
        description: "Pressing Enter now works intuitively across the entire New Task and Edit Task modals. Save tasks seamlessly from almost anywhere."
      },
      {
        title: "Empty Task Validation",
        description: "Sapekkho will now gently remind you to enter a task name if you try to save a task without a title, featuring a clear red outline and visual shake."
      },
      {
        title: "No More Past Dates",
        description: "The date picker for reminders now intelligently restricts selection to today and future dates."
      },
      {
        title: "Dark Mode Polish",
        description: "The native calendar and clock icons in the date and time pickers have been restyled to pure white when dark mode is enabled."
      },
      {
        title: "Collapsible Help Guide",
        description: "The How to Use guide in the settings menu is now cleanly collapsible."
      },
      {
        title: "Quick Task Editing",
        description: "You can now double-click any task card on your main list to instantly open the Edit Task modal."
      },
      {
        title: "Dynamic Shortcut Display",
        description: "Keyboard shortcut displays in the settings and help guides now dynamically update to reflect the actual keys when you change them."
      },
      {
        title: "Calendar to Task Navigation",
        description: "Clicking on a date in the Calendar view that contains tasks will now automatically scroll to the exact point in the task list where that day's tasks are shown."
      },
      {
        title: "Bug Fixes",
        description: "Resolved preload script issue crashing external links, and fixed Google Calendar initialization error."
      }
    ]
  },
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
