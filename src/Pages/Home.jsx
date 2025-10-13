import React from 'react'
import HeroSection from '../Component/HeroSection'
import ScrollingText from '../Component/ScrollingText'
import AboutUs from '../Component/AboutUs'
import ReviewsSection from '../Component/ReviewsSection'
import LoginPage from '../Component/LoginPage'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ScrollingText/>
        <AboutUs/>
        <LoginPage/>
        <ReviewsSection/>
    </div>
  )
}

export default Home