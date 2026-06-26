import { projects } from "../data/projects";
import { profile } from "../data/resume";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="animate-fade-up">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-heading">
          <span className="font-mono text-accent">#</span> Projects
        </h1>
        <p className="mt-3 max-w-2xl text-text leading-relaxed">
          A selection of things I've built — from the PlayMyMc Minecraft plugin suite to graphics
          experiments and algorithm studies. More on{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-muted font-mono text-sm">
          No projects yet — add entries to <code className="text-accent2">src/data/projects.ts</code>.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
