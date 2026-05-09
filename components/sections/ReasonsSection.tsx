import {
  DoorClosed,
  MessageCircle,
  MessagesSquare,
  ScanFace,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { reasons } from "@/lib/constants";

const iconMap = {
  DoorClosed,
  MessagesSquare,
  Sparkles,
  ScanFace,
  MessageCircle,
  ShieldCheck,
};

export function ReasonsSection() {
  return (
    <AnimatedSection id="reasons" className="soft-rose-band">
      <div className="container">
        <SectionHeading
          eyebrow="Why Lueur"
          title="初めてでも安心して過ごせる理由。"
          description="押し売り感ではなく、相談しやすさと分かりやすさを大切に。個人サロンらしい距離感で、自然なきれいを整えます。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap];
            return (
              <Card
                key={reason.title}
                className="border-white/80 bg-white/80 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <CardContent>
                  <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#fbf1ee] text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
