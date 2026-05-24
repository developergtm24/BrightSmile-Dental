import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-px mx-auto max-w-7xl py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              B
            </span>
            <span className="font-semibold text-foreground tracking-tight text-lg">
              BrightSmile <span className="text-primary">Dental</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A modern dental clinic delivering gentle, evidence-based care for
            families across Bengaluru since 2006.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Services"
          links={[
            "Dental Implants",
            "Root Canal Treatment",
            "Braces & Aligners",
            "Teeth Whitening",
            "Smile Design",
            "Pediatric Dentistry",
          ]}
        />
        <FooterCol
          title="Clinic"
          links={["About us", "Meet the doctor", "Gallery", "Testimonials", "FAQ"]}
        />
        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>204, Greenfield Plaza, MG Road, Bengaluru 560001</li>
            <li>
              <a href="tel:+919876543210" className="hover:text-primary">
                +91 98765 43210
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@brightsmile.in"
                className="hover:text-primary"
              >
                hello@brightsmile.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} BrightSmile Dental. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-primary transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
