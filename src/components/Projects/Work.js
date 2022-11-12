import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import "./Work.scss";
import Projects from "./Projects";

const Work = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <h2 className="font-bold text-center text-4xl dark:text-white my-[2rem]">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {Projects.map((work, index) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={cardVariants}>
              <div
                className="flex flex-col w-[330px] m-[2rem] p-[1rem] rounded-sm bg-gray-200 dark:bg-[#372656] hover:shadow-lg dark:text-gray-200 transition-all duration-300 ease-in"
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
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
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

                <div className="flex justify-center items-center flex-col w-full relative p-[0.5rem]">
                  <h2 className="mt-[1rem] font-bold text-lg">{work.title}</h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                    {work.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Work;
