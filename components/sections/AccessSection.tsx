import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VisualPlaceholder } from "@/components/shared/VisualPlaceholder";
import { accessInfo, siteConfig } from "@/lib/constants";

export function AccessSection() {
  return (
    <AnimatedSection id="access" className="bg-white">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Access"
            title="通いやすさも、続けやすさの一部です。"
            description="渋谷駅から徒歩4分。仕事帰りや買い物の前後にも立ち寄りやすい立地です。"
            className="mb-7"
          />
          <div className="rounded-lg border border-border bg-white p-5 shadow-line sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-md bg-[#eff5f1] text-[#2f6b58]">
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
            <CtaButtons className="mt-6" stacked />
          </div>
        </div>
        <VisualPlaceholder
          type="map"
          title="渋谷駅から徒歩4分"
          subtitle="実案件ではGoogle Map埋め込み、または静的地図画像に差し替えます。"
          className="min-h-[420px]"
        />
      </div>
    </AnimatedSection>
  );
}
