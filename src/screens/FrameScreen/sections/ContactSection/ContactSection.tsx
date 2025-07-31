import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ThemeToggle } from "../../../../components/ui/theme-toggle";
import { useTheme } from "../../../../contexts/ThemeContext";

export const ContactSection = (): JSX.Element => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

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

  // Social media icons
  // const socialIcons = [
  //   "/social-icon-2.svg",
  //   "/social-icon-1.svg",
  //   "/social-icon-8.svg",
  //   "/social-icon-3.svg",
  //   "/social-icon-9.svg",
  //   "/social-icon.svg",
  // ];

  // // Navigation links
  // const navLinks = [
  //   { name: "Home", href: "#home" },
  //   { name: "About", href: "#about" },
  //   { name: "Services", href: "#services" },
  //   { name: "Contact", href: "#contact" },
  // ];

  // Quick links data
  const quickLinks = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Contact" },
  ];

  // Services data
  const services = [
    { name: "UI/UX Design" },
    { name: "Branding" },
    { name: "llustration" },
    { name: "Design Concept" },
    { name: "App Design" },
  ];

  // Social media data

  const socialMedia = theme === 'dark' ? [
    { name: "Facebook", icon: "/social-1.svg", bgColor: "bg-[#ffffff14]" },
    { name: "Linkedin", icon: "/social.svg", bgColor: "bg-[#0e76a8]" },
    { name: "Twitter", icon: "/social-2.svg", bgColor: "bg-[#ffffff14]" },
    { name: "Instagram", icon: "/social-3.svg", bgColor: "bg-[#ffffff14]" },
  ]:[
    { name: "Facebook", icon: "/social-1-w.svg", bgColor: "bg-[#ffffff14]" },
    { name: "Linkedin", icon: "/social.svg", bgColor: "bg-[#0e76a8]" },
    { name: "Twitter", icon: "/social-2-w.svg", bgColor: "bg-[#ffffff14]" },
    { name: "Instagram", icon: "/social-3-w.svg", bgColor: "bg-[#ffffff14]" },
  ];

  // Handle navigation click
  const handleNavClick = (href: string) => {
    const sectionName = href.replace('#', '');
    setActiveSection(sectionName);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
  }, []);

  return (
    <section className="w-full">
   

      {/* Footer */}
      <footer className={`relative w-full ${theme === 'dark' ? 'bg-[#1f1e1b]' : 'bg-gray-50'} overflow-hidden py-8 md:py-16`}>
        <div className="relative mx-auto max-w-7xl px-4">
          {/* Background effects */}
          <div className="absolute w-96 h-96 md:w-[799px] md:h-[832px] bottom-0 left-0 bg-[#ee7639] rounded-[186075.62px] blur-[300px] opacity-20" />
          <div className="absolute w-96 h-96 md:w-[799px] md:h-[832px] top-0 right-0 bg-[#ee7639] rounded-[186075.62px] blur-[300px] opacity-20" />

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {/* Company info */}
            <div className="flex flex-col gap-4 md:gap-6 lg:col-span-2">
              {theme === 'dark'? (
                <div className="relative w-32 h-12 md:w-[188px] md:h-[75px] bg-[url(/-------------------2025-06-22----14-18-20-3022eabe-1-removebg-pr-1.png)] bg-cover bg-[50%_50%]"></div>  
              ):(
                <div className="relative w-32 h-12 md:w-[188px] md:h-[75px] bg-[url(/Frame-1597883697.png)] bg-cover bg-[50%_50%]"></div>
              )}
              
                {/* {theme === 'dark' ? (
                  <img
                  className="absolute w-20 h-6 top-3 left-6 md:w-[133px] md:h-9 md:top-5 md:left-11"
                  alt="Smplics Logo"
                  src="/-------------------2025-06-22----14-18-20-3022eabe-1--traced-.svg"
                />
                  
                ):
                <img
                  className="absolute w-20 h-6 top-3 left-6 md:w-[133px] md:h-9 md:top-5 md:left-11"
                  alt="Smplics Logo"
                  src="/-------------------2025-06-22----14-18-20-3022eabe-1--traced-w.svg"
                />
                } */}
                
              
              <p className={`font-['Poppins',Helvetica] font-normal ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-sm md:text-base leading-relaxed md:leading-6 max-w-md`}>
                We build readymade websites, mobile
                <br />
                applications, and elaborate online
                <br />
                business services.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className={`font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm md:text-base tracking-[0.16px] leading-4`}>
                QUICK LINKS
              </h3>
              <nav className="flex flex-col">
                {quickLinks.map((link, index) => (
                  <a
                    key={`quick-link-${index}`}
                    href="#"
                    className={`h-8 md:h-9 py-1 md:py-[5px] font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'} text-sm md:text-base leading-6 transition-colors`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className={`font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm md:text-base tracking-[0.16px] leading-4`}>
                SERVICES
              </h3>
              <nav className="flex flex-col">
                {services.map((service, index) => (
                  <a
                    key={`service-${index}`}
                    href="#"
                    className={`h-8 md:h-9 py-1 md:py-[5px] font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'} text-sm md:text-base leading-6 transition-colors`}
                  >
                    {service.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social media */}
            <div className="flex flex-col gap-2 md:gap-3 md:col-span-1 lg:col-span-1">
              {socialMedia.map((social, index) => (
                <a
                  key={`social-${index}`}
                  href="#"
                  className={`inline-flex items-center gap-2 md:gap-2.5 p-2 md:p-3 ${social.bgColor} rounded-[5px] hover:opacity-90 transition-opacity`}
                >
                  <img
                    className="w-4 h-4 md:w-5 md:h-5"
                    alt={`${social.name} icon`}
                    src={social.icon}
                  />
                  <img
                    className="w-px h-4 md:h-5 object-cover"
                    alt="Line"
                    src="/line-1.svg"
                  />
                  <span className={`font-body-smalls-500 ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-xs md:text-[length:var(--body-smalls-500-font-size)] tracking-[var(--body-smalls-500-letter-spacing)] leading-[var(--body-smalls-500-line-height)]`}>
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-8 md:mt-16 flex flex-col items-center gap-4 md:gap-8">
            <Separator className={`w-full ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
            <p className={`font-body-medium-400 ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-center text-sm md:text-base`}>
              © 2025- Smplics
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
