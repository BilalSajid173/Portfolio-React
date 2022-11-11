import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
// import LogoTitle from "../../assets/images/logo-s.png";
import "./index.scss";
import lottie from "lottie-web";
import TypedText from "./TypedText";
import WavePattern from "./Waves";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Animations/animation.json"),
    });

    return () => instance.destroy();
  }, []);

  const nameArray = [" ", "B", "i", "l", "a", "l", ","];
  const jobArray = [
    "a",
    " ",
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

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
      <div className="flex flex-wrap justify-center items-center pt-10 md:pt-0 py-5 md:px-10 px-7 dark:bg-[#0a0c49]">
        <div className="home-page flex flex-wrap xl:w-[35%] lg:w-[45%] sm:w-[55%] mt-[2rem] sm:mt-0 w-full">
          <div className="text-zone flex flex-wrap flex-col relative">
            <h1 className="md:text-[56px] text-[40px]">
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <TypedText />
            {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
          </div>
        </div>
        <div
          ref={container}
          className="mb-5 md:mb-0 mt-[2rem] container flex flex-wrap justify-center sm:my-2 w-full sm:w-[45%] xl:w-[50%] h-[20rem] md:h-[25rem] xl:h-[30rem]"
        ></div>
      </div>
      <WavePattern />
    </>
  );
};

export default Home;
