
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import recruitmentBanner from "../assets/images/recruitment-banner.png";


const Recruitment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Streamlined <span className="text-violet-600">Recruitment</span> Process
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Find, assess, and hire the right talent efficiently with our end-to-end recruitment module.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-vertex-blue to-violet-600 hover:from-vertex-blue hover:to-violet-700 text-white">
                  Schedule Demo
                </Button>
                <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-600/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src={recruitmentBanner} 
                  alt="Recruitment Process" 
                  className="w-full h-auto"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.onerror = null;
                  //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/recruitment_management_software.png';
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Tabs */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recruitment Process</h2>
          
          <Tabs defaultValue="sourcing" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="sourcing">Sourcing</TabsTrigger>
              <TabsTrigger value="screening">Screening</TabsTrigger>
              <TabsTrigger value="interviewing">Interviewing</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sourcing" className="rounded-md border p-6">
              <h3 className="text-xl font-semibold mb-4">Candidate Sourcing</h3>
              <p className="mb-4 text-gray-700">
                Find the right talent through multiple channels and build a strong candidate pipeline.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Multi-channel job posting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Social media integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Referral management system</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Talent pool building</span>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="screening" className="rounded-md border p-6">
              <h3 className="text-xl font-semibold mb-4">Candidate Screening</h3>
              <p className="mb-4 text-gray-700">
                Efficiently filter candidates with automated screening tools and assessments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>AI-powered resume parsing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Pre-employment assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Customizable screening questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Background verification integration</span>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="interviewing" className="rounded-md border p-6">
              <h3 className="text-xl font-semibold mb-4">Interview Management</h3>
              <p className="mb-4 text-gray-700">
                Streamline the interview process with scheduling tools and collaborative evaluation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Calendar integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Video interview support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Structured interview templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Collaborative feedback collection</span>
                </li>
              </ul>
            </TabsContent>
            
            <TabsContent value="onboarding" className="rounded-md border p-6">
              <h3 className="text-xl font-semibold mb-4">Employee Onboarding</h3>
              <p className="mb-4 text-gray-700">
                Create a seamless transition from candidate to employee with digital onboarding.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Digital document signing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Onboarding task management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>Training material distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                  <span>New hire progress tracking</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Recruitment;
