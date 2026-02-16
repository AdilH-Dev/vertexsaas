import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, LineChart, PieChart, Target } from "lucide-react";
import performanceBanner from "../assets/images/Performance.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Performance = () => {
  return (
    <>
      <Helmet>
        <title>Best Performance Management Software | Vertex-HCM</title>
        <meta
          name="description"
          content="Boost productivity with Vertex-HCM performance management software—Pakistan’s best performance management system for tracking goals, reviews, and appraisals."
        />
        <link rel="canonical" href="https://vertex-hcm.com/performance" />
      </Helmet>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="pt-24 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Effective <span className="text-purple-600">Performance</span>{" "}
                  Management and{" "}
                  <span className="text-purple-600">Performance</span>{" "}
                  Management Software
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  In any thriving organization, performance is not just
                  evaluated, it is nurtured, guided, and aligned with bigger
                  goals. When employees clearly understand their objectives and
                  receive consistent feedback, their engagement, productivity,
                  and growth skyrocket. This is why businesses today rely on a
                  robust performance management software to transform scattered
                  efforts into coordinated success.
                  <br />
                  Vertex HCM offers an intuitive and flexible performance
                  management system that empowers teams, encourages
                  transparency, and fosters a culture of continuous improvement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Schedule Demo
                  </Button>
                  </Link>
                  <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-600/10"
                  >
                    Learn More
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <img
                    src={performanceBanner}
                    alt="Effective Performance Management"
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

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold mb-4">
                Building a Culture of Accountability and Growth
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Gone are the days when annual appraisals alone defined employee
                growth. In modern organizations, performance is tracked,
                discussed, and optimized year-round. This not only improves
                individual contributions but also aligns team efforts with
                company-wide objectives. The right employee performance
                management software bridges the gap between expectations and
                outcomes, offering structure, clarity, and motivation.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <div className="pb-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Key Features of Vertex HCM’s Performance Module
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Our tools are designed to help employees do their best work and
              help leaders identify how to support them better.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Goal Setting and OKRs
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Help your teams stay aligned with the company’s vision through
                  clearly defined objectives and measurable outcomes.
                </p>
                <ul className="text-gray-600 mb-4">
                  {[
                    "●	Assign goals at individual, team, or department levels",
                    "●	Set timelines and priorities",
                    "●	Track progress through visual dashboards",
                    "●	Align OKRs with company milestones",
                  ].map((items) => {
                    return <li>{items}</li>;
                  })}
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10"
                >
                  Learn More
                </Button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Flexible Review Cycles
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Move beyond generic appraisal formats. Our customizable review
                  process supports various formats and frequencies.
                </p>
                <ul className="text-gray-600 mb-4">
                  {[
                    "●	Run quarterly, biannual, or annual reviews",
                    "●	Enable self-assessments for self-reflection",
                    "●	Gather 360-degree feedback from peers, managers, and subordinates",
                    "●	Use templates or create your own review forms",
                  ].map((items) => {
                    return <li>{items}</li>;
                  })}
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10"
                >
                  Learn More
                </Button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <LineChart className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Continuous Feedback & Recognition
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Motivate and guide employees through regular check-ins,
                  shout-outs, and suggestions.
                </p>
                <ul className="text-gray-600 mb-4">
                  {[
                    "●	Share real-time feedback on specific tasks or behaviors",
                    "●	Recognize contributions instantly, not just during reviews",
                    "●	Coach in the moment to correct course early",
                    "●	Build stronger relationships between managers and teams",
                  ].map((items) => {
                    return <li>{items}</li>;
                  })}
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10"
                >
                  Learn More
                </Button>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <PieChart className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Analytics That Power Decisions
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get actionable insights from your performance management
                  system using dynamic dashboards and reports.
                </p>
                <ul className="text-gray-600 mb-4">
                  {[
                    "●	Identify top performers and potential successors",
                    "●	Track performance dips before they escalate",
                    "●	Pinpoint training needs and skill gaps",
                    "●	Make promotion or restructuring decisions based on data",
                  ].map((items) => {
                    return <li>{items}</li>;
                  })}
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-2 border-purple-600 text-purple-600 hover:bg-purple-600/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <section id="features" className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Comprehensive HCM Solutions</h2> */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                Benefits Beyond Evaluation
              </h2>
              <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
                While HR handles the process, the real success of a performance
                system lies in how it’s used by employees and managers. With
                employee performance tracking software, teams are empowered to
                take charge of their goals, view progress, and stay informed
                throughout the year. Managers can track milestones, recognize
                wins, and deliver coaching in a timely and constructive way,
                making feedback less stressful and more productive. Great
                performance management leads to better communication, faster
                development, and stronger engagement. With features tailored for
                ease of use, performance tracking software not only improves how
                you evaluate but how you lead. Our performance management
                software in Pakistan delivers just that, helping businesses
                adapt to changing expectations without losing their human touch.
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-8">
                Real Impact, Real Voices
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                “Before Vertex, our reviews were rushed and inconsistent. Now we
                track employee progress all year round and reward real
                contributions.” — Shahzaib Tariq, HR Lead
                <br />
                “The best performance management software is one that fits your
                culture. Vertex helped us achieve that.” — Mahnoor Rizvi, People
                Development Manager
                <br />
                Businesses using employee performance management software
                consistently report higher retention, improved team alignment,
                and a stronger culture of excellence.
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-8">
                A Tool That Grows With You
              </h2>
              <p className="text-gray-600 max-w-5xl mx-auto text-sm md:text-base">
                Performance is not static and your systems should not be either.
                No matter if you are managing a small team or scaling across
                departments, Vertex offers a seamless solution for performance
                growth. With the powerful capabilities of performance management
                software in Pakistan, paired with the user-friendly
                functionality of employee performance tracking software, you get
                the structure and flexibility needed to manage today and build
                tomorrow.
                <br />
                Let <Link to="/" className="text-vertex-blue">Vertex HCM</Link> be your partner in growth, clarity, and
                accountability.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Performance;
