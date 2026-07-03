import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xl font-black tracking-[-0.06em] text-text-strong">
          matima
        </span>
        <p className="text-sm text-text-soft text-center sm:text-right">
          {CONTACT_EMAIL} · © 2026 Matima
        </p>
      </div>
    </footer>
  );
}
