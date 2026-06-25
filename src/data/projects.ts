// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS — edit this list to control what shows on the Projects page and the
// "Featured work" section of the home page. Set `featured: true` to surface a
// project on the home page. Leave the array empty ([]) to hide projects entirely.
// ─────────────────────────────────────────────────────────────────────────────

export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  repo: string;
  featured?: boolean;
  // Optional slug of a blog post (src/content/blog/<slug>.md) for a deep-dive.
  postSlug?: string;
}

export const projects: Project[] = [
  {
    name: "This Site",
    blurb:
      "The site you're reading. A React and TypeScript front end on Vite, styled with Tailwind. The blog runs on markdown files, so dropping one into a folder is all it takes to publish a post. The whole site is static, free to host, and deploys to GitHub Pages on every push.",
    tags: ["React", "TypeScript", "Tailwind", "Vite", "GitHub Actions"],
    repo: "https://github.com/jdaschner/jdaschner.github.io",
    featured: true,
    postSlug: "building-this-site",
  },
];
