import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Hero from '../components/Hero/Hero'
import ProjectSection from '../components/ProjectSection/ProjectSection'
import AboutPage from '../components/AboutPage/AboutPage'
import ContactUs from '../components/ContactUs/ContactUs'
import Skills from '../components/Skills/Skills'
import Resume from '../components/Resume/Resume'

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
      });
      // Clear location state to prevent scrolling again on page refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div>
      <Hero />
      <Resume/>
      <Skills />
      <AboutPage />
      <ProjectSection />
      <ContactUs />
    </div>
  )
}

export default Main