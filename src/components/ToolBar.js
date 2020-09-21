import React from "react";
import "./ToolBar.css";

const ToolBar = (props) => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div></div>
      <div className="title">
        <a href="/">Home</a>
      </div>
      <div className="spacer"></div>
      <div className="tool-bar-navigation-items">
        <ul>
          <li>
            <a href="/breakfast">Breakfast</a>
          </li>
          <li>
            <a href="/lunch">Lunch</a>
          </li>
          <li>
            <a href="/dinner">Dinner</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default ToolBar;
