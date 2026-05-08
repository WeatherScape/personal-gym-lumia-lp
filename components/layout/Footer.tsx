import { Instagram, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#f7f8f7] pb-24 pt-10 sm:pb-10">
      <div className="container grid gap-8 sm:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-base font-bold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            初めての方が安心して通える、完全個室のパーソナルジム。
            体験予約、見学、料金の相談はLINEからお気軽にどうぞ。
          </p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground sm:text-right">
          <p>{siteConfig.address}</p>
          <p>{siteConfig.hours}</p>
          <div className="flex gap-3 sm:justify-end">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-foreground"
            >
              <Instagram className="size-4" />
              Instagram
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-foreground"
            >
              <MapPin className="size-4" />
              Google Map
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-10 text-xs text-muted-foreground">
        © 2026 {siteConfig.name}. Sample landing page.
      </div>
    </footer>
  );
}
