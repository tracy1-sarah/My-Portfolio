import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 '>
      <form action='https://getform.io/f/f2e84308-1625-4c76-a34e-d6b30cf77d56' method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Get in touch</p>
        </div>
        <input className='p-2 bg-purple-100 rounded-md' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-purple-100 rounded-md' type="email" placeholder='Email' name='email' required />
        <textarea className='bg-purple-100 p-2 rounded-md' name='message' placeholder='Message' rows="10" required></textarea>
        <button className=' border-2 border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
      </form>
          
    </div>
  )
}

export default Contact