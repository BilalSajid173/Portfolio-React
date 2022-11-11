import AnimatedCube from "./AnimatedCube";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center py-10">
        <div>
          <h1 className="font-bold text-2xl">About Me</h1>
        </div>
        <div className="relative w-[50%] h-[30rem]">
          <AnimatedCube />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
