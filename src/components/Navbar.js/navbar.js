import { Fragment, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HomeIcon from "@mui/icons-material/Home";
import classes from "./navbar.module.css";
import { modeActions } from "../../store/darkmode";
import { useSelector, useDispatch } from "react-redux";

const LinksArray = ["Home", "About", "Work", "Skills"];

const Navbar = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [showMenu, setShowMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const dispatch = useDispatch();

  if (!isDark) {
    document.body.classList.remove(classes.dark);
    document.documentElement.classList.remove("dark");
  } else {
    document.body.classList.add(classes.dark);
    document.documentElement.classList.add("dark");
  }

  const darkModeHandler = () => {
    dispatch(modeActions.toggle());
  };

  const colorChangeHandler = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", colorChangeHandler);

  const showMenuHandler = () => {
    setShowMenu((prev) => {
      return !prev;
    });
  };

  return (
    <Fragment>
      <div
        className={`${
          colorChange
            ? "bg-sky-200 dark:bg-[#182747]"
            : "bg-white dark:bg-[#111729]"
        } transition-all duration-300 sticky top-0 z-10 flex flex-wrap items-center p-4 sm:px-8`}
      >
        <div className="w-fit font-serif text-3xl px-2 font-black mr-auto text-gray-700 dark:text-white">
          Bilal Sajid
        </div>
        <button onClick={darkModeHandler} className="p-1 mr-2 dark:text-white">
          {!isDark && <LightModeIcon />}
          {isDark && <DarkModeIcon />}
        </button>
        <div
          className={`${classes.rightdiv} hidden md:flex w-fit flex-wrap justify-center align-middle text-gray-700 dark:text-white`}
        >
          {LinksArray.map((link) => {
            return (
              <button className="transition-all duration-300 px-2 mr-2 rounded-sm">
                {link}
              </button>
            );
          })}
          <button className="transition-all duration-300 px-2 rounded-sm">
            Contact
          </button>
        </div>
        <div className="md:hidden flex w-fit flex-wrap justify-center align-middle  text-gray-700 dark:text-white">
          {!showMenu ? (
            <button
              onClick={showMenuHandler}
              className="transition-all duration-200 p-2"
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              onClick={showMenuHandler}
              className="transition-all duration-200 p-2"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
      <div className="h-[120vh]"></div>
      <div
        className={`duration-300 ease-in-out transition-all transform ${
          showMenu ? "-translate-x-0" : "-translate-x-full"
        } py-3 flex flex-col w-[4rem] md:hidden items-center justify-center top-56 opacity-80 left-0 fixed h-[18rem] bg-white z-20 ml-auto dark:bg-[#1b3c8a] text-gray-700 dark:text-white`}
      >
        <button className="transition-all duration-300 px-2 py-1 my-1 text-left hover:text-white">
          <HomeIcon fontSize="large" />
        </button>
        <button className="transition-all duration-300 my-1 text-left px-2 py-1 hover:text-white">
          <PersonIcon fontSize="large" />
        </button>
        <button className="transition-all duration-300 my-1 text-left px-2 py-1 hover:text-white">
          <LightbulbIcon fontSize="large" />
        </button>
        <button className="transition-all duration-300 my-1 text-left px-2 py-1 hover:text-white">
          <RemoveRedEyeIcon fontSize="large" />
        </button>
        <button className="transition-all duration-300 my-1 text-left px-2 py-1 hover:text-white">
          <MailOutlineIcon fontSize="large" />
        </button>
      </div>
    </Fragment>
  );
};

export default Navbar;
