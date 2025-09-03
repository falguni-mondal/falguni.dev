import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RoughNotation } from "react-rough-notation";


const About = () => {

    const screen = window.innerWidth;

    useGSAP(() => {
        gsap.from(".splitted-about", {
            opacity: 0.1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.splitted-about',
                start: `${screen > 1024 ? "top 60%" : "top 80%"}`,
                end: `${screen > 1024 ? "top -90%" : "top -60%"}`,
                scrub: 2,
            }
        })
        {
            ['project-underline', 'skill-underline', 'certify-underline'].map((elem) => {
                gsap.from(`.${elem}`, {
                    width: 0,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: `.${elem}`,
                        start: `${screen > 1024 ? "top 70%" : "top 60%"}`,
                        end: `${screen > 1024 ? "top 30%" : "top 0%"}`,
                        ease: 'power4.inOut',
                        // markers: true,
                    }
                })
            })
        }

    })

    return (
        <section className='about-section lg:mt-[15vmin] py-[3vh] w-full'>
            <div className='details mt-6'>
                <p className='inline text-[6vw] lg:text-[3vw] text-[#f8f8f8] tracking-tight leading-7 lg:leading-tight'>
                    {
                        "I have recently completed my Bachelor's in Information Technology and am now actively ".split(' ').map((val, index) => (
                            <span key={index} className='splitted-about'>{`${val} `}</span>
                        ))
                    }
                    <span className='splitted-about'>
                        <RoughNotation type='circle' color='#0ed8a9' animate={true} show={true}>seeking</RoughNotation>
                    </span>
                    {
                        " an entry-level ".split(' ').map((val, index) => (
                            <span key={index} className='splitted-about'>{`${val} `}</span>
                        ))
                    }
                    <span className='splitted-about'>
                        <RoughNotation type='underline' color='#0ed8a9' animate={true} show={true}>opportunity</RoughNotation>
                    </span>
                    {
                        " to kickstart my career in frontend development.".split(' ').map((val, index) => (
                            <span key={index} className='splitted-about'>{`${val} `}</span>
                        ))
                    }
                    <br /><br />
                    {
                        "While my primary interest lies in frontend technologies, I also have experience working with Node.js, Express.js, and MongoDB. I’ve built multiple projects that demonstrate my technical skills and problem-solving abilities, which are available on my GitHub profile. Being a quick learner, I am passionate about continuous learning and personal growth.".split(' ').map((val, index) => (
                            <span key={index} className='splitted-about'>{`${val} `}</span>
                        ))
                    }
                    <br /><br />
                    {
                        "Lastly, if I’m not immersed in code or crafting something exciting on the web, you’ll likely find me on the football field⚽ or exploring the nature☘️ on a quite walk.".split(' ').map((val, index) => (
                            <span key={index} className='splitted-about'>{`${val} `}</span>
                        ))
                    }
                </p>
            </div>
        </section>

        // I am a fresher who has recently completed the final semester of my Bachelor's degree in Information Technology from Bengal College of Engineering and Technology. I am currently seeking an entry-level opportunity to kickstart my career in frontend development. However, I also have experience coding in Node.js, Express.js, and MongoDB, and would be open to fullstack opportunities as well. I have built multiple projects that showcase my skills, which can be found on my GitHub profile. A quick learner by nature, I am passionate about continuous learning and personal growth. I am eager to work in a collaborative, supportive, and professional work environment where I can contribute and evolve as a developer.

        // I have recently completed my Bachelor's in Information Technology and am now actively seeking an entry-level opportunity to kickstart my career in frontend development. While my primary interest lies in frontend technologies, I also have experience working with Node.js, Express.js, and MongoDB.

        // I’ve built multiple projects that demonstrate my technical skills and problem-solving abilities, which are available on my GitHub profile. Being a quick learner, I am passionate about continuous learning and personal growth. I am eager to work in a collaborative, professional environment where I can contribute meaningfully and grow as a developer.

        // Lastly, if I’m not immersed in code or crafting something exciting on the web, you’ll likely find me on the football field or exploring the nature on a quite walk.
    )
}

export default About