import React, { useRef } from 'react'
import { IoIosLink } from "react-icons/io";

const Project = (props) => {
  const { img, name, tools, year, link, category } = props.item;
  const { projectRevealer, projectUnRevealer } = props;


  return (
    <li onMouseEnter={projectRevealer} onMouseLeave={projectUnRevealer} className='project relative w-full 2xl:h-[25vh] lg:h-[32vh] flex flex-col justify-center lg:border-b'>
      <a href={link} target='_blank' className='w-full'>
        <img className='project-img w-full lg:w-[20vw] scale-90 opacity-0 rounded-xl object-cover lg:absolute lg:top-0 lg:left-[60%]' src={img} alt="Obys Agency" />
        <div className='w-full'>
          <h3 className='font-semibold text-[6.5vw] lg:text-[3vw] tracking-tight flex items-center gap-5'>{name} <IoIosLink /></h3>
          <div className='flex justify-between lg:mb-[5vh]'>
            <span className='text-[2.8vw] lg:text-[1.3vw] opacity-50'>{category}</span>
            <span className='text-[4vw] lg:text-[1.2vw]'>{year}</span>
          </div>
          <span className='px-5 py-1.5 rounded-full text-[2.5vw] lg:text-[1.2vw] border opacity-50'>{tools}</span>
        </div>
      </a>
    </li>
  )
}

export default Project