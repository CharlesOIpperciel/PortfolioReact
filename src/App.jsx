import React from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import MouseFollower from './components/MouseFollower';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import './styles/tailwind.css';
import Skills from './components/Skills';

function App() {
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [portfolioRef, portfolioVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [timelineRef, timelineVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactRef, contactVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [footerRef, footerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [skillsRef, skillsVisible] = useIntersectionObserver({ threshold: 0.1});

  return (
    <div className='App'>
      <div ref={introRef} className={introVisible ? 'animate-slideIn' : ''}><Intro /></div>
      <div ref={portfolioRef} className={portfolioVisible ? 'animate-slideIn' : ''}><Portfolio /></div>
      <div ref={skillsRef} className={skillsVisible ? 'animate-slideIn' : ''}><Skills/></div>     
      <div ref={timelineRef} className={timelineVisible ? 'animate-slideIn' : ''}><Timeline /></div>
      <div ref={contactRef} className={contactVisible ? 'animate-slideIn' : ''}><Contact /></div>
      <div ref={footerRef} className={footerVisible ? 'animate-slideIn' : ''}><Footer /></div>
      <MouseFollower />
    </div>
  );
}

export default App;