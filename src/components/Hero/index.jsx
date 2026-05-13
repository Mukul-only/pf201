import { motion } from "motion/react";
import "./Hero.css";
import Magnetic from "../Magnetic";
import profileImg from "../../assets/download.png";

function Hero() {
  return (
    <section className="hero" id="work">
      <div className="hero-container">
        <motion.div
          className="capsule-wrapper"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <Magnetic>
            <div className="capsule">
              <img
                src={profileImg}
                alt="Shivam Tiwari"
                className="capsule-img"
              />
              <div className="capsule-text">
                <span className="capsule-name-first">SHIVAM</span>
                <span className="capsule-name-last">tiwari</span>
              </div>
            </div>
          </Magnetic>
        </motion.div>

        <h1 className="hero-title">
          <motion.span
            className="title-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Designing the
          </motion.span>
          <br />
          <motion.span
            className="title-name"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            products
          </motion.span>
          <br />
          <motion.span
            className="title-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            that feel effortless.
          </motion.span>
        </h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Turning complexity into clarity — <br />
          one pixel at a time.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <Magnetic>
            <a href="#work" className="explore-btn">
              <span>Explore Works</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#about" className="learn-btn">
              <span>Learn More</span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
