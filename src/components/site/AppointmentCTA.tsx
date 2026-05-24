import { Phone, MessageCircle } from "lucide-react";

export function AppointmentCTA() {
  return (
    <section id="appointment" className="py-20 md:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="reveal rounded-3xl bg-primary text-primary-foreground px-8 md:px-14 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/2 opacity-[0.06] hidden md:block">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]" />
          </div>
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Ready for a healthier, more confident smile?
            </h2>
            <p className="mt-4 text-primary-foreground/80 md:text-lg">
              Book a consultation today — we'll review your concerns and walk
              you through every option, with no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-sm font-medium hover:bg-background/90 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
