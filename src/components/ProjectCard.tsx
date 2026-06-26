import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-border bg-surface p-5 flex flex-col transition-colors hover:border-accent/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-lg font-semibold text-heading">{project.name}</h3>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="text-muted hover:text-accent transition-colors shrink-0"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
          </svg>
        </a>
      </div>

      <p className="mt-2 text-sm text-text leading-relaxed flex-1">{project.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] text-muted bg-surface2 border border-border rounded px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>

      {project.postSlug && (
        <Link
          to={`/blog/${project.postSlug}`}
          className="mt-4 text-sm font-medium text-accent hover:underline underline-offset-4"
        >
          Read the write-up →
        </Link>
      )}
    </div>
  );
}
