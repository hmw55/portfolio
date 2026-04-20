// import { useState } from 'react'
import './App.css'

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Project';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
      {/* Add Downloadable Resume */}
      <Footer />
    </>
  )
}

export default App
