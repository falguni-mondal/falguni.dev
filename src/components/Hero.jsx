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
      stagger: 0.1,
      delay: 1
    })
    // gsap.from(".hero-img", {
    //   width: 0,
    //   duration: 1.2,
    //   delay: 1.7,
    //   ease: "elastic.out(1,0.6)",
    // })
    gsap.from('.socials-container', {
      opacity: 0,
      y: 15,
      duration: 1,
      delay: 1,
    })
    gsap.from('.resume', {
      opacity: 0,
      y: 15,
      duration: 1,
      delay: 1.3,
    })
    // gsap.from('.hand', {
    //   rotate: -10,
    //   duration: 2.5,
    //   delay: 1.7,
    //   ease: "elastic.out(5,0.5)",
    // })
  })

  return (
    <section id='hero' className='hero-section pt-[12dvh] lg:pt-[12dvh]'>
      <div className="hero-container relative w-full h-[88vh] flex flex-col items-center justify-center">
        <span className='hero-lighting block w-[30vw] h-[30vw] lg:h-[60vh] lg:w-[10vw] lg:rotate-[-60deg] rounded-full lg:rounded-[50%] absolute bg-[#27DFB3] blur-[80px] lg:blur-[60px] bottom-[18vh] lg:right-[30%] lg:top-[-45vh] opacity-70 lg:opacity-30'></span>

        <span className='hero-lighting block w-[25vw] h-[25vh] lg:h-[30vh] lg:w-[40vw] rotate-45 lg:rotate-[-50deg] rounded-full lg:rounded-[50%] absolute bg-[#27DFB3] blur-[80px] lg:blur-[80px] top-[-10vh] lg:top-[-35vh] left-[50] lg:left-[8vw] lg:opacity-50 opacity-[0.45]'></span>

        <span className='hidden hero-lighting lg:block h-[20vh] w-[30vw] lg:rounded-[50%] absolute bg-[#27DFB3] blur-[200px] bottom-[-10vh] right-[2vw] opacity-50'></span>

        <div className="hero-main">
          <div className="my-info text-center mt-[1vh] flex flex-col items-center">
            <h1 className='hero-heading text-[9vw] h-[11.5vw] lg:h-[5.5vw] overflow-hidden lg:text-[5vw] font-medium lg:font-light flex items-start leading-none gap-1'><span className='welcome-txt'>Hi<span className='hand inline-block origin-bottom-right text-[8vw] lg:text-[5vw]'>👋</span>, I'm </span><span className='inline-block welcome-txt'><img className=' hero-img w-[13.5vw] lg:w-[8vw] h-[8vw] lg:h-[5vw] object-cover object-center rounded-full shadow-2xl shadow-[rgba(39,223,179,0.15)]' src={falgunimin} alt="" fetchPriority='high' /></span><span className='welcome-txt'> Falguni</span></h1>
            <p className='w-full text-[10vw] lg:text-[5vw] lg:font-light leading-[45px] lg:leading-tight tracking-tight'>
              <span className='flex items-start leading-none justify-center h-[11.8vw] lg:h-[5.5vw] overflow-hidden' ><span className='welcome-txt block' >Elevating the web </span></span>
              <span className='flex items-start leading-none justify-center h-[11.8vw] lg:h-[5.5vw] overflow-hidden' ><span className='welcome-txt block' >with a <span className='text-[#27dfb3]'>frontend</span> </span></span>
              <span className='flex items-start leading-none justify-center h-[11.8vw] lg:h-[5.5vw] overflow-hidden' ><span className='welcome-txt block' >developer's touch.</span></span>
            </p>
            <a className='resume bg-[#27dfb3] shadow-2xl shadow-[#27dfb3] py-2 w-[35vw] lg:w-[15vw]  flex justify-center items-center gap-[0.8vmax] rounded-sm text-[4vw] lg:text-[1.2vw] font-medium lg:font-normal text-black mt-[4vh] mb-[15vh] lg:mb-[2vh]' href={falguni_mondal_resume} download>Resume <GoDownload /> </a>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero