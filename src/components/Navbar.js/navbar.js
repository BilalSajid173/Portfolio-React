import { Fragment, useState } from "react";

const Navbar = () => {
  // const isDark = useSelector((state) => state.mode.isDark);
  const [showMenu, setShowMenu] = useState(false);

  // if (!isDark) {
  //   document.body.classList.remove("bg-gray-800");
  //   document.documentElement.classList.remove("dark");
  // } else {
  //   document.body.classList.add("bg-gray-800");
  //   document.documentElement.classList.add("dark");
  // }

  // const darkModeHandler = () => {
  //   dispatch(modeActions.toggle());
  // };

  const showMenuHandler = () => {
    setShowMenu((prev) => {
      return !prev;
    });
  };

  return (
    <Fragment>
      <div className="sticky top-0 z-10 flex flex-wrap items-center p-2 pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12 bg-white shadow-lg dark:bg-gray-900">
        <div className="w-fit font-serif text-3xl font-black mr-4 text-gray-700 dark:text-white">
          Bilal Sajid
        </div>
        <div className="hidden md:flex w-3/12 p-1 pl-2 pr-2 border border-gray-300 rounded mr-auto dark:border-gray-800"></div>
        <div className="hidden md:flex w-fit flex-wrap justify-center align-middle text-gray-700 dark:text-white">
          <button className="transition-all duration-300 px-2 py-1 mr-2 rounded-sm hover:bg-blue-700 hover:text-white">
            Home
          </button>

          <button className="transition-all duration-300 rounded-sm mr-2 px-2 py-1 hover:bg-blue-700 hover:text-white">
            About
          </button>

          <button className="transition-all duration-300 px-2 py-1 rounded-sm border border-blue-700 hover:bg-blue-700 hover:text-white">
            Skills
          </button>

          <button className="transition-all duration-300 rounded-sm mr-2 px-2 py-1 hover:bg-blue-700 hover:text-white">
            Work
          </button>

          <button className="transition-all duration-300 px-2 py-1 rounded-sm border border-blue-700 hover:bg-blue-700 hover:text-white">
            Contact
          </button>
        </div>
        <div className="md:hidden flex w-fit flex-wrap ml-auto justify-center align-middle  text-gray-700 dark:text-white">
          {/* <button onClick={darkModeHandler} className="p-1">
            {!isDark && <LightModeIcon />}
            {isDark && <DarkModeIcon />}
          </button> */}
          {/* <button onClick={showMenuHandler}>
            <MenuIcon />
          </button> */}
        </div>
      </div>
      {showMenu && (
        <div
          onClick={showMenuHandler}
          className="fixed top-0 left-0 w-full h-screen z-10 bg-gray-900 opacity-50"
        ></div>
      )}
      <div
        className={`duration-300 ease-in-out transition-all transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } py-3 flex flex-col w-9/12 top-0 right-0 fixed h-screen bg-white z-20 ml-auto dark:bg-gray-800 text-gray-700 dark:text-white`}
      >
        <div className="px-2 text-right text-lg">
          {/* <CloseIcon onClick={showMenuHandler} /> */}
        </div>
        {
          <button className="transition-all duration-300 px-2 py-1 my-1 text-left hover:bg-blue-600 hover:text-white">
            {/* <LoginIcon className="mr-2" /> Login */}
          </button>
        }
        {
          <button className="transition-all duration-300 my-1 text-left px-2 py-1 hover:bg-blue-600 hover:text-white">
            {/* <AddBoxIcon className="mr-2" /> Create Account */}
          </button>
        }
        {
          <button className="transition-all duration-300 my-1 text-left px-2 py-1 hover:bg-blue-600 hover:text-white">
            {/* <AddBoxIcon className="mr-2" /> New Article */}
          </button>
        }
        {
          <button className="transition-all duration-300 my-1 text-left px-2 py-1 hover:bg-blue-600 hover:text-white">
            {/* <SearchIcon className="mr-2" /> Search */}
          </button>
        }
      </div>
    </Fragment>
  );
};

export default Navbar;
