import { CalendarCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { flowSteps } from "@/lib/constants";

export function FlowSection() {
  return (
    <AnimatedSection className="bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Flow"
          title="体験予約から当日まで、迷わず進めます。"
          description="初めての方にもわかりやすいよう、予約後の流れはシンプルにしています。"
        />
        <div className="grid gap-3 lg:grid-cols-5">
          {flowSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-lg border border-border bg-white p-5 shadow-line"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold text-muted-foreground">
                  Step {index + 1}
                </span>
                <CalendarCheck className="size-5 text-[#2f6b58]" />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
