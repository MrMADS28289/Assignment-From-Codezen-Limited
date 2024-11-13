import React from "react";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="/" className="header-links">
        <span className="logo">@aBlocks</span>
      </a>
      <a href="/" className="header-links selected">
        Welcome
      </a>
      <a href="/" className="header-links">
        Blocks
      </a>
      <a href="/" className="header-links">
        Setttings
      </a>
    </div>
  );
}
