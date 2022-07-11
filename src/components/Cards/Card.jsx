import React from "react";

function Card({ title, image, demoLink, codeLink }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#957bcb] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font-bold text-black tracking-wider">
          {title}
        </span>
        <div className="pt-8 text-center">
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-purple-600 text-white font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-purple-600 text-white font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
