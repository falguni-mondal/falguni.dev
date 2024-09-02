import React from 'react'
import { IoIosLink } from "react-icons/io";

const Project = (props) => {
  const { img, name, tools, year, link, category } = props.item;

  return (
    <li className='project w-full'>
      <a href={link} target='_blank' className='w-full flex flex-col '>
        <img className='w-full rounded-xl object-cover h-[30vh]' src={img} alt="Obys Agency" />
        <div>
          <h3 className='font-semibold text-[6.5vw] tracking-tight flex items-center gap-5'>{name} <IoIosLink /></h3>
          <div className='flex justify-between'>
            <span className='text-[2.8vw] opacity-50'>{category}</span>
            <span className='text-[4vw]'>{year}</span>
          </div>
          <span className='px-5 py-1.5 rounded-full text-[2.5vw] border opacity-50'>{tools}</span>
        </div>
      </a>
    </li>
  )
}

export default Project