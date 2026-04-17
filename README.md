# RugaPatrick

Portfolio website for Ruganintwali Patrick, an artist based in Rwanda. The site presents biography, exhibitions, selected works, and contact details in a clean multi-page layout.

## What Is In This Repo

- Home page with hero slideshow, artist biography, selected works, and film section
- Exhibition page with featured shows and timeline
- Work page with gallery cards and detail modal
- Contact page with validated contact form
- Shared styling and behavior in one CSS and one JavaScript file

## Project Structure

- `index.html` : home page and source layout for shared navbar/footer
- `exhibition.html` : exhibitions and timeline
- `work.html` : work catalogue
- `contact.html` : contact form page
- `styles.css` : global styles
- `script.js` : loader, animations, shared layout injection, interactions
- `assets/` : local media files

## Media Folders

- `assets/me/` : profile photos and video
- `assets/sculpture/` : sculpture images
- `assets/Paintings/` : painting assets
- `assets/settings/` : setting/installation assets
- `assets/png/` : png assets

## Important Behavior

- Loader is shown once per browser session per page (uses `sessionStorage`).
- Non-home pages pull navbar and footer from `index.html` at runtime.

Because shared navbar/footer are loaded with `fetch`, open this project through a local HTTP server, not `file://`.

## Editing Tips

- Update navbar/footer in `index.html` only.
- Keep media filenames in kebab-case (no spaces).
- After changing image or video names, update matching paths in HTML and `script.js`.
