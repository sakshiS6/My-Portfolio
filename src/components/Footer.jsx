import { IconMailFilled } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img src="/Sakshi.png" alt="Logo" className='w-1/3 mx-auto'/>
            <div className='w-max flex items-center gap-2 mt-6 mx-auto'>
                <IconMailFilled className='w-6'/>sakshimishra2004545@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p className='font-semibold'>© 2025 Sakshi Mishra. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 font-semibold sm:mt-0'>
                <li>
                    <img src="/githublogo.jpg" alt="" className='w-12 rounded-full'/>
                    <Link target='_blank' href="https://github.com/sakshiS6">Github</Link></li>
                <li>
                    <img src="/Linkedin.webp" alt="" className='w-20 rounded-full'/>  
                    <Link target='_blank' href="https://www.linkedin.com/feed/">LinkedIn</Link></li>
                <li>
                    <img src="/hackerrank.png" alt="" className='w-12 rounded-full'/>
                    <Link target='_blank' href="https://www.hackerrank.com/profile/sakshiS6">Hackerrank</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer