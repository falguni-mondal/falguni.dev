import React from 'react'
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


const Project = (props) => {
  const { img, name, tools, year, link, github, category } = props.item;
  const { projectRevealer, projectUnRevealer } = props;
  const screen = window.innerWidth;


  return (
    <li onMouseEnter={() => screen >= 1024 && projectRevealer(`.${name.split(" ").join("")}`)} onMouseLeave={() => screen >= 1024 && projectUnRevealer(`.${name.split(" ").join("")}`)} className='project relative w-full flex flex-col justify-center pb-5 pt-10 lg:pb-10 lg:border-b border-zinc-700'>
      <a href={link} target='_blank'>
        <img className={`${name.split(" ").join("")} ${name === "Kickster" && "opacity-80"} w-full h-[230px] lg:h-[170px] xl:h-[190px] 2xl:h-[250px] lg:w-[20vw] lg:scale-90 lg:opacity-0 rounded-xl object-cover lg:absolute lg:top-[5%] lg:left-[60%]`} src={img} alt="Obys Agency" />
      </a>
      <div className='w-full'>
        <div className="title-links font-semibold text-[6.5vw] lg:text-[3vw] tracking-tight flex items-center gap-5">
          <h3><a className='flex items-center gap-1' href={link} target='_blank'>{name} <IoIosLink className='text-[5vw] lg:text-[2vw]' /></a></h3>
          <a href={github} target='_blank'><FaGithub className='text-[5vw] lg:text-[2vw]' /></a>
        </div>
        <div className='flex justify-between mb-1 lg:mb-[5vh]'>
          <span className='text-[2.8vw] lg:text-[1.3vw] opacity-50'>{category}</span>
          <span className='text-[4vw] lg:text-[1.2vw]'>{year}</span>
        </div>
        <span className='project-tools inline-block px-5 py-1.5 rounded-full text-[2.5vw] lg:text-[1vw] border opacity-50'>{tools}</span>
      </div>
    </li>
  )
}

export default Project