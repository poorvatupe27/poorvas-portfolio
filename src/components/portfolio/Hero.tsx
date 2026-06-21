export function Hero() {
  return (
    <section id="top" className="section-pad pt-20 md:pt-28">
      <div className="container-page">
        <div className="max-w-3xl fade-up">
          <span className="chip mb-6">
            <span className="h-2 w-2 rounded-full bg-accent inline-block" />
            Available for internships & opportunities
          </span>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6">
            Poorva Tupe
            <span className="block text-muted-foreground font-display italic text-3xl md:text-4xl mt-3">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Passionate and detail-oriented developer skilled in building responsive web
            applications using React.js, JavaScript, backend technologies, and databases.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </div>

      </div>
    </section>
  );
}
