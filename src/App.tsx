import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DomoticaPage from "./pages/DomoticaPage";
import MonitoreoPage from "./pages/MonitoreoPage";
import ResidencialPage from "./pages/nuestras-obras/ResidencialPage";
import IndustrialPage from "./pages/nuestras-obras/IndustrialPage";
import PlantasPage from "./pages/nuestras-obras/PlantasPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/que-hacemos/domotica" element={<DomoticaPage />} />
          <Route path="/que-hacemos/monitoreo" element={<MonitoreoPage />} />
          <Route path="/nuestras-obras/residencial" element={<ResidencialPage />} />
          <Route path="/nuestras-obras/industrial" element={<IndustrialPage />} />
          <Route path="/nuestras-obras/plantas" element={<PlantasPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
