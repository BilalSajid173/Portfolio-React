import { useState, useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  msg: "",
};

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
      return { ...state, msg: action.value };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div class="dark:text-white md:px-10 px-7 dark:bg-[#111729] md:w-[45%] w-full lg:w-[40%]">
        <div class="md:p-5 space-y-5">
          <h4 id="ContactSection" class="text-3xl">
            Contact Me
          </h4>
          <form>
            <div class="grid grid-cols-2 gap-5">
              <input
                onChange={(e) => {
                  dispatch({ type: "firstName", value: e.target.value });
                }}
                type="text"
                class=" px-4 py-2 focus:outline-none dark:bg-[#372656] rounded-sm"
                placeholder="First Name"
              />
              <input
                onChange={(e) => {
                  dispatch({ type: "lastName", value: e.target.value });
                }}
                type="text"
                class=" px-4 py-2 focus:outline-none dark:bg-[#372656] rounded-sm"
                placeholder="Last Name"
              />
              <input
                onChange={(e) => {
                  dispatch({ type: "email", value: e.target.value });
                }}
                type="email"
                class="px-4 py-2 focus:outline-none col-span-2 dark:bg-[#372656] rounded-sm"
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  dispatch({ type: "phone", value: e.target.value });
                }}
                type="tel"
                class="px-4 py-2 focus:outline-none col-span-2 dark:bg-[#372656] rounded-sm"
                placeholder="Phone"
              />
              <textarea
                onChange={(e) => {
                  dispatch({ type: "msg", value: e.target.value });
                }}
                cols="10"
                rows="6"
                class="px-4 py-2 focus:outline-none col-span-2 dark:bg-[#372656] rounded-sm"
                placeholder="Write your message..."
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
