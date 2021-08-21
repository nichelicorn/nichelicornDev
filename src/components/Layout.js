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
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;