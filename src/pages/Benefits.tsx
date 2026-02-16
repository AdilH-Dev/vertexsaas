import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Award, Heart, Activity, Gift, Users } from "lucide-react";
import promotionBanner from "../assets/images/Promotion.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <>
      <Helmet>
        <title>HR & Employee Benefits Services | Vertex-HCM Pakistan</title>
        <meta
          name="description"
          content="Vertex-HCM offers smart HR employee benefits and services—simplify benefits administration with a complete HR and employee benefits management solution in Pakistan."
        />
        <link rel="canonical" href="https://vertex-hcm.com/benefits" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="py-8 bg-gradient-to-br from-green-50 to-green-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Comprehensive Benefits Administration and HR & Employee
                    Benefits Services
                  </h1>
                  <p className="text-gray-600 mb-6 md:text-lg">
                    Attracting top talent is just the beginning; retaining it
                    requires meaningful and well-managed benefits. In today’s
                    workforce, employees expect more than just a paycheck. They
                    seek healthcare support, work-life balance, retirement
                    planning, and flexible options that suit their life stages.
                    Managing these expectations effectively requires a solid HR
                    employee benefits platform that does more than just process
                    paperwork.
                    <br />
                    Vertex HCM brings clarity and structure to your benefits
                    administration, making it easier for HR teams to manage
                    offerings and for employees to feel supported, informed, and
                    valued.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Request Demo
                    </Button>
                    </Link>
                    <Link to="/contact">
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Learn More
                    </Button>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
                    <img
                      src={promotionBanner}
                      alt="Comprehensive Benefits Administration"
                      className="rounded-lg shadow-xl relative z-10"
                      // onError={(e) => {
                      //   const target = e.target as HTMLImageElement;
                      //   target.onerror = null;
                      //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/benefits_administration.png';
                      // }}
                    />
                    <div className="absolute -bottom-6 -right-0 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
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
                  What Our Benefits Platform Covers
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our platform simplifies every aspect of HR and employee
                  benefits, from plan selection to compliance tracking. Here’s a
                  look at what you can manage effortlessly:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Shield className="h-8 w-8 text-green-600" />,
                    title: "Health Insurance",
                    description:
                      "Support your team’s well-being with integrated health benefits administration.",
                    points: [
                      "●	Automate enrollment for medical, dental, and vision plans",
                      "●	Track eligibility by job role or status",
                      "●	Enable plan comparisons for informed decision-making",
                    ],
                  },
                  {
                    icon: <Award className="h-8 w-8 text-green-600" />,
                    title: "Retirement Plans",
                    description: "Plan for tomorrow while managing today.",
                    points: [
                      "●	Administer 401(k), provident funds, and pension options",
                      "●	Handle employer matching, vesting schedules, and compliance updates",
                      "●	Track retirement contributions with full visibility",
                    ],
                  },
                  {
                    icon: <Heart className="h-8 w-8 text-green-600" />,
                    title: "Wellness Initiatives",
                    description:
                      "Encourage healthier habits across the organization.",
                    points: [
                      "●	Launch fitness challenges and wellness campaigns",
                      "●	Monitor participation rates and outcomes",
                      "●	Provide employees with wellness resources and reminders",
                    ],
                  },
                  {
                    icon: <Activity className="h-8 w-8 text-green-600" />,
                    title: "Life & Disability Coverage",
                    description: "Offer peace of mind when it matters most.",
                    points: [
                      "●	Streamline enrollment in life insurance and disability coverage",
                      "●	Track beneficiary information and claims status",
                      "●	Provide educational tools around policy details",
                    ],
                  },
                  {
                    icon: <Gift className="h-8 w-8 text-green-600" />,
                    title: "Voluntary Benefits",
                    description: "Let employees personalize their coverage.",
                    points: [
                      "●	Offer accident insurance, travel coverage, or pet insurance",
                      "●	Customize by employee category",
                      "●	Manage opt-ins and deductions in real time",
                    ],
                  },
                  {
                    icon: <Users className="h-8 w-8 text-green-600" />,
                    title: "Family & Lifestyle Benefits",
                    description:
                      "Support employees inside and outside the office.",
                    points: [
                      "●	Track and manage parental leave",
                      "●	Offer childcare support or reimbursements",
                      "●	Address life events like marriage, relocation, or dependent changes",
                    ],
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-green-500"
                  >
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <ul className="text-gray-600">
                      {feature.points.map((items) => {
                        return <li>{items}</li>;
                      })}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Portal Section */}
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center">
                {/* <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
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
              </div> */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">
                    Empowerment Through Self-Service
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Today’s employees expect convenience, especially when
                    managing personal matters like benefits. Our intuitive
                    portal gives them access to all the information they need,
                    whenever they need it.
                    <br />
                    Through the self-service dashboard, employees can:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "View and compare benefit plans",
                      "Enroll or update benefits during open enrollment or qualifying events",
                      "Access digital documents and insurance cards",
                      "Track contributions to HSA and FSA accounts",
                      "Ask benefit-related questions directly to HR",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-600 mr-2 mt-1"
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
                  <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    See Portal Demo
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Tailored for Today’s Workforce
                </h2>
                <p className="text-gray-600 max-w-5xl mx-auto mb-4">
                  Benefits often intersect with legal obligations. Our system
                  automatically aligns with Pakistan’s HR laws and ensures
                  documentation is up-to-date. No matter if you are managing
                  leave entitlements, tax implications, or insurance reporting,
                  we gave got you covered.
                </p>
                <p className="text-gray-600 max-w-5xl mx-auto mb-4">
                  It’s all part of our commitment to providing reliable HR &
                  employee benefits services that remove guesswork from the
                  equation. From remote workers and freelancers to full-time
                  employees with complex family needs, benefits are no longer
                  one-size-fits-all. This is why Vertex HCM supports flexible
                  configurations that allow HR teams to cater to varied
                  requirements with ease.
                </p>
                <p className="text-gray-600 max-w-5xl mx-auto mb-4">
                  No matter if you are scaling your business or refining your
                  internal policies, you need an HR and employee benefits
                  company that adapts with you, not one that slows you down. Let
                  our HR & employee benefits services take the complexity out of
                  benefits so you can focus on what smatters most: your people.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-8 bg-gradient-to-r from-green-600 to-green-700 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Trusted and Proven by Real Organizations
              </h2>
              <p className="mb-4 max-w-4xl mx-auto">
                “<Link to="/" className="text-vertex-blue">Vertex HCM</Link> simplified the way we deliver benefits. Our team has
                more clarity and control than ever before.” — Maham Tariq, HR
                Coordinator
              </p>
              <p className="mb-4 max-w-4xl mx-auto">
                “Thanks to the vertex-HCM HR compliance software in Pakistan,
                our benefits are now 100% compliant and fully streamlined.” —
                Danish Javed, Admin Head
              </p>
              <p className="mb-8 max-w-4xl mx-auto">
                From documentation to execution, businesses using HR employee
                benefits and services tools like ours enjoy greater retention,
                happier employees, and smoother HR operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Schedule a Demo
                </Button>
                </Link>
                {/* <Button variant="outline" className="bg-green-500 border-white text-white hover:bg-green-500">
                Contact Sales
              </Button> */}
                <a href="mailto:info@viiontech.com">
                  <Button
                    variant="outline"
                    className="bg-green-500 border-white text-white hover:bg-green-600 hover:text-white transition-colors"
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

export default Benefits;
