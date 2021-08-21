import * as React from "react";
import Layout from "../components/Layout";
// import { Link } from "gatsby";
// need gatsby link to link to other pages!

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1 className="fancyColor">This is the about page</h1>
    </Layout>
  );
};

export default IndexPage;