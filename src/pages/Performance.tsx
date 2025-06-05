
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { BarChart3, LineChart, PieChart, Target } from 'lucide-react';
import performanceBanner from "../assets/images/Performance.png";

const Performance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Effective <span className="text-purple-600">Performance</span> Management
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Set goals, track progress, and provide meaningful feedback to help your employees excel.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Schedule Demo
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src={performanceBanner} 
                  alt="Performance Management" 
                  className="w-full h-auto"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.onerror = null;
                  //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/performance_appraisal_system.png';
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Management Tools</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Goal Setting & OKRs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Set clear objectives and key results at individual, team, and organizational levels. 
                Track progress in real-time and ensure alignment with company vision.
              </p>
              <Button variant="outline" className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Performance Reviews</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Conduct comprehensive performance evaluations with customizable review cycles.
                Support for 360-degree feedback, self-assessments, and manager reviews.
              </p>
              <Button variant="outline" className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <LineChart className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Continuous Feedback</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Promote a culture of ongoing feedback with tools for recognition, constructive feedback, 
                and coaching. Capture real-time performance insights.
              </p>
              <Button variant="outline" className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <PieChart className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Analytics & Insights</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Gain valuable insights with performance analytics. Identify high performers, 
                performance gaps, and training needs with customizable dashboards.
              </p>
              <Button variant="outline" className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Performance;
