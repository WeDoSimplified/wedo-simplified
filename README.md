# WeDo — Local Business & Travel Directory

This is a small static project (HTML/CSS/JS) that lists travel agencies, rental vehicles, hotels and related services. Seed data is stored in `businesses.json` and the app stores listings in `localStorage`.

## Run locally

Recommended: serve files over HTTP so `fetch()` works correctly.

Using Python's simple HTTP server:

```bash
cd /Users/tajendrasingh/aqp/WeDo
python3 -m http.server 8000

# then open in your browser:
http://localhost:8000
```

Or use the VS Code "Live Server" extension to serve and get auto-reload.

Note: opening `index.html` directly with `file://` may cause the app to fail to load `businesses.json` due to browser security restrictions. Use a local server or deploy to GitHub Pages.

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `wedo`).
2. In your local `WeDo` folder run:

```bash
cd /Users/tajendrasingh/aqp/WeDo
git init
git add .
git commit -m "Initial WeDo site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

3. On GitHub, open the repository Settings → Pages. Choose branch `main` and folder `/ (root)`, then Save. Your site will be published at:

```
https://<your-username>.github.io/<repo>/
```

Notes for GitHub Pages compatibility
- `businesses.json` is included in the repo and fetched with a relative path (`./businesses.json`). That works on GitHub Pages because files are served over HTTP.
- Keep all asset paths relative (no leading `/`) so they continue to work when the site is hosted at `/<repo>/` rather than `/`.
- If you enable a `base` tag in `index.html`, update fetch paths accordingly.

## Editing seed data
- Edit `businesses.json` to modify default listings. The app only writes the defaults into `localStorage` when none are present.

## Submitting new listings
- The site has a form that currently POSTs to a Google Sheets Web App URL (set in `script.js` via `GOOGLE_SHEETS_URL`) and also stores new listings in `localStorage` via the app UI.

## Troubleshooting
- If the app shows no businesses when loaded from `file://`, start a server (see above). If `fetch('./businesses.json')` fails in the console on an HTTP URL, confirm the path and look for 404 in DevTools Network tab.

## Next steps
- Add a route-based search (From / To) and vehicle/driver listings.
- Improve UI/UX (responsive styles, animations).

If you'd like, I can implement GitHub Pages deployment automation (GitHub Actions) to automatically build and push a `gh-pages` branch on commit.
# WeDo - Business Directory

A beautiful, modern business directory platform for travel and automotive services.

## 🌟 Features

- **Beautiful Design**: Stunning gradient backgrounds with glassmorphism effects
- **6 Service Categories**: Travel Agencies, Hotels, Car Wash, Car/Bike Dealers, Workshops, Rental Agencies
- **City-based Search**: Find businesses by location and category
- **Admin Approval**: Business listings require admin approval before going live
- **Local Storage**: Data persists in browser storage
- **Responsive Design**: Works perfectly on all devices
- **Monthly Statistics**: Shows user search trends

## 🚀 Live Demo

Open `index.html` in your browser to see the live demo.

## 💼 Business Listing

- **Cost**: ₹299 for 6 months
- **Process**: Submit → Admin Review → Approval → Live Listing
- **Contact Info**: Phone, Email, Address displayed

## 🛠️ Technologies Used

- HTML5
- CSS3 (Glassmorphism, Gradients, Animations)
- Vanilla JavaScript
- Font Awesome Icons
- Inter Font Family

## 📱 Usage

1. **Find Businesses**: Search by city and filter by category
2. **List Business**: Fill form and pay ₹299 for 6-month listing
3. **View Statistics**: See monthly search trends at bottom

## 🎨 Design Features

- Gradient backgrounds
- Backdrop blur effects
- Smooth hover animations
- Custom dropdown styling
- Floating background shapes
- Professional color scheme

## 📊 Sample Data

Includes 30+ sample businesses across 5 major cities:
- Mumbai, Delhi, Bangalore, Pune, Chennai

## 🔧 Setup

1. Clone the repository
2. Open `index.html` in your browser
3. Start exploring businesses or list your own!

---

**Tagline**: "You Travel, We Manage Everything"