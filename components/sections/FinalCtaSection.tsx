import { ShieldCheck } from "lucide-react";
import { CtaButtons } from "@/components/shared/CtaButtons";

export function FinalCtaSection() {
  return (
    <section id="contact" className="bg-primary px-4 py-14 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-md bg-white/12">
          <ShieldCheck className="size-6" />
        </div>
        <h2 className="text-balance text-3xl font-bold leading-[1.35] tracking-normal sm:text-5xl">
          まずは、今の不安を話すところから。
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
          体験だけでも大丈夫です。料金、雰囲気、続けられるかどうかを確かめてから、あなたに合う通い方を選んでください。
        </p>
        <CtaButtons className="mx-auto mt-8 max-w-2xl [&_a]:bg-white [&_a]:text-primary [&_a:hover]:bg-white/90 [&_a:nth-child(2)]:border-white/25 [&_a:nth-child(2)]:bg-transparent [&_a:nth-child(2)]:text-white [&_a:nth-child(2):hover]:bg-white/10" />
        <p className="mt-5 text-sm font-medium text-white/64">
          無理な勧誘なし。手ぶらOK。初心者の方も歓迎しています。
        </p>
      </div>
    </section>
  );
}
