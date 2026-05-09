import { Award, MessageSquareText, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VisualPlaceholder } from "@/components/shared/VisualPlaceholder";
import { siteConfig, staff } from "@/lib/constants";

export function TrainerSection() {
  return (
    <AnimatedSection className="bg-[#fffdfb]">
      <div className="container grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <VisualPlaceholder
          type="staff"
          title={`Owner ${staff.name}`}
          subtitle="カウンセリングを大切にする、完全予約制のプライベートサロンです。"
          imageSrc={siteConfig.images.staff}
          imageAlt="ベージュの制服を着た架空の美容サロンスタッフ"
          objectPosition="center top"
          className="min-h-[430px]"
        />
        <div>
          <SectionHeading
            eyebrow="Staff"
            title="緊張せず相談できる、やさしい距離感を。"
            description="個人サロンだからこそ、一人ひとりの不安や好みに合わせた提案を大切にしています。"
            className="mb-7"
          />
          <div className="rounded-[1.6rem] border border-[#ead8d2] bg-white p-5 shadow-[0_22px_64px_rgba(101,72,76,0.08)] sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-[#fbf1ee] text-primary">
                <Award className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{staff.name}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {staff.role}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              {staff.career}
            </p>
            <div className="mt-5 rounded-[1.2rem] bg-[#fff9f7] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold">
                <Sparkles className="size-4 text-primary" />
                得意な施術
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                {staff.specialty}
              </p>
            </div>
            <div className="mt-4 rounded-[1.2rem] bg-[#fbf1ee] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold">
                <MessageSquareText className="size-4 text-primary" />
                メッセージ
              </div>
              <p className="text-sm leading-7">{staff.message}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
