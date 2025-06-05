import React, { useEffect } from "react";

import vertexLogo from "../assets/images/vertex-logo.png"; // Adjust the path as necessary
import UAE from "../assets/images/uae.svg";
import SA from "../assets/images/sa.svg";
import USA from "../assets/images/us.svg";
import PK from "../assets/images/pk.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    // Handle scroll intent if coming from another page
    useEffect(() => {
      const scrollTarget = localStorage.getItem("scrollTo");
      if (scrollTarget && location.pathname === "/") {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          localStorage.removeItem("scrollTo");
        }
      }
    }, [location]);
  
    const scrollToFeatures = (e: React.MouseEvent) => {
      e.preventDefault();
  
      if (location.pathname === "/") {
        const section = document.getElementById("features");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        localStorage.setItem("scrollTo", "features");
        navigate("/");
      }
    };
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src={vertexLogo}
                alt="Vertex HCM"
                className="h-8 brightness-200"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Transforming HR management with comprehensive solutions designed
              for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  HR Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Payroll Processing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Time & Attendance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Talent Acquisition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Performance Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Analytics & Reporting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link to ="/"
                 onClick={scrollToFeatures}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  // href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/13072187314"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (307) 218-7314
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors flex items-center">
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                > */}
                <span className="w-[24px] h-[24px] inline-block mr-4 mb-1 flex-shrink-0">
                  <img src={UAE} alt="UAE flag" className="w-full h-full" />
                </span>
                UAE Suite #2805, Prism Tower Business Bay, Dubai, UAE
                {/* </a> */}
              </li>
              <li className="text-gray-400 hover:text-white transition-colors flex items-center">
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                > */}
                <span className="w-[24px] h-[24px] inline-block mr-4 mb-1 flex-shrink-0">
                  <img src={SA} alt="UAE flag" className="w-full h-full" />
                </span>{" "}
                KSA (Saudi Arabia) Building #8051, Prince Thamir Street Al
                Khubar Ash Shamaliyah Kingdom of Saudi Arabia
                {/* </a> */}
              </li>
              <li className="text-gray-400 hover:text-white transition-colors flex items-center">
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                > */}
                <span className="w-[24px] h-[24px] inline-block mr-4 mb-1 flex-shrink-0">
                  <img src={USA} alt="UAE flag" className="w-full h-full" />
                </span>
                USA STE 21805, 30 N Gould St, Sheridan 82801, Wyoming, USA
                {/* </a> */}
              </li>
              <li className="text-gray-400 hover:text-white transition-colors flex items-center">
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                > */}
                <span className="w-[24px] h-[24px] inline-block mr-4 mb-1 flex-shrink-0">
                  <img src={PK} alt="UAE flag" className="w-full h-full" />
                </span>
                Pakistan Innovista Indus IT Park – 1st Floor, DHA Phase II Ext.,
                Karachi
                {/* </a> */}
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support Center
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Vertex HCM. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
