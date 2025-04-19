import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import Branding from "./pages/services/Branding";
import WebDevelopment from "./pages/services/WebDevelopment";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import { useEffect } from "react";

// Scroll to top component for page transitions
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/social-media-marketing" component={SocialMediaMarketing} />
        <Route path="/services/influencer-marketing" component={InfluencerMarketing} />
        <Route path="/services/branding" component={Branding} />
        <Route path="/services/web-development" component={WebDevelopment} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
