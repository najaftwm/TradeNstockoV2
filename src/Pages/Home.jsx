import React from 'react'
import HeroSection from '../Component/HeroSection'
import ScrollingText from '../Component/ScrollingText'
import AboutUs from '../Component/AboutUs'
import ReviewsSection from '../Component/ReviewsSection'
import LoginPage from '../Component/LoginPage'
import Features from '../Component/Features'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ScrollingText/>
        <Features/>
        <LoginPage/>
        <ReviewsSection/>
    </div>
  )
}

export default Home