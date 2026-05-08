import { Dumbbell, Map, Sparkles, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type VisualPlaceholderProps = {
  type?: "gym" | "trainer" | "map" | "result";
  title: string;
  subtitle?: string;
  className?: string;
};

const icons = {
  gym: Dumbbell,
  trainer: UserRound,
  map: Map,
  result: Sparkles,
};

export function VisualPlaceholder({
  type = "gym",
  title,
  subtitle,
  className,
}: VisualPlaceholderProps) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-[#f7f6f2] shadow-soft",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-16 bg-white/70" />
      <div className="absolute left-5 top-5 flex gap-1.5">
        <span className="size-2 rounded-full bg-[#d8d2c6]" />
        <span className="size-2 rounded-full bg-[#c7d8cf]" />
        <span className="size-2 rounded-full bg-[#151922]" />
      </div>
      <div className="flex min-h-[300px] flex-col justify-end p-5 sm:min-h-[420px] sm:p-7">
        <div className="mb-8 grid grid-cols-[1.1fr_0.9fr] gap-3">
          <div className="h-40 rounded-md bg-white shadow-line sm:h-56" />
          <div className="space-y-3">
            <div className="h-20 rounded-md bg-[#dfe7e1]" />
            <div className="h-24 rounded-md bg-white shadow-line sm:h-32" />
          </div>
        </div>
        <div className="rounded-lg bg-white/92 p-4 shadow-line backdrop-blur">
          <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Icon className="size-5" />
          </div>
          <p className="text-lg font-bold leading-7">{title}</p>
          {subtitle ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
