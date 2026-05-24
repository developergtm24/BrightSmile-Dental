import {
  Sparkles,
  Stethoscope,
  Smile,
  Baby,
  Activity,
  Wand2,
} from "lucide-react";

const TREATMENTS = [
  {
    icon: Activity,
    title: "Dental Implants",
    desc: "Permanent, natural-looking replacements that restore full chewing function and confidence.",
  },
  {
    icon: Stethoscope,
    title: "Root Canal Treatment",
    desc: "Single-visit RCT using rotary endodontics — virtually painless and predictable.",
  },
  {
    icon: Smile,
    title: "Braces & Aligners",
    desc: "Metal, ceramic and clear aligner options tailored to your lifestyle and timeline.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    desc: "Safe in-chair and take-home whitening that brightens up to 6 shades.",
  },
  {
    icon: Wand2,
    title: "Smile Design",
    desc: "Custom digital smile design with veneers, recontouring and aesthetic restoration.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Child-friendly care, preventive sealants and education for healthy lifelong habits.",
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl reveal">
          <span className="text-sm font-medium text-primary">
            Our Treatments
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Comprehensive dental care, under one calm roof.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From routine check-ups to advanced cosmetic and restorative
            procedures, every treatment is delivered with the same attention to
            detail and patient comfort.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TREATMENTS.map((t) => (
            <div
              key={t.title}
              className="reveal group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(15,118,110,0.18)] hover:-translate-y-0.5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
