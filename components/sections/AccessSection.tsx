import { ExternalLink, Instagram, MapPin, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VisualPlaceholder } from "@/components/shared/VisualPlaceholder";
import { Button } from "@/components/ui/button";
import { accessInfo, siteConfig } from "@/lib/constants";

export function AccessSection() {
  return (
    <AnimatedSection id="access" className="soft-rose-band">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Access"
            title="表参道駅から徒歩5分。静かなプライベートサロンです。"
            description="ご予約確定後に、詳しい道案内もLINEでお送りします。仕事帰りや買い物の前後にも立ち寄りやすい立地です。"
            className="mb-7"
          />
          <div className="rounded-[1.6rem] border border-white/80 bg-white/82 p-5 shadow-[0_20px_60px_rgba(101,72,76,0.08)] backdrop-blur sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#fbf1ee] text-primary">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="font-bold">{siteConfig.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.station}
                </p>
              </div>
            </div>
            <dl className="space-y-4">
              {accessInfo.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 border-t border-border pt-4 sm:grid-cols-[88px_1fr]"
                >
                  <dt className="text-sm font-bold">{item.label}</dt>
                  <dd className="text-sm leading-7 text-muted-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Button asChild variant="outline" size="lg" className="bg-white">
                <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
                  Map
                  <ExternalLink />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                  Instagram
                </a>
              </Button>
              <Button asChild size="lg">
                <a href={siteConfig.lineUrl} target="_blank" rel="noreferrer">
                  <MessageCircle />
                  LINE予約
                </a>
              </Button>
            </div>
            <CtaButtons className="mt-4 sm:hidden" stacked />
          </div>
        </div>
        <VisualPlaceholder
          type="map"
          title="Omotesando / Private Room"
          subtitle="淡い光が入る、落ち着いた雰囲気の小さなサロン。写真や地図に差し替えて使えます。"
          imageSrc={siteConfig.images.vanity}
          imageAlt="美容サロンの上品な洗面台とスキンケア小物"
          objectPosition="center"
          className="min-h-[430px]"
        />
      </div>
    </AnimatedSection>
  );
}
