import { IconArrowRight, IconDownload } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
          <img src="" alt="my-image" className='rounded-full w-32 ' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Nunito'>Hi! I am Sakshi Mishra <img src="RadheyRadhey" alt="" className='w-6' /></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Nunito'>Full Stack Developer</h1>
        <p className='max-w-2xl mx-auto font-Nunito'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, totam iure at doloremque saepe facere est.
        </p>
        <div className='flex flex-col-2 sm: flex-row items-center gap-4 mt-4'>
          <Link href="/contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <IconArrowRight/></Link>
          <Link href="/pdf" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <IconDownload/></Link>
        </div>
    </div>
  )
}

export default Header