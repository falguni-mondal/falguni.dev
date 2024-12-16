import React from 'react'
import SectionHeading from '../SectionHeading'
import { useGSAP } from '@gsap/react'
import Project from './Project'
import gsap from 'gsap'


const Projects = () => {
  const projects = [
    {
      img: 'https://i.postimg.cc/s2xzGR9g/kickster.png',
      name: 'Kickster',
      tools: "React(Vite) • Redux Toolkit • Tailwind CSS • Firebase • React Router • GSAP  • RazorPay",
      year: '2024',
      link: 'https://kickstershoes.netlify.app',
      github: "https://github.com/falguni-mondal/Kickster",
      category: 'Web Development • Frontend Development'
    },
    {
      img: 'https://i.postimg.cc/NM0t6GYX/Obys-Agency.jpg',
      name: 'Obys Agency Clone',
      tools: "JavaScript • CSS • HTML",
      year: '2023',
      link: 'https://falguni-mondal.github.io/Obys-Agency/',
      github: "https://github.com/falguni-mondal/Obys-Agency",
      category: 'Web Design • Frontend Development'
    }
  ]
  const screen = window.innerWidth;

  useGSAP(() => {
    {
      ['.project', '.course'].map((elem) => {
        gsap.from(`${elem}`, {
          y: 100,
          opacity: 0,
          stagger: 0.25,
          scrollTrigger: {
            trigger: `${elem}`,
            start: `${screen > 1024 ? "top: 90%" : "top: 45%"}`,
            end: `${screen > 1024 ? "top: 75%" : "top: 30%"}`,
            scrub: 3,
          }
        })
      })
    }
  })
  const projectRevealer = (element) => {
    gsap.to(element, {
      scale: 1,
      opacity: 1,
      duration: 0.3
    })
  }
  const projectUnRevealer = (element) => {
    gsap.to(element, {
      scale: 0.9,
      opacity: 0,
      duration: 0.3
    })
  }

  return (
    <section id='project-section' className='w-full mt-[10vh] lg:mt-[25vh]'>
      <div className="project-heading">
        <SectionHeading heading={'Projects.'} />
        <span className='project-underline block w-full h-[0.3vmin] bg-[#242329] mt-2'></span>
      </div>
      <div className="project-container w-full">
        <ul className='w-full flex flex-col items-center mt-8'>
          {
            projects.map((item, index) => (
              <Project item={item} key={index} projectRevealer={projectRevealer} projectUnRevealer={projectUnRevealer} />
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default Projects