const ITEMS = [
  { before: "/images/before-after-1.jpg", after: "/images/before-after-2.jpg", label: "Smile Design · Veneers" },
  { before: "/images/clinic-gallery-1.jpg", after: "/images/clinic-gallery-2.jpg", label: "Teeth Whitening · 4 shades" },
  { before: "/images/clinic-gallery-3.jpg", after: "/images/mouth-after-1.jpg", label: "Full Mouth Rehabilitation" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl reveal">
          <span className="text-sm font-medium text-primary">
            Before & After
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Real results from real patients.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A small selection of treatments completed at our clinic. All images
            shared with patient consent.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((i) => (
            <figure
              key={i.label}
              className="reveal rounded-2xl overflow-hidden border border-border bg-background"
            >
              <div className="grid grid-cols-2">
                <div className="aspect-square relative">
                  <img src={i.before} alt={`${i.label} before`} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-foreground">Before</span>
                </div>
                <div className="aspect-square relative border-l border-border">
                  <img src={i.after} alt={`${i.label} after`} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground">After</span>
                </div>
              </div>
              <figcaption className="p-4 text-sm font-medium text-foreground">
                {i.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
