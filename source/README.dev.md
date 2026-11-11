# Drashti Limbasiya – Developer Portfolio

Personal portfolio of **Drashti Limbasiya** (BCA student · aspiring Android Application Developer), built with **React + Vite**. No backend or database is required – it is a fully static site that deploys directly to Vercel.

All content comes from my real resume, project documentation, original screenshots and original certificates.

## Sections
Home · About · Journey (education + internship) · Technical Skills · Projects (ElectroHub, Patel Auto Garage & Consultancy, Smart Parking Management System – each with original screenshots and a lightbox) · Certifications · Resume (view / download) · Contact · Footer

## Run locally
Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build (checks everything compiles):

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Upload to GitHub
```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
(Or create an empty repository on github.com and use *Upload files* to drag in the folder contents.)

## Deploy on Vercel
1. Sign in at [vercel.com](https://vercel.com) with GitHub and click **Add New → Project**.
2. Import the repository.
3. Vercel auto-detects **Vite** (Build command `npm run build`, Output directory `dist`) – just click **Deploy**.

Asset paths are relative (`base: './'`), so the site also works on GitHub Pages or any static host.

## Folder structure
```
public/
  certificates/originals/   original certificates, untouched (PDF / JPG / PNG)
  certificates/previews/    plain renderings used only for on-page viewing
  projects/electrohub/      user/ and admin/ screenshots
  projects/garage/          screenshots + sample bill PDF (original) and its preview
  projects/parking/         user/, watchman/ and admin/ screenshots
  resume/                   Drashti_Limbasiya_Resume.pdf (original) + page previews
src/
  components/  sections/  data/  hooks/  styles/
```

## Updating content
- Personal info, education, skills: `src/data/profile.js`
- Projects, features, screenshots: `src/data/projects.js`
- Certificates: `src/data/certificates.js`
- To replace the resume, overwrite `public/resume/Drashti_Limbasiya_Resume.pdf` (and regenerate the two `resume-preview-*.jpg` images).
- Adding GitHub / live-demo links: add them to a project in `projects.js` and render them in `src/sections/Projects.jsx` (none are shown now because none were provided).

## Notes
- The contact form has no backend: it opens the visitor's email app with the message pre-filled.
- Fonts (Inter, JetBrains Mono) load from Google Fonts; the site falls back to system fonts offline.
