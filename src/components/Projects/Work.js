import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./Work.scss";
import Projects from "./Projects";
import SingleProject from "./SingleProject";

const Work = () => {
  const [showArrow, setShowArrow] = useState(false);
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
            <SingleProject
              key={work.id}
              img={work.img}
              title={work.title}
              techStack={work.techStack}
              description={work.description}
              codeLink={work.codeLink}
              projectLink={work.projectLink}
            />
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
            className=" hover:text-white p-2 px-4 border-2 rounded-md border-blue-600 dark:text-gray-200 mt-4 hover:bg-blue-600"
          >
            More Projects {showArrow && "->"}
          </button>
        </a>
      </div>
    </>
  );
};

export default Work;
