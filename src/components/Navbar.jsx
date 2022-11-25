import React, { useState, useContext } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-scroll';
import Toggle from './Toggle/Toggle';
import { themeContext } from './Context/Context';

function Navbar() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'
      style={{
        background: darkMode ? 'black' : '',
        }}>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='cursor-pointer logo text-3xl font-semibold mr-4 sm:text-4xl'>
            <Link to="home" smooth={true} duration={300}>
              TRACY.
            </Link>
          </h1>
          <ul className='hidden md:flex'>
            <li className="p-4 cursor-pointer">
              <Link  to="home" smooth={true}  duration={300}>
                Home
              </Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link to="services" smooth={true} duration={300}>
                Services
              </Link>
            </li>
            <li className='p-4 cursor-pointer'>
              <Link to="stack" smooth={true} duration={300}>
                Stacks
              </Link>
            </li>
            <li className="p-4 cursor-pointer">
              <Link to="project" smooth={true} duration={300}>
                Projects
              </Link></li>     
          </ul>
        </div>
        <div className='md:flex pr-2'>
          <Toggle />
        </div>
        <div className="hidden md:flex pr-4">
          <button className='px-4 py-2 text-white border bg-purple-600 border-purple-600 rounded-md'>
            <Link to="contact" smooth={true} duration={300}>
              Contact Me
            </Link>
          </button>
        </div>
        <div className='md:hidden z-10' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>
          {/* Mobile Hamburger */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center bg-zinc-100 items-center'}
        style={{
          background: darkMode ? 'black' : '',
        }}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to="services" smooth={true} duration={300}>
            Services
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to="stack" smooth={true} duration={300}>
            Stacks
          </Link>
        </li>
        {' '}
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="project" smooth={true} duration={300}>
            Projects
          </Link>
        </li>

        <div className='flex flex-col my-4'>
          <button className='px-4 py-3 text-white border bg-purple-600 border-purple-600  rounded-md'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </button>
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
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-2px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/tracy1-sarah" target="_blank" rel="noreferrer">
              Email <HiOutlineMail size={30} className='mr-2' />
            </a>
          </li> */}
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