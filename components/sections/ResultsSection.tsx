import { Info, Sparkles } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { finishImages, siteConfig } from "@/lib/constants";

export function ResultsSection() {
  return (
    <AnimatedSection className="beauty-band">
      <div className="container">
        <SectionHeading
          eyebrow="Before / After"
          title="仕上がりは、自然な変化を大切に。"
          description="写真が入ったときに魅力が伝わるよう、過度に強い表現ではなく、日常に馴染む変化として見せます。"
        />
        <div className="mb-5 overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/82 shadow-[0_22px_64px_rgba(101,72,76,0.08)] backdrop-blur lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <Image
              src={siteConfig.images.treatment}
              alt="眉スタイリング施術の穏やかなイメージ"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Treatment Image
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-9 text-[#4b3739]">
              施術中の空気感まで、安心材料に。
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              実案件では、施術写真や店内写真を入れることで、Instagramから来たお客様が来店前に雰囲気を想像しやすくなります。
            </p>
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {finishImages.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/82 shadow-[0_22px_64px_rgba(101,72,76,0.08)] backdrop-blur"
            >
              <div className="grid grid-cols-2 gap-px bg-[#ead8d2]">
                <div className="relative min-h-52 bg-[#fbf4f1] p-4">
                  <div className="absolute inset-4 rounded-[1.2rem] bg-[radial-gradient(circle_at_35%_26%,rgba(201,152,154,0.24),transparent_34%),linear-gradient(145deg,#fff,#f5e7e2)]" />
                  <span className="relative rounded-full bg-white/84 px-3 py-1 text-xs font-bold text-muted-foreground">
                    Before
                  </span>
                </div>
                <div className="relative min-h-52 bg-[#f7eee8] p-4">
                  <div className="absolute inset-4 rounded-[1.2rem] bg-[radial-gradient(circle_at_66%_30%,rgba(200,170,115,0.22),transparent_34%),linear-gradient(145deg,#fff,#f4dfdc)]" />
                  <span className="relative rounded-full bg-white/84 px-3 py-1 text-xs font-bold text-primary">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-primary">
                  <Sparkles className="size-4" />
                  {item.title}
                </div>
                <div className="grid gap-2 text-sm leading-7 text-muted-foreground">
                  <p>Before: {item.before}</p>
                  <p>After: {item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 flex gap-2 rounded-[1rem] border border-[#ead8d2] bg-white/72 p-3 text-xs leading-6 text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" />
          仕上がりの感じ方には個人差があります。肌状態や毛質に合わせ、無理のない範囲で施術します。
        </p>
      </div>
    </AnimatedSection>
  );
}
