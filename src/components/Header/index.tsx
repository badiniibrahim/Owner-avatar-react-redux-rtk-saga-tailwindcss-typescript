import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex flex-row items-center justify-between dark:bg-black h-[30px]">
      <p className="mx-2 text-xs dark:text-white">React Redux Saga </p>
      <div className="flex flex-row mx-3 gap-4 text-xs dark:text-white  items-center">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/detail">
          <p>Detail</p>
        </Link>
        {!darkMode ? (
          <Icon
            name={"Sun"}
            color="black"
            size={20}
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <Icon
            name={"Moon"}
            color="white"
            size={20}
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
