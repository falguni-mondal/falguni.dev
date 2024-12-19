import SectionHeading from './SectionHeading';
import falguni from '../assets/mine/falguni.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const About = () => {

    const screen = window.innerWidth;

    useGSAP(() => {
        gsap.from(".splitted-about", {
            opacity: 0.1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.splitted-about',
                start: `${screen > 1024 ? "top 60%"  : "top 30%"}`,
                end: `${screen > 1024 ? "top -20%"  : "top -50%"}`,
                scrub: 2,
            }
        })
        gsap.from(".falguni_img", {
            opacity: 0,
            y: 15,
            duration: 1,
            scrollTrigger: {
                trigger: '.falguni_img',
                start: 'top 60%',
                end: 'top 0%',
            }
        })
        {
            ['about-underline', 'connect-underline', 'project-underline', 'skill-underline', 'certify-underline'].map((elem) => {
                gsap.from(`.${elem}`,{
                    width: 0,
                    duration: 1.5,
                    scrollTrigger:{
                        trigger: `.${elem}`,
                        start: "top 70%",
                        end: "top 30%",
                        ease: 'power4.inOut',
                        // markers: true,
                    }
                })
            })
        }
        
    })

    return (
        <section className='about-section lg:mt-[15vmin] py-[3vh] w-full'>
            <div className="about-heading">
                <SectionHeading heading={'About Me.'} size={'text-[18vw]'} />
                <span className='about-underline block w-full h-[3px] bg-zinc-800 relative top-[-1vh]'></span>
            </div>
            <div className='details mt-6'>
                <img className='falguni_img lg:h-[200px] mb-5' src={falguni} alt="falguni_mondal" />
                <p className='inline text-[6vw] lg:text-[3vw] text-[#f8f8f8] tracking-tight leading-7 lg:leading-tight'>
                    {
                        "Pursuing Bachelor's in Information Technology at Bengal College of Engineering & Technology.".split(' ').map((val, index) => (
                            <span key={index} className='splitted-about'>{`${val} `}</span>
                        ))
                    }
                    <br /><br />
                    {
                        "I am a web developer experienced in React (Vite), Redux Toolkit, Tailwind CSS, Firebase, and GSAP. I specialize in creating modern, and interactive websites with animations. As a creative Problem Solver and Team Player, I am eager to connect with other technology professionals and explore new opportunities for growth and development.".split(' ').map((val, index) => (
                            <span key={index} className='splitted-about'>{`${val} `}</span>
                        ))
                    }
                    <a href='#contact' className='w-fit inline-flex flex-col splitted-about ml-3 leading-none font-medium text-[6vw] lg:text-[3vw]'>Let's connect! <span className='connect-underline inline-block w-full h-[2px] bg-[#f8f8f8]'></span></a>
                </p>
            </div>
        </section>
    )
}

export default About