# JournalForex Web Pages

Static pages for the JournalForex mobile app:

- Landing page: `index.html`
- Privacy Policy: `privacy.html`
- Delete Account Request: `delete-account.html`

How to run locally:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
# then open http://127.0.0.1:8080
```

Deploy options:

- Any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3).
- Ensure the site root serves these files. Update Play Console listing URLs accordingly.

Customization:

- Replace placeholder images in `index.html` with your own app screenshots.
- Update store links and support emails (`support@journalforex.app`, `privacy@journalforex.app`).
- Adjust copy and colors in `styles.css` to match your brand.


