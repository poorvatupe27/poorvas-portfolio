const links = [
  { label: "Email", value: "poorvatupe27@gmail.com", href: "mailto:poorvatupe27@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/poorva-tupe-6a1253345", href: "https://www.linkedin.com/in/poorva-tupe-6a1253345" },
  { label: "GitHub", value: "github.com/poorvatupe27", href: "https://github.com/poorvatupe27" },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-muted/40 border-t border-border">
      <div className="container-page text-center max-w-3xl mx-auto">
        <span className="eyebrow justify-center">Contact</span>
        <h2 className="text-4xl md:text-6xl mt-6 mb-6">Let's build something together.</h2>
        <p className="text-muted-foreground text-lg mb-10">
          I'm currently open to internship and full-time opportunities. Feel free to reach out
          for collaborations or just a friendly hello.
        </p>

        <div className="mt-16 grid sm:grid-cols-3 gap-4 text-left">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface p-5 block"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {l.label}
              </div>
              <div className="text-sm break-all">{l.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
