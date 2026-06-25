import { profile, experience, education, skills, awards } from "../data/resume";

export default function Resume() {
  return (
    <div className="animate-fade-up max-w-3xl">
      {/* Header */}
      <header className="border-b border-border pb-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-heading">{profile.name}</h1>
            <p className="mt-1 text-muted font-mono">{profile.title}</p>
          </div>
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border text-heading font-medium text-sm px-4 py-2 hover:border-accent/40 hover:bg-surface transition-colors"
          >
            ↓ Download PDF
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted font-mono">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
        </div>
      </header>

      {/* Summary */}
      <Section title="Summary">
        <p className="text-text leading-relaxed">{profile.summary}</p>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="space-y-7">
          {experience.map((job) => (
            <div key={`${job.company}-${job.start}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-heading font-semibold">
                  {job.role} <span className="text-muted font-normal">— {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted shrink-0">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="font-mono text-xs text-muted">{job.location}</p>
              <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-text leading-relaxed">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-accent2 bg-surface2 border border-border rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="space-y-3">
          {skills.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row sm:gap-4">
              <span className="font-mono text-sm text-accent shrink-0 sm:w-48">{group.label}</span>
              <span className="text-sm text-text">{group.items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="text-heading font-semibold">
            {education.degree} <span className="text-muted font-normal">— {education.school}</span>
          </h3>
          <span className="font-mono text-xs text-muted shrink-0">{education.date}</span>
        </div>
        <p className="font-mono text-xs text-muted">{education.location}</p>
        <p className="mt-1 text-sm text-text">{education.detail}</p>
      </Section>

      {/* Awards */}
      <Section title="Awards">
        <ul className="ml-5 list-disc space-y-1 text-sm text-text">
          {awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">{title}</h2>
      {children}
    </section>
  );
}
