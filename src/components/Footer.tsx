import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p className="font-mono">
          <span className="text-accent">$</span> built with React · Tailwind · TypeScript
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-heading transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-heading transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-heading transition-colors">
            Email
          </a>
        </div>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
