# IATL Website — Deployment Guide

## Structure

```
iatl-site/
├── index.html          ← Home page
├── about.html          ← About page
├── expertise.html      ← Our Expertise page
├── team.html           ← Team (expandable cards — see template at bottom of file)
├── blog.html           ← Blog listing
├── contact.html        ← Contact form (uses Formsubmit.co — free)
├── blog/
│   └── welcome.html    ← Single blog post
├── css/
│   └── style.css       ← All styles
└── images/             ← Put your logo and any images here
```

## Before You Deploy

### 1. Logo
Export your logo from Wix and save it as `images/logo.png` (or similar).
Then update each HTML file's header to reference it.

### 2. Contact Form Activation
The contact form uses **Formsubmit.co** — it's free with no signup.
On the **first submission**, Formsubmit will send a confirmation email to
`info@iatl.org.uk`. Click the link in that email to activate.
After that, all form submissions go straight to your inbox.

### 3. Team Photos (Optional)
The current site uses initial-based avatars (e.g. "HW", "BB").
If you want real photos, add them to `images/` and replace the
`.team-avatar` div with an `<img>` tag in `team.html`.

## Deploying to Cloudflare Pages

### Option A: Via Git (recommended for ongoing changes)

1. Create a free GitHub account if you don't have one
2. Create a new repository and push this folder to it
3. Go to https://dash.cloudflare.com → Pages → Create a project
4. Connect your GitHub repo
5. Build settings: leave blank (no build command needed — it's just static HTML)
6. Deploy

### Option B: Direct Upload (quickest to get started)

1. Go to https://dash.cloudflare.com → Pages → Create a project
2. Choose "Direct Upload"
3. Upload the contents of this folder
4. Deploy

### Connecting Your Domain

1. In Cloudflare Pages, go to your project → Custom domains
2. Add `iatl.org.uk` and `www.iatl.org.uk`
3. In your 123-reg DNS, update the records as Cloudflare instructs
   (typically a CNAME record pointing to your-project.pages.dev)
4. SSL is handled automatically by Cloudflare

## Making Changes

### Adding a Team Member
Open `team.html`. At the bottom of the team grid there's a commented-out
template block. Copy it, uncomment it, and fill in the details.

### Adding a Blog Post
1. Create a new HTML file in the `blog/` folder (copy `blog/welcome.html` as a template)
2. Add a summary entry in `blog.html` linking to the new post

### Updating Content
Just edit the HTML directly. The copy is all plain text in the files.

## Future: Adding a Proper Blog / CMS

When you're ready for a proper blogging workflow:

1. Migrate to **Hugo** or **Eleventy** (static site generators)
2. Write posts in Markdown files
3. Cloudflare Pages will auto-build and deploy on each git push
4. This can be done incrementally — the current site structure maps cleanly

## Costs

- **Cloudflare Pages**: Free (unlimited bandwidth, 500 builds/month)
- **Formsubmit.co**: Free (unlimited submissions with captcha)
- **Domain (123-reg)**: Whatever you're already paying
- **Total additional cost: £0**
