import { CalendarCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { flowSteps } from "@/lib/constants";

export function FlowSection() {
  return (
    <AnimatedSection id="flow" className="soft-rose-band">
      <div className="container">
        <SectionHeading
          eyebrow="Flow"
          title="ご予約から施術後までの流れ"
          description="初めての方が不安なく進めるよう、当日の流れをシンプルに整理しています。"
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[1.35rem] border border-white/80 bg-white/78 p-5 shadow-[0_16px_44px_rgba(101,72,76,0.06)] backdrop-blur"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold text-[#a77b7e]">
                  Step {index + 1}
                </span>
                <CalendarCheck className="size-5 text-primary" />
              </div>
              <h3 className="text-base font-bold">{step.title}</h3>
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
