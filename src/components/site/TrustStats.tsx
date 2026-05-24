const STATS = [
  { value: "18+", label: "Years of experience" },
  { value: "10,000+", label: "Happy patients" },
  { value: "25,000+", label: "Treatments completed" },
  { value: "100%", label: "Modern equipment" },
];

export function TrustStats() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="reveal text-center md:text-left">
            <div className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              {s.value}
            </div>
            <div className="mt-1.5 text-sm text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
