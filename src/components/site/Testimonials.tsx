import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Implant patient",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    text:
      "I was terrified of dental work for years. Dr. Mehta walked me through every step of my implant and it was honestly the calmest clinic visit I've had. Two months later — no pain, no issues.",
  },
  {
    name: "Rohan Verma",
    role: "Invisalign patient",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    text:
      "Started my aligners eight months ago. The team is responsive on WhatsApp, appointments always run on time, and my front teeth are finally where I wanted them.",
  },
  {
    name: "Aishwarya Nair",
    role: "Smile design",
    img: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    text:
      "They showed me a digital preview before any work began, which made the decision easy. The final result looks completely natural — friends keep asking what's different.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl reveal">
          <span className="text-sm font-medium text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Honest words from people we've treated.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="reveal rounded-2xl border border-border bg-card p-7 flex flex-col"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-[15px] text-foreground/85 leading-relaxed">
                "{r.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-10 w-10 rounded-full object-cover bg-muted"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {r.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
