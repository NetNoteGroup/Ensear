# Ensear Website: Step-by-Step Setup and Update Guide

## Part 1: Preview the site on your computer
1. Unzip `ensear-website.zip`.
2. Open the `ensear` folder and double-click `index.html`. The site opens in your browser.

## Part 2: Edit content (all text lives in one file)
Open `js/data.js` in Notepad (or VS Code). Change text between the quotation marks only, then save and refresh the browser.
1. Phone, email, address, hours: top of the file.
2. Social media: find `social:` and replace the Facebook, LinkedIn, TikTok and Instagram links with the real ones. WhatsApp is already set.
3. Services, FAQs, About tabs (Why Choose Us, Mission, Goal), testimonials: further down in the same file.
4. Keep every comma, quote and bracket in place. If the site goes blank, you removed one: undo and retry.

## Part 3: Replace logo and photos
1. Get the original logo and photos from the owner.
2. Rename each file to match the old one (for example `team.jpg`, `heater.jpg`, `logo.png`).
3. Copy them into `assets/img/`, replacing the old files.
4. Use a transparent PNG for the logo.

## Part 4: Add client logos (Our Clients section)
1. Save each logo (PNG or SVG) into `assets/clients/`.
2. In `js/data.js` find `clients:[]` and add one line per client, separated by commas:
   `clients:[{name:"Client One", logo:"assets/clients/client-one.png"},{name:"Client Two", logo:"assets/clients/client-two.png"}],`
3. Save and refresh. The grey placeholder tiles are replaced by the logos.

## Part 5: Switch on live reviews (one time, about 5 minutes)
1. Go to sheets.google.com and create a blank sheet named "Ensear Reviews".
2. Click Extensions > Apps Script. Delete the sample code, paste all of `reviews-setup/Code.gs`, and click Save.
3. Click Deploy > New deployment. Choose type "Web app". Set "Execute as" to Me and "Who has access" to Anyone. Click Deploy and allow the permissions.
4. Copy the Web app URL ending in `/exec`.
5. In `js/data.js` find `reviewsEndpoint:""` and paste the URL between the quotes.
6. Save, open the Reviews page and submit a test review. It should appear in the sheet's "Reviews" tab.
7. To publish a review, type `yes` in the Approved column (column F). It appears on the site on the next page load.
8. Optional: for instant publishing, set `AUTO_APPROVE = true` in the script (then Deploy > Manage deployments > edit > New version) and `reviewsModerated:false` in `data.js`. Approval is safer against spam.

## Part 6: Put the website online
Back up the current site first (hosting control panel > Backup).
1. Safe test first: in your hosting control panel (cPanel), create a subdomain such as `new.ensear.co.ke`.
2. Open File Manager > the subdomain's folder. Upload all files and folders inside `ensear` (index.html, css, js, assets, and so on). Keep the structure.
3. Visit `new.ensear.co.ke`, click every page, test the quote form, chat assistant and reviews.
4. When the owner approves, go live: move the files into `public_html` (the main site folder). Because the current site is WordPress, rename its existing files to a backup folder first rather than deleting them.
5. Alternative hosts: Netlify, Cloudflare Pages or GitHub Pages can host the folder for free.

## Part 7: Regular updates
- Edit text, then upload only the changed file (usually `js/data.js`).
- Photos: upload the new file with the same name.
- Reviews: approve in the Google Sheet. No upload needed.
- After uploading, hard refresh the browser (Ctrl+F5) to see changes.

## Troubleshooting
- Blank page after editing: a quote or comma was removed in `js/data.js`.
- Reviews not showing: check the URL ends in `/exec`, access is set to Anyone, and the Approved column says `yes`.
- Old content still visible: hard refresh or clear the browser cache.
- Chat assistant answers: edit the `bot` list in `js/app.js`.
