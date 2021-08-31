import React from "react";
import Header from "./Header";
// import Home from "./Home";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <div className="contentWrapper">
        <main className="mainContent">{children}</main>
        <section className="sideContent">Sidebar Content</section>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;