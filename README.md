# JournalForex Landing Page

Modern React-based landing page for the JournalForex mobile app - a smart forex trading journal.

## Features

- ⚡ Built with React 18 + Vite for blazing fast performance
- 🎨 Styled with TailwindCSS for modern, responsive design
- 🧭 React Router for seamless navigation
- 📱 Fully responsive mobile-first design
- 🎯 SEO optimized with meta tags
- 🔗 Multiple pages: Home, Privacy Policy, Account Deletion

## Pages

- **Landing Page** - Main app showcase with features, screenshots, and download CTA
- **Privacy Policy** - Comprehensive privacy information
- **Account Deletion** - User account deletion request form

## Development

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:5173
```

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist/` directory.

## Deployment

This site can be deployed to any static hosting service:

- **GitHub Pages** - Use the built `dist/` folder
- **Netlify** - Connect your repo and set build command to `npm run build`
- **Vercel** - Auto-detects Vite and deploys automatically
- **Cloudflare Pages** - Set build command to `npm run build` and output to `dist`

## Customization

### Update Download Links

Edit `src/App.jsx` and update the download URLs:

```javascript
// For beta testing - GitHub Releases APK
const APK_DOWNLOAD_URL = 'https://github.com/YOUR_USERNAME/journalforex-app/releases/latest/download/journalforex.apk';

// For production - Google Play Store (when published)
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=YOUR_APP_ID';
```

**Current Setup:** The app uses GitHub Releases for APK distribution during closed beta testing. Update to Play Store URL when published.

### Update Content

- **Features** - Edit the `features` array in `src/App.jsx`
- **FAQ** - Edit the `faqs` array in `src/App.jsx`
- **Privacy Policy** - Edit `src/pages/PrivacyPolicy.jsx`
- **Account Deletion** - Edit `src/pages/AccountDeletion.jsx`

### Update Branding

- **Colors** - Modify TailwindCSS classes in components or extend `tailwind.config.js`
- **Logo** - Replace `/favicon.svg` with your logo
- **Fonts** - Update Google Fonts link in `index.html`

### Update Contact Emails

Replace these emails throughout the codebase:
- `support@journalforex.app`
- `privacy@journalforex.app`

## Project Structure

```
journalforexwebsite/
├── public/              # Static assets
│   └── favicon.svg      # App logo
├── src/
│   ├── pages/           # Page components
│   │   ├── PrivacyPolicy.jsx
│   │   └── AccountDeletion.jsx
│   ├── App.jsx          # Main landing page component
│   ├── App.css          # Component-specific styles
│   ├── main.jsx         # App entry point with routing
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # TailwindCSS configuration
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## License

All rights reserved.


