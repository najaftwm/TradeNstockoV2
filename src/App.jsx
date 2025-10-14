import React, { useState, useEffect } from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router ,Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import FloatingAppLinks from './Component/FloatingAppLinks'
import GoToTopButton from './Component/GoToTopButton'
import ContactUs from './Component/ContactUs'

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

const AppContent = () => {
  const [isHeroInView, setIsHeroInView] = useState(true);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact-us';

  useEffect(() => {
    const heroSection = document.getElementById('home');
    
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of hero section is visible
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ScrollToSection />
      <Navbar/>
      {!isContactPage && <FloatingAppLinks hideOnHeroMobile={isHeroInView} />}
      <GoToTopButton />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App