import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { useTheme } from "../../../../contexts/ThemeContext";

export const LogoStripSection = (): JSX.Element => {
  const { theme } = useTheme();

  // Service category tabs data
  const serviceTabs = [
    { id: "design", label: "Design", variant: "ghost" },
    { id: "all", label: "All Services", variant: "default" },
    { id: "development", label: "Development", variant: "ghost" },
  ];

  // Top row services data
  const topRowServices = [
    {
      icon: theme === 'dark' ? "/icon-1.png" : "/icon-1-w.png",
      title: "Web Development",
      description:
        "Fast. Scalable. Built with the latest tech.\nWe develop websites that load fast, work everywhere, and grow with your business",
    },
    {
      isHighlighted: true,
      title: "UI/UX Design",
      description:
        "We craft user journeys that are smooth, clear, and built for conversion.",
      offerings: ["User Research", "Wireframing", "Prototyping", "UI Design"],
    },
    {
      icon: theme === 'dark' ? "/icon.png" : "/icon-w.png",
      title: "Mobile App Development",
      description:
        "Apps your users love — on any device.\nWhether it's native or cross-platform, we deliver smooth, high-performance mobile experiences",
    },
  ];

  // Middle row services data
  const middleRowServices = [
    {
      icon: theme === 'dark' ? "/icon-4.png" : "/icon-4-w.png",
      title: "Cloud Solutions",
      description:
        "Smart cloud infrastructure — tailored to your scale.\nFrom setup to migration, we build reliable cloud systems that grow with you.",
    },
    {
      icon: theme === 'dark' ? "/icon-2.png" : "/icon-2-w.png",
      title: "Backend Services",
      description:
        "The engine behind your product.\nWe develop secure, scalable backend systems that power modern applications.",
    },
    {
      icon: theme === 'dark' ? "/icon-3.png" : "/icon-1-w.png",
      title: "Security Solutions",
      description:
        "Built-in protection from day one.\nWe help you stay secure with deep audits, compliance checks, and proactive threat defense.",
    },
  ];

  // Bottom row service data
  const bottomRowService = {
    icon: theme === 'dark' ? "/icon-5.png" : "/icon-5-w.png",
    title: "Brand Identity",
    description:
      "A brand that speaks before you do.\nWe create cohesive brand systems that leave a lasting impression and reflect who you truly are.",
  };

  return (
    <section id="services" className={`relative w-full ${theme === 'dark' ? 'bg-[#1f1e1b]' : 'bg-gray-50'} py-12 md:py-24 overflow-hidden`}>
      {/* Background elements */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
        <img
          className="absolute w-32 h-36 md:w-[205px] md:h-[219px] top-12 left-2 md:top-[102px] md:left-[12px]"
          alt="Planet"
          src="/planet.svg"
        />
        <div className="absolute w-96 h-96 md:w-[799px] md:h-[832px] top-48 left-4 md:top-[356px] md:left-[25px] bg-ee-7639 rounded-[186075.62px] blur-[300px] opacity-20" />
        {/* {theme === 'dark'?(
          <img
          className="absolute w-full h-auto top-64 md:top-[446px] left-0"
          alt="Background"
          src="/bg.svg"
        />
        ):('')} */}
      </div>

      {/* Main content container */}
      <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Header section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-16 text-center">
          <Badge className="bg-transparent text-ee-7639 font-bold">
            Our Services
          </Badge>

          <h2 className={`flex flex-col md:flex-row items-center gap-2 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-xl md:text-4xl leading-tight md:leading-[54px] text-center`}>
            Digital solutions that move your business forward
            <img
              className="w-4 h-4 md:w-[21.87px] md:h-[21.86px]"
              alt="Vector"
              src="/vector-1.svg"
            />
          </h2>

          <p className={`max-w-full md:max-w-[547px] ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-sm md:text-base leading-relaxed md:leading-[26.9px] text-center`}>
            We Provide End-to-end Digital Services That Help Businesses Thrive
            In An Ever-evolving Digital World. Our Solutions Combine Design,
            Development, And Strategy To Deliver Results That Matter.
          </p>
        </div>

        {/* Service category tabs */}
        <Tabs defaultValue="all" className="mb-8 md:mb-12 w-full ">
          <TabsList className={`flex flex-col md:flex-row gap-2 md:gap-4 ${theme === 'dark' ? 'bg-transparent' : 'bg-gray-100'} w-full border-none`}>
            {serviceTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`w-full md:w-[194px] h-10 md:h-[45px] text-xs md:text-sm  ${
                  tab.id === "all"
                      ? "bg-[url(/card-w.svg)] text-[#ee7639] font-semibold border-2  border-[#ee7639]"
                    : tab.id === "design"
                      ? theme === 'dark' ? "bg-[url(/card-3.svg)] text-white" : "bg-white text-gray-900 border border-gray-200 border-none"
                      : theme === 'dark' ? "bg-[url(/card-1.svg)] text-white" : "bg-white text-gray-900 border border-gray-200"
                } bg-[100%_100%] rounded border-b-0 border-l-0 border-r-0 rounded-2xl `}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
              
        {/* Top row services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full mb-8 md:mb-12">
          {topRowServices.map((service, index) =>
            service.isHighlighted ? (
              <div
                key={`top-service-${index}`}
                className={`relative w-full max-w-[339px] 
                  mx-auto h-[280px] md:h-[335px] rounded-[34.81px] 
                  border-[none] -mt-8 md:-mt-12 ${theme === 'dark' ?
                     'before:content-[\'\'] before:absolute before:inset-0 before:p-[1.45px] before:rounded-[34.81px] before:[background:linear-gradient(153deg,rgba(35,35,35,1)_0%,rgba(35,35,35,0.31)_23%,rgba(35,35,35,1)_52%,rgba(35,35,35,0.3)_75%,rgba(35,35,35,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none' : 'bg-white shadow-lg border border-gray-200'}`}
              >
                <div className="relative w-full h-full p-4">
                  <div className={`absolute inset-4 rounded-[21.76px] ${theme === 'dark' ? 'shadow-[inset_0px_5.8px_34.81px_-10.15px_#ffc425]' : 'shadow-[inset_0px_5.8px_34.81px_-10.15px_rgba(238,118,57,0.3)]'}`} />
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[url(/bg-m.svg)]' : 'bg-white'} bg-[100%_100%] rounded-[34.81px]`}>
                    <div className="flex flex-col items-center justify-center gap-2.5 h-full px-4">
                      {/* Icon */}
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4">
                        <img
                          className="w-16 h-16 md:w-[84.57px] md:h-[84.57px]"
                          alt="UI/UX Design icon"
                          src={theme === 'dark' ? "/icon-6.png" : "/icon-6-w.png"}
                        />
                      </div>
                      
                      <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm md:text-[16.7px] text-center tracking-[0] leading-normal`}>
                        {service.title}
                      </h3>
                      <div className={`opacity-80 [font-family:'Poppins',Helvetica] font-normal text-xs md:text-[9.8px] text-center leading-relaxed md:leading-[19.5px] max-w-[221px] ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        <span className={theme === 'dark' ? 'text-white' : 'text-gray-700'}>
                          {service.description}
                          <br />
                        </span>
                        <span className="font-bold text-[#ee7639]">
                          What we offer:
                          <br />
                        </span>
                        <span className={theme === 'dark' ? 'text-white' : 'text-gray-700'}>
                          {service.offerings.map((offering) => (
                            <React.Fragment key={offering}>
                              {offering}
                              <br />
                            </React.Fragment>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Card
                key={`top-service-${index}`}
                className={`flex flex-col items-center ${theme === 'dark' ? 'bg-transparent border-none' : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'}`}
              >
                <CardContent className="flex flex-col items-center gap-4 md:gap-[21px] pt-6">
                  <img
                    className="w-16 h-16 md:w-[84.57px] md:h-[84.57px]"
                    alt={`${service.title} icon`}
                    src={service.icon}
                  />
                  <div className="flex flex-col items-center justify-center gap-2.5 w-full">
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm md:text-[16.7px] text-center leading-normal`}>
                      {service.title}
                    </h3>
                    <p className={`w-full opacity-50 [font-family:'Poppins',Helvetica] font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-xs md:text-[9.8px] text-center leading-relaxed md:leading-[19.5px]`}>
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>

        {/* Middle row services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full mb-8 md:mb-12">
          {middleRowServices.map((service, index) => (
            <Card
              key={`middle-service-${index}`}
              className={`flex flex-col items-center ${theme === 'dark' ? 'bg-transparent border-none' : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'}`}
            >
              <CardContent className="flex flex-col items-center gap-4 md:gap-[21px] pt-6">
                <img
                  className="w-16 h-16 md:w-[84.57px] md:h-[84.57px]"
                  alt={`${service.title} icon`}
                  src={service.icon}
                />
                <div className="flex flex-col items-center justify-center gap-2.5 w-full">
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm md:text-[16.7px] text-center leading-normal`}>
                    {service.title}
                  </h3>
                  <p className={`w-full opacity-50 [font-family:'Poppins',Helvetica] font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-sm md:text-[16.7px] text-center leading-relaxed md:leading-[19.5px] `}>
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom row service (centered) */}
        <div className="flex justify-center w-full mb-8 md:mb-16">
          <Card className={`flex flex-col items-center ${theme === 'dark' ? 'bg-transparent border-none' : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'} w-full max-w-[300px]`}>
            <CardContent className="flex flex-col items-center gap-4 md:gap-[21px] pt-6">
              <img
                className="w-16 h-16 md:w-[84.57px] md:h-[84.57px]"
                alt={`${bottomRowService.title} icon`}
                src={bottomRowService.icon}
              />
              <div className="flex flex-col items-center justify-center gap-2.5 w-full">
                <h3 className={`font-normal ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm md:text-[16.7px] text-center leading-normal`}>
                  {bottomRowService.title}
                </h3>
                <p className={`w-full max-w-[219px] opacity-50 [font-family:'Poppins',Helvetica] font-normal ${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-xs md:text-[9.8px] text-center leading-relaxed md:leading-[19.5px]`}>
                  {bottomRowService.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-[#ee7639] text-f-5f-5f-4 font-semibold rounded-[80px] h-10 md:h-12 w-full max-w-[174px] shadow-[0px_22px_44px_#ee763966] text-sm"
        >
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
};
