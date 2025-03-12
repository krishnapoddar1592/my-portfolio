// components/Contact.js
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');
    
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const inputVariants = {
    initial: { borderColor: 'var(--paragraph)' },
    focus: { borderColor: 'var(--highlight)' },
    filled: { borderColor: 'var(--headline)' }
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
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <div className="container">
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="section-subtitle"
              variants={itemVariants}
            >
              Contact
            </motion.div>
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              GET IN TOUCH
            </motion.h2>
            
            {status && (
              <motion.div 
                className={`status-message ${status.includes('success') ? 'success' : status.includes('Failed') ? 'error' : 'info'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status}
              </motion.div>
            )}
            
            <motion.div 
              className="contact-form"
              variants={formVariants}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <motion.input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variants={inputVariants}
                    initial="initial"
                    whileFocus="focus"
                    animate={formData.name ? "filled" : "initial"}
                  />
                </div>
                <div className="form-group">
                  <motion.input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variants={inputVariants}
                    initial="initial"
                    whileFocus="focus"
                    animate={formData.email ? "filled" : "initial"}
                  />
                </div>
                <div className="form-group">
                  <motion.input 
                    type="text" 
                    className="form-control" 
                    placeholder="Subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variants={inputVariants}
                    initial="initial"
                    whileFocus="focus"
                    animate={formData.subject ? "filled" : "initial"}
                  />
                </div>
                <div className="form-group">
                  <motion.textarea 
                    className="form-control" 
                    placeholder="Your Message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variants={inputVariants}
                    initial="initial"
                    whileFocus="focus"
                    animate={formData.message ? "filled" : "initial"}
                  />
                </div>
                <motion.button 
                  type="submit" 
                  className="btn btn-filled"
                  disabled={isSubmitting}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={!isSubmitting ? "hover" : "initial"}
                  whileTap={!isSubmitting ? "tap" : "initial"}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;