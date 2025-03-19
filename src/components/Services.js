// components/Services.js
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize and update viewport dimensions
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial values
    handleResize();
    
    // Update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Calculate responsive spacing
  const containerHeight = isMobile ? '400vh' : '290vh';
  const sectionOffset = isMobile ? '30vh' : '30vh';
  const topPosition = isMobile ? '200px' : '270px';

  return (
    <section id="services" className="services">
      <div className="services-wrapper">
        <div className="container">
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ 
              position: 'relative',
              height: containerHeight // Responsive container height
            }}
          >
            {/* Header - Stays at the top */}
            <motion.div 
              style={{ 
                position: 'sticky', 
                top: 0, 
                zIndex: 10,
                background: 'var(--background)',
                paddingTop: isMobile ? '3rem' : '5rem',
              }}
            >
              <motion.div className="section-subtitle" variants={itemVariants}>
                My expertise
              </motion.div>
              <motion.h1 className="section-title" variants={itemVariants}>
                WHAT I DO
              </motion.h1>
            </motion.div>
            
            {/* App Development - Shows first, gets covered by others */}
            <motion.div 
              className="service-category fade-in"
              variants={categoryVariants}
              whileHover="hover"
              style={{ 
                position: 'sticky', 
                top: topPosition,
                zIndex: 1, 
                background: 'var(--background)',
              }}
            >
              <motion.div className="hero-divider" variants={lineVariants} />
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
              <motion.div className="hero-divider" variants={lineVariants} style={{ marginTop: '1rem' }} />
            </motion.div>
            
            {/* UI/UX Design - Shows second, covers App Development */}
            <motion.div 
              className="service-category fade-in"
              variants={categoryVariants}
              whileHover="hover"
              style={{ 
                position: 'sticky', 
                top: topPosition,
                zIndex: 2, 
                background: 'var(--background)',
                marginTop: isMobile ? '50vh' : sectionOffset // More space on mobile
              }}
            >
              <motion.div className="hero-divider" variants={lineVariants} />
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
              <motion.div className="hero-divider" variants={lineVariants} style={{ marginTop: '1rem' }} />
            </motion.div>
            
            {/* Backend Development - Shows last, covers everything else */}
            <motion.div 
              className="service-category fade-in"
              variants={categoryVariants}
              whileHover="hover"
              style={{ 
                position: 'sticky', 
                top: topPosition,
                zIndex: 3, 
                background: 'var(--background)',
                marginTop: isMobile ? '50vh' : sectionOffset // More space on mobile
              }}
            >
              <motion.div className="hero-divider" variants={lineVariants} />
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
              <motion.div className="hero-divider" variants={lineVariants} style={{ marginTop: '1rem' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;