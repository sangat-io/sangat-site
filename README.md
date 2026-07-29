# sangat.io portfolio site

Static site (plain HTML/CSS/JS) for Nishant Bakshi's engineering portfolio.

## Local preview
Open `index.html` directly in a browser, or run a tiny local server:

```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Deploy (GitHub Pages)
1. Push this repo to GitHub.
2. Repo Settings -> Pages -> Source: deploy from branch `main`, folder `/ (root)`.
3. Custom domain: `sangat.io` (already set via the CNAME file in this repo).
4. At your domain registrar, point sangat.io at GitHub Pages:
   - Apex/A records for sangat.io -> GitHub Pages IPs:
     185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - (Optional) CNAME for www -> <your-github-username>.github.io
5. Wait for DNS to propagate, then enable "Enforce HTTPS" in repo Settings -> Pages.

## Updating content
- Resume: replace `assets/Nishant_Bakshi_Resume.pdf` (keep the filename — it is what downloaders see)
- Headshot: add `assets/images/headshot.jpg`
- Project text: edit directly in `index.html`
- Project images: add files to `assets/images/` and reference them in the relevant `.gallery` block
