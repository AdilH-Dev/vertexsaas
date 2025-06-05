
import React from 'react';
import { cn } from "@/lib/utils";

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Company info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Vertex HCM</h2>
            <p className="text-gray-600 mb-6">
              Vertex HCM is a leading provider of human capital management solutions designed to help businesses optimize their HR processes, improve employee experiences, and drive strategic outcomes. Founded in 2010, we have been serving organizations of all sizes across industries with our comprehensive, user-friendly platform.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-vertex-blue/10 text-vertex-blue rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Security First</h3>
                  <p className="text-gray-600">Your data is protected with enterprise-grade security protocols.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-vertex-blue/10 text-vertex-blue rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Lightning Fast</h3>
                  <p className="text-gray-600">Optimized performance for quick processing of HR tasks.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-vertex-blue/10 text-vertex-blue rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Customizable</h3>
                  <p className="text-gray-600">Tailor the platform to meet your organization's unique needs.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-vertex-blue/10 text-vertex-blue rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
                  <p className="text-gray-600">Expert assistance available whenever you need it.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Stats and info */}
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-vertex-blue to-vertex-blue-dark text-white rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-x-5 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-x-5 translate-y-10"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Our Impact</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-3xl font-bold mb-1">3,500+</p>
                  <p className="text-sm">Happy Clients</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-3xl font-bold mb-1">97%</p>
                  <p className="text-sm">Client Retention</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-3xl font-bold mb-1">45+</p>
                  <p className="text-sm">Countries Served</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-3xl font-bold mb-1">2.5M+</p>
                  <p className="text-sm">Employees Managed</p>
                </div>
              </div>
              
              <div className="flex justify-center relative z-10">
                <div 
                  className={cn(
                    "inline-flex py-2 px-4 rounded-full bg-white/10 text-sm backdrop-blur-sm",
                    "border border-white/20"
                  )}
                >
                  <span className="flex items-center">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Trusted by industry leaders worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
