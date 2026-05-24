import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
        <div className="reveal">
          <span className="text-sm font-medium text-primary">Visit us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Centrally located, easy to reach.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Walk-ins welcome for emergencies. For scheduled treatments, please
            book ahead so we can keep your wait time to a minimum.
          </p>

          <div className="mt-10 space-y-6">
            <Row icon={MapPin} title="Address">
              204, Greenfield Plaza, MG Road,
              <br />
              Bengaluru, Karnataka 560001
            </Row>
            <Row icon={Phone} title="Phone">
              <a href="tel:+919876543210" className="hover:text-primary">
                +91 98765 43210
              </a>
            </Row>
            <Row icon={Mail} title="Email">
              <a
                href="mailto:hello@brightsmile.in"
                className="hover:text-primary"
              >
                hello@brightsmile.in
              </a>
            </Row>
            <Row icon={Clock} title="Working hours">
              Monday – Saturday · 9:00 AM – 8:30 PM
              <br />
              Sunday · 10:00 AM – 2:00 PM
            </Row>
          </div>
        </div>

        <div className="reveal rounded-3xl overflow-hidden border border-border bg-background aspect-square lg:aspect-[4/5]">
          <iframe
            src="https://www.google.com/maps/embed"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background border border-border text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
