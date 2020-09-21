import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <header>
    <div className="nav-bar" />
    <ul className="nav-links">
      <li>
        <a href="/">
          <button className="button">
            <span className="title">Home</span>
          </button>
        </a>
      </li>
      <li>
        <a href="/breakfast">
          <button className="button">
            <span className="title">Breakfast</span>
          </button>
        </a>
      </li>
      <li>
        <a href="/lunch">
          <button className="button">
            <span className="title">Lunch</span>
          </button>
        </a>
      </li>
      <li>
        <a href="/dinner">
          <button className="button">
            <span className="title">Dinner</span>
          </button>
        </a>
      </li>
    </ul>
  </header>
);

export default NavBar;
