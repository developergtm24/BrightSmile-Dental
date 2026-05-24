import { Phone, Calendar, Star, Users } from "lucide-react";

const heroImage = "/images/hero-doctor.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
            Trusted by 10,000+ patients across the city
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08]">
            Gentle dentistry for a healthier, brighter smile.
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            A modern dental clinic combining 18+ years of clinical expertise
            with the latest technology — so every visit feels calm, careful and
            completely transparent.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">4.9 / 5.0</div>
                <div className="text-muted-foreground text-xs">
                  Google Reviews · 850+
                </div>
              </div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">10,000+</div>
                <div className="text-muted-foreground text-xs">
                  Happy patients
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-surface border border-border shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
            <img
              src={heroImage}
              alt="Lead dentist at BrightSmile Dental Clinic"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Google rating badge — top left */}
          <div className="hidden sm:flex absolute -top-4 -left-4 md:-left-6 bg-background rounded-2xl border border-border shadow-lg p-3 pr-4 items-center gap-3 max-w-[240px]">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent">
              <span className="text-sm font-bold text-primary">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-xs font-semibold text-foreground">4.9</span>
              </div>
              <div className="text-[11px] text-muted-foreground">Google · 850+ reviews</div>
            </div>
          </div>

          {/* Experience badge — top right */}
          <div className="hidden md:flex absolute top-6 -right-4 md:-right-6 bg-background rounded-2xl border border-border shadow-lg px-4 py-3 flex-col items-center min-w-[110px]">
            <div className="text-2xl font-semibold text-foreground tracking-tight">18+</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Years experience</div>
          </div>

          {/* Appointment availability — bottom left */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-background rounded-2xl border border-border shadow-lg p-4 flex items-center gap-3 max-w-[260px]">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 relative">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                Same-day appointments
              </div>
              <div className="text-xs text-muted-foreground">
                Mon – Sat · 9:00 AM – 8:30 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
