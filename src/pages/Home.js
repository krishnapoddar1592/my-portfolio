// pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';

// Import all section components
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import HeroAboutTransition from '../components/HeroAboutTransition';

const Home = () => {
  // Animation variants for page transition
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* <Hero /> */}
      {/* <About /> */}
      <HeroAboutTransition/>
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      <CTA />
      <Contact />
    </motion.div>
  );
};

export default Home;
