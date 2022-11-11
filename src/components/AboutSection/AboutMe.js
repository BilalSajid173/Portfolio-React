import AnimatedCube from "./AnimatedCube";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
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
      <div className="flex flex-wrap justify-center py-10">
        <div className="md:w-[45%] lg:w-[35%] dark:text-white w-[90%] mb-6 md:mb-0">
          <h1 className="font-bold text-4xl mb-8">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <div className="font-sans pr-4">
            <p className="mb-2">
              I'm a very ambitious front-end developer looking for a role in an
              established IT company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p className="mb-2">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a family
              person, father of a beautiful daughter, a sports fanatic,
              photography enthusiast, and tech-obsessed!!!
            </p>
          </div>
        </div>
        <div className="relative md:w-[45%] lg:w-[35%] h-[28rem] flex flex-wrap justify-center items-center w-[90%]">
          <AnimatedCube />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
