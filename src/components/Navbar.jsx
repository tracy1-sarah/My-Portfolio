import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function Navbar() {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='logo text-3xl font-semibold mr-4 sm:text-4xl text-black'>TRACY.</h1>
          <ul className='hidden md:flex'>
            <li className="p-4 cursor-pointer">Home</li>
            <li className='p-4 cursor-pointer'>Stacks</li>
            <li className="p-4 cursor-pointer">Services</li>
            <li className="p-4 cursor-pointer">Portfolio</li>     
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className='px-4 py-2 text-white border bg-purple-600 border-purple-600 rounded-md'>Contact Me</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-100 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'>Home</li>
        <li className='border-b-2 border-zinc-300 w-full'>Stacks</li>
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Portfolio</li>

        <div className='flex flex-col my-4'>
          <button className='px-4 py-3 text-white border bg-purple-600 border-purple-600  rounded-md'>Contact Me</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar