import { FaUserAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/Css/Styles.css";
export default function Header() {
  const [changeNavbarColor, setchangeNavbarColor] = useState(false);
  const [pageUrl, setpageUrl] = useState("");

  

  const changeNavbarColorFun = () => {
    if (window.scrollY >= 80) setchangeNavbarColor(true);
    else setchangeNavbarColor(false);
  };

  window.addEventListener("scroll", changeNavbarColorFun);

  return (
    // <nav
    //   className={changeNavbarColor ? "py-5 active" : "py-5"}
    //   id="navbar-container"
    // >
    <nav className="py-5" id="navbar-container">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <img src="/src/assets/images/logo.png" className="Logo" />
        </div>
        <ul className="flex space-x-4">
          <li className="text-white">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-white">
            <Link to={"/About"}>TV Shows</Link>
          </li>
          <li className="text-white">
            {" "}
            <Link to={"/Github"}>Movies</Link>
          </li>
          <li className="text-white">
            <Link to={"/Profile"}>Recently Added</Link>
          </li>
          <li className="text-white">
            <Link to={"/Profile"}>My List</Link>
          </li>
        </ul>
        <div className="flex justify-evenly">
          <form>
            <select
              id="mySelect"
              className="border border-gray-300 rounded-md px-3 py-2 text-black"
            >
              <option value="option1">English</option>
              <option value="option2">Hindi</option>
            </select>
          </form>
          &nbsp;&nbsp;
          <button className="bg-red-700 text-white p-2 rounded-lg px-5">
            <Link to={"/login"}> Sign Out</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
