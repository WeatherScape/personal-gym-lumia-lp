import { Heart } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { problems } from "@/lib/constants";

export function ProblemsSection() {
  return (
    <AnimatedSection id="problems" className="bg-[#fffdfb]">
      <div className="container">
        <SectionHeading
          eyebrow="Concerns"
          title="こんなお悩みありませんか？"
          description="美容サロンに行く前の小さな不安も、きれいになりたい気持ちも、どちらも大切に受け止めます。"
          align="center"
        />
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-[1.35rem] border border-[#ead8d2] bg-[#fff9f7] p-4 shadow-[0_14px_38px_rgba(101,72,76,0.05)] sm:p-5"
            >
              <div className="mb-4 flex size-9 items-center justify-center rounded-full bg-white text-primary">
                <Heart className="size-4" />
              </div>
              <p className="text-sm font-semibold leading-7 sm:text-base">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
