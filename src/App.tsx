import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TrustedBy from './components/TrustedBy';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import RequestDemo from './components/RequestDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';

function HomePage() {
  return (
    <div className="bg-black">
      <Navigation />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Blog />
      <Portfolio />
      <Pricing />
      <RequestDemo />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

