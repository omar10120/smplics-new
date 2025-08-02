import React, { useState, useEffect } from "react";
import { BrandingSection } from "./sections/BrandingSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { LogoStripSection } from "./sections/LogoStripSection";
import { SolutionsSection } from "./sections/SolutionsSection/SolutionsSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const FrameScreen = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if we're in the middle of navigation
      if (isNavigating) return;
      
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavigating]);

  const handleNavClick = (href: string) => {
    const sectionName = href.replace('#', '');
    setActiveSection(sectionName);
    setIsNavigating(true);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Re-enable scroll detection after scroll animation completes
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <StatsSection activeSection={activeSection} onNavClick={handleNavClick} />
      <div id="about">
        <LogoStripSection />
        <BrandingSection />
        <TestimonialsSection />
      </div>
      <div id="services">
        <SolutionsSection />
      </div>
      <div id="contact">
        <HeroSection />
      </div>
      <ContactSection activeSection={activeSection} onNavClick={handleNavClick} />
    </div>
  );
};
