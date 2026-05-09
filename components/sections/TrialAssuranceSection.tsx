import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { reservationAssurances } from "@/lib/constants";

export function TrialAssuranceSection() {
  return (
    <AnimatedSection className="mauve-surface text-white">
      <div className="container grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            eyebrow="Before Booking"
            title="はじめての方も、安心してご予約ください。"
            description="メニューが決まっていなくても大丈夫。予約前の相談から、当日の料金案内まで分かりやすく整えています。"
            className="mb-7 [&_div]:border-white/25 [&_div]:bg-white/12 [&_div]:text-white [&_h2]:text-white [&_p]:text-white/78"
          />
          <CtaButtons className="max-w-xl [&_a:first-child]:bg-white [&_a:first-child]:text-primary [&_a:first-child:hover]:bg-white/90 [&_a:nth-child(2)]:border-white/30 [&_a:nth-child(2)]:bg-transparent [&_a:nth-child(2)]:text-white [&_a:nth-child(2):hover]:bg-white/10" />
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/76">
            <MessageCircle className="size-4 text-white" />
            LINEで質問だけでも歓迎しています。
          </p>
        </div>
        <Card className="border-white/18 bg-white/12 text-white shadow-[0_24px_70px_rgba(67,41,45,0.22)] backdrop-blur">
          <CardContent className="p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-white text-primary">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="text-lg font-bold">予約前の安心ポイント</p>
                <p className="mt-1 text-sm text-white/68">
                  初めての方が不安になりやすい点を、先に確認できます。
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reservationAssurances.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-3 py-3 text-sm font-semibold"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-white" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
