export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="eyebrow">About</span>
          <h2 className="text-3xl md:text-4xl mt-4">A bit about me.</h2>
        </div>
        <div className="md:col-span-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            I am a Full Stack Developer focused on creating user-friendly web applications,
            solving real-world problems, and continuously improving my skills.
          </p>
        </div>
      </div>
    </section>
  );
}
