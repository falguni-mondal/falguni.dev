import React from 'react'
import SectionHeading from '../SectionHeading'
import { useGSAP } from '@gsap/react'
import Project from './Project'
import gsap from 'gsap'


const Projects = () => {
  const projects = [
    {
      img: 'https://i.postimg.cc/NM0t6GYX/Obys-Agency.jpg',
      name: 'Obys Agency Clone',
      tools: "JavaScript • CSS • HTML",
      year: '2023',
      link: 'https://falguni-mondal.github.io/Obys-Agency/',
      category: 'Web Design • Frontend Development'
    }
  ]

  useGSAP(() => {
    {
      ['.project', '.course'].map((elem) => {
        gsap.from(`${elem}`, {
          y: 150,
          opacity: 0.3,
          stagger: 0.25,
          scrollTrigger: {
            trigger: `${elem}`,
            start: 'top 100%',
            end: 'top 80%',
            scrub: 4,
          }
        })
      })
    }
  })
  const projectRevealer = () => {
    gsap.to(".project-img", {
      scale: 1,
      opacity: 1,
      duration: 0.3
    })
  }
  const projectUnRevealer = () => {
    gsap.to(".project-img", {
      scale: 0.9,
      opacity: 0,
      duration: 0.3
    })
  }

  return (
    <section id='project-section' className='w-full mt-[10vh] lg:mt-[25vh]'>
      <div className="project-heading">
        <SectionHeading heading={'Projects.'} />
        <span className='project-underline block w-full h-[3px] bg-[#242329] mt-3 relative top-[-1vh]'></span>
      </div>
      <div className="project-container w-full">
        <ul className='w-full flex flex-col items-center gap-5 mt-8'>
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