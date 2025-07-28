import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";
import { useTheme } from "../../../../contexts/ThemeContext";

export const HeroSection = (): JSX.Element => {
  const { theme } = useTheme();
  
  // Social media icons data
  const socialIcons = [
    { src: "/social-icon-2.svg", alt: "Facebook" },
    { src: "/social-icon-1.svg", alt: "Twitter" },
    { src: "/social-icon-6.svg", alt: "Instagram" },
    { src: "/social-icon-3.svg", alt: "LinkedIn" },
    { src: "/social-icon-9.svg", alt: "Google" },
    { src: "/social-icon.svg", alt: "YouTube" },
  ];

  // Contact info items
  const contactInfo = [
    {
      icon: "/vector-24.svg",
      label: "Location",
    },
    {
      icon: "/vector-13.svg",
      label: "Email",
    },
    {
      icon: "/vector-18.svg",
      label: "123 456 789",
    },
  ];

  return (
    <section id="contact" className={`relative w-full ${theme === 'dark' ? 'bg-[#1f1e1b]' : 'bg-white'} overflow-hidden py-12 md:py-20`}>
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <img
            className="absolute w-32 h-36 md:w-[205px] md:h-[219px] top-12 left-4 md:top-[102px] md:left-[392px]"
            alt="Planet"
            src="/planet.svg"
          />
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
        <div className="relative z-[5] flex flex-col items-center gap-8 md:gap-[18px] mb-8 md:mb-12">
          {/* Title */}
          <div className="flex items-center justify-center gap-2.5">
            <h2 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-center font-bold text-xl md:text-[44px] leading-tight md:leading-[54px] font-['Poppins',Helvetica] tracking-[0]`}>
              Contact us
            </h2>
            <img
              className="w-4 h-4 md:w-[21.87px] md:h-[21.86px]"
              alt="Star icon"
              src="/vector-1.svg"
            />
          </div>
        </div>

        {/* Main content - two column layout */}
        <div className="relative z-[5] flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
          {/* Left side - Contact Information Panel */}
          <div className="w-full lg:w-1/3">
            <Card className={`w-full h-[400px] md:h-[500px] rounded-[34.81px] border-none ${theme === 'dark' ? 'bg-gradient-to-b from-[#2a2a2a]/60 via-[#8B4513]/15 to-[#D2691E]/25' : 'bg-gradient-to-b from-gray-50 via-orange-50 to-orange-100'} relative overflow-hidden backdrop-blur-md before:content-[''] before:absolute before:inset-0 before:rounded-[34.81px] ${theme === 'dark' ? 'before:bg-gradient-to-b before:from-[#2a2a2a]/40 before:via-[#8B4513]/8 before:to-[#D2691E]/15' : 'before:bg-gradient-to-b before:from-gray-50/80 before:via-orange-50/60 before:to-orange-100/40'} after:content-[''] after:absolute after:inset-0 after:rounded-[34.81px] after:border-t-[0.3px] after:border-l-[0.3px] after:border-r-[0.3px] after:border-solid ${theme === 'dark' ? 'after:border-white/15 after:shadow-[0_0_15px_rgba(255,255,255,0.08)]' : 'after:border-orange-200/30 after:shadow-[0_0_15px_rgba(238,118,57,0.1)]'}`}>
              <CardContent className="p-6 md:p-8 h-full flex flex-col relative z-10">
                {/* Contact info - positioned in upper portion */}
                <div className="flex flex-col gap-6 md:gap-8 flex-1">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <img
                          className="w-4 h-4 md:w-5 md:h-5"
                          alt="Contact icon"
                          src={item.icon}
                        />
                      </div>
                      <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-medium text-sm md:text-base font-['Poppins',Helvetica]`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                  
                  {/* Social media icons - positioned under the phone number */}
                  <div className="flex items-center gap-3 md:gap-4 mt-4">
                    {socialIcons.map((icon, index) => (
                      <img
                        key={index}
                        className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-80 transition-opacity"
                        alt={icon.alt}
                        src={icon.src}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Name and Email row */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1">
                  <label className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold text-sm md:text-[15px] mb-2 font-['Poppins',Helvetica]`}>
                    Name
                  </label>
                  <Input
                    className={`w-full h-10 md:h-[51px] rounded-[7.35px] border-[0.74px] border-solid ${theme === 'dark' ? 'border-[#2a2a2a] bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)] text-white placeholder:text-gray-400' : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-500'}`}
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex-1">
                  <label className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold text-sm md:text-[15px] mb-2 font-['Poppins',Helvetica]`}>
                    Email (Optional)
                  </label>
                  <Input
                    className={`w-full h-10 md:h-[51px] rounded-[7.35px] border-[0.74px] border-solid ${theme === 'dark' ? 'border-[#2a2a2a] bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)] text-white placeholder:text-gray-400' : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-500'}`}
                    placeholder="Example@Email.Com"
                  />
                </div>
              </div>

              {/* Preferred Meeting Time */}
              <div>
                <label className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold text-sm md:text-[15px] mb-2 font-['Poppins',Helvetica]`}>
                  Preferred Meeting Time
                </label>
                <Select>
                  <SelectTrigger className={`w-full h-10 md:h-[51px] rounded-[7.35px] border-[0.74px] border-solid ${theme === 'dark' ? 'border-[#2a2a2a] bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)] text-white' : 'border-gray-200 bg-white text-gray-900'}`}>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent className={`${theme === 'dark' ? 'bg-[#1f1e1b] border-[#2a2a2a]' : 'bg-white border-gray-200'}`}>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-bold text-sm md:text-[15px] mb-2 font-['Poppins',Helvetica]`}>
                  Message
                </label>
                <Textarea
                  className={`w-full h-32 md:h-[163px] rounded-[7.35px] border-[0.74px] border-solid ${theme === 'dark' ? 'border-[#2a2a2a] bg-[linear-gradient(137deg,rgba(28,28,28,1)_0%,rgba(5,5,5,1)_100%)] text-white placeholder:text-gray-400' : 'border-gray-200 bg-white text-gray-900 placeholder:text-gray-500'} resize-none`}
                  placeholder="Write Your Message..."
                />
              </div>

              {/* Submit Button */}
              <div className="relative">
                <Button className={`w-full h-12 md:h-[61px] rounded-[10px] ${theme === 'dark' ? 'bg-[#1f1e1b]' : 'bg-gray-900'} text-white font-bold text-sm md:text-base hover:${theme === 'dark' ? 'bg-[#1f1e1b]/90' : 'bg-gray-800'} font-['Poppins',Helvetica] relative overflow-hidden border-[1px] border-solid border-[#ee7639] shadow-[0_0_20px_rgba(238,118,57,0.3)]`}>
                  {/* Star/Sparkle effect in top-left corner */}
                  <div className="absolute top-[-20px] left-[-30px] w-16 h-16 md:w-20 md:h-20 pointer-events-none z-20">
                    <img
                      className="w-full h-full object-contain"
                      alt="Star sparkle effect"
                      src="/group-2169.png"
                    />
                  </div>
                  
                  <span className="relative z-10">Get in Touch</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
