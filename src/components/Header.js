// Imports
import React from "react";
import { Link } from "gatsby";

// Component to render
const Header = () => {
  return (
    <header className="hdr" id="hdr">
      <h2 className="name-tile">· Nichele Dunn ·</h2>
      <ul  className="hdr-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/pickles">Portfolio</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
