import React from "react";
import classes from "./TypedText.module.css";
import useTypedText from "../../hooks/useTypedText";

const typedtextarray = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Tech Enthusiast",
];

const TypedText = () => {
  const typedText = useTypedText(typedtextarray);
  return (
    <>
      <div>
        <span
          className={`${classes.blinkingcursor} text-lg text-black dark:text-gray-400`}
        >
          {typedText}
        </span>
      </div>
    </>
  );
};

export default TypedText;
