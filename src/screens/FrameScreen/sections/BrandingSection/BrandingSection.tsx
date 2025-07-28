import React from "react";
import { Button } from "../../../../components/ui/button";

export const BrandingSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#1f1e1b] overflow-hidden py-2 md:py-6 ">
      <div className="relative w-full max-w-[2202px] mx-auto px-4">
        {/* Background elements */}
        <div className="relative">
          <img
            className="absolute w-32 h-36 md:w-[205px] md:h-[219px] top-12 left-2 md:top-[102px] md:left-[12px]"
            alt="Planet"
            src="/planet.svg"
          />

          <img
            className="relative w-full max-w-[1498px] h-64 md:h-[430px] mx-auto mt-64 md:mt-[490px]"
            alt="Vector"
            src="/vector-1-1.svg"
          />

          <div className="relative w-full mt-12 md:mt-[80px]">
            <img
              className="w-full max-w-[2202px] h-48 md:h-[378px] mx-auto"
              alt="Background"
              src="/bg.svg"
            />

            <img
              className="relative w-full max-w-[1498px] h-64 md:h-[430px] mx-auto -mt-48 md:-mt-[430px]"
              alt="Vector"
              src="/vector-1-2.svg"
            />

            <div className="absolute w-96 h-96 md:w-[799px] md:h-[832px] top-48 md:top-[356px] left-1/2 -translate-x-1/2 bg-ee-7639 rounded-[186075.62px] blur-[300px] opacity-20" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Text content */}
          <div className="flex flex-col items-center justify-center gap-4 text-center max-w-full md:max-w-[762px] mb-8 md:mb-12 px-4">
            <p className="font-['Poppins',Helvetica] font-bold text-ee-7639 text-sm md:text-base leading-[26.9px]">
              Our Work
            </p>

            <div className="py-2.5 inline-flex items-center justify-center gap-2.5">
              <h2 className="font-['Poppins',Helvetica] font-bold text-white text-xl md:text-4xl leading-tight md:leading-[54px] text-center">
                Real results. Clean execution
              </h2>
              <img
                className="w-4 h-4 md:w-[21.87px] md:h-[21.86px]"
                alt="Vector"
                src="/vector-1.svg"
              />
            </div>

            <p className="font-['Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-relaxed md:leading-[26.9px] max-w-full md:max-w-[565px]">
              We Craft Digital Products That Solve Real Problems And Drive
              Growth.
              <br /> From Smart Interfaces To Powerful Platforms — Our Work
              Speaks For Itself.
            </p>
          </div>

          {/* Device mockups */}
          <div className="relative w-full max-w-[1247px] h-48 md:h-[319px] mb-8 md:mb-16 px-4">
            <img
              className="w-full h-full"
              alt="Device mockups"
              src="/frame-1000005850.svg"
            />
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#ee7639] text-f-5f-5f-4 rounded-[80px] h-10 md:h-12 px-6 md:px-8 font-['Poppins',Helvetica] font-semibold text-xs md:text-sm shadow-[0px_22px_44px_#ee763966] hover:bg-[#ee7639]/90"
          >
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
};
