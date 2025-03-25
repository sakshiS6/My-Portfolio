'use client'
import About from '@/components/About'
import Certification from '@/components/Certification'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
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
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Certification isDarkMode={isDarkMode}/>
    <Project isDarkMode={isDarkMode} />
    <ContactUs isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  )
}

export default Home