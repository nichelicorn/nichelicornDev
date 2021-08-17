import React from "react";
import { Link } from "gatsby";

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
      </ul>
      <main>{children}</main>
      <footer>🛼er</footer>
    </div>
  );
};

export default Layout;