import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import recruitmentBanner from "../assets/images/recruitment-banner.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Recruitment = () => {
  return (
    <>
      <Helmet>
        <title>Vertex-HCM HR Recruitment System in Pakistan</title>
        <meta
          name="description"
          content="Simplify hiring with Vertex-HCM online HR recruitment software—an efficient HR recruitment management software tailored for businesses in Pakistan."
        />
        <link rel="canonical" href="https://vertex-hcm.com/recruitment" />
      </Helmet>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="pt-28 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Streamlined{" "}
                  <span className="text-violet-600">Recruitment</span> Process
                  and HR recruitment management software Process
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Recruiting the right people is more than just reviewing CVs or
                  scheduling interviews. Instead, it’s about building a solid
                  foundation for long-term success. As businesses grow and
                  evolve, so does the demand for a faster, smarter, and more
                  efficient way to attract top talent. This is why a dependable
                  HR recruitment system in Pakistan has become an essential part
                  of every organization’s toolkit.
                  <br />
                  At Vertex HCM, we believe hiring shouldn’t feel chaotic. Our
                  end-to-end recruitment and onboarding solution helps HR teams
                  in sourcing, evaluating, and onboarding candidates with
                  precision and ease; all from one intuitive platform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-vertex-blue to-violet-600 hover:from-vertex-blue hover:to-violet-700 text-white">
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-violet-600 text-violet-600 hover:bg-violet-600/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <img
                    src={recruitmentBanner}
                    alt="Streamlined Recruitment Process"
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
            <h2 className="text-3xl font-bold text-center mb-8">
              Step-by-Step Recruitment That Works
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Our recruitment module is built to guide HR teams through every
              phase of the hiring journey, ensuring nothing slips through the
              cracks.
            </p>

            <Tabs defaultValue="sourcing" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="sourcing">Sourcing</TabsTrigger>
                <TabsTrigger value="screening">Screening</TabsTrigger>
                <TabsTrigger value="interviewing">Interviewing</TabsTrigger>
                <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              </TabsList>

              <TabsContent value="sourcing" className="rounded-md border p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Candidate Sourcing
                </h3>
                <p className="mb-4 text-gray-700">
                  Attract top talent through multiple sourcing channels with
                  tools that allow you to build a diverse and qualified
                  pipeline.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Post job openings to multiple platforms simultaneously
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>Integrate with social media for broader reach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Manage internal referrals with built-in tracking
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Maintain a searchable talent pool for future roles
                    </span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="screening" className="rounded-md border p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Intelligent Screening
                </h3>
                <p className="mb-4 text-gray-700">
                  Filtering the right candidates quickly is essential. Our HR
                  recruitment management software uses intelligent filters to
                  help you shortlist the best without wasting time.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>AI-based resume parsing for accurate sorting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>Pre-employment assessments to gauge skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Custom screening questions for role-specific alignment
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>Integration with background verification tools</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent
                value="interviewing"
                className="rounded-md border p-6"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Smooth Interview Coordination
                </h3>
                <p className="mb-4 text-gray-700">
                  Once you’ve identified potential hires, make the interview
                  process easy for candidates and hiring teams alike.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>Sync with calendars for quick scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Conduct remote interviews with built-in video support
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Use structured interview templates for consistency
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Collect feedback collaboratively and compare candidates
                      easily
                    </span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="onboarding" className="rounded-md border p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Seamless Employee Onboarding
                </h3>
                <p className="mb-4 text-gray-700">
                  After a successful hire, a smooth onboarding experience
                  ensures the employee feels confident and prepared.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Let new hires complete forms digitally, including
                      contracts and tax details
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>Assign orientation tasks automatically</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>Distribute training materials within the system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                    <span>
                      Track onboarding milestones and employee progress
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
          <div className="pb-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
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
                  Designed for Efficiency, Built for Scale
                </h3>
                <p className="text-gray-600">
                  As hiring needs grow, managing hundreds of candidates manually becomes overwhelming. That’s why tools like vertex-HCM online HR recruitment software offer centralized controls, custom workflows, and data-driven insights to make recruitment scalable and organized.
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
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">Real-Time Insights for Better Decisions</h3>
                <p className="text-gray-600">
                 Use dashboards and reports to identify bottlenecks, hiring trends, and source effectiveness. By visualizing your recruitment data, you can improve decision-making, reduce time-to-hire, and plan for future talent needs. Whether it is about understanding which job boards bring the best candidates or tracking offer acceptance rates, this insight is right at your fingertips.
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
                <h3 className="text-xl font-semibold mb-3 text-vertex-blue">Secure, Compliant, and Locally Optimized</h3>
                <p className="text-gray-600">
                  Data privacy and legal compliance are integrated into every stage of the process. Our solution is designed with regional labor laws and hiring regulations in mind, ensuring that your HR recruitment system in Pakistan works within the frameworks your organization must follow. Role-based access and encryption also ensure all applicant data is stored securely and ethically.
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
                  A Platform That Grows with You
                </h3>
                <p className="text-gray-600">
                  The future of hiring is fast, paperless, and personalized. With <Link to="/" className="text-vertex-blue">vertex-HCM</Link> online HR recruitment software, you do not just fill positions but you build teams. And with smart HR recruitment management software, you're always a step ahead in finding the right fit.
                </p>
              </div>
            </div>            
          </div>
        </div>
        

        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Comprehensive HCM Solutions</h2> */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                What Clients Are Saying
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                “The entire hiring process became more structured with Vertex.
                From job posting to onboarding, everything is now under one
                roof.” — Fatima Shah, Recruitment Manager
                <br />
                “Thanks to the vertex-HCM online HR recruitment software, our HR
                team was able to cut hiring time by nearly 40%.” — Saad Yousaf,
                Head of People Ops
                <br />
                When businesses need reliable, adaptable HR recruitment
                management software, they turn to tools that can evolve with
                their growth — and still keep hiring humans.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Recruitment;
