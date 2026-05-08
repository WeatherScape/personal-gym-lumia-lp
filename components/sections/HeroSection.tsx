import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { VisualPlaceholder } from "@/components/shared/VisualPlaceholder";
import { heroStrengths } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-8 sm:pb-20 sm:pt-12 lg:pb-24">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
        <div>
          <Badge variant="accent" className="mb-5">
            渋谷駅徒歩4分・完全個室
          </Badge>
          <h1 className="text-balance text-[2.35rem] font-bold leading-[1.18] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            一人では続かなかったあなたへ。
            <span className="mt-2 block">
              無理なく変わる、完全個室のパーソナルジム。
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            運動初心者の不安に寄り添いながら、姿勢・食事・習慣を丁寧に整える。
            LUMIAは、初めてのパーソナルトレーニングにちょうどいい上質な場所です。
          </p>
          <CtaButtons className="mt-7 max-w-xl" />
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {heroStrengths.map((strength) => (
              <div
                key={strength}
                className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 shadow-line"
              >
                <CheckCircle2 className="size-4 shrink-0 text-[#2f6b58]" />
                <span className="text-sm font-semibold">{strength}</span>
              </div>
            ))}
          </div>
        </div>
        <VisualPlaceholder
          title="静かで清潔な完全個室"
          subtitle="人目を気にせず、今の体に合ったトレーニングから始められます。"
          className="min-h-[390px]"
        />
      </div>
    </section>
  );
}
