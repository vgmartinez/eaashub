import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  servicesData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [services, setServices] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setServices({ ...servicesData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, services, about, projects, contact, footer }}>
      <DarkModeToggle />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
