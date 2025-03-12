



// pages/ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.css'; // Import specific styles for this page
import fluentifyBackground from './images/fluentify.png';
import fluentifyHome from './images/Home.jpeg';
import fluentifyLesson from './images/lessonStart.jpg';
import fluentifyQuiz from './images/quiz2.jpeg';
import fluentifyQuiz1 from './images/quiz1.jpeg';
import fluentifyResult from './images/results.jpeg';
import fluentifyProfile from './images/profile.jpeg';
import supportBackground from './images/support.png';
import support1 from './images/support-1.jpg';
import support2 from './images/support-2.jpg';
import stepCountBackground from './images/mistepcount.png';
import notificationBackground from './images/notification.png';
import notificationImage from './images/notificationImage.png';





// Complete project data for all projects
const projectsData = {
  fluentify: {
    title: "FLUENTIFY APP",
    subtitle: "A language-learning application that provides users with interactive courses for skill development.",
    backgroundImage: fluentifyBackground,
    tags: ["Jetpack Compose", "MVVM", "Kotlin", "Spring Boot", "PostgreSQL"],
    overview: [
      "The Fluentify App is a comprehensive language-learning platform designed to make language acquisition intuitive and engaging. It integrates a robust backend and modern Android development techniques, ensuring a seamless and scalable experience for users at all proficiency levels.",
      "The app features interactive courses, real-time feedback, and personalized learning paths that adapt to each user's progress and learning style. With an emphasis on practical conversation skills, Fluentify stands out in the crowded language-learning market.",
      "What sets Fluentify apart is its unique approach to language acquisition, focusing on natural learning patterns and real-world application. The app employs spaced repetition algorithms to optimize retention and uses gamification elements to keep users motivated throughout their learning journey.",
      "As the lead developer, I was responsible for both the frontend Android application and the backend API services, ensuring smooth integration and optimal performance across the entire stack."
    ],
    features: [
      {
        icon: "paint-brush",
        title: "UI Design with Jetpack Compose",
        description: "Crafted a responsive, minimalist interface for smooth navigation and optimal usability across different device sizes."
      },
      {
        icon: "code-branch",
        title: "MVVM Architecture",
        description: "Implemented a clean separation of concerns for improved maintainability, testability, and scalability as the application grows."
      },
      {
        icon: "mobile-alt",
        title: "Kotlin-Based Android Development",
        description: "Utilized modern libraries like Retrofit for API calls, WorkManager for background tasks, and Dagger-Hilt for dependency injection."
      },
      {
        icon: "server",
        title: "Backend API Development",
        description: "Built using Spring Boot, with data stored in a PostgreSQL database for efficient course management and user progress tracking."
      }
    ],
    techFrontend: ["Kotlin", "Jetpack Compose", "MVVM Architecture", "Dagger-Hilt", "Retrofit", "Room Database", "WorkManager", "LiveData & Flow"],
    techBackend: ["Spring Boot", "PostgreSQL", "JPA/Hibernate", "Spring Security", "JWT Authentication", "REST API", "AWS Infrastructure", "CI/CD Pipeline"],
    showcaseImages: [ fluentifyProfile, fluentifyHome,fluentifyLesson,fluentifyQuiz1, fluentifyQuiz,fluentifyResult],
    results: [
      {
        number: "Seamless Experience",
        text: "App UI is seamless and immersive for a great learning experience."
      },
      {
        number: "35%",
        text: "Increase in language acquisition speed compared to traditional learning methods, based on user feedback."
      }
    ]
  },
  supportsync: {
    title: "SUPPORTSYNC SDK",
    subtitle: "A feature-rich library that enables developers to integrate real-time customer support chat into Android applications.",
    backgroundImage: supportBackground,
    tags: ["Jetpack Compose", "WebSocket", "MVVM", "Hilt"],
    overview: [
      "The SupportSync SDK was developed to help developers easily integrate comprehensive customer support functionality into their Android applications, without requiring extensive expertise in real-time communication systems.",
      "This SDK provides a complete chat interface, notification handling, message synchronization, and customizable UI components that can be tailored to match the host application's design language.",
      "Built with modern Android development practices, the SDK minimizes its footprint on the host application while providing a feature-rich experience that can compete with dedicated support applications.",
      "As the lead developer, I designed both the public API for developers and the internal architecture to ensure ease of use, reliability, and compatibility across different Android versions."
    ],
    features: [
      {
        icon: "sync",
        title: "Real-time Messaging",
        description: "Implemented WebSocket connections with fallback mechanisms to ensure messages are delivered reliably even in challenging network conditions."
      },
      {
        icon: "palette",
        title: "Customizable UI Components",
        description: "Created a comprehensive set of Jetpack Compose UI components that can be customized to match the host application's design language."
      },
      {
        icon: "database",
        title: "Offline Support",
        description: "Developed a local caching system using Room Database to ensure chat history is preserved and available offline."
      },
      {
        icon: "shield-alt",
        title: "Secure Communication",
        description: "Implemented end-to-end encryption for messages and secure authentication mechanisms to protect user privacy."
      }
    ],
    techFrontend: ["Jetpack Compose", "Kotlin", "Coroutines", "Flow", "MVVM", "Hilt", "Room", "WebSocket"],
    techBackend: ["Spring boot", "PostgreSQL", "WebSocket", "JWT", "Docker", "Cloud Functions"],
    showcaseImages: [support1,support2],
    results: [
      {
        number: "Faster Response time",
        text: "For applications using the SDK."
      },
      {
        number: "Seamless Integration",
        text: "With minimal developer effort for error handling."
      }
    ]
  },
  mistepcount: {
    title: "MISTEPCOUNT",
    subtitle: "An app designed to provide accurate step tracking through advanced algorithms and machine learning.",
    backgroundImage: '',
    tags: ["C++", "TensorFlow Lite", "Signal Processing"],
    overview: [
      "MiStepCount was developed to address the inaccuracies in standard step counting algorithms found in most fitness applications. By combining signal processing techniques with machine learning, I created a solution that reduces false positives by up to 40%.",
      "The core of the application is built in C++ to optimize performance and battery usage, with a thin Kotlin wrapper for the Android UI. The algorithm processes accelerometer and gyroscope data in real-time, applying filters and pattern recognition to distinguish actual steps from other movements.",
      "A key innovation was the development of a custom TensorFlow Lite model that was trained on a diverse dataset of walking patterns, including various carrying positions, walking speeds, and user characteristics.",
      "The app includes comprehensive analytics that help users understand their activity patterns over time, with visualizations that make the data accessible and meaningful."
    ],
    features: [
      {
        icon: "microchip",
        title: "Advanced Signal Processing",
        description: "Applied digital signal processing techniques including Low-pass filters and frequency domain analysis to clean sensor data."
      },
      {
        icon: "brain",
        title: "Machine Learning Integration",
        description: "Developed and optimized a TensorFlow Lite model that can recognize various walking patterns with high accuracy."
      },
      {
        icon: "battery-full",
        title: "Battery Optimization",
        description: "Engineered the C++ core to use minimal resources, resulting in less than 3% additional battery usage over 24 hours."
      },
      {
        icon: "chart-line",
        title: "Comprehensive Analytics",
        description: "Created statistics that provide users with meaningful insights about their activity patterns."
      }
    ],
    techFrontend: ["Java", "XML", "MVVM", "Room", "Foreground Service"],
    techBackend: ["C++", "NDK", "TensorFlow Lite", "Signal Processing Libraries", "SQLite"],
    showcaseImages: [],
    results: [
      {
        number: "40%",
        text: "Reduction in false positive step counts compared to standard algorithms."
      },
      {
        number: "3%",
        text: "Additional battery usage over 24 hours of continuous tracking."
      }
    ]
  },
  notification: {
    title: "NOTIFICATION SYSTEM",
    subtitle: "An advanced notification system for Android applications with features like recurring alerts, localization, and deep linking.",
    backgroundImage:notificationBackground,
    tags: ["WorkManager", "Kotlin", "MVVM"],
    overview: [
      "This notification system was developed as a modular, reusable component that can be integrated into any Android application. It provides a comprehensive solution for managing all aspects of notifications, from scheduling to user interaction tracking.",
      "The system supports various notification types, including standard alerts, expandable notifications, custom layouts, and rich media content. It also includes features like categorization, priority management, and user preference controls.",
      "A key focus was ensuring reliability across different Android versions and device manufacturers, dealing with the various restrictions and optimizations that can affect notification delivery.",
      "The component follows a clean architecture approach, with clear separation between the core notification logic, delivery mechanisms, and UI components. This makes it easy to maintain and extend as Android's notification capabilities evolve."
    ],
    features: [
      {
        icon: "clock",
        title: "Intelligent Scheduling",
        description: "Created a system that uses WorkManager to schedule notifications with consideration for battery optimization restrictions."
      },
      {
        icon: "language",
        title: "Localization Support",
        description: "Built in support for displaying notifications in the user's preferred language, with fallbacks to device settings."
      },
      {
        icon: "link",
        title: "Deep Linking Framework",
        description: "Implemented a flexible deep linking system that can direct users to specific content when they interact with notifications."
      },
      {
        icon: "user-check",
        title: "User Preference Learning",
        description: "Developed an algorithm that learns from user interactions to optimize notification timing and content."
      }
    ],
    techFrontend: ["Kotlin", "MVVM", "WorkManager", "NotificationCompat", "Room", "SharedPreferences"],
    techBackend: ["Localization of messages", "Telemetry"],
    showcaseImages: [notificationImage],
    results: [
      {
        number: "20%",
        text: "Increase in notification engagement rates after implementation."
      },
      {
        number: "25%",
        text: "Improvement in dormant user retention for applications using the system."
      },
      {
        number: "High success rate",
        text: "The notifications would be pushed in almost all scenarios with close to none missed."
      }
    ]
  }
};

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold: threshold
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

const ProjectDetail = () => {
  
  const { projectId } = useParams();
  const project = projectsData[projectId];
  const navigate = useNavigate();
  const [readyForAnimation, setReadyForAnimation] = useState(false);
  
  // Animation control for each section
  const overviewAnimation = useScrollAnimation(0.1);
  const featuresAnimation = useScrollAnimation(0.1);
  const techStackAnimation = useScrollAnimation(0.1);
  const showcaseAnimation = useScrollAnimation(0.1);
  const resultsAnimation = useScrollAnimation(0.1);
  const ctaAnimation = useScrollAnimation(0.1);
  const handleContactNavigation = (e) => {
    e.preventDefault();
    // Navigate to home page first
    navigate('/');
    
    // Wait for navigation to complete, then scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setReadyForAnimation(true);
    }, 150); // Small delay to ensure scroll has happened
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!project) {
    return (
      <div className="container" style={{ marginTop: '200px', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <Link to="/#projects" className="btn">Back to Projects</Link>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="project-detail-page">
      {/* Hero Section with Background Image */}
      <motion.div 
        className="project-hero" 
        style={{ backgroundImage: `url(${project.backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={readyForAnimation ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={readyForAnimation?{ x: 0, opacity: 1 }:{ x: 0, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link to="/#projects" className="back-button">
              <i className="fas fa-arrow-left"></i> Back to Projects
            </Link>
          </motion.div>
          
          <motion.h1 
            className="project-title"
            initial={{ y: 30, opacity: 0 }}
            animate={readyForAnimation ? { y: 0, opacity: 1 }:{ y:0,opacity: 0 } }
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            className="project-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={readyForAnimation?{ y: 0, opacity: 1 }:{ y: 0, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {project.subtitle}
          </motion.p>
          
          <motion.div 
            className="project-tags"
            initial={{ y: 30, opacity: 0 }}
            animate={readyForAnimation?{ y: 0, opacity: 1 }:{ y: 0, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {project.tags && project.tags.map((tag, index) => (
              <motion.span 
                key={index} 
                className="project-tag"
                initial={{ opacity: 0 }}
                animate={readyForAnimation?{ opacity: 1 }:{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="container">
        {/* Section: Overview */}
        <motion.div 
          className="project-section"
          ref={overviewAnimation.ref}
          variants={containerVariants}
          initial="hidden"
          animate={overviewAnimation.isVisible ? "visible" : "hidden"}
        >
          <motion.div className="section-indicator" variants={itemVariants}>
            <span className="dot"></span>
            <span className="section-label">OVERVIEW</span>
          </motion.div>
          
          <motion.h2 className="section-title" variants={itemVariants}>
            ABOUT THE PROJECT
          </motion.h2>
          
          <motion.div className="about-grid" variants={containerVariants}>
            <div className="about-column">
              <motion.p className="about-text" variants={itemVariants}>{project.overview[0]}</motion.p>
              <motion.p className="about-text" variants={itemVariants}>{project.overview[1]}</motion.p>
            </div>
            <div className="about-column">
              <motion.p className="about-text" variants={itemVariants}>{project.overview[2]}</motion.p>
              <motion.p className="about-text" variants={itemVariants}>{project.overview[3]}</motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Section: Development */}
        <motion.div 
          className="project-section"
          ref={featuresAnimation.ref}
          variants={containerVariants}
          initial="hidden"
          animate={readyForAnimation && featuresAnimation.isVisible ? "visible" : "hidden"}
        >
          <motion.div className="section-indicator" variants={itemVariants}>
            <span className="dot"></span>
            <span className="section-label">DEVELOPMENT</span>
          </motion.div>
          
          <motion.h2 className="section-title" variants={itemVariants}>
            KEY FEATURES
          </motion.h2>
          
          <motion.div className="features-grid" variants={containerVariants}>
            {project.features && project.features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-item"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="feature-icon">
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Section: Technology */}
        <motion.div 
          className="project-section"
          ref={techStackAnimation.ref}
          variants={containerVariants}
          initial="hidden"
          animate={readyForAnimation && techStackAnimation.isVisible ? "visible" : "hidden"}
        >
          <motion.div className="section-indicator" variants={itemVariants}>
            <span className="dot"></span>
            <span className="section-label">TECHNOLOGY</span>
          </motion.div>
          
          <motion.h2 className="section-title" variants={itemVariants}>
            TECH STACK
          </motion.h2>
          
          <motion.div className="tech-grid" variants={containerVariants}>
            <motion.div className="tech-column" variants={itemVariants}>
              <h3 className="tech-heading">Frontend Technologies</h3>
              <p className="tech-description">
                The app was built using modern Android development practices and libraries to ensure optimal performance and maintainability:
              </p>
              <div className="tech-list">
                {project.techFrontend && project.techFrontend.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="tech-item"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="tech-column" variants={itemVariants}>
              <h3 className="tech-heading">Backend Technologies</h3>
              <p className="tech-description">
                The backend was designed to be scalable, secure, and efficient, leveraging these technologies:
              </p>
              <div className="tech-list">
                {project.techBackend && project.techBackend.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="tech-item"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section: App Showcase */}
        <motion.div 
          className="project-section"
          ref={showcaseAnimation.ref}
          variants={containerVariants}
          initial="hidden"
          animate={readyForAnimation && showcaseAnimation.isVisible ? "visible" : "hidden"}
        >
          <motion.div className="section-indicator" variants={itemVariants}>
            <span className="dot"></span>
            <span className="section-label">VISUAL</span>
          </motion.div>
          
          <motion.h2 className="section-title" variants={itemVariants}>
            APP SHOWCASE
          </motion.h2>
          
          <motion.div className="showcase-grid" variants={containerVariants}>
            {project.showcaseImages && project.showcaseImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="showcase-item"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={image} 
                  alt={`${project.title} Screenshot ${index + 1}`} 
                  className="showcase-image"
                  whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Results Section (if available) */}
        {project.results && (
          <motion.div 
            className="project-section"
            ref={resultsAnimation.ref}
            variants={containerVariants}
            initial="hidden"
            animate={readyForAnimation && resultsAnimation.isVisible ? "visible" : "hidden"}
          >
            <motion.div className="section-indicator" variants={itemVariants}>
              <span className="dot"></span>
              <span className="section-label">OUTCOMES</span>
            </motion.div>
            
            <motion.h2 className="section-title" variants={itemVariants}>
              RESULTS & IMPACT
            </motion.h2>
            
            <motion.div className="results-grid" variants={containerVariants}>
              {project.results.map((result, index) => (
                <motion.div 
                  key={index} 
                  className="result-item"
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="result-number">{result.number}</div>
                  <p className="result-text">{result.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
        

        {/* Call To Action Section */}
        <motion.div 
        
          className="project-cta"
          ref={ctaAnimation.ref}
          variants={containerVariants}
          initial="hidden"
          animate={readyForAnimation && ctaAnimation.isVisible ? "visible" : "hidden"}
        >
          <motion.h3 className="cta-title" variants={itemVariants}>
            HAVE A PROJECT IN MIND?
          </motion.h3>
          <motion.h2 className="cta-heading" variants={itemVariants}>
            LET'S WORK TOGETHER
          </motion.h2>
          <motion.button 
            onClick={handleContactNavigation}
            className="btn btn-filled"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ y: 0 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};


export default ProjectDetail;