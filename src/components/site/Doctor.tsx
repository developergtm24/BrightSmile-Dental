import { GraduationCap, Award, BadgeCheck } from "lucide-react";

const doctorImage = "/images/doctor-profile.jpg";

export function Doctor() {
  return (
    <section id="doctor" className="py-20 md:py-28 bg-surface">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-border bg-background">
            <img
              src={doctorImage}
              alt="Dr. Anjali Mehta, Chief Dental Surgeon"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <span className="text-sm font-medium text-primary">
            Meet The Doctor
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Dr. Anjali Mehta, BDS, MDS
          </h2>
          <p className="mt-2 text-muted-foreground">
            Chief Dental Surgeon · Prosthodontist & Implantologist
          </p>

          <p className="mt-6 text-foreground/80 leading-relaxed">
            With over 18 years of clinical experience and 25,000+ successful
            treatments, Dr. Mehta is known for her gentle approach and
            evidence-based care. She trained at the Manipal College of Dental
            Sciences and continues to upskill through international
            certifications in implantology and smile design.
          </p>

          <div className="mt-8 space-y-4">
            <Item
              icon={GraduationCap}
              title="MDS, Prosthodontics — Manipal College of Dental Sciences"
              subtitle="Gold Medalist, 2009"
            />
            <Item
              icon={Award}
              title="Fellowship in Oral Implantology"
              subtitle="ICOI, New York"
            />
            <Item
              icon={BadgeCheck}
              title="Certified Invisalign Provider"
              subtitle="Align Technology, USA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background border border-border text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </div>
  );
}
