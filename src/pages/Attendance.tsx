
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import attendanceBanner from "../assets/images/attendance-banner.png";


const Attendance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Efficient <span className="text-vertex-orange">Attendance</span> Tracking
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Track time, manage shifts, and monitor attendance with our comprehensive solution 
                designed for modern workplaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-vertex-orange hover:bg-vertex-orange-light text-white">
                  Schedule Demo
                </Button>
                <Button variant="outline" className="border-vertex-orange text-vertex-orange hover:bg-vertex-orange/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src={attendanceBanner} 
                  alt="Attendance Management" 
                  className="w-full h-auto"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.onerror = null;
                  //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/time_attendance_management.png';
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Attendance Management Features</h2>
          
          <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
            {[
              "Time tracking across multiple devices",
              "Biometric integration capabilities",
              "Shift scheduling and management",
              "Overtime calculations",
              "Leave management system",
              "Real-time attendance reporting",
              "Geographic location tracking",
              "Customizable attendance policies"
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-vertex-orange mr-3 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-vertex-orange hover:bg-vertex-orange-light text-white px-8 py-6 text-lg">
              Request a Free Trial
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Attendance;
