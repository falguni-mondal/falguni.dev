import React from 'react'
import { IoIosLink } from "react-icons/io";

const Certificate = (props) => {
  const { name, platform, skills, year, link } = props.item;
  return (
    <li className='course'>
      <a className='w-full' href={link} target='_blank'>
        <h3 className='font-semibold text-[6.5vw] leading-none tracking-tight flex gap-1'>{name}<IoIosLink className='text-[4vw] flex-shrink-0' /></h3>
        <div className='opacity-50 text-sm flex justify-between mt-1 mb-2'>
          <span>{platform}</span>
          <span>{year}</span>
        </div>
        <span className='text-[3.2vw] px-5 py-1.5 border rounded-full inline-flex flex-wrap'>{skills}</span>
      </a>
    </li>
  )
}

export default Certificate