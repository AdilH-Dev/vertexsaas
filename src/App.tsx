
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";
import Recruitment from "./pages/Recruitment";
import Performance from "./pages/Performance";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Benefits from "./pages/Benefits";
import Compliance from "./pages/Compliance";
import { ReactHotToast } from "./components/ui/ReactHotToast";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
    <TooltipProvider>
      <Toaster />
      <ReactHotToast/>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
