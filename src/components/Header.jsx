import { IconArrowRight, IconDownload } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
        initial={{scale:0}} 
        whileInView={{scale:1}}
        transition={{duration:0.8, type: 'spring', stiffness:100}}>
          <img src="Image2.jpeg" alt="my-image" className='rounded-full p-2 mt-10 w-40 ' />
        </motion.div>
        <motion.h3
        initial={{y: -30, opacity:0}} 
        whileInView={{y: 0, opacity:1}}
        transition={{duration:0.6, delay: 0.5}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Nunito'>Hi! I am Sakshi Mishra <img src="RadheyRadhey" alt="" className='w-6' /></motion.h3>
        <motion.h1
        initial={{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay: 0.7}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Nunito'>Full Stack Developer</motion.h1>
        <motion.p
        initial={{y: -20, opacity:0}} 
        whileInView={{y: 0, opacity:1}}
        transition={{duration:0.6, delay: 0.3}}
        className='max-w-2xl mx-auto font-Nunito'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, totam iure at doloremque saepe facere est.
        </motion.p>
        <div className='flex flex-col-2 sm: flex-row items-center gap-4 mt-4'>
          <motion.Link
          initial={{y: 30, opacity:0}} 
          whileInView={{y: 0, opacity:1}}
          transition={{duration: 0.6, delay: 1}}
          href="/contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact Me <IconArrowRight/></motion.Link>
          <motion.Link
          initial={{y: 30, opacity:0}} 
          whileInView={{y: 0, opacity:1}}
          transition={{duration: 0.6, delay: 1.2}}
          href="/pdf" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white'>My Resume <IconDownload/></motion.Link>
        </div>
    </div>
  )
}

export default Header