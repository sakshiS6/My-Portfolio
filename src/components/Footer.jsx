import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img src="" alt="Logo" className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <img src="" alt="mail-icon" className='w-6' />sakshimishra@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p className='font-semibold'>2025 Sakshi Mishra. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 font-semibold sm:mt-0'>
                <li><Link target='_blank' href="https://github.com/sakshiS6">Github</Link></li>
                <li><Link target='_blank' href="https://www.linkedin.com/feed/">LinkedIn</Link></li>
                <li><Link target='_blank' href="https://www.twitter.com">Twitter</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer