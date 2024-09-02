import falgunimin from '../assets/mine/falgunimin.jpg'
import SectionHeading from './SectionHeading'
import Socials from './Socials'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Hero = () => {


  useGSAP(() => {
    gsap.from(".my-img", {
      scale: 0.5,
      height: "50%",
      rotate: -2,
      borderRadius: 0,
      ease: "power4.inOut",
      duration: 3,
    })
    gsap.from(".my-name", {
      y: "8vh",
      ease: "power4.Out",
      duration: 0.9,
      delay: 1.3,
    })
    gsap.from(".my-intro", {
      y: "4vh",
      ease: "power4.Out",
      duration: 0.9,
      delay: 1.3,
    })
    gsap.from('.socials-container',{
      y: "15vh",
      duration: 0.7,
      delay: 1.3,
      ease: "power4.Out",
    })
  })

  return (
    <section id='hero' className='hero-section flex flex-col py-[5vh] w-full pt-[12vh]'>
      <SectionHeading heading={"Hello"} size={'text-[35vw]'} font={'font-awesome'} tracking={'tracking-tight'} />
      <h1 className='relative my-intro-cont z-2 top-[-8vh] flex flex-col items-center font-semibold leading-tight mt-5'><span className='block overflow-hidden h-[3.5vh]'><span className='my-intro block text-[6vw]'>I am</span></span><span className='block overflow-hidden h-[8.2vh]'><span className='my-name text-[13vw] font-semibold tracking-tighter block leading-none'>Falguni.</span></span></h1>
      <div className='my-info relative top-[-5vh] w-[95%] h-[40vh] rotate-3 flex justify-center items-center  mx-auto'>
        <img className='my-img w-full h-full object-cover object-center rounded-lg shadow-2xl shadow-[rgba(39,223,179,0.15)]' src={falgunimin} alt="" />
      </div>
      <Socials />
    </section>
  )
}

export default Hero