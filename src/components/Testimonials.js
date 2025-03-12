// components/Testimonials.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Testimonial data
const testimonialsData = [
  {
    id: 1,
    quote: "Working with Krishna has been a design revelation. Their creativity brings life to digital spaces, delivering striking designs that truly resonate with our brand. A true digital visionary.",
    name: "Sarah Johnson",
    position: "Fluentify CEO",
    image: "./images/client1.jpeg"
  },
  {
    id: 2,
    quote: "Collaborating with Krishna was a breeze. Their responsiveness and keen understanding of our goals made the process enjoyable. A true partner in our digital journey.",
    name: "Michael Chen",
    position: "TechSolutions Inc.",
    image: "./images/client1.jpeg"
  }
];

const Testimonials = () => {
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

  const testimonialVariants = {
    hidden: { y: 50, opacity: 0 },
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
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-wrapper">
        <div className="container">
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="section-subtitle" variants={itemVariants}>
              Testimonials
            </motion.div>
            <motion.h2 className="section-title" variants={itemVariants}>
              WHAT MY CLIENTS SAY
            </motion.h2>
            
            {testimonialsData.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial"
                variants={testimonialVariants}
                whileHover="hover"
              >
                <div className="testimonial-header">
                  <span className="testimonial-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <motion.p 
                  className="testimonial-quote"
                  variants={itemVariants}
                >
                  "{testimonial.quote}"
                </motion.p>
                <motion.div 
                  className="testimonial-divider"
                  variants={lineVariants}
                />
                <motion.div 
                  className="testimonial-author"
                  variants={itemVariants}
                >
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="author-image" 
                  />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            
            <motion.div className="hero-divider" variants={lineVariants} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
