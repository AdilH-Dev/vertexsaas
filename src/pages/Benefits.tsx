
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Award, Heart, Activity, Gift, Users } from 'lucide-react';
import promotionBanner from "../assets/images/Promotion.png";


const Benefits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Benefits Administration</h1>
                <p className="text-gray-600 mb-6 md:text-lg">
                  Streamline your benefits management with our advanced platform designed to simplify administration, 
                  reduce costs, and enhance employee satisfaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Request Demo
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
                  <img 
                    src={promotionBanner} 
                    alt="Benefits Management" 
                    className="rounded-lg shadow-xl relative z-10"
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.onerror = null;
                    //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/benefits_administration.png';
                    // }}
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Benefits Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our benefits administration module provides a complete solution for managing all aspects of your employee benefits programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-green-600" />,
                  title: "Health Insurance",
                  description: "Manage medical, dental, and vision plans with automated enrollment and eligibility tracking."
                },
                {
                  icon: <Award className="h-8 w-8 text-green-600" />,
                  title: "Retirement Plans",
                  description: "Administer 401(k), pension, and other retirement benefits with compliance support."
                },
                {
                  icon: <Heart className="h-8 w-8 text-green-600" />,
                  title: "Wellness Programs",
                  description: "Create and manage wellness initiatives to improve employee health and reduce healthcare costs."
                },
                {
                  icon: <Activity className="h-8 w-8 text-green-600" />,
                  title: "Life & Disability",
                  description: "Streamline life insurance and disability benefits administration with simplified claims processing."
                },
                {
                  icon: <Gift className="h-8 w-8 text-green-600" />,
                  title: "Voluntary Benefits",
                  description: "Offer and manage supplemental benefits that enhance your total compensation package."
                },
                {
                  icon: <Users className="h-8 w-8 text-green-600" />,
                  title: "Family Benefits",
                  description: "Administer parental leave, childcare assistance, and other family-friendly benefits."
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-green-500">
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Portal Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <img 
                  src="https://www.vertex-hcm.com/wp-content/uploads/2023/03/Benefits-Administration-Module.png" 
                  alt="Employee Benefits Portal" 
                  className="rounded-lg shadow-lg"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.onerror = null;
                  //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/employee_benefits_management.png';
                  // }}
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Employee Self-Service Portal</h2>
                <p className="text-gray-600 mb-6">
                  Empower your employees with our intuitive self-service portal that makes it easy to:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "View and compare benefit plan options",
                    "Enroll in benefits during open enrollment periods",
                    "Make life event changes throughout the year",
                    "Access benefit documents and insurance cards",
                    "Track HSA, FSA, and other spending accounts",
                    "Communicate directly with HR for benefits questions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  See Portal Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Benefits Administration?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join thousands of companies that have streamlined their benefits management 
              with Vertex HCM's comprehensive solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-green-500">
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

export default Benefits;
