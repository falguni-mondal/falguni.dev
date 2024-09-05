import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {

  return (
    <div className='main-container w-[100vw] relative min-h-screen bg-zinc-950 flex flex-col items-center'>
      <div className="container relative mx-auto max-w-screen-2xl 2xl:px-0 lg:px-[10vw] px-5">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App