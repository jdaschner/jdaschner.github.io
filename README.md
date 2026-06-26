# jdaschner.github.io

My personal site — portfolio, resume, and blog. Built with **React + TypeScript +
Tailwind** on Vite, deployed to GitHub Pages.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the local dev server (http://localhost:5173)
npm run build    # type-check + build to dist/
npm run preview  # preview the production build locally
```

## Adding a blog post

Drop a markdown file into `src/content/blog/` — that's it. The file name becomes
the URL slug, and the post appears automatically on the next build.

Each file needs a frontmatter block at the top:

```markdown
---
title: My Post Title
date: 2026-06-24
excerpt: One sentence shown in the blog list.
tags: [Java, Minecraft]
---

Your **markdown** body here. Code blocks get syntax highlighting:

​```java
System.out.println("hello");
​```
```

Posts are sorted newest-first by `date`. Supported markdown includes GitHub-style
tables, task lists, code fences, blockquotes, and images.

## Editing your resume / projects

Everything is data-driven — no need to touch the components:

- **Resume** content lives in `src/data/resume.ts` (profile, experience, skills,
  education, awards).
- **Projects** live in `src/data/projects.ts`. Set `featured: true` to surface a
  project on the home page, and `postSlug` to link it to a blog write-up.

To enable the **Download PDF** button on the resume page, drop a file named
`resume.pdf` into the `public/` folder.

## Project structure

```
src/
  components/      Layout, Nav, Footer, ProjectCard
  pages/           Home, Projects, Resume, Blog, BlogPost, NotFound
  data/            resume.ts, projects.ts   ← edit these
  content/blog/    *.md  ← add posts here
  lib/posts.ts     markdown + frontmatter loader
.github/workflows/deploy.yml   ← GitHub Pages CI
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to
GitHub Pages.

**One-time setup:** in the repo on GitHub, go to **Settings → Pages → Build and
deployment** and set **Source** to **GitHub Actions**. After the first successful
run the site is live at <https://jdaschner.github.io>.

Routing uses `HashRouter`, so deep links (e.g. `/#/blog/hello-world`) work on
GitHub Pages without any custom 404 redirect.
