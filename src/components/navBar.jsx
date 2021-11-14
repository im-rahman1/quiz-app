import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "public/navToggler.svg";
import "public/cross.svg";
import "public/brandIcon.svg";
import "./navBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <NavLink exact to="/" className="nav__brand">
          <img className="nav-icon" src="brandIcon.svg" alt="logo"></img>
        </NavLink>
        <img
          className="nav__toggler"
          onClick={handleClick}
          src={click ? "cross.svg" : "navToggler.svg"}
          alt="menu Icon"></img>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}>
              Contact
            </NavLink>
          </li>

          <li className="signUp">
            <button>Sign u</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;

/*
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
*/
