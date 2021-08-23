import React from "react";
import { Link } from "gatsby";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/til">Today I Learned</Link>
        </li>
        <li>
          <Link to="/skating">Skating</Link>
        </li>
        <li>
          <Link to="/fandf">Flora and Fauna</Link>
        </li>
      </ul>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;