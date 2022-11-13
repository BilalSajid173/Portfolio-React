import React, { Fragment } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";

const SingleProject = (props) => {
  const SingleProjectModalContent = (
    <Fragment>
      <div className="p-2 dark:text-white flex flex-wrap justify-center h-full"></div>
    </Fragment>
  );

  return (
    <ProjectModal onClose={props.onClick}>
      {SingleProjectModalContent}
    </ProjectModal>
  );
};

export default SingleProject;
