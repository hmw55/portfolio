import { useEffect } from 'react'
import './App.css'

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Project';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className='app'>
      <Nav />

      <main className="site-main">
        <Hero />
        <Projects />
        <About />
        <Contact />
        {/* Add Downloadable Resume */}
      </main>

      <Footer />
    </div>
  )
}

export default App;
