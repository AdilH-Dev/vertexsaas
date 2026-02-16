import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import payrollBanner from "../assets/images/Payroll.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
        <div className="pt-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  <span className="text-vertex-blue">Payroll</span> Management
                  Software Without the Puzzles: Smart, Simple, Seamless
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Managing payroll is not just about calculating salaries; it’s
                  about trust, accuracy, and timing. From tax deductions to
                  direct deposits, the smallest oversight can lead to major
                  complications. That is why today’s businesses are moving
                  towards digital solutions like payroll management software to
                  turn chaos into clarity and errors into efficiency. With
                  Vertex HCM, payroll becomes a smooth, stress-free process that
                  runs itself in the background, yet delivers real impact every
                  payday.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                  <Button className="bg-vertex-blue hover:bg-vertex-blue-light text-white">
                    Schedule Demo
                  </Button>
                  </Link>
                  <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-vertex-blue text-vertex-blue hover:bg-vertex-blue/10"
                  >
                    Learn More
                  </Button>
                  </Link>
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

        {/* Features Section */}
        <section className="pt-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center ">
              <h2 className="text-3xl font-bold mb-4">
                More Than Just a Pay Slip: The Role of Payroll in Modern
                Business
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Payroll is not just a backend operation. It directly affects
                employee satisfaction, organizational compliance, and financial
                transparency. Efficient payroll reflects a company’s
                professionalism. When it’s done right, employees feel valued and
                secure; when it’s done wrong, morale drops, and trust erodes.
                That’s where smart systems like payroll software in Pakistan
                come in, offering automation, accuracy, and adaptability to meet
                the demands of today’s dynamic workforce.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="pb-16 pt-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Core Features That Power Precision
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
              <Link to="/" className="text-vertex-blue">
                Vertex HCM
              </Link>{" "}
              brings all essential payroll tools together under one intelligent
              system, helping HR teams eliminate delays, reduce risks, and work
              with confidence.
            </p>

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
                  Automated Salary Calculations
                </h3>
                <p className="text-gray-600">
                  Manual spreadsheets are prone to human error and
                  time-consuming double checks. Our system takes care of base
                  pay, allowances, deductions, bonuses, and overtime using
                  preset rules tailored to your organization. Net salary?
                  Calculated automatically, error-free.
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
                <h3 className="text-xl font-semibold mb-3">
                  Dynamic Tax Compliance
                </h3>
                <p className="text-gray-600">
                  Tax laws and labor regulations evolve constantly. Stay
                  compliant with automatic tax updates, pre-configured rules for
                  provincial taxes, and built-in documentation templates. Audits
                  become stress-free when everything is already aligned.
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
                <h3 className="text-xl font-semibold mb-3">
                  Direct Bank Transfers
                </h3>
                <p className="text-gray-600">
                  Say goodbye to manual disbursement. Securely transfer salaries
                  directly into employee bank accounts using our integrated
                  banking system. Schedule transfers, generate payment
                  summaries, and track transaction status in real time.
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
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Customizable Pay Structures
                </h3>
                <p className="text-gray-600">
                  Whether you manage full-timers, freelancers, or contract
                  staff, our system supports flexible compensation models.
                  Create pay cycles by department, location, or designation and
                  even set different payroll calendars if needed.
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
                <h3 className="text-xl font-semibold mb-3">
                  Benefits, Deductions, and Loans
                </h3>
                <p className="text-gray-600">
                  Easily manage employee benefits, advances, deductions, and
                  reimbursements. Assign categories, set recovery periods, and
                  track loan balances, all integrated into the monthly payroll
                  with zero confusion.
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
                <h3 className="text-xl font-semibold mb-3">
                  Pay Slip Generation and History
                </h3>
                <p className="text-gray-600">
                  Generate digital pay slips instantly. Employees can log in and
                  access their entire salary history, download past records, and
                  raise queries with the HR team, all within the same secure
                  portal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Comprehensive HCM Solutions</h2> */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                Designed for HR Professionals, Built for Employees Too
              </h2>
              <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
                HR teams often juggle compliance tasks, queries, and deadline
                pressure all at once. Vertex-HCM payroll management software
                reduces their burden significantly. With automation in place,
                payroll becomes a routine process, not a recurring panic. But
                it’s not just about HR professionals. Employees appreciate
                transparency. The ability to check pay summaries, see
                deductions, and receive timely payments enhances overall trust
                and job satisfaction.
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-8">
                Flexible for All Industries
              </h2>
              <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
                Whether you’re in manufacturing, IT, healthcare, or retail,
                payroll needs are never one-size-fits-all. Our system adapts to
                various industry-specific payroll structures and government
                standards. You can even configure settings based on shift
                patterns, performance bonuses, or union regulations, all with
                ease. And because it’s cloud-based, your data is accessible
                anytime, from anywhere. No matter if you are running a small
                business or a large enterprise, payroll software in Pakistan
                must provide transparency and control. Our platform gives you
                both.
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-8">
                Celebrating Real Impact
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base">
                Over 3,500 organizations rely on Vertex for smarter operations.
                Many clients describe it as the best HR and payroll software not
                just for its features, but for the experience it delivers.
                <br />
                “We switched to Vertex and never looked back. Payroll is now
                accurate, fast, and 100% transparent.” — HR Manager, FinServe
                <br />
                “Vertex’s direct deposit and tax compliance features made it the
                best HR and payroll software choice for us.” — COO, PakMed
                Systems
                <br />
                Vertex-HCM payroll management software, a great payroll software
                in Pakistan, is built with local insight and global standards.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Payroll;
