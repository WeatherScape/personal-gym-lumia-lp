import {
  Eye,
  Map,
  Sparkles,
  UserRound,
  WandSparkles,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type VisualPlaceholderProps = {
  type?: "salon" | "staff" | "map" | "finish" | "beauty" | "trainer" | "gym" | "result";
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  objectPosition?: string;
  className?: string;
};

const icons = {
  salon: Sparkles,
  staff: UserRound,
  map: Map,
  finish: Eye,
  beauty: WandSparkles,
  trainer: UserRound,
  gym: Sparkles,
  result: Eye,
};

export function VisualPlaceholder({
  type = "salon",
  title,
  subtitle,
  imageSrc,
  imageAlt,
  objectPosition = "center",
  className,
}: VisualPlaceholderProps) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/80 bg-[#f9efeb] shadow-[0_30px_90px_rgba(101,72,76,0.14)]",
        className,
      )}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          priority={type === "salon"}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,255,255,0.34)),radial-gradient(circle_at_18%_12%,rgba(201,152,154,0.32),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(200,170,115,0.2),transparent_34%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3d292d]/42 via-transparent to-white/4" />
      <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-white/50 bg-white/18 backdrop-blur-sm" />
      <div className="absolute left-5 top-5 flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#c9989a]" />
        <span className="size-2.5 rounded-full bg-[#e6c9c3]" />
        <span className="size-2.5 rounded-full bg-white" />
      </div>
      <div className="relative flex min-h-[320px] flex-col justify-end p-5 sm:min-h-[430px] sm:p-7">
        {!imageSrc ? (
          <div className="mb-8 grid grid-cols-[0.86fr_1.14fr] gap-3">
            <div className="space-y-3 pt-12">
              <div className="h-28 rounded-[1.4rem] bg-white/76 shadow-line sm:h-40" />
              <div className="h-16 rounded-full bg-[#d9b2ae]/50" />
            </div>
            <div className="h-56 rounded-[7rem_7rem_1.6rem_1.6rem] bg-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9),0_18px_48px_rgba(101,72,76,0.08)] sm:h-72" />
          </div>
        ) : null}
        <div className="rounded-[1.4rem] border border-white/70 bg-white/86 p-4 shadow-line backdrop-blur">
          <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#fbf1ee] text-primary">
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
