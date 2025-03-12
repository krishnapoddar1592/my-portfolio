// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            HI, I'M KRISHNA<br />APP DEVELOPER,<br />BACKEND ENGINEER<br />& UI DESIGNER
          </motion.h1>
          <motion.div 
            className="hero-divider"
            variants={lineVariants}
          />
          <motion.div 
            className="hero-subtitle"
            variants={itemVariants}
          >
            <p>Based in Kathmandu<br />and Working Worldwide.</p>
            <p>Passionate Designer and Developer Crafting Visually<br />Captivating Mobile Apps</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
