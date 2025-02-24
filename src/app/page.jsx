'use client'
import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Work from '@/components/Work'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect( ()=>{
    if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-schema: dark)').matches)){
      setIsDarkMode(true);
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Services isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <ContactUs isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  )
}

export default Home