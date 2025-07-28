import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const ContactSection = (): JSX.Element => {
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
  const socialMedia = [
    { name: "Facebook", icon: "/social-1.svg", bgColor: "bg-[#ffffff14]" },
    { name: "Linkedin", icon: "/social.svg", bgColor: "bg-[#0e76a8]" },
    { name: "Twitter", icon: "/social-2.svg", bgColor: "bg-[#ffffff14]" },
    { name: "Instagram", icon: "/social-3.svg", bgColor: "bg-[#ffffff14]" },
  ];

  return (
    <footer className="relative w-full bg-[#1f1e1b] overflow-hidden py-8 md:py-16">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Background effects */}
        <div className="absolute w-96 h-96 md:w-[799px] md:h-[832px] bottom-0 left-0 bg-[#ee7639] rounded-[186075.62px] blur-[300px] opacity-20" />
        <div className="absolute w-96 h-96 md:w-[799px] md:h-[832px] top-0 right-0 bg-[#ee7639] rounded-[186075.62px] blur-[300px] opacity-20" />

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {/* Company info */}
          <div className="flex flex-col gap-4 md:gap-6 lg:col-span-2">
            <div className="relative w-32 h-12 md:w-[188px] md:h-[75px] bg-[url(/-------------------2025-06-22----14-18-20-3022eabe-1-removebg-pr-1.png)] bg-cover bg-[50%_50%]">
              <img
                className="absolute w-20 h-6 top-3 left-6 md:w-[133px] md:h-9 md:top-5 md:left-11"
                alt="Smplics Logo"
                src="/-------------------2025-06-22----14-18-20-3022eabe-1--traced-.svg"
              />
            </div>
            <p className="font-['Poppins',Helvetica] font-normal text-white text-sm md:text-base leading-relaxed md:leading-6 max-w-md">
              We build readymade websites, mobile
              <br />
              applications, and elaborate online
              <br />
              business services.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="font-['Poppins',Helvetica] font-medium text-white text-sm md:text-base tracking-[0.16px] leading-4">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col">
              {quickLinks.map((link, index) => (
                <a
                  key={`quick-link-${index}`}
                  href="#"
                  className="h-8 md:h-9 py-1 md:py-[5px] font-['Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="font-['Poppins',Helvetica] font-medium text-white text-sm md:text-base tracking-[0.16px] leading-4">
              SERVICES
            </h3>
            <nav className="flex flex-col">
              {services.map((service, index) => (
                <a
                  key={`service-${index}`}
                  href="#"
                  className="h-8 md:h-9 py-1 md:py-[5px] font-['Poppins',Helvetica] font-medium text-white text-sm md:text-base leading-6 hover:text-gray-300 transition-colors"
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
                <span className="font-body-smalls-500 text-gray-00 text-xs md:text-[length:var(--body-smalls-500-font-size)] tracking-[var(--body-smalls-500-letter-spacing)] leading-[var(--body-smalls-500-line-height)]">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 md:mt-16 flex flex-col items-center gap-4 md:gap-8">
          <Separator className="w-full bg-white/20" />
          <p className="font-body-medium-400 text-white text-center text-sm md:text-base">
            © 2025- Smplics
          </p>
        </div>
      </div>
    </footer>
  );
};
