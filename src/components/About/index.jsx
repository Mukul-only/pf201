import { motion } from 'motion/react'
import './About.css'
import Magnetic from '../Magnetic'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="about-section" id="about">
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="about-left">
          <motion.div className="about-label" variants={itemVariants}>About</motion.div>
          <motion.h2 className="about-heading" variants={itemVariants}>
            I turn ideas<br/>into<br/>experiences.
          </motion.h2>
        </div>
        <div className="about-right">
          <motion.p className="about-description" variants={itemVariants}>
            I'm a product designer specializing in transforming paper sketches into digital products that scale. I work closely with founders across B2C consumer apps and B2B SaaS — from concept to launch.
          </motion.p>
          
          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-value">15+</div>
              <div className="stat-label">Happy clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4+</div>
              <div className="stat-label">Years exp.</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">8+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5★</div>
              <div className="stat-label">Rating</div>
            </div>
          </motion.div>

          <motion.div className="about-actions" variants={itemVariants}>
            <Magnetic>
              <a href="mailto:hello@example.com" className="action-btn primary">
                <span>Email me</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="action-btn secondary">
                <span>LinkedIn</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
