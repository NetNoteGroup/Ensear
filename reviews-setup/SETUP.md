# Connect live reviews (free, about 5 minutes, no server of your own)

Reviews are stored in a Google Sheet owned by Ensear. The website reads approved reviews from it automatically.

1. Go to sheets.google.com and create a blank sheet named "Ensear Reviews".
2. Open Extensions > Apps Script. Delete the sample code and paste everything from `Code.gs`. Save.
3. Click Deploy > New deployment > type "Web app". Set "Execute as" = Me and "Who has access" = Anyone. Click Deploy and allow the permissions.
4. Copy the Web app URL (it ends in /exec).
5. Open `js/data.js` and paste it: `reviewsEndpoint:"https://script.google.com/macros/s/XXXX/exec",`
6. Upload the site again. Submit a test review on the Reviews page.

## Publishing reviews
- New reviews appear in the sheet (tab "Reviews") with an empty Approved column.
- Type `yes` in the Approved column to publish a review. It shows on the website within moments of the next page load.
- To publish instantly with no approval, set `AUTO_APPROVE = true` in the script (redeploy) and `reviewsModerated:false` in `data.js`. Approval is recommended to block spam and abuse.

## Changing the script later
After editing the script use Deploy > Manage deployments > edit > New version, so the same URL keeps working.

## Client logos
Put logo images (PNG or SVG, ideally on transparent background) in `assets/clients/` and list them in `js/data.js` under `clients`.
