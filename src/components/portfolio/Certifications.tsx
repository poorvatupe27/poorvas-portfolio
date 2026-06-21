const certs = [
  "AWS Academy Cloud Foundations",
  "Programming Essentials in Python",
  "Oracle SQL Basics",
  "Business English: Management and Leadership",
];

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Certifications</span>
          <h2 className="text-3xl md:text-4xl mt-4">Continuous learning.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div key={c} className="card-surface p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-accent/10 text-accent grid place-items-center shrink-0">
                ✓
              </div>
              <div className="font-medium">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
