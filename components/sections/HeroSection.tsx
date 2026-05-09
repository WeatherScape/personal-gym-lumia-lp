import { CheckCircle2, Clock3, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { VisualPlaceholder } from "@/components/shared/VisualPlaceholder";
import { heroStrengths, siteConfig, trustBadges } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="beauty-band relative overflow-hidden pb-14 pt-7 sm:pb-20 sm:pt-12 lg:pb-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <Badge variant="accent" className="mb-4">
            {siteConfig.hero.eyebrow}
          </Badge>
          <h1 className="text-balance text-[2.55rem] font-semibold leading-[1.16] tracking-normal text-[#4b3739] sm:text-6xl lg:text-7xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted-foreground sm:text-lg">
            {siteConfig.hero.subtitle}
          </p>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
            {heroStrengths.map((strength) => (
              <div
                key={strength}
                className="flex items-center gap-2 rounded-full border border-white/80 bg-white/78 px-3.5 py-3 shadow-[0_14px_34px_rgba(101,72,76,0.06)] backdrop-blur"
              >
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                <span className="text-sm font-semibold">{strength}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.6rem] border border-white/80 bg-white/86 p-4 shadow-[0_24px_70px_rgba(101,72,76,0.12)] backdrop-blur sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a77b7e]">
                  {siteConfig.offer.label}
                </p>
                <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <p className="text-xl font-bold">{siteConfig.offer.title}</p>
                  <p className="text-3xl font-semibold tracking-normal text-primary">
                    {siteConfig.offer.price}
                  </p>
                  <p className="pb-1 text-sm font-semibold text-muted-foreground">
                    / {siteConfig.offer.time}
                  </p>
                </div>
              </div>
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#fbf1ee] text-primary">
                <Sparkles className="size-5" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {siteConfig.offer.description}
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {siteConfig.offer.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 rounded-full bg-[#fbf4f1] px-3 py-2 text-xs font-bold text-foreground"
                >
                  <CheckCircle2 className="size-3.5 shrink-0 text-primary" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <CtaButtons className="mt-6 max-w-xl" />
          <p className="mt-3 flex items-start gap-2 text-xs font-semibold leading-6 text-muted-foreground sm:text-sm">
            <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" />
            {siteConfig.hero.reassurance}
          </p>
        </div>

        <div className="space-y-4">
          <VisualPlaceholder
            type="salon"
            title="静かな空間で整える美容時間"
            subtitle="眉・まつげ・フェイシャルを、落ち着いたプライベート空間で相談できます。"
            imageSrc={siteConfig.images.hero}
            imageAlt="白とピンクベージュで整えたプライベート美容サロンの店内"
            objectPosition="center"
            className="min-h-[360px] sm:min-h-[500px]"
          />
          <div className="grid grid-cols-3 gap-2.5">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="rounded-[1.1rem] border border-white/80 bg-white/82 p-3 text-center shadow-[0_12px_32px_rgba(101,72,76,0.07)]"
              >
                <p className="text-lg font-semibold tracking-normal text-primary sm:text-2xl">
                  {badge.value}
                </p>
                <p className="mt-1 text-[10px] font-bold text-muted-foreground sm:text-xs">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
