// Imports
import React from "react";
import { Link } from "gatsby";

// Component to render
const Header = () => {
  return (
    <header className="hdr" id="hdr" tabindex="0">
      <h2 className="name-tile">· Nichele Dunn ·</h2>
      <ul  className="hdr-list">
        <li tabindex="0">
          <Link to="/">Home</Link>
        </li>
        <li tabindex="0">
          <Link to="/posts">Posts</Link>
        </li>
        <li tabindex="0">
          <Link to="/pickles">Portfolio</Link>
        </li>
        <li tabindex="0">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
