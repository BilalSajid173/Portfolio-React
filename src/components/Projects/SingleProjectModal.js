import React, { Fragment } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const SingleProjectModal = (props) => {
  const SingleProjectModalContent = (
    <Fragment>
      {
        <div className="p-2 py-4 mb-4 relative overflow-auto scrollbar dark:text-white flex flex-wrap justify-center h-full">
          <div className="p-2 w-[40%] sticky">
            <img
              src={props.img}
              alt="project_img"
              className="mb-4 w-full h-[40%] object-cover"
            />
            <div className="mt-2 flex flex-wrap justify-center">
              <a
                href={props.projectLink}
                target="_blank"
                rel="noreferrer"
                className="mx-2 transition-all duration-300 bg-[#abaeed] dark:bg-[#22268f] hover:scale-125 p-2 rounded-full"
              >
                <LinkIcon fontSize="large" />
              </a>
              <a
                href={props.codeLink}
                target="_blank"
                rel="noreferrer"
                className="mx-2 transition-all duration-300 bg-[#abaeed] dark:bg-[#22268f] hover:scale-125 p-2 rounded-full"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </div>
          </div>
          <div
            style={{ fontFamily: "'Poppins', 'sans-serif'" }}
            className="p-2 px-4 w-[60%]"
          >
            <h1 className="font-bold text-2xl mb-2">Description</h1>
            <p>{props.details.desc}</p>
            <h2 className="font-bold my-2">Features</h2>
            <ul className="list-disc pl-4">
              {props.details.features.map((feature) => {
                return (
                  <>
                    <li>{feature}</li>
                  </>
                );
              })}
            </ul>
            <h2 className="font-bold my-2">Tech Stack</h2>
            <ul className="list-disc pl-4 flex flex-wrap">
              {props.details.tools.map((feature) => {
                return (
                  <>
                    <li className="w-[50%]">{feature}</li>
                  </>
                );
              })}
            </ul>
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
