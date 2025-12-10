# JournalForex Website - Setup Checklist

Use this checklist to set up and customize your JournalForex landing page.

## 🚀 Initial Setup

- [ ] Navigate to project directory
  ```bash
  cd /home/trexx/D_Drive/projects/landingpages/journalforexwebsite
  ```

- [ ] Install dependencies
  ```bash
  npm install
  ```

- [ ] Start development server
  ```bash
  npm run dev
  ```

- [ ] Open browser to http://localhost:5173

- [ ] Verify all pages load correctly:
  - [ ] Landing page (/)
  - [ ] Privacy Policy (#/privacy-policy)
  - [ ] Account Deletion (#/account-deletion)

## 📝 Essential Customization

### Update Download Links
- [ ] Open `src/App.jsx`
- [ ] Find line 6: `const APK_DOWNLOAD_URL`
- [ ] Replace with your GitHub Releases APK URL
  - Format: `https://github.com/YOUR_USERNAME/REPO_NAME/releases/latest/download/journalforex.apk`
- [ ] (Optional) Update `PLAY_STORE_URL` when app is published to Play Store
- [ ] Save file

### Update Contact Emails
Search and replace these emails throughout the project:
- [ ] `support@journalforex.app` → Your support email
- [ ] `privacy@journalforex.app` → Your privacy email

Files to check:
- [ ] `src/App.jsx`
- [ ] `src/pages/PrivacyPolicy.jsx`
- [ ] `src/pages/AccountDeletion.jsx`

### Update Branding
- [ ] Replace `public/favicon.svg` with your logo
- [ ] Update app name if needed (currently "JournalForex")
- [ ] Verify logo appears in navigation

## 🎨 Content Customization

### Landing Page Features
- [ ] Open `src/App.jsx`
- [ ] Locate `features` array (around line 18)
- [ ] Update feature titles and descriptions
- [ ] Verify icons match your features

### FAQ Section
- [ ] In `src/App.jsx`, find `faqs` array (around line 55)
- [ ] Update questions and answers
- [ ] Add or remove FAQ items as needed

### Use Cases
- [ ] Find `useCases` array in `src/App.jsx`
- [ ] Customize for your target audience
- [ ] Update titles and descriptions

### Hero Section
- [ ] Update main headline text
- [ ] Customize tagline/description
- [ ] Update trust indicators (bullet points)

## 🖼️ Visual Customization

### App Screenshots
- [ ] Replace placeholder images in `src/App.jsx`:
  - Line 67: Hero phone mockup
  - Lines 106-108: Screenshot gallery (3 images)
- [ ] Use your actual app screenshots
- [ ] Optimize images for web (compress)

### Colors (Optional)
- [ ] Review gradient colors in components
- [ ] Adjust TailwindCSS classes if needed:
  - `from-purple-600 to-blue-600` (primary gradient)
  - `bg-slate-900` (dark backgrounds)
  - `text-purple-400` (accent text)

### Fonts (Optional)
- [ ] Check `index.html` for Google Fonts link
- [ ] Replace 'Inter' with your preferred font
- [ ] Update font-family in `src/index.css`

## 📄 Legal Pages

### Privacy Policy
- [ ] Review `src/pages/PrivacyPolicy.jsx`
- [ ] Update sections to match your actual privacy practices
- [ ] Verify all information is accurate
- [ ] Check date updates automatically

### Account Deletion
- [ ] Review `src/pages/AccountDeletion.jsx`
- [ ] Test form submission (opens email client)
- [ ] Verify email addresses are correct

## 🔍 SEO & Meta Tags

### index.html
- [ ] Update `<title>` tag
- [ ] Update meta description
- [ ] Update Open Graph tags:
  - [ ] og:title
  - [ ] og:description
  - [ ] og:url (your actual domain)
  - [ ] og:image (your social share image)
- [ ] Update Twitter Card tags
- [ ] Update canonical URL

### Create Social Share Image
- [ ] Create og-cover.png (1200x630px recommended)
- [ ] Place in `public/` folder
- [ ] Update path in meta tags

## 🧪 Testing

### Functionality
- [ ] Test all navigation links
- [ ] Test mobile menu (resize browser)
- [ ] Test smooth scrolling to sections
- [ ] Test FAQ accordion (expand/collapse)
- [ ] Test account deletion form
- [ ] Test all external links

### Responsive Design
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] Check all images load properly
- [ ] Verify text is readable at all sizes

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

## 🏗️ Build & Deploy

### Production Build
- [ ] Run `npm run build`
- [ ] Check for build errors
- [ ] Verify `dist/` folder created
- [ ] Test production build: `npm run preview`

### Deployment Preparation
- [ ] Choose hosting platform:
  - [ ] Vercel (recommended)
  - [ ] Netlify
  - [ ] GitHub Pages
  - [ ] Cloudflare Pages
  - [ ] Other: ___________

### GitHub Pages (if using)
- [ ] Enable GitHub Pages in repository settings
- [ ] Set source to GitHub Actions
- [ ] Push code to trigger deployment
- [ ] Verify site is live

### Custom Domain (if applicable)
- [ ] Create CNAME file in `public/` folder
- [ ] Add your domain name to CNAME
- [ ] Configure DNS settings
- [ ] Verify SSL certificate

## 🔧 Optional Enhancements

### Analytics
- [ ] Add Google Analytics
- [ ] Add tracking code to `index.html`
- [ ] Test tracking in development

### Additional Features
- [ ] Add newsletter signup
- [ ] Add testimonials section
- [ ] Add video demo
- [ ] Add blog link
- [ ] Add social media links

### Performance
- [ ] Optimize images (use WebP format)
- [ ] Enable lazy loading for images
- [ ] Test with Lighthouse
- [ ] Aim for 90+ performance score

## 📚 Documentation Review

- [ ] Read `README.md` completely
- [ ] Review `QUICK_START.md`
- [ ] Check `MIGRATION_NOTES.md`
- [ ] Read `PROJECT_SUMMARY.md`

## 🧹 Cleanup (Optional)

### Remove Old Files
If you're sure you don't need the old HTML files:
- [ ] Delete `delete-account.html`
- [ ] Delete `privacy.html`
- [ ] Delete `styles.css`

```bash
rm delete-account.html privacy.html styles.css
```

## ✅ Final Verification

- [ ] All content is accurate and up-to-date
- [ ] All links work correctly
- [ ] All images load properly
- [ ] Mobile experience is smooth
- [ ] Forms work as expected
- [ ] Build completes without errors
- [ ] Site is deployed and accessible
- [ ] SEO meta tags are correct
- [ ] Legal pages are accurate

## 🎉 Launch

- [ ] Announce on social media
- [ ] Update app store listing with website URL
- [ ] Monitor analytics
- [ ] Collect user feedback
- [ ] Plan future updates

---

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Cleanup
rm -rf node_modules  # Remove dependencies
npm install          # Reinstall dependencies
rm -rf dist          # Remove build output
```

## Need Help?

- Check component files for inline comments
- Review documentation files
- Test in development mode first
- Use browser DevTools for debugging

---

**Last Updated:** 2025-11-09
**Status:** Ready for customization and deployment! 🚀
