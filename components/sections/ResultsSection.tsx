import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VisualPlaceholder } from "@/components/shared/VisualPlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { results } from "@/lib/constants";

export function ResultsSection() {
  return (
    <AnimatedSection className="bg-[#f7f8f7]">
      <div className="container">
        <SectionHeading
          eyebrow="Change"
          title="数字だけでなく、続けられる実感を。"
          description="変化には個人差があります。LUMIAでは、短期的な無理よりも、生活に残る習慣づくりを重視しています。"
        />
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <VisualPlaceholder
            type="result"
            title="姿勢・体型・生活リズムの変化"
            subtitle="初回カウンセリングで目標を明確にし、定期的に進捗を確認します。"
            className="min-h-[360px]"
          />
          <div className="grid gap-4">
            {results.map((result) => (
              <Card key={result.profile} className="bg-white">
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        {result.profile}
                      </p>
                      <p className="mt-2 text-3xl font-bold tracking-normal">
                        {result.change}
                        <span className="ml-2 text-sm font-semibold text-muted-foreground">
                          / {result.period}
                        </span>
                      </p>
                    </div>
                    <ArrowUpRight className="size-5 text-[#2f6b58]" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    悩み: {result.concern}
                  </p>
                  <p className="mt-3 rounded-md bg-[#f7f8f7] p-4 text-sm leading-7">
                    「{result.comment}」
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
