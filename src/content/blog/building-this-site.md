---
title: Building this site
date: 2026-06-24
excerpt: Why I built this site, how the markdown blog works underneath, and the one configuration mistake that left the first deploy serving a blank page.
tags: [React, TypeScript, Tailwind, GitHub Pages]
---

After more than seven years of writing software, there was never a single place I
could send people to. Recruiters would ask for a portfolio and the best I had was
a GitHub profile and a shrug. This site is the answer to that. The whole thing came
together in an afternoon because keeping it small was the goal from the start. It
needed to be something I own, something that costs nothing to run, and something I
would actually keep updated instead of abandoning after the first week.

## The stack

Most of my day is spent in C#, Go, and SQL, so the front end is not where I do the
bulk of my work. There were still a few decisions worth making up front. The site
is written in TypeScript rather than plain JavaScript, mostly because catching a
mistake at build time is a lot cheaper than catching it once someone is already
looking at the page. The build runs on Vite, which keeps the dev server fast and
stays out of the way when it comes time to ship. There is no backend at all. A
personal site does not need a server or a database, and the moment publishing
requires logging into some admin panel is the moment the writing stops. What is
left is a small, predictable stack: React and Tailwind on the front end,
TypeScript throughout, Vite for the build, and plain static files at the end of
it.

## The blog

The blog was built around one rule. A markdown file dropped into a folder should
show up on the site with no other steps, and everything else follows from that.

At build time, Vite reads every markdown file in the content folder and hands each
one back as plain text:

```ts
const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});
```

From there, a small parser pulls the title, date, and tags off the top of each
file, and the file name becomes the URL. No database sits behind any of it, and
there is no admin page to log into. The post you are reading is a markdown file
checked into the repository like any other source file, and adding the next one
means writing the file and pushing it.

## Routing

GitHub Pages serves static files and nothing more. It has no concept of a route
like /blog/building-this-site, so requesting that path directly returns a 404. The
usual workaround is a small redirect file that catches the 404 and hands control
back to the application, but that always felt like more moving parts than the
problem deserved. Hash based routing avoids the whole issue. The URLs take the form
/#/blog/building-this-site, which the browser treats as a single page with an
anchor, so Pages serves the same index.html every time and the application decides
what to render. It reads a little less cleanly in the address bar, and in exchange
nothing breaks.

## Deploying

One of the first things worth setting up on any project, at work or otherwise, is
automatic deployment. A manual process survives right up until the day someone
forgets a step, and a personal site is no exception. A GitHub Actions workflow
handles it here. Every push to main installs the dependencies, builds the site,
and publishes the result, so a single push is all it takes for the live version to
update.

## What tripped me up

The first deploy reported success and then served a blank page. The console
explained why:

```
Failed to load module script: Expected a JavaScript module
but the server responded with a MIME type of "application/octet-stream".
```

Nothing was wrong with the build. The problem was in the configuration. GitHub
Pages was still set to deploy straight from the branch, which meant it was serving
the raw source files instead of the built output. That handed the browser a .tsx
file and expected it to run TypeScript it has no way to execute. The fix came down
to a single setting. Switching the Pages source over to GitHub Actions told it to
serve the build output, and re-running the workflow put the real site in place.
The code had been correct the entire time, and the configuration was the part that
needed fixing.

## What is next

The site is small and the plan is to keep it that way. Resume content lives in one
file, projects live in another, and the posts are just markdown. More will get
added as I go.
