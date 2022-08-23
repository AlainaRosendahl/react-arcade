import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1>React Arcade</h1>
      <ul className={click ? "nav-menu-active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Noah">Noah</Link>
        </li>
        <li>
          <Link to="/Alaina">Alaina</Link>
        </li>
        <li>
          <Link to="/Bryan">Bryan</Link>
        </li>
        <li>
        <Link to="/Login" className="px-3 py-2 text-uppercase">Login</Link>
        </li>
        <li>
        <Link to="/Signup" className="px-3 py-2 text-uppercase">Signup</Link>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
