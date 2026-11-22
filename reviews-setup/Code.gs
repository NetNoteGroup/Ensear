// Ensear reviews: paste this into Extensions > Apps Script of a Google Sheet (see SETUP.md).
const AUTO_APPROVE = false;   // false = you type "yes" in the Approved column to publish. true = reviews appear instantly.
const SHEET_NAME = 'Reviews';

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(SHEET_NAME);
  if (!s) { s = ss.insertSheet(SHEET_NAME); s.appendRow(['Date','Name','Service','Rating','Review','Approved']); s.setFrozenRows(1); }
  return s;
}
function clean_(v, max) {
  let s = String(v || '').replace(/[<>]/g, '').trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;   // stop spreadsheet formula injection
  return s;
}
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return out_({ ok: true });                       // spam trap
  const name = clean_(p.name, 60), text = clean_(p.text, 600), service = clean_(p.service, 80);
  const rating = Math.max(1, Math.min(5, parseInt(p.rating, 10) || 0));
  if (name.length < 2 || text.length < 10 || !rating) return out_({ ok: false });
  const lock = LockService.getScriptLock(); lock.waitLock(10000);
  sheet_().appendRow([new Date(), name, service, rating, text, AUTO_APPROVE ? 'yes' : '']);
  lock.releaseLock();
  return out_({ ok: true });
}
function doGet() {
  const tz = Session.getScriptTimeZone();
  const rows = sheet_().getDataRange().getValues().slice(1)
    .filter(r => String(r[5]).trim().toLowerCase() === 'yes')
    .map(r => ({ date: Utilities.formatDate(new Date(r[0]), tz, 'd MMM yyyy'), name: r[1], service: r[2], rating: Number(r[3]), text: r[4] }));
  return out_(rows.slice(-50));
}
