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
      <footer className={`relative w-full ${theme === 'dark' ? 'bg-[#1f1e1b]' : 'bg-gray-50'} overflow-hidden py-12 md:py-20`}>
        <div className="relative mx-auto max-w-7xl px-4">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {/* Company info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <span className={`font-bold text-2xl md:text-3xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-[#ee7639]">Smplics</span>.
                </span>
              </div>
              <p className={`font-['Poppins',Helvetica] font-normal ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-sm md:text-base leading-relaxed max-w-sm`}>
                We build readymade websites, mobile applications, and elaborate online business services.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-6">
              <h3 className={`font-['Poppins',Helvetica] font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-base md:text-lg uppercase tracking-wide`}>
                QUICK LINKS
              </h3>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={`quick-link-${index}`}
                    href="#"
                    className={`font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'} text-sm md:text-base transition-colors`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-6">
              <h3 className={`font-['Poppins',Helvetica] font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-base md:text-lg uppercase tracking-wide`}>
                SERVICES
              </h3>
              <nav className="flex flex-col gap-3">
                {services.map((service, index) => (
                  <a
                    key={`service-${index}`}
                    href="#"
                    className={`font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'} text-sm md:text-base transition-colors`}
                  >
                    {service.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social media */}
            <div className="flex flex-col gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={`social-${index}`}
                  href="#"
                  className={`inline-flex items-center gap-3 p-3 ${social.bgColor} rounded-lg hover:opacity-90 transition-opacity`}
                >
                  <img
                    className="w-5 h-5"
                    alt={`${social.name} icon`}
                    src={social.icon}
                  />
                  <span className={`font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-sm`}>
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mt-12 md:mt-16 flex flex-col items-center gap-6">
            <Separator className={`w-full h-px ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'}`} />
            <p className={`font-['Poppins',Helvetica] font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-center text-sm md:text-base`}>
              © 2025- Smplics
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
