import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Smartphone, Monitor, Tablet } from "lucide-react";
import desktop from "../assets/images/Desktop.svg";
import mobile from "../assets/images/mobile.png";
import tab from "../assets/images/tab.png";

const AppScreensShowcase = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("app-screens-showcase");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const screens = [
    {
      title: "Desktop Dashboard",
      description:
        "All tools visible in one glance",
      image: desktop,
      color: "bg-vertex-blue/10",
      icon: <Monitor className="w-5 h-5 text-vertex-blue" />,
    },
    {
      title: "Mobile-Friendly App ",
      description:
        "Manage HR tasks while on the move",
      image: mobile,
      // color: "bg-vertex-orange/10",
      color: "bg-transparent",
      icon: <Smartphone className="w-5 h-5 text-vertex-orange" />,
    },
    {
      title: "Tablet Support",
      description:
        "Perfect for mid-meeting decisions or quick checks",
      image: tab,
      color: "bg-vertex-blue-light/10",
      icon: <Tablet className="w-5 h-5 text-vertex-blue-light" />,
    },
  ];

  const handleSliderChange = (value: number[]) => {
    setActiveScreen(value[0]);
  };

  return (
    <section id="app-screens-showcase" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for Flexibility, Built for All Devices
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform works seamlessly on all screens, helping HR teams stay connected from boardroom to breakroom with real-time notifications, simpler interface and smooth incorporation with your current tools:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div
            className={cn(
              "w-full md:w-1/2 transition-all duration-1000 transform",
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            )}
          >
            <div
              className={cn(
                "relative rounded-2xl overflow-hidden",
                screens[activeScreen].color !== "bg-transparent" &&
                  "shadow-2xl border border-gray-100",
                screens[activeScreen].color
              )}
            >
              {/* Device frame */}
              <div className="aspect-[9/16] md:aspect-video relative">
                <div className="absolute inset-0 p-4 md:p-8">
                  {/* Interface mockup */}
                  <img
                    src={screens[activeScreen].image}
                    alt={screens[activeScreen].title}
                    className={cn(
                      "w-full h-full object-contain rounded-lg ",
                      screens[activeScreen].color !== "bg-transparent" &&
                        "shadow-inner"
                    )}
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.onerror = null;
                    //   target.src = 'https://www.vertex-hcm.com/wp-content/uploads/2023/03/hrms-Essentials-1024x576.png';
                    // }}
                  />
                </div>

                {/* Device details */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/4 h-1.5 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full"></div>

                {/* Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "w-full md:w-1/2 flex flex-col justify-center",
              "transition-all duration-1000 delay-300 transform",
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              {screens[activeScreen].icon}
              <h3 className="text-2xl font-bold">
                {screens[activeScreen].title}
              </h3>
            </div>
            <p className="text-gray-600 mb-8">
              {screens[activeScreen].description}
            </p>

            <div className="mb-8">
              <Slider
                defaultValue={[0]}
                max={screens.length - 1}
                step={1}
                value={[activeScreen]}
                onValueChange={handleSliderChange}
                className="py-4"
              />

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                {screens.map((screen, index) => (
                  <span
                    key={index}
                    className={cn(
                      "cursor-pointer transition-colors flex items-center gap-1",
                      activeScreen === index
                        ? "text-vertex-blue font-medium"
                        : ""
                    )}
                    onClick={() => setActiveScreen(index)}
                  >
                    {screen.icon}
                    {screen.title.split(" ")[0]}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-vertex-blue/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-vertex-blue font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Intuitive Interface</h4>
                  <p className="text-gray-500 text-sm">
                    Designed for ease of use across all devices
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-vertex-blue/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-vertex-blue font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Real-Time Updates</h4>
                  <p className="text-gray-500 text-sm">
                    Stay informed with instant notifications
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-vertex-blue/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-vertex-blue font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Seamless Integration</h4>
                  <p className="text-gray-500 text-sm">
                    Works with your existing business tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreensShowcase;
