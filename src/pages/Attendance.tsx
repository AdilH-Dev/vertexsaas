import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import attendanceBanner from "../assets/images/attendance-banner.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <>
      <Helmet>
        <title>Vertex-HCM Attendance Management Software Pakistan</title>
        <meta
          name="description"
          content="Track time easily with Vertex-HCM attendance management software—smart attendance software in Pakistan for accurate, real-time workforce monitoring and reports."
        />
        <link rel="canonical" href="https://vertex-hcm.com/attendance" />
      </Helmet>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="pt-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Efficient{" "}
                  <span className="text-vertex-orange">Attendance</span>{" "}
                  Management Software Tracking
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  In today’s fast-paced, hybrid, and ever-evolving work
                  environment, tracking employee attendance is not just about
                  clocking in and out; it is about ensuring accountability,
                  managing time effectively, and supporting operational
                  efficiency.. This is where a powerful attendance management
                  software transforms how time is recorded and managed. With
                  Vertex HCM’s intelligent attendance module, businesses gain
                  complete visibility over working hours, shifts, absences, and
                  overtime, all in real time and across all devices.
                </p>
                <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-vertex-orange hover:bg-vertex-orange-light text-white">
                    Schedule Demo
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-vertex-orange text-vertex-orange hover:bg-vertex-orange/10"
                  >
                    Learn More
                  </Button>
                </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <img
                    src={attendanceBanner}
                    alt="Efficient Attendance Tracking"
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
        {/* Features Section */}
        <section className="pt-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center ">
              <h2 className="text-3xl font-bold mb-4">
                Beyond the Punch Card: What Modern Attendance Looks Like
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Forget outdated registers or single-location systems. The modern
                workplace is decentralized — remote workers, field teams, and
                flexible hours are the new norm. A robust attendance management
                system needs to adapt to that complexity without adding chaos.
                <br />
                <Link to="/" className="text-vertex-blue">
                  Vertex HCM
                </Link>{" "}
                provides a smart, unified approach that covers biometric
                integration, leave tracking, and even geolocation — creating an
                accurate, fair, and automated way to manage time.
              </p>
            </div>
          </div>
        </section>

        {/* Features List */}
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Key Features That Make a Difference
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-center">
              Our system is not just a digital punch-in machine. It’s a complete
              solution designed for managers and employees alike to track,
              manage, and understand attendance patterns.
            </p>

            <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
              {[
                {
                  head: "Multi-Device Time Tracking",
                  para: "Whether employees clock in through a mobile app, tablet, or desktop, the system records everything in sync. Ideal for hybrid setups and field staff, ensuring no time is missed.",
                },
                {
                  head: "Biometric Integration",
                  para: "Eliminate buddy punching and proxy attendance with biometric systems. From fingerprint scanners to facial recognition devices, all are compatible with Vertex HCM's interface.",
                },
                {
                  head: "Flexible Shift Scheduling",
                  para: "Create custom shift plans based on departments or roles. Whether you manage rotating shifts or split timings, our drag-and-drop scheduling feature simplifies it all.",
                },
                {
                  head: "Overtime Management",
                  para: "Track overtime hours automatically and apply rules as per your HR policy. The system calculates additional hours based on scheduled shifts and attendance data.",
                },
                {
                  head: "Real-Time Dashboards",
                  para: "Access real-time attendance reports for individuals, teams, or the entire organization. Customize views for HR, team leads, and department heads with role-based access.",
                },
                {
                  head: "Leave Management",
                  para: "Let employees request leave directly through the platform. HR can approve, reject, or comment—all while keeping attendance records up to date and accurate.",
                },
                {
                  head: "Geo-Fencing and Location Tracking",
                  para: "Enable GPS tracking for remote teams or site-based workforces. Know where employees are checking in from, and limit punch-ins to authorized zones.",
                },
                {
                  head: "Policy Customization",
                  para: "Not all organizations follow the same rules. Build attendance policies that suit your business, whether it's grace periods, half-days, or casual leave eligibility.",
                },
                // "Time tracking across multiple devices",
                // "Biometric integration capabilities",
                // "Shift scheduling and management",
                // "Overtime calculations",
                // "Leave management system",
                // "Real-time attendance reporting",
                // "Geographic location tracking",
                // "Customizable attendance policies",
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vertex-orange mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      {feature.head}
                    </h3>
                    <p className="text-gray-700">{feature.para}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
                <Link to="/contact">  
              <Button className="bg-vertex-orange hover:bg-vertex-orange-light text-white px-8 py-6 text-lg">
                Request a Free Trial
              </Button>
                </Link>
            </div>
          </div>
        </div>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Simplifying HR Tasks, Empowering Employees
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto mb-4">
                Gone are the days when HR had to chase down timesheets or
                reconcile data manually. With vertex-HCM attendance management
                software, HR managers can automate time tracking, generate
                instant reports, and focus on strategic functions.
              </p>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Hear From Those Who’ve Used It
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto mb-4">
                “We’ve streamlined multiple shifts across three cities using
                Vertex’s attendance management software in Pakistan. It’s
                reliable and completely customizable.” — Zeeshan Khalid,
                Operations Manager
                <br />
                “No more confusion during payroll. Vertex’s real-time reports
                save hours of work every month.” — Ayesha Noor, HR Lead
                <br />
                These are just a few of the many satisfied voices who rely on
                vertex-HCM attendance management software every day.
              </p>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Adaptable Across Industries
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-4">
                Whether you manage a factory floor, a customer service center, or a software company with hybrid teams, our system adapts. Designed with flexibility at its core, it serves every industry, including retail, education, logistics, healthcare, and more. This is why attendance software in Pakistan must offer more than just clock-ins. It should support operations, reflect fairness, and ensure compliance. No matter where your team is working from, your attendance software in Pakistan should never stop functioning and ours never does. For those seeking the most practical attendance management software in Pakistan, Vertex offers a blend of technology, usability, and local support that’s hard to match.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Attendance;
