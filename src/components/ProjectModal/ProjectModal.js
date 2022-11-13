import react from "react";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-30 bg-gray-700 opacity-30"
      onClick={props.onClick}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="overflow-y-auto scrollbar fixed top-24 left-[4%] w-11/12 md:w-[60rem] md:left-[calc(50%-30rem)] h-4/6 p-2 sm:p-4 z-50 rounded-sm bg-[#888cea] dark:bg-[#0a0c49]">
      {props.children}
    </div>
  );
};
const ProjectModal = (props) => {
  return (
    <react.Fragment>
      {reactDom.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("overlays")
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </react.Fragment>
  );
};

export default ProjectModal;
