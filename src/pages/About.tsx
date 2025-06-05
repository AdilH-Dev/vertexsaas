
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About <span className="text-vertex-blue">Vertex HCM</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We're transforming how organizations manage their human capital with innovative, 
            user-friendly solutions designed for the modern workplace.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-vertex-blue">Our Mission</h2>
              <p className="text-gray-700">
                To empower organizations with innovative human capital management solutions that 
                streamline processes, enhance decision-making, and create exceptional employee experiences.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-vertex-blue">Our Vision</h2>
              <p className="text-gray-700">
                To be the global leader in HCM solutions, recognized for our innovation, reliability, 
                and commitment to helping organizations unlock the full potential of their workforce.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                title: "Chief Executive Officer",
                image: "https://i.pravatar.cc/300?img=1"
              },
              {
                name: "Sarah Johnson",
                title: "Chief Technology Officer",
                image: "https://i.pravatar.cc/300?img=5"
              },
              {
                name: "Michael Rodriguez",
                title: "Chief Product Officer",
                image: "https://i.pravatar.cc/300?img=8"
              },
              {
                name: "Priya Patel",
                title: "Chief Marketing Officer",
                image: "https://i.pravatar.cc/300?img=9"
              },
              {
                name: "David Kim",
                title: "Chief Financial Officer",
                image: "https://i.pravatar.cc/300?img=3"
              },
              {
                name: "Emma Wilson",
                title: "VP of Customer Success",
                image: "https://i.pravatar.cc/300?img=4"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center" 
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
