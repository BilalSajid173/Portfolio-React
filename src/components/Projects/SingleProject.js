import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SingleProjectModal from "./SingleProjectModal";
const SingleProject = (props) => {
  const [showProject, setShowProject] = useState(false);
  console.log(props);
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 300,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };
  const showProjectHandler = () => {
    setShowProject((prev) => {
      return !prev;
    });
  };
  return (
    <>
      {showProject && (
        <SingleProjectModal
          onClick={showProjectHandler}
          img={props.img}
          codeLink={props.codeLink}
          projectLink={props.projectLink}
          details={props.details}
        />
      )}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="my-[1rem]"
      >
        <motion.div variants={cardVariants}>
          <div
            onClick={showProjectHandler}
            className="flex flex-col md:m-[1rem] md:w-[290px] lg:w-[350px] p-[1rem] rounded-sm cursor-pointer bg-purple-300 dark:bg-[#372656] hover:shadow-lg dark:text-gray-200 transition-all duration-300 ease-in"
          >
            <div className="w-full h-[230px] relative flex justify-center items-center">
              <img
                src={props.img}
                alt={props.title}
                className="w-full h-full rounded-sm object-cover"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center">
              {props.techStack.map((tech) => {
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
              <h2 className=" font-bold text-lg">{props.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {props.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SingleProject;
