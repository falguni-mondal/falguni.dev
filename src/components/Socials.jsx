import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoGithub } from "react-icons/io";
import falguni_mondal_resume from "../assets/mine/falguni_mondal_resume.pdf";
import { GoDownload } from "react-icons/go";



const Socials = () => {
    return (
        <ul className='relative top-[-1vh] socials-container w-full h-[6vh] flex items-center justify-center gap-5'>
            <li><a href='https://www.linkedin.com/in/falguni-mondal/' target='_blank'><SlSocialLinkedin className='socials text-[8vw]' /></a></li>
            <li><a className='h-full px-5 py-2 border flex gap-1 items-center border-[#f8f8f8] shadow-2xl shadow-[#ffffff6e] rounded-full ' href={falguni_mondal_resume} download>Resume<GoDownload /></a></li>
            <li><a href='https://github.com/falguni-mondal' target='_blank'><IoLogoGithub className='socials text-[8vw]' /></a></li>
        </ul>
    )
}

export default Socials