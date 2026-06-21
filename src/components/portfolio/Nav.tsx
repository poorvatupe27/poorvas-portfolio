const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_85%,transparent)] border-b border-border/60">
      <div className="container-page flex items-center justify-between py-4">
        <a href="#top" className="font-display text-lg tracking-tight">
          Poorva<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">Get in touch</a>
      </div>
    </header>
  );
}
