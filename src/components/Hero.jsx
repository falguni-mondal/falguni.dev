import falgunimin from '../assets/mine/falgunimin.jpg'
// import SectionHeading from './SectionHeading'
import falguni_mondal_resume from "../assets/mine/falguni_mondal_resume.pdf";
import { GoDownload } from "react-icons/go";
import Socials from './Socials'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Hero = () => {


  useGSAP(() => {
    gsap.from(".my-img", {
      scale: 0.5,
      height: "70%",
      width: "50%",
      ease: "power4.inOut",
      duration: 2.5,
    })
    gsap.from(".splitted-hero-txt", {
      opacity: 0,
      ease: "power4.Out",
      stagger: 0.0025,
      duration: 2.5,
      delay: 1,
    })
    gsap.from('.socials-container', {
      y: "20vh",
      duration: 0.7,
      delay: 1,
      ease: "power4.Out",
    })
    gsap.from('.resume', {
      opacity: 0,
      duration: 1.2,
      delay: 1.3,
      ease: "power4.Out",
    })
  })

  return (
    <section id='hero' className='hero-section lg:pt-[12dvh]'>
      <div className="hero-container relative w-full h-[92vh] flex flex-col items-center justify-center">
        <span className='hero-lighting block w-[30vw] h-[30vw] rounded-full absolute bg-[#27DFB3] blur-[80px] lg:blur-[300px] lg:scale-[0.5] bottom-[20vh] lg:right-0 lg:bottom-[-40vh] opacity-50'></span>

        <span className='hero-lighting block w-[30vw] h-[30vw] rounded-full absolute bg-[#27DFB3] blur-[70px] lg:blur-[300px] lg:scale-[0.5] top-[-10vh] left-[50] lg:left-[-2vw] lg:opacity-80 opacity-50'></span>

        <div className="hero-main flex flex-col lg:h-auto lg:flex-row-reverse justify-center">
          {/* <div className='my-img-container w-[35vw] h-[35vw] mx-auto lg:h-auto flex-shrink-0 lg:flex lg:items-center'>
            <img className='my-img w-full h-full mx-auto lg:w-[15vw] lg:mb-[8vh] object-cover object-center rounded-full shadow-2xl shadow-[rgba(39,223,179,0.15)]' src={falgunimin} alt="" fetchPriority='high' />
          </div> */}
          <div className="my-info text-center lg:text-left  mt-[1vh] flex flex-col items-center lg:w-[70%] lg:h-full lg:items-start lg:justify-center">
            <h1 className='hero-heading splitted-hero-txt text-[9vw] lg:text-[3vw] font-medium flex items-center gap-1'>Hi👋, I'm <span><img className='w-[13.5vw] h-[8vw] mx-auto lg:w-[15vw] lg:mb-[8vh] object-cover object-center rounded-full shadow-2xl shadow-[rgba(39,223,179,0.15)]' src={falgunimin} alt="" fetchPriority='high' /></span> Falguni</h1>
            <p className='w-full lg:pr-[12vw] text-[10vw] lg:text-[2vw] mt-[2vh] leading-[45px] tracking-tight'>
              {
                "Elevating the web with a ".split('').map((val, index) => (
                  <span key={index} className='splitted-hero-txt'>{val}</span>
                ))
              }
              <span className='text-[#27DFB3]'>
                {
                  "frontend ".split('').map((val, index) => (
                    <span key={index} className='splitted-hero-txt'>{val}</span>
                  ))
                }
              </span>
              {
                "developer's touch.".split('').map((val, index) => (
                  <span key={index} className='splitted-hero-txt'>{val}</span>
                ))
              }
            </p>
            <a className='resume bg-[#27DFB3] shadow-2xl shadow-[#27DFB3] py-2 w-[35vw] lg:w-[12vw]  flex justify-center items-center gap-[0.8vmax] rounded-full text-[4.5vw] lg:text-[1.2vw] font-medium text-[#242329] mt-[4vh]' href={falguni_mondal_resume} download>Resume <GoDownload /> </a>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero