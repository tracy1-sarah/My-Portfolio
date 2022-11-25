import React from 'react'

function FloatingDiv({image, text1, text2}) {
  return (
          <div className='floating-div justify-around flex bg-white rounded-xl items-center h-16'>
              <img src={image} alt=''/>
              <span>{text1} <br />{text2}</span>
          </div>
  )
}

export default FloatingDiv