# Flowshark.ai — Template Studio

A responsive React + Vite + TypeScript + Tailwind frontend for exploring, editing, previewing, and exporting proposal and invoice templates.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Included

- 6 invoice template styles and 6 proposal template styles
- Responsive home, about, proposal gallery, and invoice gallery
- Searchable gallery with real HTML/CSS document previews (not reference screenshots)
- Live editor for company/client information, dates, line items, tax, discount, currency, terms, and notes
- Theme color swatches
- PDF export through html2pdf.js
- Shared document data is preserved when changing templates
- Local sample data; no backend/API required

## Notes

- Google Fonts are loaded from Google Fonts when online; system fallbacks are included.
- PDF export runs in the browser. For very long documents, use fewer line items for the cleanest page break.
- This is a frontend prototype; no authentication, database, or cloud persistence is included.
