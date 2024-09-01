import React from 'react'
import SectionHeading from '../SectionHeading'

const Projects = () => {
  return (
    <section className='w-full py-4 mt-[10vh]'>
      <div className="project-heading">
        <SectionHeading heading={'Projects.'}/>
        <span className='project-underline block w-full h-[3px] bg-[#242329] mt-3 relative top-[-1vh]'></span>
      </div>

    </section>
  )
}

export default Projects