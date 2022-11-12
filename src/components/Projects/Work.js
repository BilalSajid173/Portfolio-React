import React, { useState, useEffect } from "react";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimatedLetters from "../AnimatedLetters";
import { motion } from "framer-motion";
import "./Work.scss";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  const [showArrow, setShowArrow] = useState(false);
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

  const hoverHandler = () => {
    setShowArrow(true);
  };

  const leaveHandler = () => {
    setShowArrow(false);
  };
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
          {Projects.map((work, index) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="my-[1rem]"
            >
              <motion.div variants={cardVariants}>
                <div
                  className="flex flex-col md:m-[1rem] md:w-[290px] lg:w-[350px] p-[1rem] rounded-sm bg-gray-200 dark:bg-[#372656] hover:shadow-lg dark:text-gray-200 transition-all duration-300 ease-in"
                  key={index}
                >
                  <div className="w-full h-[230px] relative flex justify-center items-center">
                    <img
                      src={work.img}
                      alt={work.title}
                      className="w-full h-full rounded-sm object-cover"
                    />

                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        staggerChildren: 0.5,
                      }}
                      className="app__work-hover flex justify-center items-center"
                    >
                      <a
                        href={work.projectLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className="flex justify-center items-center"
                        >
                          <LinkIcon />
                        </motion.div>
                      </a>
                      <a href={work.codeLink} target="_blank" rel="noreferrer">
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className="flex justify-center items-center"
                        >
                          <GitHubIcon />
                        </motion.div>
                      </a>
                    </motion.div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center">
                    {work.techStack.map((tech) => {
                      return (
                        <FontAwesomeIcon
                          icon={tech.icon}
                          color={tech.color}
                          className="text-4xl mx-2"
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-center flex-col w-full relative p-[0.5rem]">
                    <h2 className=" font-bold text-lg">{work.title}</h2>
                    <p className="p-text" style={{ marginTop: 10 }}>
                      {work.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <a
          href="https://github.com/BilalSajid173"
          target="_blank"
          rel="noreferrer"
        >
          <button
            onMouseOver={hoverHandler}
            onMouseLeave={leaveHandler}
            className="transition-all duration-300 ease-in p-2 px-4 border-2 rounded-md border-blue-700 dark:text-gray-200 mt-4 hover:bg-blue-700"
          >
            More Projects {showArrow && "->"}
          </button>
        </a>
      </div>
    </>
  );
};

export default Work;
