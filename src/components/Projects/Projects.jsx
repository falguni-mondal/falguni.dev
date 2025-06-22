import React from 'react'
import SectionHeading from '../SectionHeading'
import { useGSAP } from '@gsap/react'
import Project from './Project'
import gsap from 'gsap'


const Projects = () => {
  const projects = [
    {
      img: 'https://i.ibb.co/B2PdC35H/Stegx-2.png',
      name: 'Stegx',
      tools: "React(Vite) • Tailwind CSS • Node.js • Express.js • Multer • Jimp",
      year: '2025',
      link: 'https://stegx.netlify.app',
      github: "https://github.com/falguni-mondal/Stegx",
      category: 'Web Development • Fullstack Development • Image Processing • Data Security'
    },
    {
      img: 'https://i.ibb.co/F4cd72KG/kickster2.png',
      name: 'Kickster',
      tools: "React(Vite) • Redux Toolkit • Tailwind CSS • Firebase • GSAP",
      year: '2024',
      link: 'https://kickstershoes.netlify.app',
      github: "https://github.com/falguni-mondal/Kickster",
      category: 'Web Development • Frontend Development • E-commerce'
    },
    {
      img: 'https://i.postimg.cc/NM0t6GYX/Obys-Agency.jpg',
      name: 'Obys Agency Clone',
      tools: "JavaScript • CSS • HTML • GSAP",
      year: '2023',
      link: 'https://falguni-mondal.github.io/Obys-Agency/',
      github: "https://github.com/falguni-mondal/Obys-Agency",
      category: 'Web Design • Frontend Development'
    }
  ]
  const screen = window.innerWidth;

{/* <img src="https://i.ibb.co/nMShC7kr/Stegx.png" alt="Stegx" border="0"> */}
{/* <img src="https://i.ibb.co/B2PdC35H/Stegx-2.png" alt="Stegx-2" border="0"></img> */}
{/* <img src="https://i.ibb.co/F4cd72KG/kickster2.png" alt="kickster2" border="0"> */}
{/* <img src="https://i.ibb.co/VWFHMwLf/kickster.png" alt="kickster" border="0"></img> */}


  useGSAP(() => {
    {
      ['.project', '.course'].map((elem) => {
        gsap.from(`${elem}`, {
          y: 100,
          opacity: 0,
          stagger: 0.25,
          scrollTrigger: {
            trigger: `${elem}`,
            start: `${screen > 1024 ? "top: 90%" : "top: 65%"}`,
            end: `${screen > 1024 ? "top: 75%" : "top: 50%"}`,
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
        <span className='project-underline block w-full h-[3px] bg-[#242329] mt-2'></span>
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