// components/CTA.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
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

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="cta" className="cta">
      <div className="cta-wrapper">
        <div className="container">
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="cta-title"
              variants={itemVariants}
            >
              HAVE A PROJECT IN MIND?
            </motion.h3>
            <motion.h2 
              className="cta-heading"
              variants={itemVariants}
            >
              LET'S WORK TOGETHER
            </motion.h2>
            <motion.a 
              href="#contact" 
              className="btn btn-filled"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

