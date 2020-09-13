import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
