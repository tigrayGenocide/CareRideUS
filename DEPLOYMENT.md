# CareRideUS - Deployment & Update Guide

## Live URLs
- **Production**: `https://carerideus.pages.dev` (or your custom domain)
- **Preview**: `https://<branch-name>.carerideus.pages.dev`

---

## Initial Setup (Done)
- [x] Astro + Tailwind project created
- [x] GitHub repo: `tigrayGenocide/CareRideUS`
- [x] Cloudflare Pages connected to GitHub
- [x] Auto-deploy on push to `main`
- [x] Build command: `npm run build`
- [x] Output directory: `dist`
- [x] Node version: `22` (set in CF Pages env vars)

---

## Making Updates

### Local Development
```bash
# Setup environment
export PATH="$HOME/.local/bin:$PATH" && eval "$(fnm env --use-on-cd)"

# Navigate to project
cd /home/dawit/AIProjects/Business/CareRideUS

# Start dev server
npm run dev
# Opens http://10.0.0.92:4321

# Build to verify
npm run build
```

### Deploy Changes (Auto-deploy)
```bash
# Make changes, then:
git add -A
git commit -m "Description of changes"
git push origin main
```

**Cloudflare Pages automatically:**
1. Detects push to `main`
2. Runs `npm run build`
3. Deploys to `https://carerideus.pages.dev`
4. Live in ~1-2 minutes

### Preview Deployments (for testing)
```bash
git checkout -b feature-name
# make changes
git add -A && git commit -m "Preview: description"
git push origin feature-name
```
Creates preview URL: `https://feature-name.carerideus.pages.dev`

---

## Contact Form Setup (Required)
1. Get free API key at [web3forms.com](https://web3forms.com/)
2. Edit `src/pages/contact.astro`:
   ```astro
   <input type="hidden" name="access_key" value="YOUR_ACTUAL_KEY" />
   ```
3. Deploy:
   ```bash
   git add -A && git commit -m "Add Web3Forms key" && git push
   ```

---

## Custom Domain (Namecheap)

### Cloudflare Pages
- Project → Custom domains → "Set up a custom domain"
- Add: `carerideus.com` and `www.carerideus.com`
- Target: `carerideus.pages.dev`

### Namecheap DNS
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | `@` | `carerideus.pages.dev` | Automatic |
| CNAME | `www` | `carerideus.pages.dev` | Automatic |

- Remove existing A/URL records for `@` and `www`
- Back in Cloudflare: Click "Activate domain" → Enable "Always Use HTTPS"

---

## Project Structure
```
├── public/                 # Static assets
│   ├── _headers           # Security/cache headers
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/        # Header, Footer, Hero, etc.
│   ├── layouts/Layout.astro
│   ├── pages/             # index, about, services, contact
│   └── styles/global.css
├── tailwind.config.mjs
├── postcss.config.mjs
├── astro.config.mjs
└── package.json
```

---

## Common Tasks

| Task | Command |
|------|---------|
| Local dev | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |
| Deploy | `git push origin main` |
| Preview deploy | `git push origin <branch>` |
| Check deploy status | Cloudflare Pages → Deployments |

---

## Costs
| Service | Cost |
|---------|------|
| Cloudflare Pages | Free |
| Cloudflare DNS | Free |
| Web3Forms | Free (250/mo) |
| Namecheap Domain | ~$13/yr |
| **Total** | **~$13/yr** |

---

## Support Links
- Cloudflare Pages: https://dash.cloudflare.com/pages
- GitHub Repo: https://github.com/tigrayGenocide/CareRideUS
- Web3Forms: https://web3forms.com/
- Namecheap DNS: https://ap.www.namecheap.com/domains/list/