import React from 'react'
import HeroSection from '../../components/homepage/HeroSection'
import SpecialDishes from '../../components/homepage/SpecialDishes'
import Testimonials from '../../components/homepage/Testimonials'
import ResturantDetail from '../../components/homepage/ResturantDetail'
import NavigationBar from '../../components/homepage/NavigationBar'
import FooterSection from '../../components/homepage/FooterSection'
import "./homepage.css";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection />
        <SpecialDishes />
        <Testimonials />
        <ResturantDetail />
      </main>
      <FooterSection />
    </>
  )
}

export default HomePage