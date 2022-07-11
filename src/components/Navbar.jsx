import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";

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
            <li className="p-4 cursor-pointer">Services</li>
            <li className='p-4 cursor-pointer'>Stacks</li>
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
        <li className='border-b-2 border-zinc-300 w-full'>About</li>
        <li className='border-b-2 border-zinc-300 w-full'>Stacks</li>
        <li className='border-b-2 border-zinc-300 w-full'>Portfolio</li>

        <div className='flex flex-col my-4'>
          <button className='px-4 py-3 text-white border bg-purple-600 border-purple-600  rounded-md'>Contact Me</button>
        </div>
      </ul>

      {/* SOCIAL MEDIA ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[300%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-0.2px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/tracy-sarah-afram-owusu-165b6818a/" target="_blank" rel="noreferrer">
              Linkedin <FaLinkedin size={30} className='mr-2' />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-2px] duration-300 bg-[#333333]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/tracy1-sarah" target="_blank" rel="noreferrer">
              Github <FaGithub size={30} className='mr-2' />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-2px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/tracy1-sarah" target="_blank" rel="noreferrer">
              Email <HiOutlineMail size={30} className='mr-2' />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-2px] duration-300 bg-[#C13584]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.instagram.com/_tracysarah/" target="_blank" rel="noreferrer">
              Instagram <FaInstagram size={30} className='mr-2' />
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar