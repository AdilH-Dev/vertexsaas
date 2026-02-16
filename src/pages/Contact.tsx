// import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
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

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const selectedCountry = watch("country");

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
    <>
      <Helmet>
        <title>Vertex – #1 HR Software & Attendance System - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Vertex, Pakistan’s #1 HR software & attendance system provider. Reach out for expert support, product info, or a personalized demo today."
        />
        <link rel="canonical" href="https://vertex-hcm.com/contact" />
      </Helmet>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-[44px] font-bold mb-0 text-gray-900">
              Contact <span className="text-vertex-blue">Us</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-2">
              Have questions about our HCM solutions? Get in touch with our team
              and we'll be happy to help.
            </p>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="py-4 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Form */}
              <div className="md:w-2/3 bg-gray-50 px-8 py-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="">
                      <Label htmlFor="first_name">First Name</Label>
                      {errors.first_name && (
                        <span className="text-red-500 text-sm ms-2">
                          {errors.first_name.message}
                        </span>
                      )}
                      <Input
                        id="first_name"
                        {...register("first_name")}
                        placeholder="Enter"
                      />
                    </div>
                    <div className="">
                      <Label htmlFor="last_name">Last Name</Label>
                      {errors.last_name && (
                        <span className="text-red-500 text-sm ms-2">
                          {errors.last_name.message}
                        </span>
                      )}
                      <Input
                        id="last_name"
                        {...register("last_name")}
                        placeholder="Enter"
                      />
                    </div>
                  {/* </div> */}

                  {/* <div className="grid md:grid-cols-2 gap-10"> */}
                    <div className="">
                      <Label htmlFor="email">Email</Label>
                      {errors.email && (
                        <span className="text-red-500 text-sm ms-2">
                          {errors.email.message}
                        </span>
                      )}
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="Enter"
                      />
                    </div>
                    <div className="">
                      <Label htmlFor="company_name">Company Name</Label>
                      {errors.company_name && (
                        <span className="text-red-500 text-sm ms-2">
                          {errors.company_name.message}
                        </span>
                      )}
                      <Input
                        id="company_name"
                        {...register("company_name")}
                        placeholder="Enter"
                      />
                    </div>
                  {/* </div> */}

                  {/* <div className="grid md:grid-cols-2 gap-10"> */}
                    <div className="">
                      <Label htmlFor="country">Country</Label>
                      {errors.country && (
                        <span className="text-red-500 text-sm ms-2">
                          {errors.country.message}
                        </span>
                      )}
                      <select
                        id="country"
                        {...register("country")}
                        className={`flex w-full h-10 rounded-md border border-input px-3 py-2 text-sm
                          ${!selectedCountry ? "text-[#9ca3af]" : ""}
                          `}
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
                    </div>

                    <div className="">
                      <Label htmlFor="phone_number">Phone Number</Label>
                      {errors.phone_number && (
                        <span className="text-red-500 text-sm ms-2">
                          {errors.phone_number.message}
                        </span>
                      )}
                      <Input
                        id="phone_number"
                        {...register("phone_number")}
                        placeholder="Enter"
                      />
                    </div>
                  {/* </div> */}

                  {/* <div className="grid md:grid-cols-2 gap-10"> */}
                    <div className="">
                      <Label htmlFor="total_employees">Total Employees</Label>
                      {errors.total_employees && (
                        <span className="text-red-500 text-sm ms-2">
                          {errors.total_employees.message}
                        </span>
                      )}
                      <Input
                        type="number"
                        id="total_employees"
                        {...register("total_employees")}
                        placeholder="Enter"
                      />
                    </div>
                  </div>

                  <div className="">
                    <Label htmlFor="message">Message</Label>
                    {errors.message && (
                      <span className="text-red-500 text-sm ms-2">
                        {errors.message.message}
                      </span>
                    )}
                    <textarea
                      id="message"
                      {...register("message")}
                      className="flex w-full rounded-md border border-input px-3 py-2 text-sm min-h-[100px]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitted}
                    className="bg-vertex-blue hover:bg-vertex-blue-light text-white w-full"
                  >
                    {submitted ? "Submitted" : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="md:w-1/3 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {/* <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-vertex-blue mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        Innovista Indus IT Park –
                        <br />
                        1st Floor, DHA Phase II Ext., Karachi
                      </p>
                    </div>
                  </div> */}

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-vertex-blue mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+1 (307) 218-7314</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-vertex-blue mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@viiontech.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
