import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GamePage from "./pages/game/GamePage";
import Tedoo from "./pages/game/Tedoo";
import Derek from "./pages/game/Derek";
import Swum from "./pages/game/Swum";
import Kelvin from "./pages/game/Kelvin";
import Clyde from "./pages/game/Clyde";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/game" element={<GamePage />}>
            <Route path="tedoo" element={<Tedoo />} />
            <Route path="derek" element={<Derek />} />
            <Route path="swum" element={<Swum />} />
            <Route path="kelvin" element={<Kelvin />} />
            <Route path="clyde" element={<Clyde />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
