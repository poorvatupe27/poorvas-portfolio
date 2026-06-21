type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Resume Builder",
    description:
      "A web application that allows users to create professional resumes with live preview and download them as PDF.",
    tech: ["React.js", "Vite", "JavaScript", "CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/poorvatupe27" },
    ],
  },
  {
    title: "Real-Time Sign Language Detection",
    description:
      "Computer vision and deep learning based project that recognizes sign language gestures and converts them into text.",
    tech: ["Python", "Machine Learning", "Deep Learning"],
  },
  {
    title: "COVID-19 Data Analysis",
    description:
      "Data analysis project using Python to process datasets, generate insights, and visualize trends.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected work</span>
            <h2 className="text-3xl md:text-4xl mt-4">Projects I've built.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            A small collection of things I've designed, coded, and shipped.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="card-surface p-7 md:p-9 grid md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-1 text-sm text-muted-foreground font-mono">
                0{i + 1}
              </div>
              <div className="md:col-span-7">
                <div className="mb-3">
                  <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                </div>
                <p className="text-foreground/75 leading-relaxed">{p.description}</p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.links && (
                  <div className="flex gap-2 flex-wrap">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline underline-offset-4 decoration-border hover:decoration-accent hover:text-accent transition"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
