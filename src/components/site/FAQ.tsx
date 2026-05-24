import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Do you accept walk-ins or only appointments?",
    a: "We strongly recommend booking in advance so we can plan adequate time for your treatment. We do keep two slots per day reserved for dental emergencies — please call ahead.",
  },
  {
    q: "Are dental implants painful?",
    a: "The procedure itself is done under local anaesthesia and is comfortable. Most patients describe the recovery as similar to a tooth extraction, with mild soreness for 2–3 days that's well managed with prescribed medication.",
  },
  {
    q: "How long does teeth whitening last?",
    a: "In-chair whitening typically lasts 12–18 months depending on your diet and oral hygiene. We provide aftercare guidance and offer top-up sessions if needed.",
  },
  {
    q: "Do you offer EMI or insurance support?",
    a: "Yes — we accept all major debit and credit cards with 3, 6 and 9-month no-cost EMI options. We also help process reimbursement paperwork for most insurance providers.",
  },
  {
    q: "Is the clinic child-friendly?",
    a: "Absolutely. Our pediatric dentist is specially trained to make first visits stress-free, with a kid-friendly chair, distraction TV and a small reward at the end.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-px mx-auto max-w-3xl">
        <div className="reveal text-center">
          <span className="text-sm font-medium text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
            Questions our patients often ask.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="reveal rounded-2xl border border-border bg-background overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-foreground">
                    {f.q}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
