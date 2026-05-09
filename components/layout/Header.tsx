import { CalendarHeart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/constants";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/70 bg-[#fffdfb]/86 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#" className="shrink-0" aria-label={`${siteConfig.name} top`}>
            <span className="block font-serif text-lg font-semibold tracking-normal text-[#5b4245]">
              {siteConfig.name}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b58a8d]">
              Private Beauty Salon
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.lineUrl} target="_blank" rel="noreferrer">
              <MessageCircle />
              LINE予約
            </a>
          </Button>
        </div>
      </header>
      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3 rounded-[1.4rem] border border-white/80 bg-white/88 p-2.5 shadow-[0_-18px_48px_rgba(101,72,76,0.18)] backdrop-blur-xl">
          <div className="flex min-w-0 flex-1 items-center gap-2 pl-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fbf1ee] text-primary">
              <CalendarHeart className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#8f6468]">
                初回相談無料
              </p>
              <p className="mt-0.5 truncate text-[10px] font-medium text-muted-foreground">
                {siteConfig.cta.note}
              </p>
            </div>
          </div>
          <Button asChild size="sm" className="h-10 shrink-0 px-4">
            <a href={siteConfig.lineUrl} target="_blank" rel="noreferrer">
              <MessageCircle />
              {siteConfig.cta.mobileShort}
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
