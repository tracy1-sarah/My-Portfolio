import React from "react";

function Card({ title, image, demoLink, codeLink }) {
  return (
    <div className=" relative cursor-pointer">
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-md shadow-[#957bcb] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className='absolute text-center pt-12 items-center w-full h-full hover:bg-black/80 opacity-0.5 text-white hover:opacity-100'>
        <div className="opacity-0 group group-hover:opacity-100">
            <span className="text-2xl pt-6 font-bold text-white tracking-wider">
            {title}
          </span>
          <div className=" pt-8 text-center">
            <a href={demoLink} target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-purple-500 text-white font-bold text-lg">
                Live Demo
              </button>
            </a>
            <a href={codeLink} target="_blank" rel="noreferrer">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-purple-500 text-white font-bold text-lg">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
