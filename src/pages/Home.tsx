import { Link } from "react-router-dom";
import { profile, experience } from "../data/resume";
import { projects } from "../data/projects";
import { getAllPosts, formatDate } from "../lib/posts";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 2);
  const currentRole = experience[0];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="animate-fade-up">
        <p className="font-mono text-accent text-sm mb-4">
          <span className="text-muted">$</span> whoami
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-heading tracking-tight">
          {profile.name}
          <span className="text-accent animate-blink">_</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-muted font-mono">{profile.title}</p>
        <p className="mt-1 text-accent2 font-mono text-sm">{profile.tagline}</p>

        <p className="mt-6 max-w-2xl text-text leading-relaxed">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-md bg-accent text-bg font-semibold text-sm px-5 py-2.5 hover:bg-accent/90 transition-colors"
          >
            View projects
          </Link>
          <Link
            to="/resume"
            className="rounded-md border border-border text-heading font-medium text-sm px-5 py-2.5 hover:border-accent/40 hover:bg-surface transition-colors"
          >
            Resume
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border text-heading font-medium text-sm px-5 py-2.5 hover:border-accent/40 hover:bg-surface transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        {currentRole && (
          <p className="mt-8 font-mono text-xs text-muted">
            <span className="text-accent2">●</span> Currently {currentRole.role} @ {currentRole.company}
          </p>
        )}
      </section>

      {/* Featured projects — hidden when there are none */}
      {featured.length > 0 && (
        <section>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-heading">
              <span className="font-mono text-accent">#</span> Featured work
            </h2>
            <Link to="/projects" className="text-sm text-accent hover:underline underline-offset-4">
              All projects →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold text-heading">
              <span className="font-mono text-accent">#</span> Latest writing
            </h2>
            <Link to="/blog" className="text-sm text-accent hover:underline underline-offset-4">
              All posts →
            </Link>
          </div>
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block rounded-xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-heading">{post.title}</h3>
                  <span className="font-mono text-xs text-muted shrink-0">{formatDate(post.date)}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
