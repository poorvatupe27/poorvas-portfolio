const groups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Programming", items: ["Java", "Python"] },
  { title: "Database", items: ["Oracle SQL", "MySQL"] },
  { title: "Other", items: ["Git", "Prompt Engineering", "Machine Learning"] },
];

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Skills</span>
          <h2 className="text-3xl md:text-4xl mt-4">Tools I work with.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="card-surface p-6">
              <div className="text-sm font-medium text-accent mb-4">{g.title}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-md bg-background border border-border text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
