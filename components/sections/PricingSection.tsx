import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { pricingPlans } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <AnimatedSection id="pricing" className="bg-[#f7f8f7]">
      <div className="container">
        <SectionHeading
          eyebrow="Price"
          title="まずは体験で、雰囲気と相性を確かめてください。"
          description="料金はわかりやすく。体験後に必要なプランだけをご案内します。"
          align="center"
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative bg-white",
                plan.highlighted && "border-primary shadow-soft",
              )}
            >
              <CardContent className="flex h-full flex-col">
                {plan.highlighted ? (
                  <Badge className="mb-4 w-fit">おすすめ</Badge>
                ) : (
                  <div className="mb-4 h-7" />
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold tracking-normal">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm font-semibold text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#2f6b58]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <CtaButtons className="mx-auto mt-8 max-w-2xl" />
      </div>
    </AnimatedSection>
  );
}
