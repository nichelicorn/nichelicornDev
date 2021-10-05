import React from "react";
import { graphql, Link } from "gatsby";
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
      <h2 className="hOneStyles">Posts</h2>
      <section className="pickle-jar">
        {allMdx.edges.map(({ node }) => {
          return (
            <article key={node.id} className="pickle-card">
            <h3>
              <Link to={`/posts/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
              {/* <h2>{node.frontmatter.title}</h2> */}
              <p>{node.excerpt}</p>
              {/* <Link to={`/${node.slug}`}>View Post</Link> */}
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export default PostsPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          id
          slug
          excerpt
        }
      }
    }
  }
`;