# nursingwithdrasmaa.com

Personal academic website of Dr. Asmaa Saber Ghaly, in English (`index.html`) and Arabic (`ar/index.html`).

## Preview on your PC

Double-click `index.html` to open it in your browser. The Arabic version is in the `ar` folder, or use the language button at the top.

## Files

- `index.html`: English page
- `ar/index.html`: Arabic page (right to left)
- `assets/style.css`: design for both pages
- `assets/publications.js`: the publications list. To add a new paper, copy one line, change the details, and put it at the top.
- `CNAME`: tells GitHub Pages to use nursingwithdrasmaa.com

## Changing your photo

Replace `assets/photo.jpg` with another square photo of the same name.

## Publish for free on GitHub Pages

1. Create a free account at https://github.com/signup.
2. Click **New repository**, name it `nursingwithdrasmaa`, set it to **Public**, and create it.
3. On the new repository page, click **uploading an existing file** and drag in everything from this folder (`index.html`, `CNAME`, `README.md`, and the `ar` and `assets` folders). Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch", pick `main` and `/ (root)`, then **Save**.
5. After a minute the site is live at `https://<your-username>.github.io/nursingwithdrasmaa/`.

## Connect the domain (after you buy nursingwithdrasmaa.com)

1. At your domain registrar, open the DNS settings and add:
   - Four `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `<your-username>.github.io`
2. In GitHub **Settings → Pages**, type `nursingwithdrasmaa.com` under "Custom domain" and save.
3. When the check turns green (can take up to a day), tick **Enforce HTTPS**.
