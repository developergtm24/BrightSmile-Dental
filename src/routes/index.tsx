import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStats } from "@/components/site/TrustStats";
import { Treatments } from "@/components/site/Treatments";
import { Doctor } from "@/components/site/Doctor";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { AppointmentCTA } from "@/components/site/AppointmentCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrightSmile Dental — Gentle, Modern Dentistry in Bengaluru" },
      {
        name: "description",
        content:
          "BrightSmile Dental offers implants, braces, root canals, whitening and smile design with 18+ years of expertise. Book your appointment today.",
      },
      { property: "og:title", content: "BrightSmile Dental — Gentle, Modern Dentistry" },
      {
        property: "og:description",
        content:
          "Trusted by 10,000+ patients. Modern equipment, transparent pricing, calm care.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Treatments />
        <Doctor />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <AppointmentCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
