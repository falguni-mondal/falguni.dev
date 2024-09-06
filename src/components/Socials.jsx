import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";



const Socials = () => {
    return (
        <ul className='socials-container h-[5vmax] flex items-center justify-center gap-[10vmax]'>
            <li><a className='underline underline-offset-4 flex flex-col items-center text-[3.5vmin] font-medium lg:text-[3vmin]' href='https://www.linkedin.com/in/falguni-mondal/' target='_blank'><FaLinkedinIn className='text-[5.5vw]' />Linkedin</a></li>
            <li><a className='underline underline-offset-4 flex flex-col items-center text-[3.5vmin] font-medium lg:text-[3vmin]' href='https://github.com/falguni-mondal' target='_blank'><IoLogoGithub className='text-[6vw]'/>Github</a></li>
        </ul>
    )
}

export default Socials