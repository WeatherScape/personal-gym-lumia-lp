import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";

export function FaqSection() {
  return (
    <AnimatedSection id="faq" className="bg-[#f7f8f7]">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="よくある質問"
          description="体験前に気になりやすいことをまとめました。ほかにも不安があればLINEで気軽に聞いてください。"
          align="center"
        />
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-white px-5 shadow-line sm:px-7">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  );
}
