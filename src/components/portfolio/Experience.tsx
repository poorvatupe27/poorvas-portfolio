export function Experience() {
  return (
    <section id="experience" className="section-pad bg-muted/40 border-y border-border">
      <div className="container-page grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="eyebrow">Experience</span>
          <h2 className="text-3xl md:text-4xl mt-4">Where I've worked.</h2>
        </div>
        <div className="md:col-span-8">
          <div className="card-surface p-7 md:p-8">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
              <div>
                <h3 className="text-xl">Frontend Developer Intern</h3>
                <div className="text-accent text-sm mt-1">KWMCS Ventures</div>
              </div>
              <span className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                Internship
              </span>
            </div>
            <ul className="mt-5 space-y-2.5 text-foreground/80">
              {[
                "Worked on responsive web pages",
                "Improved UI consistency",
                "Supported testing and deployment activities",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
