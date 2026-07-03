import { LOGIN_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a
          href="/"
          className="text-xl font-black tracking-[-0.06em] text-text-strong"
        >
          matima
        </a>
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="#plans"
            className="text-sm text-text-soft hover:text-text-strong transition-colors"
          >
            Tarifs
          </a>
          <a
            href={LOGIN_URL}
            className="bg-accent hover:bg-accent-hover text-white text-sm px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Se connecter
          </a>
        </div>
      </div>
    </header>
  );
}
