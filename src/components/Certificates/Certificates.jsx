import React from 'react'
import SectionHeading from '../SectionHeading'
import Certificate from './Certificate'

const Certificates = () => {
  const cert = [
    {
      name: 'Front End Domination',
      platform: 'Sheryians Coding School',
      skills:'React.js • Redux toolkit • Tailwind CSS • JavaScript • Framer Motion • GSAP • CSS • HTML',
      year: '2023',
      link: 'https://drive.google.com/file/d/1n-qO4YB_S3RTL0h7JSawSuwl65GOYdQr/view?usp=drivesdk'
    },
    {
      name: 'Javascript for Begginers',
      platform: 'Simplilearn',
      skills: 'JavaScript',
      year: '2023',
      link: 'https://simpli.app.link/mdKiczW7uMb'
    },
    {
      name: 'Data Structures and Algorithms using Java',
      platform: 'NPTEL',
      skills: 'Data Structure Topics',
      year: '2023',
      link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS85S73510002320132645'
    }
  ]
  return (
    <section className='cert-section w-full py-[3vh] mt-[15vh]'>
      <div className="certify-heading mb-[3vh]">
        <SectionHeading heading={'Courses.'} size={'text-[18vw]'} />
        <span className='certify-underline block w-full h-[3px] bg-zinc-800 relative top-[-1vh]'></span>
      </div>
      <ul className='certificate-container w-full flex flex-col gap-[6vh]'>
        {
          cert.map((item, index) => (
            <Certificate item={item} key={index} />
          ))
        }
      </ul>
    </section>
  )
}

export default Certificates