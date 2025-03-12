// components/About.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
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
    hidden: { y: 30, opacity: 0 },
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const profileImageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="about" className="about">
      <div className="about-wrapper">
        <div className="container">
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="section-subtitle" variants={itemVariants}>
              About me
            </motion.div>
            <motion.h2 className="section-title" variants={itemVariants}>
              WHO I AM
            </motion.h2>
            
            <div className="about-grid">
              {/* Left column with text */}
              <motion.div className="about-text" variants={itemVariants}>
                <p>I'm a Software Engineer with expertise in app development, backend systems, and UI/UX design. I combine technical expertise with creative problem-solving to build efficient, user-friendly applications.</p>
                <p>My experience spans across various technologies and domains, with a focus on creating scalable solutions that deliver exceptional user experiences.</p>
                <p>I'm passionate about leveraging technology to solve real-world problems and continuously expanding my knowledge in emerging technologies.</p>
                <motion.div className="experience-title" variants={itemVariants}>4+</motion.div>
                <motion.div className="hero-divider" variants={lineVariants} />
                <motion.div className="experience-subtitle" variants={itemVariants}>
                  <p>Years of Experience</p>
                </motion.div>
              </motion.div>
              
              {/* Right column with profile image */}
              <motion.div variants={itemVariants}>
                <motion.div 
                  className="profile-image-container"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src="./images/profilephoto.jpg" 
                    alt="Krishna Poddar" 
                    className="profile-image"
                    variants={profileImageVariants}
                  />
                </motion.div>
                <motion.div style={{ textAlign: 'center', marginTop: '2rem' }} variants={itemVariants}>
                  <motion.a 
                    href="#contact" 
                    className="btn"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Get In Touch
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;