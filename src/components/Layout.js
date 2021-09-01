// Imports
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Component to render
const Layout = ({ children }) => {
  return (
    <section className="layoutWrapper">
      <Header />
      <div className="contentWrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
