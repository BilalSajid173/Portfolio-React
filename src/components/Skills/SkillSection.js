import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { motion } from "framer-motion";
import images from "./images/index";

const SkillSection = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
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
      <div className="md:px-10 px-7 py-10 flex flex-wrap justify-center">
        <div className="md:w-[40%] lg:w-[35%] dark:text-white w-full mb-6 md:mb-0 lg:mr-4">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
          >
            <h2
              id="SkillsSection"
              className="font-bold text-4xl dark:text-white mb-[2rem] mt-[0.5rem]"
            >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["M", "y", " ", "S", "k", "i", "l", "l", "s"]}
                idx={15}
              />
            </h2>
            <div className="font-sans">
              <p className="mb-4">
                I have worked with a lot of different libraries and frameworks,
                both for backend and frontend. My primary expertise is in the
                Javascript/Typescript environment. For Backend, I am well-versed
                with Nodejs, Nextjs, Firebase and DRF. Frontend libraries
                include Reactjs, SolidJs, React-Native etc. Material UI,
                Tailwind CSS, Bootstrap are some of the UI libraries I am
                familiar with.
              </p>
              <p className="mb-4"></p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center items-center w-full md:w-[50%] lg:w-[40%]">
          {images.map((skill, index) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="my-[0.3rem]"
            >
              <motion.div variants={cardVariants}>
                <div
                  className="flex m-[0.6rem] w-[50px] sm:w-[80px] rounded-sm bg-gray-200 dark:bg-[#111729] dark:text-gray-200"
                  key={index}
                >
                  <div className="w-full h-full relative flex flex-wrap justify-center items-center">
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
