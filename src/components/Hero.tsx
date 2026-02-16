
import React, { useEffect, useState } from 'react';
import ButtonHover from './ui/button-hover';
import heroBanner from '../assets/images/Group 1171274999 (1).svg'; // Assuming you have a hero banner image
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="pt-24 pb-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full gradient-bg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-vertex-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-vertex-orange/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 md:mb-6 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="block">How is <span className="text-vertex-blue">Human</span></span>
              <span className="text-vertex-blue block">Resource Management</span>
              <span className="block">software helpful!</span>
            </h1>
            <p 
              className={`text-base md:text-lg text-gray-700 mb-6 md:mb-8 mx-auto md:mx-0 max-w-lg transition-opacity delay-300 duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              Modern businesses need more than just spreadsheets to manage their people. From recruitment to retirement, Vertex HCM helps organizations navigate the entire employee lifecycle with clarity, compliance, and ease. Our powerful Human resource management software is designed to streamline your workforce operations and elevate the employee experience, all within one integrated solution.
            </p>
            <div className={`flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 transition-opacity delay-500 duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
               <Link to="/contact">
              <ButtonHover variant="primary" size="lg">
                Get Started
              </ButtonHover>
               </Link>
               <Link to="/contact">
              <ButtonHover variant="outline" size="lg">
                Book a Demo
              </ButtonHover>
               </Link>
            </div>
          </div>
          
          {/* Right content - Dashboard illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                {/* Main image */}
                <img 
                  src={heroBanner} 
                  alt="Vertex HCM Dashboard" 
                  className="w-full h-auto rounded-xl"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.onerror = null;
                  //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/employee-self-service.png';
                  // }}
                />
                
                {/* Small decorative elements - hide on very small screens */}
                {/* <div className="hidden sm:block absolute top-10 right-10 w-8 md:w-12 h-8 md:h-12 bg-vertex-orange/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div> */}
                {/* <div className="hidden sm:block absolute bottom-10 left-5 w-6 md:w-8 h-6 md:h-8 bg-vertex-blue/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div> */}
                {/* <div className="hidden sm:block absolute top-1/4 left-10 w-4 md:w-6 h-4 md:h-6 bg-gray-200 rounded-md animate-float" style={{ animationDelay: '0.5s' }}></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
