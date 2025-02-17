import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
          <img src="profile-img" alt="" className='rounded-full w-32 ' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Nunito'>Hi! I am Sakshi Mishra <img src="RadheyRadhey" alt="" className='w-6' /></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Nunito'>Full Stack Developer</h1>
        <p className='max-w-2xl mx-auto font-Nunito'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, totam iure at doloremque saepe facere est.
        </p>
        <div>
          <a href="/contact">Contact Me <img src="" alt="" className='w-4'/></a>
          <a href="">My Resume <img src="" alt="" className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header