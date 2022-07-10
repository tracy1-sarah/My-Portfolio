import React from 'react'
import humble from "../assets/humble.png"
import heartemoji from "../assets/heartemoji.png"
import Card from './Cards/Card'
import glasses from "../assets/glasses.png"
function Portfolio() {
  return (
      <div className='w-full h-screen flex flex-col justify-between my-32'>
          <div className='w-full h-full'>
              <div className="grid md:grid-cols-2 gap-2 px-24 pt-24">
                  {/* Left */}
                  <div className="flex flex-col justify-center md:items-start w-full px-2 py-40">
                      <span className='font-bold text-black text-5xl'>Stacks</span>
                      <span className='text-purple-600 font-bold text-4xl'>Tools & Technologies</span>                  
                      <div className='blur portfolioBlur' style={{ background: "#F5C32C" }}></div>                
                  </div>
                  {/* Right */}
                  <div className='my-24 relative'>
                      <div className='left-96 absolute'>
                          <Card emoji={humble}
                              title={"Stacks"}
                            description={"React, JavaScript, MySQL"}
                            //   link="https://sobopopx.web.app/"
                          />
                      </div>
                      <div className='left-12 top-24 absolute'>
                          <Card emoji={heartemoji}
                              title={"Tools"}
                              description={ "Git"} />
                      </div>
                      <div className='left-80 top-80 absolute'>
                          <Card emoji={glasses}
                              title={"Technologies"}
                              description={"PHP Storm, Visual Studio Code"} />
                      </div>                  
                  </div>      
              </div>
          </div>
    </div>
  )
}

export default Portfolio