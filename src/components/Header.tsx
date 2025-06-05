import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import vertexLogo from "../assets/images/vertex-logo.png"; // Adjust the path as necessary
import Navigation from "./Navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3 md:py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Vertex Logo */}
          <img src={vertexLogo} alt="Vertex HCM" className="h-6 md:h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="hidden md:flex items-center">
          <Link to="/contact">
            <Button className="bg-vertex-blue hover:bg-vertex-blue-light text-white text-sm md:text-base">
              Request Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto flex flex-col space-y-3">
            <Link
              to="/"
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative">
              <div className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md font-medium">
                Modules
              </div>
              <div className="pl-6 space-y-1 mt-1">
                <Link
                  to="/payroll"
                  className="block text-gray-700 py-1 px-4 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Payroll
                </Link>
                <Link
                  to="/attendance"
                  className="block text-gray-700 py-1 px-4 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Attendance
                </Link>
                <Link
                  to="/recruitment"
                  className="block text-gray-700 py-1 px-4 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Recruitment
                </Link>
                <Link
                  to="/performance"
                  className="block text-gray-700 py-1 px-4 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Performance
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 py-2 px-4 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 py-2">
              <Button
                className="bg-vertex-blue hover:bg-vertex-blue-light text-white w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
