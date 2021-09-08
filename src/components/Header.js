// Imports
import React from "react";
import { Link } from "gatsby";

// Component to render
const Header = () => {
  return (
    <header className="hdr">
      <h2 className="nameTile">Nichele D · 🦄</h2>
      <ul  className="hdrList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/picklePage">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
