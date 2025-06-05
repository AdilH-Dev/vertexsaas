import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
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
  // Function to scroll to features section
  // const scrollToFeatures = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   const featuresSection = document.getElementById('features');
  //   if (featuresSection) {
  //     featuresSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex-wrap gap-1">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Modules</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] gap-2 p-4 md:w-[400px] md:grid-cols-2 lg:w-[600px]">
              <Link to="/payroll">
                <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-vertex-blue-light to-vertex-blue p-4 md:p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-2 md:mt-4 text-base md:text-lg font-medium text-white">
                    Payroll
                  </div>
                  <p className="text-xs md:text-sm leading-tight text-white/90">
                    Manage employee compensation, taxes, and compliance.
                  </p>
                </NavigationMenuLink>
              </Link>
              <Link to="/attendance">
                <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-vertex-orange-light to-vertex-orange p-4 md:p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-2 md:mt-4 text-base md:text-lg font-medium text-white">
                    Attendance
                  </div>
                  <p className="text-xs md:text-sm leading-tight text-white/90">
                    Track time, manage shifts, and monitor attendance.
                  </p>
                </NavigationMenuLink>
              </Link>
              <Link to="/recruitment">
                <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-vertex-blue to-violet-600 p-4 md:p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-2 md:mt-4 text-base md:text-lg font-medium text-white">
                    Recruitment
                  </div>
                  <p className="text-xs md:text-sm leading-tight text-white/90">
                    Streamline hiring process from job posting to onboarding.
                  </p>
                </NavigationMenuLink>
              </Link>
              <Link to="/performance">
                <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500 to-purple-700 p-4 md:p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-2 md:mt-4 text-base md:text-lg font-medium text-white">
                    Performance
                  </div>
                  <p className="text-xs md:text-sm leading-tight text-white/90">
                    Set goals, track progress, and conduct evaluations.
                  </p>
                </NavigationMenuLink>
              </Link>
              <Link to="/benefits">
                <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-700 p-4 md:p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-2 md:mt-4 text-base md:text-lg font-medium text-white">
                    Benefits
                  </div>
                  <p className="text-xs md:text-sm leading-tight text-white/90">
                    Administer and optimize employee benefits programs.
                  </p>
                </NavigationMenuLink>
              </Link>
              <Link to="/compliance">
                <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-500 to-red-700 p-4 md:p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-2 md:mt-4 text-base md:text-lg font-medium text-white">
                    Compliance
                  </div>
                  <p className="text-xs md:text-sm leading-tight text-white/90">
                    Stay compliant with labor laws and regulations.
                  </p>
                </NavigationMenuLink>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/" onClick={scrollToFeatures}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/pricing">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
