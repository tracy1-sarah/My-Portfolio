import { DesktopComputerIcon } from "@heroicons/react/outline"
import { PencilAltIcon, UserIcon } from "@heroicons/react/solid"
import bg2 from '../assets/bg2.jpg'
import { themeContext } from "./Context/Context"
import { useContext } from "react"

function Services() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div name="services" className='w-full md:h-screen'>
            <div className='hidden lg:flex w-full h-screen  bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={bg2} alt="support" />
            </div>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full relative'>
                <div className='px-4 py-12 mb-2 sm:mb-4'>
                    <h2 className='text-black sm:text-slate-300 text-4xl font-bold inline border-b-4 border-purple-600 pt-4 text-center'
                        style={{
                            color: darkMode ? 'white' : '',
                        }}
                    >Services</h2>
                </div>

                <div className='grid gric-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-2 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <DesktopComputerIcon className='w-16 p-4 bg-purple-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Web Development</h3>
                            <p className='text-gray-600 text-xl'>Building cutting-edge, reliable and high-performing web-based applications ranging from simple static
                            pages to complex applications</p>
                        </div>
                       
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PencilAltIcon className='w-16 p-4 bg-purple-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Content Writing</h3>
                            <p className='text-gray-600 text-xl'>Staying up to date on the latest trends to keep you glued to your screen. I will be
                            your professional content writer.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <UserIcon className='w-16 p-4 bg-purple-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Research & Outreach</h3>
                            <p className='text-gray-600 text-xl'>Web Scrapping, Need data or information from a specific site or you
                                just want to get connected to people, let me be your guide.
                            </p>
                        </div>
                       
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services