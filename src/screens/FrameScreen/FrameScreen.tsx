import React from "react";
import { BrandingSection } from "./sections/BrandingSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { LogoStripSection } from "./sections/LogoStripSection";
import { SolutionsSection } from "./sections/SolutionsSection/SolutionsSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <StatsSection />
      <LogoStripSection />
      <BrandingSection />
      <TestimonialsSection />
      <SolutionsSection />
      <HeroSection />
      <ContactSection />
    </div>
  );
};
