import { CircleAlert } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { problems } from "@/lib/constants";

export function ProblemsSection() {
  return (
    <AnimatedSection className="bg-[#f7f8f7]">
      <div className="container">
        <SectionHeading
          eyebrow="Before"
          title="こんなお悩みありませんか？"
          description="LUMIAに来られる方の多くは、運動が得意な方ではありません。まずは不安を整理するところから始めます。"
          align="center"
        />
        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem} className="bg-white">
              <CardContent className="flex gap-3 p-4 sm:p-5">
                <CircleAlert className="mt-1 size-5 shrink-0 text-[#7a6651]" />
                <p className="text-sm font-medium leading-7 sm:text-base">
                  {problem}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
