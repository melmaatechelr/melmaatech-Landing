import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load pages for better performance
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Trainings = lazy(() => import("./pages/Trainings"));
const IndustrialTrainingNov2026 = lazy(() => import("./pages/IndustrialTrainingNov2026"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading page">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

function RouteScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <MotionConfig reducedMotion="user">
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteScroll />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/careers"
            element={
              <Suspense fallback={<PageLoader />}>
                <Careers />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/trainings"
            element={
              <Suspense fallback={<PageLoader />}>
                <Trainings />
              </Suspense>
            }
          />
          <Route
            path="/trainings/industrial-training-november-2027"
            element={<Navigate replace to="/trainings/industrial-training-november-2026" />}
          />
          <Route
            path="/trainings/industrial-training-november-2026"
            element={
              <Suspense fallback={<PageLoader />}>
                <IndustrialTrainingNov2026 />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </MotionConfig>
);

export default App;
