// Imports
// import React, { useState, useEffect } from "react";
import React from "react";

// Components
import Layout from "../components/Layout";
import Home from "../components/Home";
import SEO from "../components/seo";

// Styles
import "@fontsource/beth-ellen";
import "../styles/layout.css";
// import "../styles/header.css";
// import "../styles/home.css";
// import "../styles/sideContent.css";
// import "../styles/about.css";
// import "../styles/footer.css";
// import "../styles/pickles.css";
// import "../styles/posts.css";
// import "../styles/queries.css";

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
