import React from "react";
import { graphql, Link } from "gatsby";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "../../components/Layout";

const StyledArticle = styled.article`
  padding: 20px;
  border: 2px solid turquoise;
  margin: 5px;
`;

const PostsPage = ({ data: { allMdx } }) => {
  // console.log("PostsPage allMdx <>>>", allMdx);
  return (
    <Layout>
      {allMdx.edges.map(({ node }) => {
        return (
          <StyledArticle key={node.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
            <Link to={`/${node.slug}`}>View Post</Link>
          </StyledArticle>
        );
      })}
    </Layout>
  );
};

export default PostsPage;

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
          slug
          excerpt
        }
      }
    }
  }
`;