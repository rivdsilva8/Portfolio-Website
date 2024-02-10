import React from "react";
import { Tilt } from "react-tilt";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      {/* Frontend softwares*/}
      <motion.div variants={textVariant()}>
        <div className="mt-4"></div>
        <h2 className={styles.sectionSubText}>Frontend </h2>
        <div className="mb-4"></div>
      </motion.div>

      <div className="flex flex-row flex-wrap gap-10">
        {technologies.frontend.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center"
            key={technology.name}
          >
            <Tilt className="xs:w-[70px] w-[50px]">
              <motion.div
                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                className="w-full p-[1px] rounded-[20px] shadow-card"
              >
                <img src={technology.icon} alt="" />
              </motion.div>
            </Tilt>
            <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
              <h6 className="flex items-center">{technology.name}</h6>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Backend softwares*/}
      <motion.div variants={textVariant()}>
        <div className="mt-4"></div>
        <h2 className={styles.sectionSubText}>Backend </h2>
        <div className="mb-4"></div>
      </motion.div>

      <div className="flex flex-row flex-wrap gap-10">
        {technologies.backend.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center"
            key={technology.name}
          >
            <Tilt className="xs:w-[70px] w-[50px]">
              <motion.div
                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                className="w-full  p-[1px] rounded-[20px] shadow-card"
              >
                <img src={technology.icon} alt="" />
              </motion.div>
            </Tilt>
            <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
              <h6 className="flex items-center">{technology.name}</h6>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Prog lang softwares*/}
      <motion.div variants={textVariant()}>
        <div className="mt-4"></div>
        <h2 className={styles.sectionSubText}>Programming Languages</h2>
        <div className="mb-4"></div>
      </motion.div>

      <div className="flex flex-row flex-wrap gap-10">
        {technologies.languages.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center"
            key={technology.name}
          >
            <Tilt className="xs:w-[70px] w-[50px]">
              <motion.div
                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                className="w-full  p-[1px] rounded-[20px] shadow-card"
              >
                <img src={technology.icon} alt="" />
              </motion.div>
            </Tilt>
            <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
              <h6 className="flex items-center">{technology.name}</h6>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Design softwares*/}
      <motion.div variants={textVariant()}>
        <div className="mt-4"></div>
        <h2 className={styles.sectionSubText}>Design Softwares</h2>
        <div className="mb-4"></div>
      </motion.div>

      <div className="flex flex-row flex-wrap gap-10">
        {technologies.design.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center"
            key={technology.name}
          >
            <Tilt className="xs:w-[70px] w-[50px]">
              <motion.div
                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                className="w-full  p-[1px] rounded-[20px] shadow-card"
              >
                <img src={technology.icon} alt="" />
              </motion.div>
            </Tilt>
            <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
              <h6 className="flex items-center">{technology.name}</h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

// {/* Programming Languages */}
// <motion.div variants={textVariant()}>
//   <div className="mt-4"></div>
//   <h2 className={styles.sectionSubText}>Programming Languages</h2>
//   <div className="mb-4"></div>
// </motion.div>

// <div className="flex flex-row flex-wrap gap-10">
//   {technologies.languages.map((technology) => (
//     <div
//       className="w-28 h-28 flex flex-col items-center"
//       key={technology.name}
//     >
//       <BallCanvas icon={technology.icon} />
//       <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
//         <h6 className="flex items-center">{technology.name}</h6>
//       </motion.div>
//     </div>
//   ))}
// </div>
