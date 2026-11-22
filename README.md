# Ensear Services Website

A fast, multi-page website for Ensear Services (Ruiru, Kenya), a solar contractor offering solar water heating, rooftop hybrid and grid-tied solar, solar water pumping and solar panel cleaning.

## Features
- 13 pages: Home, About Us, Services, 4 service pages, Rate Card, Projects, Reviews, Blog, FAQ, Contact
- Quote form: client describes their need, enters email and phone, picks how to be contacted (phone call or WhatsApp), then sends by WhatsApp or email
- Rate Card with no published prices; every quote starts on WhatsApp or email
- Client reviews: visitors leave a star rating and review; approved reviews appear on the site automatically (free Google Sheet, see `reviews-setup/SETUP.md`)
- Our Clients section for logos (add files to `assets/clients/` and list them in `js/data.js`)
- Chat assistant on every page that answers common questions and hands over to WhatsApp
- Links for WhatsApp, Facebook, LinkedIn, TikTok and Instagram
- Animated hero, scroll effects, counters, service picker and photo lightbox
- Mobile friendly. No server, database or build step needed

## Files
| File | Purpose |
|---|---|
| `index.html` | Page shell (menu, footer, chat) |
| `css/style.css` | Design and animations |
| `js/data.js` | **All content: contacts, social links, services, FAQs, testimonials, About tabs. Edit this to update the site** |
| `js/app.js` | Pages, quote form and chat assistant |
| `assets/img/` | Logo and photos |

## Before launch (replace placeholders)
1. `js/data.js` > `social`: replace the Facebook, LinkedIn, TikTok and Instagram links (they are guesses).
2. `assets/img/`: replace the photos and `logo.png` with the original high-resolution files, keeping the same file names.
3. Review text written by us: Solar Cleaning description, FAQ answers, About tabs (Mission, Goal, Why Choose Us) and the "Customer" testimonial labels.
4. Add real blog article text (only titles and dates exist for now).

5. Connect live reviews with `reviews-setup/SETUP.md` and add client logos when ready.

## How to publish
Upload all the files and folders (keeping the structure) to the hosting `public_html` folder, or to any static host such as Netlify, Cloudflare Pages or GitHub Pages. Open `index.html` to preview locally.

## Notes
- The quote form opens WhatsApp or the visitor's email app with the details filled in; nothing is stored on a server.
- The chat assistant is rule-based. Edit its answers in `js/app.js` (the `bot` list).
- Contact numbers: +254 711 119611 / +254 736 119611, info@ensear.co.ke, Phileo Arcade, Ruiru.
