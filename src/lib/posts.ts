// ─────────────────────────────────────────────────────────────────────────────
// BLOG LOADER
// Drop a Markdown file into src/content/blog/<slug>.md and it automatically
// appears on the site. Each file should start with a frontmatter block:
//
//   ---
//   title: My Post Title
//   date: 2026-06-24
//   excerpt: One-sentence summary shown in the blog list.
//   tags: [Java, Minecraft]
//   ---
//
//   ...markdown body...
//
// The slug (URL) is the file name without ".md".
// ─────────────────────────────────────────────────────────────────────────────

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostMeta {
  body: string;
}

// Eagerly import every markdown file under content/blog as a raw string.
const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/** Minimal YAML-frontmatter parser — handles the subset we use above. */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key) continue;

    // Array form: tags: [a, b, c]
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: match[2] };
}

function toSlug(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

const allPosts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const slug = toSlug(path);
    return {
      slug,
      title: (data.title as string) || slug,
      date: (data.date as string) || "",
      excerpt: (data.excerpt as string) || "",
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      body,
    };
  })
  // Newest first.
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getAllPosts(): PostMeta[] {
  return allPosts.map(({ body: _body, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
