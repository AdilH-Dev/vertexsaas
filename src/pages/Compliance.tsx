import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  AlertCircle,
  CheckCircle2,
  FileCheck,
  RefreshCw,
  Lock,
} from "lucide-react";
import complianceBanner from "../assets/images/Compliance.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Compliance = () => {
  return (
    <>
      <Helmet>
        <title>HR Compliance Software in Pakistan | Vertex-HCM</title>
        <meta
          name="description"
          content="Ensure legal accuracy with Vertex-HCM’s HR compliance software—trusted HR compliance solutions and services for businesses across Pakistan."
        />
        <link rel="canonical" href="https://vertex-hcm.com/compliance" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="py-8 bg-gradient-to-br from-red-50 to-red-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Compliance Management and HR Compliance Software
                  </h1>
                  <p className="text-gray-600 mb-6 md:text-lg">
                    In the modern HR landscape, compliance is no longer a
                    once-a-year checklist; it’s a continuous responsibility.
                    From evolving labor laws to regional tax codes,
                    organizations are expected to remain vigilant, accurate, and
                    fully auditable. One missed update or expired document can
                    lead to penalties or legal risk. This is why reliable HR
                    compliance software is a must-have, not a nice-to-have.
                    <br />
                    With Vertex HCM’s dedicated compliance module, staying on
                    top of legal obligations, data security, and workforce
                    documentation becomes seamless, centralized, and
                    stress-free. Through intelligent automation, HR compliance
                    services ensure that you meet industry regulations while
                    reducing administrative overload.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Request Demo
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-200 rounded-full opacity-50"></div>
                    <img
                      src={complianceBanner}
                      alt="Compliance"
                      className="rounded-lg shadow-xl relative z-10"
                      // onError={(e) => {
                      //   const target = e.target as HTMLImageElement;
                      //   target.onerror = null;
                      //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/statutory_compliance_management.png';
                      // }}
                    />
                    <div className="absolute -bottom-6 -right-0 w-24 h-24 bg-red-200 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  What Makes Our Compliance Solution Stand Out?
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our platform is not just a tracker; it’s a proactive system
                  that helps you prevent violations before they occur. Here’s
                  how it works:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="h-8 w-8 text-red-600" />,
                    title: "Regulatory Compliance at Your Fingertips",
                    description:
                      "From minimum wage updates to employment laws and social contributions, our software monitors legal changes and updates your system rules automatically. No more scrambling to interpret or implement new regulations.",
                  },
                  {
                    icon: <AlertCircle className="h-8 w-8 text-red-600" />,
                    title: "Proactive Risk Management",
                    description:
                      "Get notified about non-compliant processes before they become legal liabilities. Use predictive alerts and automated checks to prevent lapses in compliance related to documentation, timelines, or employee classification.",
                  },
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-red-600" />,
                    title: "Audit Readiness",
                    description:
                      "Maintain organized, audit-ready documentation in a centralized repository. When inspections or reviews occur, everything from policies to signatures is easy to retrieve and perfectly structured.",
                  },
                  {
                    icon: <FileCheck className="h-8 w-8 text-red-600" />,
                    title: "Secure Documentation Control",
                    description:
                      "Manage contracts, IDs, legal forms, and agreements in one secure cloud-based location. Built-in version control ensures you always know which document is the latest and who last accessed it.",
                  },
                  {
                    icon: <RefreshCw className="h-8 w-8 text-red-600" />,
                    title: "Real-Time Regulatory Updates",
                    description:
                      "The software syncs with authoritative sources and pushes real-time updates to your dashboard. If there's a change in labor laws, your policies and notifications reflect it immediately.",
                  },
                  {
                    icon: <Lock className="h-8 w-8 text-red-600" />,
                    title: "Ironclad Data Security",
                    description:
                      "Sensitive employee information is protected by encryption, role-based access, and multi-layered authentication protocols, ensuring your compliance framework is built on a secure foundation.",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-red-500"
                  >
                    <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Compliance Dashboard Section */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                {/* <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
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
              </div> */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">
                    Real-Time Compliance Dashboard
                  </h2>
                  <p className="text-gray-600 mb-6">
                    HR teams need more than spreadsheets; they need clarity. Our
                    interactive dashboard offers:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Live visual status indicators for compliance across departments",
                      "Automated alerts for document expiration, pending approvals, and audits",
                      "Customizable reports tailored to your industry or region",
                      "Risk metrics for faster decision-making",
                      "Trend analytics to see where improvements are needed",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-red-600 mr-2 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 mb-6">
                    This centralized dashboard offers control and transparency,
                    which are the two pillars of effective compliance.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      See Dashboard Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center">
                {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Comprehensive HCM Solutions</h2> */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                  Empowering HR Teams, Supporting Organizational Growth
                </h2>
                <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
                  Without automated compliance tools, HR professionals spend
                  hours chasing signatures, digging through emails, and worrying
                  about audit readiness. With vertex-HCM HR compliance software
                  in Pakistan, those hours are reclaimed. HR can now focus on
                  strategy, policy development and employee engagement not
                  regulatory firefighting.
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-8">
                  Trusted by Growing Businesses
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                  “Vertex has taken the pressure off our HR team. We now have
                  complete peace of mind during every audit.” — Adeel Zubair,
                  Head of HR
                  <br />
                  “The HR compliance software in Pakistan of Vertex HCM helped
                  us reduce document errors, track regulations, and ensure full
                  legal compliance.” — Hira Qazi, Operations Manager
                  <br />
                  If you are searching for adaptable HR compliance solutions in
                  Pakistan, built for both simplicity and depth, this system
                  checks all the boxes.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-8 bg-gradient-to-r from-red-600 to-red-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                A System That Adapts to Local Needs
              </h2>
              <p className="mb-8 max-w-2xl mx-auto">
                We understand that each region in Pakistan may have its own
                labor nuances. Our tools are tailored to support localized
                regulations, helping you implement HR compliance services
                Pakistan with accuracy. Whether you're a Karachi-based tech
                company or a manufacturing unit in Lahore, our solution scales
                to your business model. Strong HR compliance solutions do not
                just support your HR team; it protects your reputation,
                finances, and people. With HR compliance services Pakistan at
                your fingertips and the proven reliability of{" "}
                <Link to="/" className="text-vertex-blue">
                  vertex-HCM
                </Link>{" "}
                HR compliance software in Pakistan, you're always one step
                ahead.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-red-600 hover:bg-gray-100">
                    Schedule a Demo
                  </Button>
                </Link>
                {/* <Button variant="outline" className="border-white text-white hover:bg-red-500">
                Contact Sales
              </Button> */}
                <a href="mailto:info@viiontech.com">
                  <Button
                    variant="outline"
                    className="bg-red-500 border-white text-white hover:bg-red-600 hover:text-white transition-colors"
                  >
                    Contact Sales
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Compliance;
