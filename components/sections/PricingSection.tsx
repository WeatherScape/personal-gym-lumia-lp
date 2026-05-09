import { Clock, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CtaButtons } from "@/components/shared/CtaButtons";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { menus, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <AnimatedSection id="menu" className="bg-[#fffdfb]">
      <div className="container">
        <SectionHeading
          eyebrow="Menu & Price"
          title="人気メニューと料金"
          description="初めてでも選びやすいよう、時間と料金を分かりやすく。迷う方はLINEで相談してから予約できます。"
          align="center"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className={cn(
                "relative overflow-hidden rounded-[1.6rem] border bg-white p-5 shadow-[0_18px_54px_rgba(101,72,76,0.07)] sm:p-6",
                menu.highlighted
                  ? "border-[#d8b6b1]"
                  : "border-[#ead8d2]",
              )}
            >
              {menu.highlighted ? (
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-[#fbf1ee]" />
              ) : null}
              <div className="relative flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Badge variant="accent" className="mb-3">
                    {menu.label}
                  </Badge>
                  <h3 className="text-xl font-bold text-[#4b3739]">
                    {menu.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold tracking-normal text-primary">
                    {menu.price}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                    <Clock className="size-3.5" />
                    {menu.time}
                  </p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-7 text-muted-foreground">
                {menu.description}
              </p>
              <Button
                asChild
                variant={menu.highlighted ? "default" : "outline"}
                className={cn(
                  "relative mt-5 w-full",
                  !menu.highlighted && "bg-white/90",
                )}
              >
                <a href={siteConfig.lineUrl} target="_blank" rel="noreferrer">
                  <MessageCircle />
                  このメニューで相談する
                </a>
              </Button>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-9 max-w-2xl rounded-[1.6rem] border border-[#ead8d2] bg-[#fff9f7] p-5 shadow-[0_18px_50px_rgba(101,72,76,0.08)] sm:p-6">
          <p className="mb-4 text-center text-sm font-semibold leading-7 text-muted-foreground">
            どのメニューが合うか分からない方は、予約前にLINEで気軽にご相談ください。
          </p>
          <CtaButtons />
        </div>
      </div>
    </AnimatedSection>
  );
}
