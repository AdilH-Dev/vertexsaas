import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import payrollBanner from "../assets/images/Payroll.png";
import { Helmet } from "react-helmet-async";

const Payroll = () => {
  return (
    <>
      <Helmet>
        <title>Vertex-HCM Payroll Management Software in Pakistan</title>
        <meta
          name="description"
          content="Streamline payroll with Vertex-HCM payroll management software—trusted payroll software in Pakistan for automated, accurate, and compliant salary processing."
        />
        <link rel="canonical" href="https://vertex-hcm.com/payroll" />
      </Helmet>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Streamlined <span className="text-vertex-blue">Payroll</span>{" "}
                  Management
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Automate your payroll processes, ensure compliance, and
                  provide employees with transparent access to their
                  compensation details.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-vertex-blue hover:bg-vertex-blue-light text-white">
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-vertex-blue text-vertex-blue hover:bg-vertex-blue/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <img
                    src={payrollBanner}
                    alt="Streamlined Payroll Management"
                    className="w-full h-auto"
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.onerror = null;
                    //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/payroll-generation.png';
                    // }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Payroll Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
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
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Automated Calculations
                </h3>
                <p className="text-gray-600">
                  Eliminate manual errors with automated tax calculations,
                  deductions, and net pay processing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
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
                </div>
                <h3 className="text-xl font-semibold mb-3">Tax Compliance</h3>
                <p className="text-gray-600">
                  Stay updated with the latest tax regulations and ensure
                  complete compliance with regional laws.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-vertex-blue/20 rounded-full flex items-center justify-center mb-4">
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
                </div>
                <h3 className="text-xl font-semibold mb-3">Direct Deposits</h3>
                <p className="text-gray-600">
                  Securely transfer salaries to employee bank accounts with our
                  integrated payment system.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Payroll;
