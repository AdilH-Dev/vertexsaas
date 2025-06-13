import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import InfoSlider from "../components/InfoSlider";
import AppScreensShowcase from "../components/AppScreensShowcase";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vertex - # 1 HR Software and Attendance System</title>
        <meta
          name="description"
          content="Vertex HCM software is a powerful human resource management software and trusted HR software in Pakistan for payroll, attendance, and employee management."
        />
        <link rel="canonical" href="https://vertex-hcm.com/" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <InfoSlider />
        <AppScreensShowcase />
        <Testimonials />
        <AboutUs />
        <ContactCTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
