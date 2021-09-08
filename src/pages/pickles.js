// Imports
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const PicklePage = ({ data }) => {
  return (
    <Layout>
      <h1>This is a PICKLE</h1>
      <p>{data.site.siteMetadata.description}</p>
    </Layout>
  );
};

export default PicklePage;

export const query = graphql`
  query MetaQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;