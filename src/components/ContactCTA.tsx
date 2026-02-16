import React, { useState } from "react";
import ButtonHover from "./ui/button-hover";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import AxiosInstance from "@/services/AxiosInstance";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  company_name: yup.string().required("Company name is required"),
  country: yup.string().required("Country is required"),
  phone_number: yup
    .string()
    .matches(/^[0-9+\-\s()]*$/, "Invalid phone number")
    .required("Phone number is required"),
  total_employees: yup
    .number()
    .typeError("Must be a number")
    .positive("Must be positive")
    .integer("Must be an integer")
    .required("Total employees is required"),
  message: yup.string().required("Message is required"),
});

const ContactCTA = () => {
  const [status, setStatus] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // const onSubmit = async (e) => {
  //   e.preventDefault(); // prevent page reload

  //   const formData = new FormData(e.target);

  //   try {
  //     const response = await fetch("/sendmail.php", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const text = await response.text();
  //     setStatus(text); // show server response (success or error)
  //   } catch (error) {
  //     setStatus("An error occurred. Please try again.");
  //   }
  // };

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    setSubmitted(true);
    try {
      const res = await AxiosInstance.post("contact", data);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        reset();
      }
    } catch (error) {
      console.log(error, "error submitting form");
    } finally {
      setSubmitted(false);
    }
  };

  const selectedCountry = watch("country");

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Guatemala",
    "Guinea",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  return (
    <section id="contact" className="py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none gradient-bg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-vertex-blue/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-vertex-orange/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Elevate Your HR?
              </h2>
              <p className="text-gray-600 mb-6">
                Whether you are a growing business or an established enterprise,
                vertex HCM software in Pakistan is designed to help you manage
                your people better, every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <ButtonHover variant="primary" size="lg">
                    Request Demo
                  </ButtonHover>
                </Link>
                <Link to="/contact">
                <ButtonHover variant="outline" size="lg">
                  Contact Sales
                </ButtonHover>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
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
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <input
                              type="text"
                              // required
                              placeholder="First Name"
                              id="first_name"
                              {...register("first_name")}
                              className={`w-full px-4 py-2 rounded-md bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 ${
                                errors.first_name
                                  ? "border-red-500 focus:ring-red-500" // 👈 error styles
                                  : "border-white/20 focus:ring-white/50"
                              }`}
                              // className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              // required
                              placeholder="Last Name"
                              id="last_name"
                              {...register("last_name")}
                              className={`w-full px-4 py-2 rounded-md bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 ${
                                errors.last_name
                                  ? "border-red-500 focus:ring-red-500" // 👈 error styles
                                  : "border-white/20 focus:ring-white/50"
                              }`}
                              // className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <input
                              type="email"
                              id="email"
                              {...register("email")}
                              placeholder="Your Email"
                              className={`w-full px-4 py-2 rounded-md bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 ${
                                errors.email
                                  ? "border-red-500 focus:ring-red-500" // 👈 error styles
                                  : "border-white/20 focus:ring-white/50"
                              }`}
                              // className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              id="company_name"
                              // required
                              placeholder="Company Name"
                              {...register("company_name")}
                              className={`w-full px-4 py-2 rounded-md bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 ${
                                errors.company_name
                                  ? "border-red-500 focus:ring-red-500" // 👈 error styles
                                  : "border-white/20 focus:ring-white/50"
                              }`}
                              // className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <select
                              id="country"
                              {...register("country")}
                              className={`w-full px-4 py-2 rounded-md bg-white/10 border  placeholder-white/60 focus:outline-none focus:ring-2
                          ${!selectedCountry ? "text-white/60" : ""}
                          ${
                            errors.country
                              ? "border-red-500 focus:ring-red-500" // 👈 error styles
                              : "border-white/20 focus:ring-white/50"
                          }                        
                          `}
                              // className={`flex w-full rounded-md border border-input px-3 py-2 text-sm
                            >
                              <option value="" className="text-[#9ca3af]">
                                Select country
                              </option>
                              {countries.map((country) => (
                                <option
                                  className="text-black"
                                  key={country}
                                  value={country}
                                >
                                  {country}
                                </option>
                              ))}
                              {/* Add more countries as needed */}
                            </select>
                            {/* <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                          /> */}
                          </div>
                          <div>
                            <input
                              type="text"
                              id="phone_number"
                              // placeholder="Company Name"
                              {...register("phone_number")}
                              placeholder="Phone number"
                              className={`w-full px-4 py-2 rounded-md bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 ${
                                errors.phone_number
                                  ? "border-red-500 focus:ring-red-500" // 👈 error styles
                                  : "border-white/20 focus:ring-white/50"
                              }`}
                              // className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                          </div>
                        </div>
                        <input
                          type="number"
                          id="total_employees"
                          {...register("total_employees")}
                          placeholder="Total Employees"
                          {...register("total_employees")}
                          className={`w-full px-4 py-2 rounded-md bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 ${
                            errors.total_employees
                              ? "border-red-500 focus:ring-red-500" // 👈 error styles
                              : "border-white/20 focus:ring-white/50"
                          }`}
                          // className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <textarea
                          id="message"
                          {...register("message")}
                          className={`w-full px-4 py-2 rounded-md bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 ${
                            errors.message
                              ? "border-red-500 focus:ring-red-500" // 👈 error styles
                              : "border-white/20 focus:ring-white/50"
                          }`}
                          placeholder="How can we help you?"
                        />
                        <div>
                          <button
                            type="submit"
                            disabled={submitted}
                            className="w-full bg-white text-vertex-blue font-medium py-2 rounded-md hover:bg-gray-100 transition-colors"
                          >
                            {submitted ? "Submitted" : "Get in Touch"}
                          </button>
                        </div>
                      </form>

                      {/* {status && (
                        <p className="mt-4 text-white bg-green-500/20 p-2 rounded-md">
                          {status}
                        </p>
                      )} */}
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
