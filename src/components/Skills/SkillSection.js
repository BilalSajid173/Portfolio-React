import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { motion } from "framer-motion";
import images from "./images/index";

const SkillSection = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const animation = () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    };

    animation();
  }, []);

  return (
    <>
      <div className="md:px-10 px-7 py-10 flex items-center justify-center flex-col">
        <h2
          id="ProjectSection"
          className="font-bold text-center text-4xl dark:text-white my-[2rem]"
        >
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
          />
        </h2>
        <div className="flex flex-wrap justify-center items-center w-full md:w-[95%] lg:w-[85%]">
          {images.map((skill, index) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="my-[1rem]"
            >
              <motion.div variants={cardVariants}>
                <div
                  className="flex flex-col md:m-[1rem] md:w-[50px] lg:w-[100px] rounded-sm bg-gray-200 dark:bg-[#111729] hover:shadow-lg dark:text-gray-200 transition-all duration-300 ease-in"
                  key={index}
                >
                  <div className="w-full h-[80px] relative flex justify-center items-center">
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="w-full h-full rounded-sm object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillSection;
