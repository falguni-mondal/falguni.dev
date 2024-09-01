import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact';
import Footer from './components/Certificates/Footer';


const App = () => {

  return (
    <div className='main-container w-full min-h-screen bg-zinc-950'>
      <div className="container relative mx-auto max-w-screen-2xl 2xl:px-0 lg:px-10 px-5 overflow-x-hidden">
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