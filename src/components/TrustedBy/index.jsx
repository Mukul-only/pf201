import { motion } from "motion/react";
import "./TrustedBy.css";
import Magnetic from "../Magnetic";

function TrustedBy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const companies = [
    "Maker Sharks",
    "M5C Logistics",
    "Right Choice AI",
    "KOSMC",
    "Dacoid Digital",
    "SETC",
    "Tirth",
    "Ausoma",
  ];

  return (
    <section className="trusted-section" id="trusted">
      <motion.div
        className="trusted-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="trusted-label" variants={itemVariants}>
          {" "}
          TRUSTED BY
        </motion.div>
        <motion.h2 className="trusted-heading" variants={itemVariants}>
          Companies I've worked with
        </motion.h2>

        <div className="trusted-chips">
          {companies.map((company, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Magnetic>
                <div className="trusted-chip">{company}</div>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TrustedBy;
