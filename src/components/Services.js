// components/Services.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      color: 'var(--headline)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-wrapper">
        <div className="container">
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="section-subtitle" variants={itemVariants}>
              My expertise
            </motion.div>
            <motion.h1 className="section-title" variants={itemVariants}>
              WHAT I DO
            </motion.h1>
            <motion.div className="hero-divider" variants={lineVariants} />
            
            <motion.div 
              className="service-category fade-in"
              variants={categoryVariants}
              whileHover="hover"
            >
              <div className="service-list">
                <div className="left">
                  <h3 className="service-title">APP DEVELOPMENT</h3>
                </div>
                <div className="right">
                  <div className="service-list">
                    <div className="left">
                      <motion.p variants={itemVariants}>Android Development</motion.p>
                      <motion.p variants={itemVariants}>iOS Development</motion.p>
                      <motion.p variants={itemVariants}>Multiplatform Development</motion.p>
                    </div>
                    <div className="right">
                      <motion.p variants={itemVariants}>Modern UIs</motion.p>
                      <motion.p variants={itemVariants}>Integrated Backend</motion.p>
                      <motion.p variants={itemVariants}>App Maintenance</motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="hero-divider" variants={lineVariants} />
            
            <motion.div 
              className="service-category fade-in"
              variants={categoryVariants}
              whileHover="hover"
            >
              <div className="service-list">
                <div className="left">
                  <h3 className="service-title">UI / UX DESIGN</h3>
                </div>
                <div className="right">
                  <div className="service-list">
                    <div className="left">
                      <motion.p variants={itemVariants}>App Design</motion.p>
                      <motion.p variants={itemVariants}>Website Design</motion.p>
                      <motion.p variants={itemVariants}>Landing Page Design</motion.p>
                    </div>
                    <div className="right">
                      <motion.p variants={itemVariants}>Design Systems</motion.p>
                      <motion.p variants={itemVariants}>Wireframing</motion.p>
                      <motion.p variants={itemVariants}>Prototyping</motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="hero-divider" variants={lineVariants} />
            
            <motion.div 
              className="service-category fade-in"
              variants={categoryVariants}
              whileHover="hover"
            >
              <div className="service-list">
                <div className="left">
                  <h3 className="service-title">BACKEND DEVELOPMENT</h3>
                </div>
                <div className="right">
                  <div className="service-list">
                    <div className="left">
                      <motion.p variants={itemVariants}>Rest API Development</motion.p>
                      <motion.p variants={itemVariants}>Database Design</motion.p>
                      <motion.p variants={itemVariants}>Cloud Integration</motion.p>
                    </div>
                    <div className="right">
                      <motion.p variants={itemVariants}>Performance Optimization</motion.p>
                      <motion.p variants={itemVariants}>Security Implementation</motion.p>
                      <motion.p variants={itemVariants}>Scalable Architecture</motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="hero-divider" variants={lineVariants} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
