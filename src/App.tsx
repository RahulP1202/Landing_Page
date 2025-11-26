import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home sections
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Tools pages
import LMS from "./pages/lms";
import AIIntegrity from "./pages/ai";
import NBA from "./pages/nba";
import DSA from "./pages/dsa";
import ELearning from "./pages/elearning";

// Home Page layout
function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/ai-suite" element={<AIIntegrity />} />
        <Route path="/nba" element={<NBA />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/elearning" element={<ELearning />} />
      </Routes>
    </BrowserRouter>
  );
}
