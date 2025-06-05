
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import InfoSlider from '../components/InfoSlider';
import AppScreensShowcase from '../components/AppScreensShowcase';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
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
  );
};

export default Index;
