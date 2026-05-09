import { MessageCircle, Sparkles } from "lucide-react";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { siteConfig } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="mauve-surface px-4 py-14 text-primary-foreground sm:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full bg-white/14">
          <Sparkles className="size-6 text-white" />
        </div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/76">
          {siteConfig.concept}
        </p>
        <h2 className="text-balance text-3xl font-semibold leading-[1.35] tracking-normal sm:text-5xl">
          あなたに似合う“きれい”を、静かな空間で。
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
          まずはLINEで、気軽にご相談ください。メニューが決まっていない方も、不安なことがある方も、そのまま送っていただければ大丈夫です。
        </p>
        <CtaButtons className="mx-auto mt-8 max-w-2xl [&_a:first-child]:bg-white [&_a:first-child]:text-primary [&_a:first-child:hover]:bg-white/90 [&_a:nth-child(2)]:border-white/30 [&_a:nth-child(2)]:bg-transparent [&_a:nth-child(2)]:text-white [&_a:nth-child(2):hover]:bg-white/10" />
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/72">
          <MessageCircle className="size-4" />
          予約前のメニュー相談だけでもOK
        </p>
      </div>
    </section>
  );
}
