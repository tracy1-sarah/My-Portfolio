import React from 'react'

function Card({emoji, title, description,link}) {
  return (
      <div className='bords w-60 h-62 flex flex-col absolute items-center text-center bg-slate-100 my-12'>
          <img className='scale-75 mb-2' src={emoji} alt='' />
          <span className='text-2xl font-bold'>{title}</span>
          <span className='bg-gray-100'>{description}</span>
          {/* <button className='bg-purple-300 hover:bg-yellow-200 rounded-md shadow-slate-500 p-2 mt-2 border-0'>
              <a href={link} target="_blank" rel='noreferrer'>View Project</a>
          </button> */}
    </div>
  )
}

export default Card