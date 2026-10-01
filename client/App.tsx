import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TRTBV2 from "./pages/TRTBV2";
import HighlightsConcepts from "./pages/HighlightsConcepts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const pagesRedirect = new URLSearchParams(window.location.search).get("redirect");
if (pagesRedirect) {
  window.history.replaceState(null, "", `${import.meta.env.BASE_URL.replace(/\/$/, "")}${pagesRedirect}`);
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trtb-v1" element={<TRTBV2 version="v1" />} />
          <Route path="/trtb-v2" element={<TRTBV2 version="v2" />} />
          <Route path="/highlights-concepts" element={<HighlightsConcepts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
