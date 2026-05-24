import {
  ShieldCheck,
  Sparkles,
  Users,
  Receipt,
  Sofa,
  Microscope,
} from "lucide-react";

const REASONS = [
  {
    icon: Microscope,
    title: "Modern equipment",
    desc: "Digital X-rays, intra-oral scanners and CBCT imaging for precise diagnosis.",
  },
  {
    icon: ShieldCheck,
    title: "Sterilization protocols",
    desc: "Class-B autoclave sterilization and single-use instruments for every patient.",
  },
  {
    icon: Users,
    title: "Experienced team",
    desc: "Specialists across implantology, orthodontics, endodontics and pediatrics.",
  },
  {
    icon: Receipt,
    title: "Transparent pricing",
    desc: "Detailed treatment plans and upfront pricing — no surprises later.",
  },
  {
    icon: Sofa,
    title: "Comfortable environment",
    desc: "Quiet, calm operatories with sedation options for anxious patients.",
  },
  {
    icon: Sparkles,
    title: "Personalised care",
    desc: "Treatment plans built around your goals, budget and lifestyle.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl reveal">
          <span className="text-sm font-medium text-primary">
            Why choose us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Care that's clinical, calm and completely transparent.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {REASONS.map((r) => (
            <div key={r.title} className="reveal flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
