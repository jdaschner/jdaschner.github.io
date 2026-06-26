import { Link } from "react-router-dom";
import { getAllPosts, formatDate } from "../lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="animate-fade-up">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-heading">
          <span className="font-mono text-accent">#</span> Blog
        </h1>
        <p className="mt-3 max-w-2xl text-text leading-relaxed">
          Write-ups on projects, things I've learned, and engineering notes.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted font-mono text-sm">
          No posts yet — add a markdown file to <code className="text-accent2">src/content/blog/</code>.
        </p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block rounded-xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="text-xl font-semibold text-heading">{post.title}</h2>
                <span className="font-mono text-xs text-muted shrink-0">{formatDate(post.date)}</span>
              </div>
              {post.excerpt && <p className="mt-2 text-text leading-relaxed">{post.excerpt}</p>}
              {post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-muted bg-surface2 border border-border rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
