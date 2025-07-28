import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const SolutionsSection = (): JSX.Element => {
  // FAQ category tabs data
  const faqCategories = [
    { id: "general", label: "General", selected: true },
    { id: "services", label: "Services", selected: false },
    { id: "support", label: "Support", selected: false },
    { id: "product", label: "Product", selected: false },
  ];

  // FAQ questions and answers data
  const faqItems = [
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.",
      defaultOpen: true,
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we offer a complimentary 30-minute consultation to discuss your needs and how we can help.",
      defaultOpen: false,
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in technology, healthcare, finance, and education sectors, but our solutions are adaptable to various industries.",
      defaultOpen: false,
    },
    {
      question: "Can I visit your office for a meeting?",
      answer:
        "Yes, you can schedule an in-person meeting at our office. Please contact us in advance to arrange a convenient time.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="relative w-full bg-[#1f1e1b] overflow-hidden py-12 md:py-20">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Background images with proper z-index */}
        <div className="absolute inset-0 z-0">
          <img
            className="absolute w-32 h-36 md:w-[205px] md:h-[219px] top-12 left-2 md:top-[102px] md:left-[12px]"
            alt="Planet"
            src="/planet.svg"
          />

          <img
            className="absolute w-full h-64 md:h-[430px] top-48 md:top-[376px] left-0"
            alt="Vector"
            src="/vector-1-1.svg"
          />

          <img
            className="absolute w-full h-64 md:h-[430px] top-0 left-0"
            alt="Vector"
            src="/vector-1-2.svg"
          />
        </div>

        {/* Content container with higher z-index */}
        <div className="relative z-[5]">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-center font-bold text-xl md:text-[44px] mb-8 md:mb-12 font-['Poppins',Helvetica]">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col w-full max-w-[696px] items-center gap-4 md:gap-[25px]">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid grid-cols-2 md:flex w-full bg-transparent gap-2 md:gap-3 p-0">
                  {faqCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className={`flex-1 py-2 md:py-3 px-3 md:px-5 rounded-[10px] border border-solid text-xs md:text-sm ${
                        category.selected
                          ? "border-[#ee7639] text-[#ee7639] font-semibold"
                          : "border-[#2a2a2a] text-white font-normal"
                      } bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)] font-['Poppins',Helvetica]`}
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="w-full max-w-[696px] max-md:py-12">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-0"
                  className="space-y-3 md:space-y-4"
                >
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={`item-${index}`}
                      value={`item-${index}`}
                      className="rounded-[10px] border border-solid border-[#2a2a2a] bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)] px-4 md:px-6 py-3 md:py-4"
                    >
                      <AccordionTrigger className="font-['Poppins',Helvetica] font-bold text-white text-sm md:text-lg leading-tight md:leading-[21.6px] hover:no-underline text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-['Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-relaxed md:leading-6 pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
