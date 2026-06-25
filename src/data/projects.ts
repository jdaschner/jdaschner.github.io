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
    name: "Test Project",
    blurb:
      "A placeholder project card. Replace this in src/data/projects.ts with a real project, or add more entries to the array — each one renders automatically.",
    tags: ["Placeholder", "Edit me"],
    repo: "https://github.com/jdaschner",
    featured: true,
  },
];
