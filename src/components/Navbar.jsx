import { IconMessageChatbotFilled } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <Link href="#top">
            <img src="/Icon.png" alt="Icon" className='w-10 cursor-pointer mr-14' />
        </Link>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-13 bg-white shadow-lg bg-opacity-50'>
          <li><Link href="#top" className='font-Ovo'>Home</Link></li>
          <li><Link href="#about" className='font-Ovo'>About me</Link></li>
          <li><Link href="#services" className='font-Ovo'>Services</Link></li>
          <li><Link href="#work" className='font-Ovo'>My Work</Link></li>
          <li><Link href="#contact" className='font-Ovo'>Contact me</Link></li>
        </ul>

        <div>
          <Link href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-14'>Contact <IconMessageChatbotFilled className='w-6'/></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar