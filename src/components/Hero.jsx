import falgunimin from '../assets/mine/falgunimin.jpg'
// import SectionHeading from './SectionHeading'
import falguni_mondal_resume from "../assets/mine/falguni_mondal_resume.pdf";
import { GoDownload } from "react-icons/go";
import Socials from './Socials'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Hero = () => {


  useGSAP(() => {
    gsap.from(".welcome-txt", {
      y: "12vw",
      duration: 0.8,
      delay: 1
    })
    gsap.from('.socials-container', {
      opacity: 0,
      duration: 1,
      delay: 1,
    })
    gsap.from('.resume', {
      opacity: 0,
      duration: 1,
      delay: 1,
    })
  })

  return (
    <section id='hero' className='hero-section lg:pt-[12dvh]'>
      <div className="hero-container relative w-full h-[88vh] flex flex-col items-center justify-center">
        <span className='hero-lighting block w-[30vw] h-[30vw] rounded-full absolute bg-[#27DFB3] blur-[80px] lg:blur-[300px] lg:scale-[0.5] bottom-[18vh] lg:right-0 lg:bottom-[-40vh] opacity-50'></span>

        <span className='hero-lighting block w-[30vw] h-[30vw] rounded-full absolute bg-[#27DFB3] blur-[70px] lg:blur-[300px] lg:scale-[0.5] top-[-10vh] left-[50] lg:left-[-2vw] lg:opacity-80 opacity-50'></span>

        <div className="hero-main flex flex-col lg:h-auto lg:flex-row-reverse justify-center">
          <div className="my-info text-center lg:text-left  mt-[1vh] flex flex-col items-center lg:w-[70%] lg:h-full lg:items-start lg:justify-center">
          <h1 className='hero-heading splitted-hero-txt text-[9vw] h-[12vw] overflow-hidden lg:text-[3vw] font-medium'><span className='welcome-txt flex items-center gap-1'>Hi👋, I'm <span><img className='w-[13.5vw] h-[8vw] mx-auto lg:w-[15vw] lg:mb-[8vh] object-cover object-center rounded-full shadow-2xl shadow-[rgba(39,223,179,0.15)]' src={falgunimin} alt="" fetchPriority='high' /></span> Falguni</span></h1>
            <p className='w-full lg:pr-[12vw] text-[10vw] lg:text-[2vw] leading-[45px] tracking-tight'>
              <span className='block h-[11.7vw] overflow-hidden' ><span className='welcome-txt block' >Elevating the web </span></span>
              <span className='block h-[11.7vw] overflow-hidden' ><span className='welcome-txt block' >with a <span className='text-[#27dfb3]'>frontend</span> </span></span>
              <span className='block h-[11.7vw] overflow-hidden' ><span className='welcome-txt block' >developer's touch.</span></span>
            </p>
            <a className='resume bg-[#27dfb3] shadow-2xl shadow-[#27dfb3] py-2 w-[35vw] lg:w-[12vw]  flex justify-center items-center gap-[0.8vmax] rounded-full text-[4.5vw] lg:text-[1.2vw] font-medium text-black mt-[4vh]' href={falguni_mondal_resume} download>Resume <GoDownload /> </a>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero