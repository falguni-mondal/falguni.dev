import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";


const Contact = () => {
  const [visible, setVisible] = useState(false)

  const formHandler = (e) => {
    // e.preventDefault()
    setVisible(true);
    setTimeout(()=>{
      setVisible(false);
    }, 2500)
  }
  return (
    <section id='contact' className='w-full mt-[15vh]'>
      <SectionHeading heading={'Connect.'} />
      <div className="contact-here flex flex-col gap-20 mt-[5vh]">
        <form onSubmit={(e) => { formHandler(e) }} className='w-full flex flex-col gap-8' name='contact' netlify >
          <input name='Email' className='w-full outline-none py-2 bg-transparent border-b-2 border-[#f8f8f8] placeholder:text-[#f8f8f8]' placeholder='Your email' type="email" />
          <textarea name='Message' className='w-full outline-none bg-transparent border-b-2 border-[#f8f8f8] placeholder:text-[#f8f8f8]' placeholder='Message' rows={6} id="connnect-message"></textarea>
          <button type='submit' className='text-[#242329] bg-[#27DFB3] font-medium py-2.5 w-[45vw] rounded-full'>Send Message</button>
        </form>
        <span className={`fixed top-10 left-[50%] -translate-x-[50%] z-50 sendMsg inline-flex items-center gap-1 text-[4.5vw] px-6 py-2 rounded-md ${visible ? 'scale-100' : 'scale-0'} transition-all`}>
          <VscVerifiedFilled className='text-[#27DFB3]' /> Sent
        </span>
        <div className="contact-dets-sontainer flex flex-col gap-8">
          <div className='contact-dets flex flex-col'>
            <h3 className='text-[4vw] font-semibold mb-2'>Contact Details</h3>
            <span className='text-[3vw] block mb-2'>heya.falguni@gmail.com</span>
            <span className='text-[3vw] block'>+91 86709 12269</span>
          </div>
          <div className='digi-space flex flex-col'>
            <h3 className='text-[4vw] font-semibold mb-2'>My Digital Spaces</h3>
            <ul>
              <li>
                <a className='text-[3vw] flex items-center gap-1 mb-2' href='https://github.com/falguni-mondal' target='_blank'><IoLogoGithub className='text-[3.5vw]' />Github</a>
              </li>
              <li>
                <a className='text-[3vw] flex items-center gap-1' href='https://www.linkedin.com/in/falguni-mondal/' target='_blank'><FaLinkedinIn className='text-[3.5vw]' />LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="location-dets flex flex-col">
            <h3 className='text-[4vw] font-semibold mb-2'>Location</h3>
            <span className='text-[3vw]'>Durgapur, West Bengal, India</span>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact