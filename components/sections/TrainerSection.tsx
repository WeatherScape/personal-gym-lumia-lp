import { Award, MessageSquareText } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VisualPlaceholder } from "@/components/shared/VisualPlaceholder";
import { trainer } from "@/lib/constants";

export function TrainerSection() {
  return (
    <AnimatedSection className="bg-white">
      <div className="container grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <VisualPlaceholder
          type="trainer"
          title="代表トレーナー 高瀬亮介"
          subtitle="清潔感と親しみが伝わるスタッフ写真に差し替えやすい設計です。"
          className="min-h-[420px]"
        />
        <div>
          <SectionHeading
            eyebrow="Trainer"
            title="安心して相談できる、誠実なパートナーでありたい。"
            description="トレーニングの正解を押しつけるのではなく、その人の生活に合う方法を一緒に探します。"
            className="mb-7"
          />
          <div className="rounded-lg border border-border bg-white p-5 shadow-line sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Award className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{trainer.name}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {trainer.role}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {trainer.career}
            </p>
            <div className="mt-5 rounded-lg bg-[#f7f8f7] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold">
                <MessageSquareText className="size-4 text-[#2f6b58]" />
                メッセージ
              </div>
              <p className="text-sm leading-7">{trainer.message}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
