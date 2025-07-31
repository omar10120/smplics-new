import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ThemeToggle } from "../../../../components/ui/theme-toggle";
import { useTheme } from "../../../../contexts/ThemeContext";
import { themes } from "../../../../lib/utils";

interface StatsSectionProps {
  activeSection: string;
  onNavClick: (href: string) => void;
}

export const StatsSection = ({ activeSection, onNavClick }: StatsSectionProps): JSX.Element => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  
  // Contact information data
  const contactInfo = theme === 'dark' ? [
    {
      icon: "/vector-3.svg",
      text: "info@smplics.com",
    },
    {
      icon: "/vector-2.svg",
      text: "+(971) 58584-0433",
    },
  ]:[
    {
      icon: "/vector-3-w.svg",
      text: "info@smplics.com",
    },
    {
      icon: "/vector-2-w.svg",
      text: "+(971) 58584-0433",
    },
    
  ];

  // Social media icons - conditional based on theme
  const socialIcons = theme === 'dark' ? [
    "/social-icon-2.svg",
    "/social-icon-1.svg",
    "/social-icon-8.svg",
    "/social-icon-3.svg",
    "/social-icon-9.svg",
    "/social-icon.svg",
  ] : [ 
    "/social-icon-2-w.svg",
    "/social-icon-1-w.svg",
    "/social-icon-8-w.svg",
    "/social-icon-3-w.svg",
    "/social-icon-9-w.svg",
    "/social-icon-w.svg",
  ];

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Stats cards data
  const statsCards = [
    {
      value: "15+",
      label: "Websites build",
    },
    {
      value: "20%",
      label: "Client satisfaction",
    },
    {
      value: "15+",
      label: "Team members",
    },
    {
      value: "100+",
      label: "Amazing clients",
    },
  ];

  return (
    <section id="home" className="w-full">
      {/* Top contact bar */}
      <header className={`w-full ${currentTheme.background} py-3 md:py-5`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4">
          <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm">
            {contactInfo.map((item, index) => (
              <div key={`contact-${index}`} className="flex items-center gap-2">
                <div className="relative w-3.5 h-3.5">
                  <img
                    className="w-full h-full"
                    alt="Contact icon"
                    src={item.icon}
                  />
                </div>
                <span className={`font-normal text-[13.1px] leading-[21px] ${currentTheme.text} font-['Poppins',Helvetica]`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {socialIcons.map((icon, index) => (
              <img
                key={`social-${index}`}
                className="w-3 h-3 md:w-[15.32px] md:h-[15.32px]"
                alt="Social icon"
                src={icon}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main navigation */}
      <nav className={`w-full ${currentTheme.background} py-2 md:py-4 sticky top-0 z-50`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-4">
          {theme === 'dark' ? (
            <div className="w-32 h-12 md:w-[188px] md:h-[75px] bg-[url(/-------------------2025-06-22----14-18-20-3022eabe-1-removebg-pr-1.png)] bg-cover bg-center">
            {/* <img
              className="w-20 h-6 mt-3 ml-6 md:w-[133px] md:h-9 md:mt-5 md:ml-11"
              alt="Logo"
              src="/-------------------2025-06-22----14-18-20-3022eabe-1--traced-.svg"
            /> */}
          </div>  
          ):(
<div className="w-32 h-12 md:w-[188px] md:h-[75px] bg-[url(/Frame-1597883697.png)] bg-cover bg-center">
            {/* <img
              className="w-20 h-6 mt-3 ml-6 md:w-[133px] md:h-9 md:mt-5 md:ml-11"
              alt="Logo"
              src="/-------------------2025-06-22----14-18-20-3022eabe-1--traced-.svg"
            /> */}
          </div>
          )}
          

          <div className="flex items-center gap-4 md:gap-6">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button 
                  key={`nav-${index}`} 
                  onClick={() => onNavClick(link.href)}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <span
                    className={`font-normal text-sm md:text-base text-center leading-[22px] font-['Poppins',Helvetica] ${
                      isActive ? "text-[#ee7639]" : currentTheme.text
                    } hover:text-[#ee7639] transition-colors`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <Separator className="w-[25px] h-[3px] bg-[#ee7639] rounded-[3px] mt-1.5" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <Button 
              onClick={() => onNavClick('#contact')}
              className="bg-[#ee7639] text-f-5f-5f-4 rounded-[80px] shadow-[0px_22px_44px_#ee763966] h-8 md:h-10 px-3 md:px-4 text-xs md:text-sm"
            >
              <span className="font-semibold">Get in touch</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className={`w-full ${currentTheme.background} overflow-hidden`}>
        {/* Hero content with background images */}
        <div className="relative">
          {/* Background images - only for hero content */}
          <div className="absolute inset-0 z-0">
            {theme === 'dark' && (
              <img className="w-full h-full object-cover" alt="Vector" src="/vector-2-1.svg" />
            )}
            <img
              className="absolute top-4 left-4 md:top-[2px] md:left-[51px] w-full h-full object-cover"
              alt="Ellipse"
              src="/ellipse-8.svg"
            />
          </div>

          {/* Content container */}
          <div className="container mx-auto px-4 relative z-[5]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-8 md:py-16">
              <div className="flex flex-col gap-4 md:gap-[18px] max-w-full md:max-w-[650px]">
                <div className="flex items-center">
                  <h1 className={`${currentTheme.text} text-2xl md:text-[44px] font-bold leading-tight md:leading-[54px] font-['Poppins',Helvetica]`}>
                    Build the Future. Digitally
                  </h1>
                  <img
                    className="w-4 h-4 md:w-[21.87px] md:h-[21.86px] ml-2 flex-shrink-0"
                    alt="Vector"
                    src="/vector-1.svg"
                  />
                </div>

                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm md:text-base font-normal leading-relaxed md:leading-[26.9px] font-['Poppins',Helvetica]`}>
                  We Craft Powerful Digital Experiences That Turn Ambitious Ideas
                  Into Real Growth.
                  <br />
                  et&apos;s Design, Develop, And Scale Your Digital
                  Success—together.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-2">
                  <Button 
                    onClick={() => onNavClick('#services')}
                    className="bg-[#ee7639] text-f-5f-5f-4 rounded-[80px] shadow-[0px_22px_44px_#ee763966] h-10 md:h-12 px-4 w-full sm:w-auto"
                  >
                    <span className="font-semibold text-xs md:text-sm">
                      Explore Our Services
                    </span>
                  </Button>
                  <Button
                    onClick={() => onNavClick('#contact')}
                    variant="outline"
                    className={`border-[#ee7639] text-[#ee7639] rounded-[80px] shadow-[0px_22px_44px_#ee763966] h-10 md:h-12 px-4 w-full sm:w-auto ${theme === 'dark' ? 'hover:bg-[#ee7639]/10' : 'hover:bg-[#ee7639]/5'}`}
                  >
                    <span className="font-semibold text-xs md:text-sm text-[#ee7639]">Let&apos;s Talk</span>
                  </Button>
                </div>
              </div>

              <div className="flex-shrink-0 relative">
                <div className={`absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-8 md:w-[110px] md:h-[54px] ${theme === 'dark' ? 'bg-yellow-50' : 'bg-yellow-100'} rounded-md shadow-lg`}>
                  <div className="flex items-center justify-center h-full">
                    <img
                      className="w-3 h-3 md:w-5 md:h-[19px]"
                      alt="Vector"
                      src="/vector-4.svg"
                    />
                    <span className="ml-1 md:ml-2 font-website-body-body-extra-large-bold text-ee-7639 text-sm md:text-base">
                      4,8
                    </span>
                  </div>
                </div>
                <img
                  className="w-48 h-36 md:w-[303px] md:h-[227px]"
                  alt="Vector"
                  src="/vector-6.svg" 
                />
              </div>


            </div>
          </div>
        </div>

        {/* About section with stats */}
        <div id="about" className="container mx-auto py-8 md:py-16 px-4">
          <div className="flex flex-col items-center gap-8 md:gap-[69px] max-w-full md:max-w-[967px] mx-auto">
            <div className="flex flex-col items-center gap-4 md:gap-[18px] text-center">
              <p className="font-bold text-ee-7639 text-sm md:text-base leading-[26.9px] font-['Poppins',Helvetica]">
                About Us
              </p>
              <div className="flex items-center">
                <h2 className={`${currentTheme.text} text-2xl md:text-[44px] font-bold leading-tight md:leading-[22px] font-['Poppins',Helvetica]`}>
                  Simple. Smart. Impactful
                </h2>
                <img
                  className="w-4 h-4 md:w-[21.87px] md:h-[21.86px] ml-2 flex-shrink-0"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm md:text-base font-normal leading-relaxed md:leading-[26.9px] text-center max-w-full md:max-w-[762px] font-['Poppins',Helvetica]`}>
                At Smplics, We Turn Complex Digital Challenges Into Elegant,
                Powerful Solutions.
                <br /> We&apos;re Not Just A Team Of Designers And Developers —
                We&apos;re Strategic Thinkers, Builders, And Creators Who
                Believe That Great Work Starts With Clarity And Ends With
                Measurable Impact.
                <br />
                from Startups To Enterprises, We Partner With Brands That Want
                More Than Just A &quot;pretty&quot; Product. We Design Digital
                Experiences That Look Sharp, Run Fast, And Deliver Results.
                <br />
                we Don&apos;t Overcomplicate.
                <br /> We Don&apos;t Overpromise.
                <br /> We Just Make It Work — Beautifully.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[60px] w-full">
              {statsCards.map((card, index) => (
                <Card
                  key={`stat-${index}`}
                  className={`rounded-[7.35px] border-[0.74px] border-solid ${theme === 'dark' ? 'border-[#2a2a2a] bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)]' : 'border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow'}`}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4 md:p-8">
                    <span className="font-display-8-semi-bold text-[#ee7639] mt-[-0.74px] text-lg md:text-2xl">
                      {card.value}
                    </span>
                    <span className={`font-['Poppins',Helvetica] font-semibold ${currentTheme.text} text-xs md:text-base text-center leading-tight md:leading-[22px]`}>
                      {card.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
