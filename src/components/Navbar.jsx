import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`flex items-center justify-between w-full p-6 mx-auto  max-w-7xl ${
        darkMode ? `text-white` : `text-lightmode-text-Very-Dark-Blue`
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold">Where in the world?</h1>
      </div>
      <div
        className="flex items-center justify-center gap-2 cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode && <FontAwesomeIcon icon={faSun} />}
        {!darkMode && (
          <FontAwesomeIcon
            icon={faMoon}
            className="w-4 h-4 fill-lightmode-text-Very-Dark-Blue "
          />
        )}
        <p> {darkMode ? `Light Mode` : `Dark Mode`} </p>
      </div>
    </nav>
  );
}

export default Navbar;
