import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data
  const testimonial = {
    text: "Without any doubt I recommend Smplics as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else.",
  };

  return (
    <section className="relative w-full bg-[#1f1e1b] overflow-hidden py-12 md:py-20">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Background vectors */}
        <div className="absolute inset-0 z-0">
          <img
            className="absolute w-full h-64 md:h-[430px] bottom-0 left-0"
            alt="Vector background bottom"
            src="/vector-1-1.svg"
          />
          <img
            className="absolute w-full h-64 md:h-[430px] top-0 left-0"
            alt="Vector background top"
            src="/vector-1-2.svg"
          />
        </div>

        {/* Content container */}
        <div className="relative z-[5] flex flex-col items-center gap-8 md:gap-12 py-8 md:py-16">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center gap-4 md:gap-[18px]">
            <div className="p-2.5 flex items-center justify-center">
              <h2 className="text-xl md:text-[44px] font-bold leading-tight md:leading-[54px] text-center font-['Poppins',Helvetica] tracking-[0]">
                <span className="text-white">Why cutomers love</span>
                <span className="text-[#ee7639]"> working with us</span>
              </h2>
            </div>
          </div>

          {/* Testimonial carousel */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full max-w-[850px]">
            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              className="p-0 h-6 md:h-7 w-6 md:w-[30.64px] text-white hover:bg-transparent order-1 md:order-none"
            >
              <ChevronLeftIcon className="h-4 w-4 md:h-5 md:w-5" />
            </Button>

            {/* Testimonial card */}
            <Card className="w-full max-w-[791px] border-[0.74px] border-solid border-[#2a2a2a] rounded-[7.35px] bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)] order-2 md:order-none">
              <CardContent className="p-4 md:p-8 relative">
                <div className="relative w-full">
                  {/* Quote mark top left */}
                  <div className="absolute w-6 md:w-10 h-6 md:h-10 top-0 left-0 rotate-180 z-10">
                    <div className="relative w-2 md:w-3.5 h-3 md:h-[23px] top-1 md:top-2 left-2 md:left-[13px] bg-[url(/vector-16.svg)] bg-[100%_100%]" />
                  </div>

                  {/* Testimonial text with proper spacing */}
                  <div className="mx-auto max-w-full md:w-[545px] mt-8 md:mt-12 mb-8 md:mb-12 font-['Poppins',Helvetica] font-semibold text-white text-sm md:text-lg text-center leading-relaxed md:leading-9 px-4 md:px-0 relative z-20">
                    {testimonial.text}
                  </div>

                  {/* Quote mark bottom right */}
                  <div className="absolute w-6 md:w-10 h-6 md:h-10 bottom-0 right-0 z-10">
                    <div className="relative w-2 md:w-3.5 h-3 md:h-[23px] top-1 md:top-2 left-2 md:left-[13px] bg-[url(/vector-10.svg)] bg-[100%_100%]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              className="p-0 h-6 md:h-7 w-6 md:w-[30.64px] text-white hover:bg-transparent order-3 md:order-none"
            >
              <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
