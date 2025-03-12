// components/Projects.js
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

// Project data
const projectsData = [
  {
    id: 'fluentify',
    title: 'Fluentify App',
    description: 'A language-learning application with interactive courses for skill development, integrating a robust backend and modern Android development techniques.',
    image: './images/fluentify.png',
    tags: ['Jetpack Compose', 'MVVM', 'Kotlin', 'Spring Boot'],
    link: '/project/fluentify'  // Changed to use React Router path
  },
  {
    id: 'supportsync',
    title: 'SupportSync SDK',
    description: 'A feature-rich library that enables developers to integrate real-time customer support chat into Android applications.',
    image: './images/support.png',
    tags: ['Jetpack Compose', 'WebSocket', 'MVVM', 'Hilt'],
    link: '/project/supportsync'  // Changed to use React Router path
  },
  {
    id: 'mistepcount',
    title: 'MiStepCount',
    description: 'An app designed to provide accurate step tracking through advanced algorithms and machine learning, reducing false positives by 40%.',
    image: './images/mistepcount.png',
    tags: ['C++', 'TensorFlow Lite', 'Signal Processing'],
    link: '/project/mistepcount'  // Changed to use React Router path
  },
  {
    id: 'notification',
    title: 'Notification System',
    description: 'An advanced notification system for Android applications with features like recurring alerts, localization support, and deep linking functionality.',
    image: './images/notification.png',
    tags: ['WorkManager', 'Kotlin', 'MVVM'],
    link: '/project/notification'  // Changed to use React Router path
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const navigate = useNavigate(); // Add this hook
  
  // Add a navigation handler
  const handleNavigation = (e, path) => {
    e.preventDefault();
    // Navigate programmatically with replace to avoid adding to history stack
    navigate(path);
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

  const cardVariants = {
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
      y: -10,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
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
    <section id="projects" className="projects">
      <div className="projects-wrapper">
        <div className="container">
          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="section-subtitle" variants={itemVariants}>
              Selected work
            </motion.div>
            <motion.h2 className="section-title" variants={itemVariants}>
              MY PROJECTS
            </motion.h2>
            
            <div className="projects-grid">
              {projectsData.map((project) => (
                <motion.div 
                  key={project.id}
                  className="project-card"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                    variants={imageVariants}
                  />
                  <div className="project-content">
                    <h3 className="project-title-home">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <motion.button
                      onClick={(e) => handleNavigation(e, project.link)}
                      className="btn" 
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;