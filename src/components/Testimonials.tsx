
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Ahmed",
    position: "HR Director, TechNova",
    content: "We streamlined our payroll and onboarding processes within weeks of switching to vertex HCM software in Pakistan. Highly intuitive and reliable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "David June",
    position: "CEO, CoreSol",
    content: "As an SME based in Chicago, we were looking for dependable HR software. Vertex delivered beyond our expectations by reducing our processing time by 60%",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  // {
  //   name: "Priya Patel",
  //   position: "Payroll Manager, GlobalServe",
  //   content: "The payroll processing capabilities in Vertex HCM have reduced our processing time by 75%. Compliance updates are automatic, and the system has helped us eliminate costly errors. It's been a game-changer for our department.",
  //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  // },
  // {
  //   name: "David Rodriguez",
  //   position: "Talent Acquisition Lead, InnovateTech",
  //   content: "The recruitment module in Vertex HCM has streamlined our entire hiring process. From posting jobs to onboarding new employees, everything is now managed in one place. Our time-to-hire has been reduced by 40%.",
  //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  // }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, activeIndex]);

  const handleMouseEnter = () => {
    setAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vertex HCM has transformed HR operations for over 3,500 organizations in 45+ countries. Our client retention rate of 97% speaks volumes about satisfaction and service excellence.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div 
              className={cn(
                "flex transition-transform duration-500 ease-in-out",
                isAnimating ? "opacity-80" : "opacity-100"
              )}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-card">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <svg 
                        className="absolute -top-4 -left-4 h-10 w-10 text-vertex-orange/20" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-600 relative z-10">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-2">
            <button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={prevSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              onClick={nextSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeIndex === index ? "bg-vertex-blue" : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
