import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div
      className="menu"
      style={{ backgroundImage: "url(./assets/images/bg-sidebar-desktop.svg)" }}
    >
      <ul>
        <button className="stepsButton">1</button>
        <span>
          Step 1
        </span>
        <li>YOUR INFO</li>
        <button className="stepsButton">2
        </button>
        <span>
          Step 2
        </span>
        <li>SELECT PLAN</li>
        <button className="stepsButton">3</button>
        <span>
          Step 3
        </span>
        <li>ADD-ONS</li>
        <button className="stepsButton">4
        </button>
        <span> Step 4 </span>
        <li>SUMMARY</li>
      </ul>
    </div>
  );
};

export default Menu;
