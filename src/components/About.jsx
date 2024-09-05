import SectionHeading from './SectionHeading';
import falguni from '../assets/mine/falguni.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const About = () => {

    useGSAP(() => {
        gsap.from(".splitted-about", {
            opacity: 0.1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.splitted-about',
                start: 'top 70%',
                end: 'top 0%',
                scrub: 2,
            }
        })
        {
            ['about-underline', 'connect-underline', 'project-underline', 'skill-underline', 'certify-underline'].map((elem, index) => {
                gsap.from(`.${elem}`,{
                    width: 0,
                    duration: 1.5,
                    scrollTrigger:{
                        trigger: `.${elem}`,
                        start: index===0 ?'top 70%' : 'top 80%',
                        end: 'top 50%',
                        ease: 'power4.inOut',
                        // markers: true,
                    }
                })
            })
        }
        
    })

    return (
        <section className='about-section lg:mt-[25vh] py-[3vh] w-full'>
            <div className="about-heading">
                <SectionHeading heading={'About Me.'} size={'text-[18vw]'} />
                <span className='about-underline block w-full h-[3px] bg-zinc-800 relative top-[-1vh]'></span>
            </div>
            <div className='details mt-6'>
                <p className='inline text-[6vw] lg:text-[3vw] text-[#f8f8f8] tracking-tight leading-7 lg:leading-tight'>
                <span><img className='splitted-about inline w-[8vw] lg:w-[2.9vw] rounded-full mr-3' src={falguni} alt="" /></span>
                    {
                        "Pursuing Bachelor's in Information Technology at Bengal College of Engineering & Technology.".split('').map((val, index) => (
                            <span key={index} className='splitted-about'>{val}</span>
                        ))
                    }
                    <br /><br />
                    {
                        "With Experience in Web Development, I have developed a strong foundation in Languages like Java, C, and JavaScript. As a creative problem solver and team player, I am eager to connect with other technology professionals and explore new opportunities for growth and development.".split('').map((val, index) => (
                            <span key={index} className='splitted-about'>{val}</span>
                        ))
                    }
                    <a href='#contact' className='inline-flex flex-col splitted-about ml-3 leading-none font-medium'>Let's connect! <span className='connect-underline h-[2px] bg-[#f8f8f8]'></span></a>
                </p>
            </div>
        </section>
    )
}

export default About