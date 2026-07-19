import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Insights from '../components/Insights';
import About from '../components/About';
import Clients from '../components/Clients';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Insights />
      <About />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;
