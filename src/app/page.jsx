'use client'
import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Work from '@/components/Work'
import React from 'react'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <ContactUs/>
    </>
  )
}

export default Home