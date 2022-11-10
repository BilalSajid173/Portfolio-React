import React from "react";
import classes from "./TypedText.module.css";
import useTypedText from "../../hooks/useTypedText";

const typedtextarray = [
  "UI/UX Designer",
  "Tech Enthusiast",
  "Full Stack Developer",
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
