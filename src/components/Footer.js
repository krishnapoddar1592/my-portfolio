// components/Footer.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProjectPage = location.pathname.includes('/project/');

  // Handle navigation for footer links
  const handleNavigation = (e, path) => {
    e.preventDefault();
    
    if (isProjectPage) {
      // If on project page, navigate to home first
      navigate('/');
      
      // Then scroll to section after navigation completes
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const linkVariants = {
    hover: {
      color: 'var(--headline)',
      transition: { duration: 0.3 }
    }
  };

  const socialVariants = {
    hover: { 
      y: -3,
      color: 'var(--highlight)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <motion.div 
          className="footer-top"
          variants={itemVariants}
        >
          <motion.a 
            href="/"
            onClick={(e) => handleNavigation(e, 'home')}
            className="footer-logo"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            KRISHNA PODDAR
          </motion.a>
          
          <motion.div className="footer-nav" variants={itemVariants}>
            <motion.a 
              href="/"
              onClick={(e) => handleNavigation(e, 'home')}
              variants={linkVariants}
              whileHover="hover"
              className={location.pathname === '/' && !location.hash ? 'active' : ''}
            >
              Home
            </motion.a>
            <motion.a 
              href="/#about"
              onClick={(e) => handleNavigation(e, 'about')}
              variants={linkVariants}
              whileHover="hover"
              className={location.hash === '#about' ? 'active' : ''}
            >
              About
            </motion.a>
            <motion.a 
              href="/#projects"
              onClick={(e) => handleNavigation(e, 'projects')}
              variants={linkVariants}
              whileHover="hover"
              className={location.hash === '#projects' || isProjectPage ? 'active' : ''}
            >
              Work
            </motion.a>
            <motion.a 
              href="/#services"
              onClick={(e) => handleNavigation(e, 'services')}
              variants={linkVariants}
              whileHover="hover"
              className={location.hash === '#services' ? 'active' : ''}
            >
              Services
            </motion.a>
            <motion.a 
              href="/#contact"
              onClick={(e) => handleNavigation(e, 'contact')}
              variants={linkVariants}
              whileHover="hover"
              className={location.hash === '#contact' ? 'active' : ''}
            >
              Contact
            </motion.a>
          </motion.div>
          
          <motion.div className="social-links" variants={itemVariants}>
    <motion.a 
        href="https://www.linkedin.com/in/krishna-poddar-2461aa231/" 
        className="social-link"
        variants={socialVariants}
        whileHover="hover"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
    >
        <i className="fab fa-linkedin-in"></i>
    </motion.a>
    <motion.a 
        href="https://github.com/krishnapoddar1592" 
        className="social-link"
        variants={socialVariants}
        whileHover="hover"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
    >
        <i className="fab fa-github"></i>
    </motion.a>
    <motion.a 
        href="https://medium.com/@krishnapoddar2071" 
        className="social-link"
        variants={socialVariants}
        whileHover="hover"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
    >
        <i className="fab fa-medium"></i>
    </motion.a>
</motion.div>
        </motion.div>
        
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <motion.p className="copyright" variants={itemVariants}>
            &copy; 2025 Krishna Poddar. All rights reserved.
          </motion.p>
          <motion.p variants={itemVariants}>
            Based in Kathmandu, Working Worldwide
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;