import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Vertex – #1 HR Software & Attendance System - About Us</title>
        <meta
          name="description"
          content="Discover why Vertex is Pakistan’s #1 HR software and attendance system—trusted by businesses for innovative, efficient, and reliable HR technology solutions."
        />
        <link rel="canonical" href="https://vertex-hcm.com/about" />
      </Helmet>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-vertex-blue">Vertex HCM</span>
              <br />
              Building the Future of Work
            </h1>
            <p className="text-lg text-gray-700 max-w-5xl mx-auto mb-8">
              Behind every great business is a great team and behind every great
              team is a system that supports, empowers, and evolves with them.
              At Vertex HCM, we are not just providing software. We’re
              transforming how organizations manage their people, processes, and
              performance. Welcome to Vertex – #1 HR Software & Attendance
              System, where innovation meets simplicity, and efficiency powers
              growth.
            </p>
            <h2 className="text-3xl font-bold text-center mb-4">Who We Are</h2>
            <p className="text-gray-600 max-w-5xl mx-auto">
              Vertex HCM is a people-first technology company built for modern
              businesses. Since our inception, we have focused on developing
              smart, intuitive solutions to solve real-world HR challenges, from
              recruitment and payroll to performance and compliance. Our
              platform does not just automate processes; it empowers HR teams,
              simplifies decision-making, and enhances employee engagement at
              every level.
              <br />
              We understand that every organization is unique and so are its
              people. That is why our platform is built to adapt, scale, and
              grow with the companies that use it. No matter if you are a small
              team or a nationwide enterprise, our mission is to make your HR
              operations smoother, faster, and smarter.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-vertex-blue">
                  Our Mission
                </h2>
                <p className="text-gray-700">
                  To empower businesses with technology-driven HR software in
                  Pakistan that enhances productivity, streamlines core
                  operations, and builds better employee experiences.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-vertex-blue">
                  Our Vision
                </h2>
                <p className="text-gray-700">
                  To become the most trusted provider of human capital solutions
                  globally, known not just for functionality, but for
                  transforming workplaces through innovation, simplicity, and
                  service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="py-16 bg-gray-50">
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
      </div> */}

              {/* Features */}
        <div className="pb-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16">
              While this is our About page, it’s impossible to introduce Vertex HCM without mentioning the depth of our platform. Our solutions cover the full spectrum of HR needs:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-vertex-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div> */}
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">
                  Recruitment & Onboarding
                </h3>
                <p className="text-gray-600">
                  From applicant tracking to digital onboarding, we make hiring structured and seamless.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-vertex-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div> */}
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">Attendance & Time Tracking</h3>
                <p className="text-gray-600">
                 Using biometric integration, mobile access, and geo-fencing, we offer flexible yet accurate tools to monitor time.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-vertex-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div> */}
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">Payroll Processing</h3>
                <p className="text-gray-600">
                  Compliance-ready salary calculations, direct bank deposits, and tax management — done effortlessly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-vertex-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div> */}
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">
                  Performance Management
                </h3>
                <p className="text-gray-600">
                  Define goals, gather feedback, and drive development with real-time performance insights.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-vertex-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div> */}
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">Benefits Administration</h3>
                <p className="text-gray-600">
                 Handle insurance, retirement, wellness, and family benefits — all from one place.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-vertex-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div> */}
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">Compliance & Documentation</h3>
                <p className="text-gray-600">
                  Stay audit-ready and legally aligned with our automated alerts, document tracking, and regulation updates.
                </p>
              </div>
            </div>

                        <p className="text-gray-600 max-w-3xl mx-auto text-center mt-16">
              All of this is built into a unified system; the powerful vertex HCM software trusted by organizations across industries.
            </p>
            
          </div>
        </div>

            <section className="py-12 md:py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center">
                  {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Comprehensive HCM Solutions</h2> */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Why We Are Different</h2>
                  <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
                    We are not here to overwhelm HR teams with complex tools or rigid systems. Our approach is centered around usability and adaptability. The vertex HCM software is designed to feel intuitive not intimidating. From first login to advanced analytics, everything works the way you expect it to and better. What truly sets us apart is our deep understanding of local HR challenges. As one of the leading providers of HR software in Pakistan, we build solutions that reflect regional regulations, payroll standards, and organizational structures while offering the flexibility to scale globally.
                  </p>
                   <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-8">A Word from Our Clients</h2>
                  <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
                    “<Link to="/" className="text-vertex-blue">Vertex HCM</Link> helped us centralize all HR functions. It’s more than a tool; it’s a system that brings everything and everyone together.”
                    <br/>
“Managing attendance and payroll has never been this easy. We’ve tried others, but nothing comes close to Vertex’s user-friendly interface and local support.”
                    <br/>
As businesses evolve, so must the tools they use. Vertex HCM is built for long-term growth, not quick fixes. With an ever-expanding client base and a deep focus on product improvement, we continue to refine our platform to meet emerging HR needs.

                  </p>
                </div>
                </div>
            </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
