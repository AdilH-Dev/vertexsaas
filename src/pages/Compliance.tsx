
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, AlertCircle, CheckCircle2, FileCheck, RefreshCw, Lock } from 'lucide-react';
import complianceBanner from "../assets/images/Compliance.png";

const Compliance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Compliance Management</h1>
                <p className="text-gray-600 mb-6 md:text-lg">
                  Stay ahead of complex regulatory requirements with our comprehensive compliance 
                  management solution designed for modern HR departments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Request Demo
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-200 rounded-full opacity-50"></div>
                  <img 
                    src={complianceBanner}
                    alt="Compliance Management" 
                    className="rounded-lg shadow-xl relative z-10"
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.onerror = null;
                    //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/statutory_compliance_management.png';
                    // }}
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-200 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Compliance Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our compliance module helps you navigate complex regulatory requirements and mitigate risks across your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-red-600" />,
                  title: "Regulatory Compliance",
                  description: "Stay compliant with labor laws, FLSA, ACA, HIPAA, and other regulations with automatic updates."
                },
                {
                  icon: <AlertCircle className="h-8 w-8 text-red-600" />,
                  title: "Risk Management",
                  description: "Identify potential compliance risks and implement proactive mitigation strategies."
                },
                {
                  icon: <CheckCircle2 className="h-8 w-8 text-red-600" />,
                  title: "Audit Support",
                  description: "Maintain audit-ready records and documentation with integrated reporting and tracking."
                },
                {
                  icon: <FileCheck className="h-8 w-8 text-red-600" />,
                  title: "Documentation Management",
                  description: "Centralize and organize all compliance documentation for easy access and verification."
                },
                {
                  icon: <RefreshCw className="h-8 w-8 text-red-600" />,
                  title: "Real-time Updates",
                  description: "Receive automatic updates on changing regulations and compliance requirements."
                },
                {
                  icon: <Lock className="h-8 w-8 text-red-600" />,
                  title: "Data Security",
                  description: "Ensure data privacy and security with robust protection measures and encryption."
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-red-500">
                  <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Compliance Dashboard Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <img 
                  src="https://www.vertex-hcm.com/wp-content/uploads/2023/03/Compliance-Dashboard.png" 
                  alt="Compliance Dashboard" 
                  className="rounded-lg shadow-lg"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.onerror = null;
                  //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/compliance_management.png';
                  // }}
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Interactive Compliance Dashboard</h2>
                <p className="text-gray-600 mb-6">
                  Monitor your compliance status in real-time with our comprehensive dashboard that provides:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Visual compliance status indicators across all regulations",
                    "Upcoming deadlines and compliance calendar",
                    "Risk assessment metrics and alerts",
                    "Document expiration tracking and notifications",
                    "Customizable compliance reporting",
                    "Trend analysis and historical compliance records"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-red-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  See Dashboard Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Simplify Compliance Management?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join thousands of companies that have streamlined their compliance operations 
              with Vertex HCM's comprehensive solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-red-600 hover:bg-gray-100">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-red-500">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Compliance;
