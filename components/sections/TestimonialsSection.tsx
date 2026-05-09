import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <AnimatedSection className="bg-[#fffdfb]">
      <div className="container">
        <SectionHeading
          eyebrow="Voice"
          title="お客様の声"
          description="初めての方にも、雰囲気や予約のしやすさが伝わるよう、短く読みやすくまとめています。"
          align="center"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.quote} className="border-[#ead8d2] bg-white">
              <CardContent className="p-5 sm:p-6">
                <div className="mb-5 flex gap-1 text-[#c8aa73]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-base font-semibold leading-8">
                  「{testimonial.quote}」
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {testimonial.profile}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
