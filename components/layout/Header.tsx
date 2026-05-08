import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/constants";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-4">
          <a href="#" className="shrink-0" aria-label={`${siteConfig.name} top`}>
            <span className="block text-sm font-bold tracking-normal">
              {siteConfig.name}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Private Training Studio
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
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
              体験予約
            </a>
          </Button>
        </div>
      </header>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(20,24,31,0.08)] backdrop-blur-xl sm:hidden">
        <Button asChild size="lg" className="h-12 w-full">
          <a href={siteConfig.lineUrl} target="_blank" rel="noreferrer">
            <MessageCircle />
            LINEで体験予約する
          </a>
        </Button>
      </div>
    </>
  );
}
