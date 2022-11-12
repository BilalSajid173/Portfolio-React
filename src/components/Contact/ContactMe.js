import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  const container = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Animations/animation2.json"),
    });

    return () => instance.destroy();
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center items-center my-20">
        <ContactForm />
        <div
          ref={container}
          className="hidden mb-5 md:mb-0 mt-[2rem] container md:flex flex-wrap justify-center sm:my-2 w-full md:w-[45%] lg:w-[40%] h-[20rem] md:h-[25rem] xl:h-[30rem]"
        ></div>
      </div>
    </>
  );
};

export default ContactMe;
