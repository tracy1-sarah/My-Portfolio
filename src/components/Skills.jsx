import React from 'react'

function Skills() {
  return (
      <div className='w-full h-screen flex flex-col justify-between my-32'>
          <div className='w-full h-full'>
              <div className="main-container grid md:grid-cols-2 gap-2 px-24 pt-24">
                  {/* Left */}
                  <div className="flex flex-col justify-center md:items-start w-full px-2 py-24">
                      <span className='font-bold text-black md:text-3xl lg:text-6xl'>Stacks</span>
                      <span className='text-purple-600 font-bold text-4xl'>Tools & Technologies</span>                  
                      <div className='blur portfolioBlur' style={{ background: "#F5C32C" }}></div>                
                  </div>
                  {/* Right */}
                  <div className='flex relative'>
                      {/* <div className='left-96 absolute'>
                          <Card emoji={humble}
                              title={"Frontend Dev"}
                            description={"HTML, CSS, React, Tailwind CSS, Bootstrap"}
                          />
                      </div>
                      <div className='left-12 top-24 absolute'>
                          <Card emoji={heartemoji}
                              title={"Tools"}
                              description={ "Git, Npm"} />
                      </div>
                      <div className='left-80 top-80 absolute'>
                          <Card emoji={glasses}
                              title={"Backend Dev"}
                              description={"MySQL, Python, Strapi, Firebase"} />
                      </div>                   */}
                  </div>      
              </div>
          </div>
    </div>
  )
}

export default Skills