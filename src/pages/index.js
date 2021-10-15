// Imports
import React from "react";

// Components
import Layout from "../components/Layout";
import Home from "../components/Home";
import SEO from "../components/Seo";

// Styles
import "@fontsource/beth-ellen";
import "../styles/styles.css"
import "../styles/queries.css";

// Index Page to render
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="nichelicorn.dev - a place for code things" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
