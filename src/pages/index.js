// Imports
import React from "react"
import Layout from "../components/Layout";
import Home from "../components/Home";
import "../styles/typography.css";
import "../styles/layout.css";
import "../styles/header.css";
import "../styles/about.css";
import "../styles/footer.css";

// Component to render
const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;

