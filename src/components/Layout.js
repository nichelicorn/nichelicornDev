// Imports
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";

// Component to render
const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)

  return (
    <section className="layoutWrapper">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header />
      <div className="contentWrapper">
        <main className="layoutMain">{children}</main>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
