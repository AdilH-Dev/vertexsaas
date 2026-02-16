// src/services/axiosConfig.js
import axios from "axios";
import { toast } from "react-hot-toast"; // Assuming you're using react-hot-toast for notifications

// Create an Axios instance
const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT, // Replace with your API base URL
  // timeout: 10000, // Optional timeout setting
});

// Request interceptor (optional, for adding headers, etc.)
AxiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // Add any custom request headers here if needed
    // config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
AxiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.status === 0 || response?.data?.success === false) {
      toast.error(response?.data?.message);
    } else {
      return response;
    }
  },
  (error) => {
    if (error.response) {
      // Handle specific error status codes
      if (error.response.status === 401) {
        // Handle unauthorized error
        toast.error("Unauthorized access");
        // Optionally, you can redirect to the login page
        // localStorage.removeItem("token");
        // localStorage.removeItem("userData");
        // window.location.href = "/";
      } else {
        // console.log(error.response.data,"popopo")
        toast.error(error?.response?.data?.message);
        // console.log(error?.response?.data?.message,"ppp")
        // Object.values(error?.response?.data?.message)?.forEach((valueArray) => {
        //     valueArray?.forEach((v) => {
        //       toast.error(v);
        //     });
        //   });
        // Handle other errors
        // toast.error(`Error: ${error?.response?.data?.message || 'An error occurred.'}`);
      }
    } else {
      // Handle network or server errors
      toast.error("Network error. Please try again later.");
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
