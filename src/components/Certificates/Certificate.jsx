import React from 'react'
import { IoIosLink } from "react-icons/io";

const Certificate = (props) => {
  const { name, platform, skills, year, link } = props.item;
  return (
    <li className='course lg:pb-10 lg:border-b lg:border-zinc-700'>
      <a className='w-full' href={link} target='_blank'>
        <h3 className='font-semibold text-[6.5vw] lg:text-[3.5vw] leading-none tracking-tight flex gap-1'>{name}<IoIosLink className='text-[4vw] lg:text-[2vw] flex-shrink-0' /></h3>
        <div className='opacity-50 text-sm lg:text-[1.4vw] flex justify-between mt-1 mb-2'>
          <span>{platform}</span>
          <span>{year}</span>
        </div>
        <span className='text-[3.2vw] lg:text-[1vw] px-5 py-1.5 border rounded-full inline-flex flex-wrap'>{skills}</span>
      </a>
    </li>
  )
}

export default Certificate