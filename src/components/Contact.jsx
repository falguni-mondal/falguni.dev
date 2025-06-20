import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [visible, setVisible] = useState(false)
  const email = useRef();
  const message = useRef();
  const form = useRef();
  const screen = window.innerWidth;
  const formHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ddv381p', 'template_7imxyl1', form.current, {
        publicKey: 'xtQO6onrTLinyRZo2',
      })
      .then(
        () => {
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 2500)
          email.current.value = '';
          message.current.value = '';
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }
  return (
    <section id='contact' className='w-full mt-[15vh]'>
      <SectionHeading heading={'Connect.'} />
      <div className="contact-here w-full flex flex-col lg:flex-row gap-20">
        {/* <form ref={form} onSubmit={(e) => formHandler(e)} className='w-full lg:w-2/3 flex flex-col gap-8' name='contact'>
          <input ref={email} name='from_email' className='w-full outline-none py-2 lg:py-4 bg-transparent border-b-2 border-[#f8f8f8] placeholder:text-[#f8f8f8] text-[0.9rem] lg:text-[1.2rem]' placeholder='Your email' type="email" required/>
          <textarea ref={message} name='message' className='w-full text-[0.9rem] lg:text-[1.2rem] outline-none bg-transparent border-b-2 border-[#f8f8f8] placeholder:text-[#f8f8f8]' placeholder='Message' rows={8} id="connnect-message" required></textarea>
          <button type='submit' value="send" className='text-zinc-900 bg-[#27DFB3] font-medium xl:font-semibold py-2.5 lg:py-4 w-[45vw] lg:w-[30ch] rounded-full lg:rounded'>Send Message</button>
        </form>
        <span className={`fixed top-10 left-[50%] -translate-x-[50%] z-50 sendMsg inline-flex items-center gap-1 text-[4.5vw] px-6 py-2 rounded-md ${visible ? 'scale-100' : 'scale-0'} transition-all`}>
          <VscVerifiedFilled className='text-[#27DFB3]' /> Sent
        </span> */}
        <div className="contact-dets-sontainer lg:w-1/3 flex flex-col gap-8">
          <div className='contact-dets flex flex-col'>
            <h3 className='text-[4vw] lg:text-[1.7vw] font-semibold mb-2'>Contact Details</h3>
            <span className='text-[3vw] lg:text-[1.1vw] block mb-2'>career.falguni@gmail.com</span>
            <span className='text-[3vw] lg:text-[1.1vw] block'>+91 86709 12269</span>
          </div>
          <div className='digi-space flex flex-col'>
            <h3 className='text-[4vw] lg:text-[1.7vw] font-semibold mb-2'>My Digital Spaces</h3>
            <ul>
              <li>
                <a className='text-[3vw] lg:text-[1.1vw] flex items-center gap-1 lg:gap-3 mb-2' href='https://github.com/falguni-mondal' target='_blank'><IoLogoGithub className='text-[3.5vw] lg:text-[1.5vw]' />Github</a>
              </li>
              <li>
                <a className='text-[3vw] lg:text-[1.1vw] flex items-center gap-1 lg:gap-3' href='https://www.linkedin.com/in/falguni-mondal/' target='_blank'><FaLinkedinIn className='text-[3.5vw] lg:text-[1.5vw]' />LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="location-dets flex flex-col">
            <h3 className='text-[4vw] lg:text-[1.7vw] font-semibold mb-2'>Location</h3>
            <span className='text-[3vw] lg:text-[1.1vw]'>Durgapur, West Bengal, India</span>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact