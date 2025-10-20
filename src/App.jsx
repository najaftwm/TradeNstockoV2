import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer';
import FloatingAppLinks from './Component/FloatingAppLinks';
import GoToTopButton from './Component/GoToTopButton';
import ContactUs from './Component/ContactUs';
import InstallSteps from './Component/InstallSteps';

// ✅ Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Scroll to section logic
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when navigating to a new page without hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

// Main app content (with AOS initialization)
const AppContent = () => {
  const [isHeroInView, setIsHeroInView] = useState(true);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact-us';

  // ✅ Initialize AOS here (runs once on mount)
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed (ms)
      offset: 120,    // how far from viewport to trigger
      once: true,     // animate only once
      easing: "ease-in-out",
    });
  }, []);

  // Hero intersection logic
  useEffect(() => {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsHeroInView(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollToSection />
      <Navbar />
      {!isContactPage && <FloatingAppLinks hideOnHeroMobile={isHeroInView} />}
      <GoToTopButton />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        {/* ✅ You can also render InstallSteps directly as a route or inside Home */}
        <Route path='/install-steps' element={<InstallSteps />} />
      </Routes>

      <Footer />
    </>
  );
};

// Router wrapper
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
