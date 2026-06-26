import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPost, formatDate } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="animate-fade-up">
        <p className="font-mono text-muted">Post not found.</p>
        <Link to="/blog" className="text-accent hover:underline underline-offset-4">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="animate-fade-up max-w-3xl mx-auto">
      <Link to="/blog" className="font-mono text-sm text-muted hover:text-accent transition-colors">
        ← back to blog
      </Link>

      <header className="mt-4 mb-8 pb-6 border-b border-border">
        <h1 className="text-3xl sm:text-4xl font-bold text-heading leading-tight">{post.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-sm text-muted">{formatDate(post.date)}</span>
          {post.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-accent2 bg-surface2 border border-border rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="prose-dev">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {post.body}
        </ReactMarkdown>
      </div>
    </article>
  );
}
