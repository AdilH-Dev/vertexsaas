
import React from 'react';
import { cn } from '@/lib/utils';

// Add feature components or update existing ones for better mobile responsiveness
const Features = () => {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Comprehensive HCM Solutions</h2> */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">One Platform. Endless HR Possibilities, HR software in Pakistan.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our human resource management software offers a feature-rich solution tailored for forward-thinking teams. From small startups to established enterprises, our system adapts to your growing HR needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Centralized HR Management",
              description: "Ditch the paperwork. Organize employee profiles, records, and documentation in a single digital hub. Update information in real time and reduce repetitive admin work, allowing HR teams to focus on people, not processes.",
              icon: (
                <svg className="h-10 w-10 text-vertex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "Smart Time & Attendance",
              description: "Monitor attendance accurately with automated check-ins, customizable policies, and detailed time logs. Whether in-office or remote, employees’ working hours are recorded with transparency and ease.",
              icon: (
                <svg className="h-10 w-10 text-vertex-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Payroll Made Easy",
              description: "Say goodbye to stressful salary cycles. Automate complex payroll calculations, deductions, and tax filing. Generate payslips, stay legally compliant, and disburse salaries with confidence; all from a unified payroll dashboard.",
              icon: (
                <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Recruitment & Seamless Onboarding",
              description: "Simplify hiring with automated applicant tracking and structured onboarding. Keep candidates engaged and ensure new hires feel welcomed from day one, with minimal paperwork and maximum clarity.",
              icon: (
                <svg className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              )
            },
            {
              title: "Empowering Performance Management",
              description: "Encourage growth with goal setting, continuous feedback, and evaluation tracking. Build a performance culture that’s transparent, collaborative, and data-informed.",
              icon: (
                <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )
            },
            {
              title: "Efficient Benefits Management",
              description: "Manage employee benefits digitally, from enrollment to approval. Let employees explore and choose from available benefits through an intuitive self-service portal, improving satisfaction and reducing HR workload.",
              icon: (
                <svg className="h-10 w-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div key={index} className={cn(
              "feature-card",
              "animate-fade-in",
              `animate-delay-${index * 100}`
            )}
            style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <a href="/pricing" className="vertex-btn vertex-btn-primary py-2 px-5 md:py-3 md:px-6 text-sm md:text-base">
            View All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
