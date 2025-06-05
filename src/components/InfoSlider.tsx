
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import showCase1 from "../assets/images/1.png"; 
import showCase2 from "../assets/images/2.png"; 
import showCase3 from "../assets/images/3.png"; 
import showCase4 from "../assets/images/4.png"; 
// Remove the incorrect import and use the one from the ui carousel component
// which already handles the embla carousel integration correctly

const InfoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      title: "Streamlined HR Operations",
      description: "Automate routine tasks, reduce paperwork, and improve efficiency with our comprehensive HR management solution.",
      icon: (
        <svg className="h-12 w-12 text-vertex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      image: showCase1
    },
    {
      title: "Enhanced Employee Experience",
      description: "Provide a self-service portal where employees can access payslips, request time off, and update personal information.",
      icon: (
        <svg className="h-12 w-12 text-vertex-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: showCase2
    },
    {
      title: "Data-Driven Decisions",
      description: "Gain valuable insights with customizable reports and analytics for informed decision-making and strategic planning.",
      icon: (
        <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      image: showCase3
    },
    {
      title: "Compliance Management",
      description: "Stay compliant with ever-changing regulations with automatic updates and built-in compliance tools.",
      icon: (
        <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: showCase4
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Why Choose Vertex HCM</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our comprehensive human capital management solution provides everything you need to optimize your workforce operations.
          </p>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          onSelect={(api) => {
            if (api) {
              // setActiveIndex(api.selectedScrollSnap());
            }
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="sm:basis-full md:basis-1/2 lg:basis-1/3">
                <Card className={cn(
                  "border-none transition-all duration-300 transform",
                  activeIndex === index ? "scale-105 shadow-lg" : "opacity-75"
                )}>
                  <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                    <div className="mb-4 w-full h-32 md:h-40 overflow-hidden rounded-lg">
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-contain"
                        // onError={(e) => {
                        //   const target = e.target as HTMLImageElement;
                        //   target.onerror = null;
                        //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/hrms-Essentials-1024x576.png';
                        // }}
                      />
                    </div>
                    <div className="mb-2 md:mb-0">
                      {slide.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mt-2 md:mt-4 mb-1 md:mb-2">{slide.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{slide.description}</p>
                    {activeIndex === index && (
                      <Button variant="link" className="mt-2 md:mt-4 text-vertex-blue flex items-center">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 md:mt-8">
            <CarouselPrevious className="mr-2  left-0 static" />
            <CarouselNext className=" right-0 static" />
          </div>
        </Carousel>

        <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "24/7", label: "Support Available" },
            { value: "15+", label: "Years of Experience" }
          ].map((stat, index) => (
            <div key={index} className="bg-vertex-blue rounded-lg p-4 md:p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Ready to transform your HR operations?</h3>
          <Button className="bg-vertex-blue hover:bg-vertex-blue-light text-white py-3 md:py-6 px-4 md:px-8 text-base md:text-lg rounded-lg">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoSlider;
