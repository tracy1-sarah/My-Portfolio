import React from 'react'

function SkillCard({ image, title, description }) {
    return (
        <div className="shadow-md shadow-[#957bcb] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-2" src={image} alt={description} />
            <p className="my-4">{title}</p>
        </div>
    )
}

export default SkillCard