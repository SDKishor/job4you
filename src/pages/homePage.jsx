import CategoryCarousel from '@/components/homepage_components/categoryCarousel'
import HeroSection from '@/components/homepage_components/heroSection'
import LatestJobs from '@/components/homepage_components/latestJobs'
import Footer from '@/components/sheared/footer'
import Navbar from '@/components/sheared/navbar'
import React from 'react'

export default function Homepage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJobs/>
    <Footer/>
    </>
  )
}
