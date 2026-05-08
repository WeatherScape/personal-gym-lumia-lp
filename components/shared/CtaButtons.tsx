import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CtaButtonsProps = {
  className?: string;
  stacked?: boolean;
};

export function CtaButtons({ className, stacked = false }: CtaButtonsProps) {
  return (
    <div
      className={cn(
        "flex w-full gap-3",
        stacked ? "flex-col" : "flex-col sm:flex-row",
        className,
      )}
    >
      <Button asChild size="lg" className="min-h-12 flex-1">
        <a href={siteConfig.lineUrl} target="_blank" rel="noreferrer">
          <MessageCircle />
          LINEで体験予約する
        </a>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="min-h-12 flex-1 bg-white"
      >
        <a href={siteConfig.contactUrl}>
          フォームで相談する
          <ArrowRight />
        </a>
      </Button>
    </div>
  );
}
