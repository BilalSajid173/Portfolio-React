import React, { Fragment } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import { motion } from "framer-motion";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const SingleProjectModal = (props) => {
  const SingleProjectModalContent = (
    <Fragment>
      {
        <div className="p-2 dark:text-white flex flex-wrap justify-center h-full">
          <div className="p-2 w-[40%]">
            <img
              src={props.img}
              alt="project_img"
              className="mb-4 w-full h-[60%] object-contain"
            />
            <div className="mt-2 flex flex-wrap justify-center">
              <a href={props.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="flex justify-center items-center"
                >
                  <LinkIcon />
                </motion.div>
              </a>
              <a href={props.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="flex justify-center items-center"
                >
                  <GitHubIcon />
                </motion.div>
              </a>
            </div>
          </div>
          <div className="p-2 w-[60%]">
            <h1 className="font-bold text-2xl mb-2">Description</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      }
    </Fragment>
  );

  return (
    <ProjectModal onClose={props.onClick}>
      {SingleProjectModalContent}
    </ProjectModal>
  );
};

export default SingleProjectModal;
