import falgunimin from '../assets/mine/falgunimin.jpg'
// import SectionHeading from './SectionHeading'
import falguni_mondal_resume from "../assets/mine/falguni_mondal_resume_fullstack.pdf";
import Socials from './Socials'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";




const Hero = () => {

  const screen = window.innerWidth;

  useGSAP(() => {
    gsap.from(".my-img", {
      opacity: 0,
      duration: 1.8,
      stagger: 0.1,
      delay: 1
    })

    gsap.from(".tech-stack", {
      y: `${screen > 1024 ? "3.5vw" : "10vw"}`,
      opacity: 0,
      duration: 0.8,
      delay: `${screen > 1024 ? 1.5 : 1.3}`
    })

    gsap.from(".welcome-txt", {
      y: "12vw",
      duration: 1,
      stagger: 0.1,
      delay: 1
    })
    gsap.from('.socials-container', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.2,
    })
    gsap.from('.resume', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.3,
    })
  })

  return (
    <section id='hero' className='hero-section w-full pt-[5dvh] lg:pt-[12dvh]'>
      <div className="hero-container relative w-full h-[88vh] flex flex-col items-center justify-center">
        <span className='hero-lighting block w-[30vw] h-[30vw] lg:h-[60vh] lg:w-[10vw] lg:rotate-[-60deg] rounded-full lg:rounded-[50%] absolute bg-[#27DFB3] blur-[80px] lg:blur-[60px] bottom-[18vh] lg:right-[30%] lg:top-[-45vh] opacity-70 lg:opacity-30'></span>

        <span className='hero-lighting block w-[25vw] h-[25vh] lg:h-[30vh] lg:w-[40vw] rotate-45 lg:rotate-[-50deg] rounded-full lg:rounded-[50%] absolute bg-[#27DFB3] blur-[80px] lg:blur-[80px] top-[-10vh] lg:top-[-35vh] left-[50] lg:left-[8vw] lg:opacity-50 opacity-[0.45]'></span>

        <span className='hidden hero-lighting lg:block h-[20vh] w-[30vw] lg:rounded-[50%] absolute bg-[#27DFB3] blur-[200px] bottom-[-10vh] right-[2vw] opacity-50'></span>

        <div className="hero-main w-full">

          <div className="my-info text-center mt-[1vh] flex flex-col items-center">
            <div className="img-container w-[35vw] lg:w-[10vw] h-[35vw] lg:h-[10vw] rounded-full overflow-hidden mb-3">
              <img src={falgunimin} className='my-img w-full h-full object-cover scale-[1.2]' alt="" />
            </div>
            <h1 className='hero-heading text-[9vw] h-[9.5vw] lg:h-[3vw] overflow-hidden lg:text-[2.5vw] flex items-center leading-none gap-1 font-mango font-medium tracking-wide mb-5'><span className='welcome-txt'>Hi, I'm Falguni</span></h1>
            <p className='w-full text-[10vw] lg:text-[4vw] lg:font-light leading-none lg:leading-tight tracking-tight'>
              <span className='flex items-start leading-none justify-center h-[11.8vw] lg:h-[4.5vw] overflow-hidden' ><span className='welcome-txt block' >Elevating the web </span></span>
              <span className='flex items-start leading-none justify-center h-[11.8vw] lg:h-[4.5vw] overflow-hidden' ><span className='welcome-txt block' >with a <span className='text-[#27dfb3] font-mango text-[12.5vw] lg:text-[5.5vw] tracking-wide'>full-stack</span> </span></span>
              <span className='flex items-start leading-none justify-center h-[11.8vw] lg:h-[4.5vw] overflow-hidden' ><span className='welcome-txt block' >developer's touch.</span></span>
            </p>


            <div className="tech-stack w-fit grid grid-cols-4 gap-1 rounded-md mt-5 bg-[#0000001f]">
              <div className="box bg-[#27dfb413] rounded-sm flex justify-center items-center p-3">
                <BiLogoReact className='text-[1.7rem] text-[#38BBF8]' />
              </div>
              <div className="box bg-[#27dfb413] rounded-sm flex justify-center items-center p-3">
                {/* <BiLogoJavascript className='text-[1.7rem] text-[#F9C026]' /> */}
                <SiMongodb className='text-[1.7rem] text-[#188062]' />
              </div>
              <div className="box bg-[#27dfb413] rounded-sm flex justify-center items-center p-3">
                {/* <BiLogoTailwindCss className='text-[1.7rem] text-[#39BDF7]' /> */}
                <SiExpress className='text-[1.7rem] text-[#c8e1ec]' />
              </div>
              <div className="box bg-[#27dfb413] rounded-sm flex justify-center items-center p-3">
                <FaNodeJs className='text-[1.5rem] text-[#3f9b3e]' />
              </div>
            </div>


            <div className="buttons flex gap-2 mb-[10vh] lg:mb-[2vh] mt-[4vh]">
              <a className='resume bg-[#cecece] shadow-2xl shadow-[#ffffff] py-[0.55rem] px-[3rem] flex justify-center items-center gap-[0.8vmax] rounded-md text-[1.45rem] font-medium text-black font-mango leading-none tracking-wider' href="#contact" >Connect</a>

              <a className='resume bg-[#0ed8a9] shadow-2xl shadow-[#27dfb3] py-[0.55rem] px-[3rem] flex justify-center items-center gap-[0.8vmax] rounded-md text-[1.45rem] font-medium text-black font-mango leading-none tracking-wider' href={falguni_mondal_resume} download>Resume</a>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero