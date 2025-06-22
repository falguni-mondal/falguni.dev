import React, { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { VscVerifiedFilled } from "react-icons/vsc";
import { VscError } from "react-icons/vsc";
import loading from "./assets/loading.gif";


const App = () => {

  const [visible, setVisible] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(null);

  return (
    <div className='main-container w-[100%] relative min-h-screen bg-zinc-950 flex flex-col items-center overflow-x-hidden'>
      <Navbar />
      <div className="container relative mx-auto w-full max-w-screen-xl 2xl:px-0 lg:px-[10vw] px-5">
        <div className={`status-container ${visible ? "scale-100" : "scale-0"} transition-all duration-500 fixed w-full top-[50px] lg:top-[60px] left-0 z-[100] flex justify-center items-center`}>
          <div className="status-bg px-3 py-1.5 rounded-full bg-[#ffffff15] backdrop-blur-sm w-fit flex justify-center items-center gap-1">
            {
              processing ? <img className='w-[25px] h-[25px]' src={loading} alt="loading.gif" />
                :
                success ? <VscVerifiedFilled className='text-[#27DFB3]' /> : <VscError className='text-[#df2727]' />
            }
            <span className="status text-zinc-200 text-[0.85rem]">{processing ? "" : success ? "Sent!" : "Failed!"}</span>
          </div>
        </div>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact setVisible={setVisible} setProcessing={setProcessing} setSuccess={setSuccess} processing={processing} visible={visible} />
        <Footer />
      </div>
    </div>
  )
}

export default App