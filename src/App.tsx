import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import { lazy, Suspense } from "react";
import Preloader from "@/components/motion/Preloader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/motion/Cursor";
import { Grain, RouteTransition, ScrollProgress } from "@/components/motion/Chrome";

const Index = lazy(() => import("./pages/Index"));
const Collection = lazy(() => import("./pages/Collection"));
const Inclusions = lazy(() => import("./pages/Inclusions"));
const BespokeGallery = lazy(() => import("./pages/BespokeGallery"));
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <Preloader />
      <SmoothScroll />
      <RouteTransition />
      <ScrollProgress />
      <Cursor />
      <Grain />
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/bespoke-gallery" element={<BespokeGallery />} />
          <Route path="/inclusions" element={<Inclusions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
