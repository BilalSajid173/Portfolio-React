import { useReducer, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThreeDotsWave from "../Loader/ThreeDotsWave";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const YOUR_SERVICE_ID = "service_7oqucil";
const YOUR_TEMPLATE_ID = "template_5o4uoc6";
const YOUR_PUBLIC_KEY = "VwjKuMO31NSEDRdQi";

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.value };
    case "lastName":
      return { ...state, lastName: action.value };
    case "email":
      return { ...state, email: action.value };
    case "phone":
      return { ...state, phone: action.value };
    case "msg":
      return { ...state, message: action.value };
    default:
      return state;
  }
};

const ContactForm = () => {
  const form = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      state.firstName.trim().length === 0 ||
      state.lastName.trim().length === 0 ||
      state.phone.trim().length === 0 ||
      state.message.trim().length === 0
    ) {
      toast.error("Please complete the form.");
      return;
    }

    if (!state.email.trim().includes("@")) {
      toast.error("Please Enter a valid email!");
      return;
    }
    setIsLoading(true);
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          toast.success("Email Sent Successfully");
          dispatch({ type: "firstName", value: "" });
          dispatch({ type: "lastName", value: "" });
          dispatch({ type: "email", value: "" });
          dispatch({ type: "phone", value: "" });
          dispatch({ type: "msg", value: "" });
        },
        (error) => {
          toast.error("Error Sending Email!");
          dispatch({ type: "firstName", value: "" });
          dispatch({ type: "lastName", value: "" });
          dispatch({ type: "email", value: "" });
          dispatch({ type: "phone", value: "" });
          dispatch({ type: "msg", value: "" });
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {isLoading && (
        <div className="w-11/12 h-5/6 flex justify-center items-center absolute">
          <ThreeDotsWave />
        </div>
      )}
      <div class="dark:text-white md:px-10 px-7 dark:bg-[#111729] md:w-[45%] w-full lg:w-[40%]">
        <div class="md:p-5 space-y-5">
          <h4 id="ContactSection" class="text-3xl">
            Contact Me
          </h4>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
            <div class="grid grid-cols-2 gap-5">
              <input
                onChange={(e) => {
                  dispatch({ type: "firstName", value: e.target.value });
                }}
                type="text"
                class=" px-4 py-2 focus:outline-none bg-blue-100 dark:bg-[#372656] rounded-sm"
                placeholder="First Name"
                name="firstName"
                value={state.firstName}
              />
              <input
                onChange={(e) => {
                  dispatch({ type: "lastName", value: e.target.value });
                }}
                type="text"
                class=" px-4 py-2 focus:outline-none bg-blue-100 dark:bg-[#372656] rounded-sm"
                placeholder="Last Name"
                name="lastName"
                value={state.lastName}
              />
              <input
                onChange={(e) => {
                  dispatch({ type: "email", value: e.target.value });
                }}
                type="email"
                class="px-4 py-2 focus:outline-none bg-blue-100 col-span-2 dark:bg-[#372656] rounded-sm"
                placeholder="Email"
                name="email"
                value={state.email}
              />
              <input
                onChange={(e) => {
                  dispatch({ type: "phone", value: e.target.value });
                }}
                type="tel"
                class="px-4 py-2 focus:outline-none bg-blue-100 col-span-2 dark:bg-[#372656] rounded-sm"
                placeholder="Phone"
                name="phone"
                value={state.phone}
              />
              <textarea
                onChange={(e) => {
                  dispatch({ type: "msg", value: e.target.value });
                }}
                cols="10"
                rows="6"
                class="px-4 py-2 focus:outline-none bg-blue-100 col-span-2 dark:bg-[#372656] rounded-sm"
                placeholder="Write your message..."
                name="message"
                value={state.message}
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
