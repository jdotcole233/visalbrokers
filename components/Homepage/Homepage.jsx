import React from 'react'
import Navbar from '../Navbar'
import FastTrack from './FastTrack'
import Features from './Features/Features'
import Hero from './Hero'
import InsureAndSecure from './InsureAndSecure'
import OurServices from './OurServices'
import Service from './Service'
import Testimonials from './Testimonials'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Service />
    <InsureAndSecure />
    <OurServices />
    <FastTrack />
    <Testimonials />
    </>
  )
}

export default Homepage