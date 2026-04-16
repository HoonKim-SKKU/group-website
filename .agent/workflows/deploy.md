---
description: How to deploy the research website
---

# Deployment Guide

You have two main options for deploying your website for free: **Netlify** (easiest) or **GitHub Pages**.

## Option 1: Netlify (Drag & Drop) - Recommended
This is the simplest method and requires no git configuration.

1. **Build the Project**:
   Ensure you have built the latest version of your site.
   ```bash
   npm run build
   ```
   This creates a `dist` folder in your project directory.

2. **Deploy**:
   - Go to [Netlify Drop](https://app.netlify.com/drop).
   - Drag and drop the `dist` folder onto the page.
   - Your site will be live instantly! You can then claim the site to customize the URL.

## Option 2: GitHub Pages
If you are using git and GitHub, this is a great option.

1. **Install `gh-pages`**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`**:
   Add the `homepage` field and deployment scripts.
   ```json
   {
     "homepage": "https://<your-username>.github.io/<repo-name>",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Option 3: Vercel
Similar to Netlify but often used with Next.js. Works great for Vite too.

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder and follow the prompts.