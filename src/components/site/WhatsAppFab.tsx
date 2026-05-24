import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3.5 pr-4 py-3 shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] hover:shadow-[0_14px_36px_-8px_rgba(37,211,102,0.65)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-4 w-4" />
        <span className="absolute inset-0 rounded-full bg-white/25 animate-ping" aria-hidden />
      </span>
      <span className="hidden sm:inline text-sm font-medium">Chat on WhatsApp</span>
    </a>
  );
}
