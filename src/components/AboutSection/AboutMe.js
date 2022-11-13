import AnimatedCube from "./AnimatedCube";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { motion } from "framer-motion";
const AboutMe = () => {
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
      <div className="flex flex-wrap justify-center py-5 md:px-10 px-7">
        <div
          id="AboutSection"
          className="md:w-[45%] lg:w-[35%] dark:text-white w-full mb-6 md:mb-0"
        >
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
          >
            <h1 className="font-bold text-4xl mb-8">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>

            <div className="font-sans pr-4">
              <p className="mb-2">
                I'm a very ambitious software developer with a knack for problem
                solving and efficient tech solutions. Having worked on various
                projects covering a variety of domains, I have developed a
                sincere understanding of a number of tools and technologies
                required to build scalable and performance-driven softwares. I
                love taking on new initiatives that inspire me to push past my
                limits and go further than I have been before.
              </p>
              <p className="mb-2">
                I am looking for a role in an established IT company with the
                opportunity to work with the latest technologies on challenging
                and diverse projects. I would also be interested in any
                freelance work that comes under the umbrella of software
                development.
              </p>
              <p>
                Feel free to contact me on any of my social outlets for a fun
                chat 😀
              </p>
            </div>
          </motion.div>
        </div>
        <div className="relative md:w-[45%] lg:w-[35%] h-[28rem] flex flex-wrap justify-center items-center w-full">
          <AnimatedCube />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
