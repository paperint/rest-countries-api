import React, { useState } from "react";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(true);
  const handlerClick = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, setDarkMode, handlerClick };
}

export default useDarkMode;
