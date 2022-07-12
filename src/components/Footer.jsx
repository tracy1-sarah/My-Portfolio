import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter  } from "react-icons/fa";


function Footer() {
    return (
        <div className='w-full mt-24 bg-gray-600 py-8 px-2'>
            <div className='max-w-[1000px] mx-auto grid  md:grid-cols-4  border-b-2 border-purple-600 py-8'>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to my blog post</p>
                    <p className='py-4'>The latest news, articles and resources sent to your inbox weekly</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 rounded-md mb-4' type="email" placeholder='Enter email...' />
                        <button className='p-2 mb-4 text-white border bg-purple-600 border-purple-600 rounded-md'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1000px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>Tracy's Portfolio, All rights reserved!</p>
                <div className='flex justify-between  sm:w-[300px] pt-4 text-2xl'>
                    <a href="https://www.instagram.com/_tracysarah/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                    </a>
                    <a href='https://twitter.com/Tray_acey' target="_blank" rel="noreferrer" >
                    <FaTwitter />
                    </a>
                    <a href="https://github.com/tracy1-sarah" target="_blank" rel="noreferrer">
                    <FaGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/tracy-sarah-afram-owusu-165b6818a/' target="_blank" rel="noreferrer">
                    <FaLinkedin/>
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Footer