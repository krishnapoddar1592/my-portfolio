// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isProjectPage = location.pathname.includes('/project/');

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navigation for nav links
  const handleNavigation = (e, path) => {
    e.preventDefault();
    closeMenu();
    
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

  // Track scroll position for header transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerVariants = {
    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const navLinkVariants = {
    hover: {
      color: 'var(--headline)',
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className={`header ${scrollPosition > 50 ? 'scrolled' : ''} ${isProjectPage ? 'project-header' : ''}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <nav>
        <Link to="/" className="logo">KRISHNA PODDAR</Link>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <motion.a 
            href="/"
            onClick={(e) => handleNavigation(e, 'home')}
            variants={navLinkVariants}
            whileHover="hover"
            className={location.pathname === '/' && !location.hash ? 'active' : ''}
          >
            HOME
          </motion.a>
          <motion.a 
            href="/#about"
            onClick={(e) => handleNavigation(e, 'about')}
            variants={navLinkVariants}
            whileHover="hover"
            className={location.hash === '#about' ? 'active' : ''}
          >
            ABOUT
          </motion.a>
          <motion.a 
            href="/#projects"
            onClick={(e) => handleNavigation(e, 'projects')}
            variants={navLinkVariants}
            whileHover="hover"
            className={location.hash === '#projects' || isProjectPage ? 'active' : ''}
          >
            WORK
          </motion.a>
          <motion.a 
            href="/#services"
            onClick={(e) => handleNavigation(e, 'services')}
            variants={navLinkVariants}
            whileHover="hover"
            className={location.hash === '#services' ? 'active' : ''}
          >
            SERVICES
          </motion.a>
          <motion.a 
            href="/#contact"
            onClick={(e) => handleNavigation(e, 'contact')}
            variants={navLinkVariants}
            whileHover="hover"
            className={location.hash === '#contact' ? 'active' : ''}
          >
            CONTACT
          </motion.a>
        </div>
        <div className="nav-buttons">
          <motion.button 
            className="theme-toggle" 
            aria-label="Toggle theme" 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
          </motion.button>
          <motion.button 
            className="mobile-menu-btn" 
            aria-label="Toggle menu" 
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;