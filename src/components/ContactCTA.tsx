import React, { useState } from "react";
import ButtonHover from "./ui/button-hover";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      setStatus(text); // show server response (success or error)
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none gradient-bg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-vertex-blue/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-vertex-orange/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your HR Management?
              </h2>
              <p className="text-gray-600 mb-6">
                Speak with one of our HR solution experts and discover how
                Vertex HCM can help your organization streamline operations,
                enhance employee experience, and drive strategic outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <ButtonHover variant="primary" size="lg">
                    Request Demo
                  </ButtonHover>
                </Link>
                <ButtonHover variant="outline" size="lg">
                  Contact Sales
                </ButtonHover>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-br from-vertex-blue to-vertex-blue-dark p-6 text-white">
                    <h3 className="text-xl font-semibold mb-4">
                      Get Started Today
                    </h3>
                    {/* <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                       <div>
                        <input
                          type="tel"
                          placeholder="Your Phone Number"
                          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <button className="w-full bg-white text-vertex-blue font-medium py-2 rounded-md hover:bg-gray-100 transition-colors">
                          Get in Touch
                        </button>
                      </div>
                    </form> */}
                    <>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="company"
                            placeholder="Company Name"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full bg-white text-vertex-blue font-medium py-2 rounded-md hover:bg-gray-100 transition-colors"
                          >
                            Get in Touch
                          </button>
                        </div>
                      </form>

                      {status && (
                        <p className="mt-4 text-white bg-green-500/20 p-2 rounded-md">
                          {status}
                        </p>
                      )}
                    </>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 h-10 w-10 bg-vertex-orange rounded-full animate-float"></div>
                <div
                  className="absolute -bottom-3 -left-3 h-6 w-6 bg-vertex-blue-light rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
