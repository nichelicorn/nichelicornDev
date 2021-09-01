// Imports
import React from "react"
import Layout from "../components/Layout";
import Home from "../components/Home";
import "@fontsource/beth-ellen";
import "../styles/layout.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/sideContent.css";
import "../styles/about.css";
import "../styles/portfolio.css";
import "../styles/footer.css";
import "../styles/queries.css";

// Component to render
const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;
