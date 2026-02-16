import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText = "Get Started",
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}) => {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
        isPopular
          ? "bg-gradient-to-br from-vertex-blue-light to-vertex-blue text-white"
          : "bg-white"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-vertex-orange text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-sm">/month</span>}
      </div>
      <p
        className={`mb-6 text-sm ${
          isPopular ? "text-white/90" : "text-gray-500"
        }`}
      >
        {description}
      </p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className={`h-5 w-5 mr-2 flex-shrink-0 ${
                isPopular ? "text-white" : "text-vertex-blue"
              }`}
            />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact">
      <Button
        className={`w-full mt-auto ${
          isPopular
            ? "bg-white text-vertex-blue hover:bg-gray-100"
            : "bg-vertex-blue text-white hover:bg-vertex-blue-light"
        }`}
      >
        {buttonText}
      </Button>
      </Link>
    </div>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Vertex Basic",
      price: "$199",
      description:
        "Perfect for startups and small businesses just beginning with HCM.",
      features: [
        "Employee Onboarding",
        "Attendance Monitoring",
        "Off boarding",
        "Leave and Absent Management",
        "Geofencing / Location tracking",
        "Multi location",
        "Aproval management",
        "Company branding",
        "Android / iOS application",
        "Biometric integration",
        "4 hours Training",
        "Email support"
      ],
    },
    {
      title: "Vertex Pro",
      price: "$399",
      description: "Ideal for growing businesses with comprehensive HCM needs.",
      features: [
        "Employee Onboarding",
        "Attendance Monitoring",
        "Off boarding",
        "Leave and Absent Management",
        "Geofencing / Location tracking",
        "Multi location",
        "Aproval management",
        "Company branding",
        "Android / iOS application",
        "Biometric integration",
        "Payroll management",
        "Loan Request",
        "Provident fund",
        "Asset Management",
        "Allowence & Commision",
        "10 hours Training",
        "Online support"
      ],
      isPopular: true,
    },
    {
      title: "Vertex Customize",
      price: "Custom",
      description:
        "Tailored solutions for large organizations with complex requirements.",
      features: [
       "Employee Onboarding",
        "Attendance Monitoring",
        "Off boarding",
        "Leave and Absent Management",
        "Geofencing / Location tracking",
        "Multi location",
        "Aproval management",
        "Company branding",
        "Android / iOS application",
        "Biometric integration",
        "Payroll management",
        "Loan Request",
        "Provident fund",
        "Asset Management",
        "Allowence & Commision",
        "Performanance",
        "Recuirement",
        "Training Module",
        "24 hours Training",
        "Online & Phone support"
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Vertex - # 1 HR Software and Attendance System - Pricing</title>
        <meta
          name="description"
          content="Explore affordable pricing plans for Vertex HCM—Pakistan’s #1 HR software and attendance system. Choose the best-fit HR solution tailored to your business needs."
        />
        <link rel="canonical" href="https://vertex-hcm.com/pricing" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="py-4 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Choose the perfect plan for your organization's needs with no
                hidden fees.
              </p>

              <div className="inline-flex items-center justify-center p-1 mb-8 bg-gray-200 rounded-lg">
                <button className="px-4 py-2 bg-white rounded-md shadow-sm font-medium">
                  Monthly Billing
                </button>
                <button className="px-4 py-2 rounded-md font-medium text-gray-600">
                  Annual Billing (20% off)
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <PricingCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    description={plan.description}
                    features={plan.features}
                    isPopular={plan.isPopular}
                    buttonText={plan.buttonText}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    question: "Do you offer a free trial?",
                    answer:
                      "Yes, we offer a 14-day free trial on all our plans with full access to all features. No credit card required.",
                  },
                  {
                    question: "Can I change plans later?",
                    answer:
                      "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
                  },
                  {
                    question: "Is there a setup fee?",
                    answer:
                      "No, there are no setup fees or hidden charges. You only pay the advertised price.",
                  },
                  {
                    question: "Do you offer discounts for non-profits?",
                    answer:
                      "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for details.",
                  },
                  {
                    question: "How secure is my data?",
                    answer:
                      "Your data is encrypted at rest and in transit. We employ industry-standard security measures and are SOC 2 and GDPR compliant.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team is ready to help you find the perfect solution for
                  your organization.
                </p>
      <Link to="/contact">
                <Button className="bg-vertex-blue hover:bg-vertex-blue-light text-white">
                  Contact Sales
                </Button>
      </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
