import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import MouseFollower from './components/MouseFollower';
import Title from './components/Title';
import './styles/tailwind.css';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Title />
      <div id="intro">
        <Intro />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="skills">
        <Skills/>
      </div>     
      <div id="timeline">
        <Timeline />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      <MouseFollower />
    </div>
  );
}

export default App;