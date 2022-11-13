// import { useEffect, useState } from "react";
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { useSelector } from "react-redux";

const AnimatedCube = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      {/*
              <p>
                I'm a very ambitious front-end developer looking for a role in an
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
              </p>
              <p align="LEFT">
                I'm quiet confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
              <p>
                If I need to define myself in one sentence that would be a family
                person, father of a beautiful daughter, a sports fanatic,
                photography enthusiast, and tech-obsessed!!!
              </p>
            </div> */}

      <div className="stage-cube-cont">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="cubespinner">
          <div className={`face1 ${!isDark ? "darkcubecontainerdiv" : ""}`}>
            <FontAwesomeIcon icon={faNodeJs} color="#609b56" />
          </div>
          <div className={`face2 ${!isDark ? "darkcubecontainerdiv" : ""}`}>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className={`face3 ${!isDark ? "darkcubecontainerdiv" : ""}`}>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className={`face4 ${!isDark ? "darkcubecontainerdiv" : ""}`}>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className={`face5 ${!isDark ? "darkcubecontainerdiv" : ""}`}>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className={`face6 ${!isDark ? "darkcubecontainerdiv" : ""}`}>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCube;
