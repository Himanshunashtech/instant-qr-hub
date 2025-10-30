import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
<<<<<<< HEAD

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/contact";
import { Disclaimer } from "./pages/disclaimer";
=======
import { WiFiQR } from "./pages/WiFiQR";
import { BitcoinQR } from "./pages/BitcoinQR";
import { YouTubeQR } from "./pages/YouTubeQR";
import { Footer } from "./components/Footer";
import { ContactUs } from "./pages/ContactUs";
import { PrivacyQuestions } from "./pages/PrivacyQuestions";
import { Disclaimer } from "./pages/Disclaimer";
>>>>>>> 2950ab19ae324f2ddb372a792ccab123056d4f97

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path ="/disclaimer" element={<Disclaimer/>}/>
              <Route path="/contact" element={< Contact/>} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-questions" element={<PrivacyQuestions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
