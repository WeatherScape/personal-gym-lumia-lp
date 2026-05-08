import {
  HeartHandshake,
  Lock,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { reasons } from "@/lib/constants";

const iconMap = {
  Lock,
  HeartHandshake,
  Utensils,
  ShoppingBag,
  MapPin,
  ShieldCheck,
};

export function ReasonsSection() {
  return (
    <AnimatedSection id="reasons" className="bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Why Lumia"
          title="初めてでも通いやすい理由があります。"
          description="派手な約束より、続けられる環境づくりを大切に。無理なく変わるための小さな不安を一つずつ減らします。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap];
            return (
              <Card key={reason.title} className="bg-white">
                <CardContent>
                  <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-[#eff5f1] text-[#2f6b58]">
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
