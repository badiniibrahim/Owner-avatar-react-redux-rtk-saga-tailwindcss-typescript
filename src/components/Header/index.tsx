import React from "react";
import imgUrl from "../../assets/sun.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between bg-slate-600 h-[30px]">
      <p className="mx-2 text-xs text-white">React Redux Saga </p>
      <div className="flex flex-row mx-3 gap-4 text-xs text-white  items-center">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/detail">
          <p>Detail</p>
        </Link>
        <img src={imgUrl} alt="" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Header;
