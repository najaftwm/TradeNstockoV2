import React, { useState, useEffect } from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import FloatingAppLinks from './Component/FloatingAppLinks'
import GoToTopButton from './Component/GoToTopButton'


const App = () => {
  const [isHeroInView, setIsHeroInView] = useState(true);

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
    <Router>
      <Navbar/>
      <FloatingAppLinks hideOnHeroMobile={isHeroInView} />
      <GoToTopButton />

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App