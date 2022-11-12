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
                I'm a very ambitious front-end developer looking for a role in
                an established IT company with the opportunity to work with the
                latest technologies on challenging and diverse projects.
              </p>
              <p className="mb-2">
                Quis viverra nibh cras pulvinar mattis nunc sed blandit libero.
                Aenean et tortor at risus viverra adipiscing at in. Blandit
                cursus risus at ultrices mi tempus. Sagittis purus sit amet
                volutpat consequat mauris nunc.
              </p>
              <p>
                Blandit cursus risus at ultrices mi tempus. Sagittis purus sit
                amet volutpat consequat mauris nunc.
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
